/**
 * Posts a form to a LeadConnector-style webhook as URL-encoded fields.
 * Uses no-cors, so the response is opaque; a thrown error means the request
 * never left the browser.
 */
export async function postWebhook(url: string, fields: Record<string, string>) {
  const body = new URLSearchParams();
  for (const [key, value] of Object.entries(fields)) body.append(key, value);
  await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: body.toString(),
    mode: "no-cors",
  });
}

/** Builds a mailto: URL with a prefilled subject and body. */
export function mailtoHref(to: string, subject: string, body: string) {
  return `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
