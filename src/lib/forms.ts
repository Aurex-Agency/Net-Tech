// Retain the same reference when retrying unchanged data after a network failure.
const pending = new Map<string, string>();
export async function submitForm(kind: "contact" | "support", fields: Record<string, string>, website = "") {
  const fingerprint = JSON.stringify({ kind, fields });
  const requestId = pending.get(fingerprint) || crypto.randomUUID();
  pending.set(fingerprint, requestId);
  const response = await fetch("/api/forms", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ kind, fields, website, requestId }),
    signal: AbortSignal.timeout(30000),
  });
  const result = await response.json();
  if (!response.ok || !result.ok || !result.emailId) throw new Error(result.error || "Sending could not be confirmed.");
  pending.delete(fingerprint);
  return result;
}
