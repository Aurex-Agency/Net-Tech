import { z } from "zod";

const schema = z.object({
  kind: z.enum(["contact", "support"]),
  requestId: z.string().uuid(),
  website: z.string().max(200).optional(),
  fields: z.object({
    full_name: z.string().trim().min(1).max(100),
    email: z.string().trim().email().max(255),
    phone: z.string().trim().max(30),
    city: z.string().trim().max(100).optional(),
    service_interest: z.enum(["managed-it", "networking", "security-cameras", "cloud", "multi-site", "healthcare", "other"]).optional(),
    landing_path: z.string().max(200).optional(),
    referrer_host: z.string().max(200).optional(),
    utm_source: z.string().max(100).optional(),
    utm_medium: z.string().max(100).optional(),
    utm_campaign: z.string().max(100).optional(),
    message: z.string().trim().max(2000).optional(),
    business_name: z.string().trim().max(100).optional(),
    issue_type: z.enum(["Computer", "Phone", "Copier", "Internet", "Other"]).optional(),
    description: z.string().trim().max(2000).optional(),
    sms_consent: z.enum(["yes", "no"]).optional(),
    marketing_consent: z.enum(["yes", "no"]).optional(),
  }),
}).superRefine((data, ctx) => {
  if (data.kind === "contact" ? !data.fields.message || !data.fields.business_name || !data.fields.city :
    !data.fields.phone || !data.fields.business_name || !data.fields.issue_type || !data.fields.description) {
    ctx.addIssue({ code: "custom", message: "Required fields missing" });
  }
});

type Request = { method?: string; headers: Record<string, string | string[] | undefined>; body: unknown };
type Response = { setHeader(name: string, value: string): void; status(code: number): Response; json(body: unknown): void };
const attempts = new Map<string, { count: number; until: number }>();
const supportHook = "https://services.leadconnectorhq.com/hooks/ErZnn0dKKTqWAnjTnzaP/webhook-trigger/1f29b918-a9b2-4aa9-9338-bf9344887baf";

export default async function handler(req: Request, res: Response) {
  res.setHeader("Cache-Control", "no-store");
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }
  const origin = req.headers.origin;
  const allowed = ["https://nettech.ms", "https://www.nettech.ms", process.env.VERCEL_URL && `https://${process.env.VERCEL_URL}`];
  if (origin && !allowed.includes(String(origin))) return res.status(403).json({ error: "Invalid origin" });
  if (!String(req.headers["content-type"]).startsWith("application/json")) return res.status(415).json({ error: "JSON required" });
  if (JSON.stringify(req.body ?? "").length > 12000) return res.status(413).json({ error: "Request too large" });
  const parsed = schema.safeParse(req.body);
  if (!parsed.success || parsed.data.website) return res.status(400).json({ error: "Please check your form fields." });
  // Best-effort per-instance limit; recipients are fixed server-side to prevent an open relay.
  const now = Date.now();
  for (const [key, value] of attempts) if (value.until < now) attempts.delete(key);
  const ip = String(req.headers["x-vercel-forwarded-for"] || req.headers["x-forwarded-for"] || "unknown").split(",")[0];
  const rate = attempts.get(ip) || { count: 0, until: now + 60000 };
  if (++rate.count > 10) { res.setHeader("Retry-After", "60"); return res.status(429).json({ error: "Please wait a minute and try again." }); }
  attempts.set(ip, rate);
  if (!process.env.RESEND_API_KEY) return res.status(503).json({ error: "Email unavailable. Please call Net-Tech." });
  const { kind, requestId, fields } = parsed.data;
  const text = [
    `Net-Tech website ${kind === "support" ? "support request" : "inquiry"}`,
    ...Object.entries(fields).map(([key, value]) => `${key.replace(/_/g, " ")}: ${value}`),
    "", `Submission reference: ${requestId}`,
    "To respond to the customer, use the email address listed above.",
  ].join("\n\n");
  try {
    const sent = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}`, "Content-Type": "application/json", "Idempotency-Key": `website-${kind}-${requestId}` },
      body: JSON.stringify({
        from: "Net-Tech Website <team@support.nettech.ms>",
        to: ["brian@nettech.ms"],
        reply_to: "brian@nettech.ms",
        subject: kind === "support" ? "Net-Tech website: support request" : "Net-Tech website: new inquiry",
        text,
      }),
      signal: AbortSignal.timeout(15000),
    });
    const result = await sent.json();
    if (!sent.ok || !result.id) {
      console.error("email_send_failed", { status: sent.status, reference: requestId });
      return res.status(502).json({ error: "Your message could not be sent. Please retry or call Net-Tech." });
    }
    // Preserve the existing CRM support workflow. Email remains the confirmed intake path.
    const webhook = kind === "support" ? (process.env.SUPPORT_WEBHOOK_URL || process.env.VITE_SUPPORT_WEBHOOK_URL || supportHook) : (process.env.CONTACT_WEBHOOK_URL || process.env.VITE_CONTACT_WEBHOOK_URL);
    if (webhook) {
      try {
        const forwarded = await fetch(webhook, { method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded" }, body: new URLSearchParams({ ...fields, submission_id: requestId }).toString(), signal: AbortSignal.timeout(8000) });
        if (!forwarded.ok) throw new Error("Webhook rejected");
      } catch {
        console.error("crm_forward_failed_email_accepted", { reference: requestId, emailId: result.id });
      }
    }
    console.info("email_accepted", { kind, reference: requestId, emailId: result.id });
    return res.status(200).json({ ok: true, emailId: result.id });
  } catch {
    console.error("email_send_unconfirmed", { reference: requestId });
    return res.status(502).json({ error: "Sending could not be confirmed. Please retry or call Net-Tech." });
  }
}
