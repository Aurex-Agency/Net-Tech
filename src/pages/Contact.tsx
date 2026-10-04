import { useRef, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { ArrowUpRight, Clock, Mail, MapPin, Phone } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Container } from "@/components/site/Container";
import { PageHero } from "@/components/site/PageHero";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { Seo } from "@/components/site/Seo";
import { breadcrumbNode, graph, webPageNode } from "@/lib/schema";
import { submitForm } from "@/lib/forms";
import { captureAttribution, track, trackAccepted } from "@/lib/analytics";
import { site } from "@/lib/site";
import { serviceIntake } from "@/data/service-intake";

const emptyForm = { name: "", company: "", city: "", email: "", phone: "", message: "" };
const serviceOptions = ["managed-it", "networking", "security-cameras", "cloud", "multi-site", "healthcare", "other"];

const Contact = () => {
  const [query] = useSearchParams();
  const [service, setService] = useState(serviceOptions.includes(query.get("service") || "") ? query.get("service")! : "other");
  const started = useRef(false);
  const [confirmed, setConfirmed] = useState(false);
  const [form, setForm] = useState(emptyForm);
  const [smsConsent, setSmsConsent] = useState(false);
  const [marketingConsent, setMarketingConsent] = useState(false);
  const [sending, setSending] = useState(false);
  const intake = serviceIntake[service];

  const update = (field: keyof typeof emptyForm) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    try {
      const result = await submitForm("contact", {
        business_name: form.company, city: form.city, service_interest: service, ...captureAttribution(),
        full_name: form.name, email: form.email, phone: form.phone, message: form.message,
        sms_consent: smsConsent ? "yes" : "no", marketing_consent: marketingConsent ? "yes" : "no",
      }, String(new FormData(e.currentTarget as HTMLFormElement).get("website") || ""));
      trackAccepted("contact", result.emailId, service);
      setConfirmed(true);
      toast.success("Message sent", { description: "Thanks. We will get back to you shortly." });
      setForm(emptyForm);
      setSmsConsent(false);
      setMarketingConsent(false);
    } catch {
      toast.error("Something went wrong", { description: `Please retry or call ${site.phone.display}. Your entries have been kept.` });
    } finally {
      setSending(false);
    }
  };

  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Contact", path: "/contact" },
  ];
  const description = `Call ${site.phone.display}, email ${site.email.display} or request a business IT review with Net-Tech in New Albany, MS.`;

  return (
    <>
      <Seo
        title="Contact Net-Tech | New Albany, MS"
        description={description}
        path="/contact"
        schema={graph([
          webPageNode({ type: "ContactPage", path: "/contact", name: "Contact Net-Tech", description }),
          breadcrumbNode("/contact", crumbs),
        ])}
      />
      <PageHero
        above={<Breadcrumbs items={crumbs} inverse className="mb-7" />}
        eyebrow="Contact"
        title={
          <>
            Get in <span className="text-brand-bright">touch.</span>
          </>
        }
        lead="Request a business IT review. Tell us your company, location and the problem you want to solve. We will contact you to discuss scope and next steps. Commercial customers only, within 100 miles of New Albany."
      />

      <section>
        <Container className="py-16 sm:py-20 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <form
              onSubmit={handleSubmit}
              onChange={() => { if (!started.current) { started.current = true; track("consultation_request_start", { service_interest: service }); } }}
              className="card space-y-6 p-6 sm:p-8 lg:col-span-7 lg:p-10"
              aria-label="Contact form"
            >
              <p className="text-sm">Prefer to talk? <a href={site.phone.href} className="link">Call {site.phone.display}</a>. Existing client? <Link to="/support-form" className="link">Get support</Link>.</p>
              {confirmed && <p role="status" className="rounded-lg bg-brand-tint p-4">Your request has been sent. Brian will contact you about the business needs you described. This is an inquiry, not a confirmed appointment. Call if the issue is urgent.</p>}
              <input name="website" aria-hidden="true" tabIndex={-1} autoComplete="off" className="hidden" />
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" name="name" maxLength={100} autoComplete="name" value={form.name} onChange={update("name")} required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    maxLength={255}
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={form.email}
                    onChange={update("email")}
                    required
                  />
                </div>
              </div>
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2"><Label htmlFor="company">Company</Label><Input id="company" name="company" autoComplete="organization" maxLength={100} value={form.company} onChange={update("company")} required /></div>
                <div className="space-y-2"><Label htmlFor="city">Business city or ZIP</Label><Input id="city" name="city" autoComplete="address-level2" maxLength={100} value={form.city} onChange={update("city")} required /></div>
              </div>
              <div className="space-y-2"><Label htmlFor="service">What do you need?</Label><select id="service" className="flex h-11 w-full rounded-md border border-input bg-background px-3 text-sm" value={service} onChange={e => setService(e.target.value)}><option value="other">Help choosing the right service</option><option value="managed-it">Managed IT and business support</option><option value="networking">Business Wi-Fi and networking</option><option value="security-cameras">Commercial security cameras</option><option value="cloud">Microsoft 365 and cloud</option><option value="multi-site">Multi-site IT</option><option value="healthcare">Healthcare / rehab IT</option></select></div>
              <aside aria-live="polite" className="rounded-lg bg-surface-sunk p-5"><h2 className="font-semibold">{intake?.title ?? "Tell us about your business"}</h2><p className="mt-2 text-sm text-ink-soft">{intake?.prepare ?? "Describe your current setup, the problem and your project timing. Do not include passwords or confidential customer information."}</p><p className="mt-3 text-sm text-ink-soft">We will discuss next steps and agree any assessment, site visit or travel charges before work begins. Sending this form does not book an appointment.</p></aside>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone (optional)</Label>
                <Input
                  id="phone"
                  maxLength={30}
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  placeholder="(662) 555-0000"
                  value={form.phone}
                  onChange={update("phone")}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">How can we help?</Label>
                <Textarea
                  id="message"
                  maxLength={2000}
                  name="message"
                  rows={6}
                  placeholder="Tell us a little about your business and what is going on."
                  value={form.message}
                  onChange={update("message")}
                  required
                />
              </div>

              <div className="space-y-4 rounded-lg border border-line bg-surface-sunk p-5">
                <div className="flex items-start gap-3">
                  <Checkbox id="sms-consent" checked={smsConsent} onCheckedChange={(c) => setSmsConsent(c === true)} />
                  <Label htmlFor="sms-consent" className="cursor-pointer text-[13px] font-normal leading-relaxed text-ink-soft">
                    I consent to receive transactional messages from <strong className="font-medium text-ink">Net-Tech</strong> at
                    the phone number provided. Message frequency may vary. Message &amp; data rates may apply. Reply HELP
                    for help or STOP to opt out.
                  </Label>
                </div>
                <div className="flex items-start gap-3">
                  <Checkbox
                    id="marketing-consent"
                    checked={marketingConsent}
                    onCheckedChange={(c) => setMarketingConsent(c === true)}
                  />
                  <Label
                    htmlFor="marketing-consent"
                    className="cursor-pointer text-[13px] font-normal leading-relaxed text-ink-soft"
                  >
                    I consent to receive marketing and promotional messages from Net-Tech at the phone number provided.
                    Message frequency may vary. Message &amp; data rates may apply. Reply HELP for help or STOP to opt
                    out.
                  </Label>
                </div>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <Button type="submit" size="lg" disabled={sending} className="sm:min-w-[200px]">
                  {sending ? "Sending…" : "Request assessment"}
                </Button>
                <p className="text-xs text-ink-soft">
                  By sending you agree to our{" "}
                  <Link to="/privacy-policy" className="underline underline-offset-4 hover:text-ink">
                    Privacy Policy
                  </Link>{" "}
                  and{" "}
                  <Link to="/terms-of-service" className="underline underline-offset-4 hover:text-ink">
                    Terms of Service
                  </Link>
                  .
                </p>
              </div>
            </form>

            <aside className="space-y-5 lg:col-span-5">
              <div className="lg:sticky lg:top-28 space-y-5">
                <ul className="space-y-3">
                  <li>
                    <a href={site.phone.href} className="card card-interactive group flex items-center gap-4 p-5">
                      <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-brand-tint text-brand-deep transition-colors group-hover:bg-brand-deep group-hover:text-white">
                        <Phone className="h-5 w-5" strokeWidth={1.75} />
                      </span>
                      <span>
                        <span className="block font-mono text-[11px] uppercase tracking-[0.14em] text-ink-soft">Call</span>
                        <span className="tabular mt-0.5 block text-lg font-medium text-ink">{site.phone.display}</span>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href={site.email.href} className="card card-interactive group flex items-center gap-4 p-5">
                      <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-brand-tint text-brand-deep transition-colors group-hover:bg-brand-deep group-hover:text-white">
                        <Mail className="h-5 w-5" strokeWidth={1.75} />
                      </span>
                      <span className="min-w-0">
                        <span className="block font-mono text-[11px] uppercase tracking-[0.14em] text-ink-soft">Email</span>
                        <span className="mt-0.5 block truncate text-lg font-medium text-ink">{site.email.display}</span>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href={site.address.mapsHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="card card-interactive group flex items-center gap-4 p-5"
                    >
                      <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-brand-tint text-brand-deep transition-colors group-hover:bg-brand-deep group-hover:text-white">
                        <MapPin className="h-5 w-5" strokeWidth={1.75} />
                      </span>
                      <span className="min-w-0">
                        <span className="block font-mono text-[11px] uppercase tracking-[0.14em] text-ink-soft">Visit</span>
                        <span className="mt-0.5 block text-[15px] font-medium leading-snug text-ink">
                          {site.address.street}, {site.address.city}, {site.address.state} {site.address.zip}
                        </span>
                      </span>
                      <ArrowUpRight className="ml-auto h-4 w-4 shrink-0 text-ink-soft transition-transform duration-300 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </a>
                  </li>
                </ul>

                <div className="card flex items-center gap-4 p-5">
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-brand-tint text-brand-deep">
                    <Clock className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                  <span>
                    <span className="block font-mono text-[11px] uppercase tracking-[0.14em] text-ink-soft">Hours</span>
                    <span className="mt-0.5 block text-[15px] font-medium leading-snug text-ink">
                      {site.hours.display}
                    </span>
                  </span>
                </div>

                <div className="overflow-hidden rounded-xl border border-line bg-surface-sunk shadow-sm">
                  <iframe
                    title="Map showing Net-Tech at 112 W Main St, New Albany, MS"
                    src={site.address.embedSrc}
                    width="100%"
                    height="240"
                    style={{ border: 0, display: "block" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>

                <div className="rounded-xl border border-line bg-surface-sunk p-6">
                  <p className="eyebrow">Already a client?</p>
                  <p className="mt-4 text-[15px] leading-relaxed text-ink-soft">
                    Skip the form and open a support ticket so it lands with the right person straight away.
                  </p>
                  <Link to="/support-form" className="link mt-4 text-[15px]">
                    Submit a support ticket
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </Container>
      </section>
    </>
  );
};


export const Component = Contact;
export default Contact;
