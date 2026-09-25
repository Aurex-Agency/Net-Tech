// @vitest-environment node
import { afterEach, expect, it, vi } from "vitest";
import { submitForm } from "../lib/forms";
afterEach(() => vi.unstubAllGlobals());
it("reuses the email reference after failure and only resolves on confirmed acceptance", async () => {
  const fetchMock = vi.fn().mockRejectedValueOnce(new Error("Connection lost"))
    .mockResolvedValueOnce(new Response(JSON.stringify({ ok: true, emailId: "accepted" })));
  vi.stubGlobal("fetch", fetchMock);
  const fields = { full_name: "Retry test" };
  await expect(submitForm("contact", fields)).rejects.toThrow("Connection lost");
  await expect(submitForm("contact", fields)).resolves.toHaveProperty("emailId", "accepted");
  expect(JSON.parse(fetchMock.mock.calls[0][1].body).requestId).toBe(JSON.parse(fetchMock.mock.calls[1][1].body).requestId);
});
it("rejects an HTTP success without an email acceptance receipt", async () => {
  vi.stubGlobal("fetch", vi.fn().mockResolvedValue(new Response(JSON.stringify({ ok: true }))));
  await expect(submitForm("support", { full_name: "Invalid response" })).rejects.toThrow();
});
