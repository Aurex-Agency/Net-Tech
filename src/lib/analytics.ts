/** No names, contact details, message text or query strings are sent in custom events. */
type EventName = "generate_lead" | "support_request" | "click_to_call" | "click_email" | "consultation_request_start";
export function track(name: EventName, properties: Record<string, string> = {}) {
  if (typeof window === "undefined") return;
  const gtag = (window as Window & { gtag?: (...args: unknown[]) => void }).gtag;
  const debug = new URLSearchParams(window.location.search).get("analytics_debug") === "1";
  if (debug) console.info("Net-Tech analytics", name, properties);
  gtag?.("event", name, { ...(debug ? { debug_mode: true } : {}), page_path: window.location.pathname, audience: window.location.pathname === "/support-form" ? "existing_client" : "prospect", ...properties });
}
export function trackAccepted(kind: "contact" | "support", id: string, service = "other") {
  try {
    if (sessionStorage.getItem(`counted-${id}`)) return;
    sessionStorage.setItem(`counted-${id}`, "1");
  } catch { /* Storage restrictions must not prevent intake. */ }
  track(kind === "contact" ? "generate_lead" : "support_request", { lead_id: id, service_interest: service });
}
export function captureAttribution() {
  const key = "nettech-attribution";
  try {
    const saved = sessionStorage.getItem(key);
    if (saved) return JSON.parse(saved) as Record<string, string>;
    const query = new URLSearchParams(location.search);
    const attribution: Record<string, string> = { landing_path: location.pathname, referrer_host: document.referrer ? new URL(document.referrer).hostname : "direct" };
    for (const name of ["utm_source", "utm_medium", "utm_campaign"]) {
      const value = query.get(name);
      if (value && /^[a-zA-Z0-9 _.-]{1,100}$/.test(value)) attribution[name] = value;
    }
    sessionStorage.setItem(key, JSON.stringify(attribution));
    return attribution;
  } catch { return {}; }
}
