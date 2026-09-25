// @vitest-environment node
import { randomUUID } from "node:crypto";
import { beforeEach, afterEach, describe, expect, it, vi } from "vitest";
import handler from "../../api/forms";
const payload = () => ({ kind: "contact", requestId: randomUUID(), fields: { full_name: "Test", business_name: "Test Co", city: "New Albany", email: "test@example.com", phone: "6625550100", message: "Test inquiry", sms_consent: "no", marketing_consent: "no" } });
async function call(body: unknown, headers = {}) {
  const res = { status: vi.fn().mockReturnThis(), json: vi.fn(), setHeader: vi.fn() };
  await handler({ method: "POST", headers: { "content-type": "application/json", "x-vercel-forwarded-for": randomUUID(), ...headers }, body }, res);
  return res;
}
beforeEach(() => { vi.stubEnv("RESEND_API_KEY", "test-secret"); vi.stubEnv("VITE_CONTACT_WEBHOOK_URL", ""); vi.stubGlobal("fetch", vi.fn()); });
afterEach(() => { vi.unstubAllGlobals(); vi.unstubAllEnvs(); });
describe("website email intake", () => {
  it("fixes sender and destination and preserves optional consent", async () => {
    vi.mocked(fetch).mockResolvedValue(new Response(JSON.stringify({ id: "email-123" }), { status: 200 }));
    const input = payload();
    const res = await call({ ...input, to: "attacker@example.com" });
    expect(res.status).toHaveBeenCalledWith(200);
    const options = vi.mocked(fetch).mock.calls[0][1]!;
    const email = JSON.parse(String(options.body));
    expect(email.to).toEqual(["brian@nettech.ms"]);
    expect(email.from).toContain("team@support.nettech.ms");
    expect(email.reply_to).toBe("brian@nettech.ms");
    expect(email.text).toContain("sms consent: no");
    expect(options.headers).toHaveProperty("Idempotency-Key", `website-contact-${input.requestId}`);
  });
  it("rejects provider errors without returning success", async () => {
    vi.mocked(fetch).mockResolvedValue(new Response(JSON.stringify({ message: "Denied" }), { status: 403 }));
    const res = await call(payload());
    expect(res.status).toHaveBeenCalledWith(502);
    expect(res.json).not.toHaveBeenCalledWith(expect.objectContaining({ ok: true }));
  });
  it("rejects invalid, oversized and honeypot input before sending", async () => {
    for (const input of [{ ...payload(), website: "spam" }, { ...payload(), fields: {} }, { ...payload(), fields: { ...payload().fields, message: "x".repeat(2001) } }]) {
      expect((await call(input)).status).toHaveBeenCalledWith(400);
    }
    expect(fetch).not.toHaveBeenCalled();
  });
  it("rejects cross-site browser requests", async () => {
    expect((await call(payload(), { origin: "https://other.example" })).status).toHaveBeenCalledWith(403);
    expect(fetch).not.toHaveBeenCalled();
  });
  it("keeps email successful if existing CRM fails, and forwards support details", async () => {
    vi.mocked(fetch).mockResolvedValueOnce(new Response(JSON.stringify({ id: "support-123" }))).mockRejectedValueOnce(new Error("CRM offline"));
    const input = payload();
    const res = await call({ ...input, kind: "support", fields: { ...input.fields, business_name: "Test Company", issue_type: "Other", description: "Support test" } });
    expect(res.status).toHaveBeenCalledWith(200);
    expect(vi.mocked(fetch).mock.calls[1][1]?.body).toContain("business_name=Test+Company");
  });
});
