import { useState } from "react";
import { Link } from "react-router-dom";
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
import { mailtoHref, postWebhook } from "@/lib/forms";
import { site } from "@/lib/site";

const emptyForm = { name: "", email: "", phone: "", message: "" };

const Contact = () => {
  const [form, setForm] = useState(emptyForm);
  const [smsConsent, setSmsConsent] = useState(false);
  const [marketingConsent, setMarketingConsent] = useState(false);
  const [sending, setSending] = useState(false);

  const update = (field: keyof typeof emptyForm) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    try {
      if (site.contactWebhookUrl) {
        await postWebhook(site.contactWebhookUrl, {
          full_name: form.name,
          email: form.email,
          phone: form.phone,
          message: form.message,
          sms_consent: smsConsent ? "yes" : "no",
          marketing_consent: marketingConsent ? "yes" : "no",
        });
        toast.success("Message sent", { description: "Thanks. We will get back to you shortly." });
      } else {
        const body = [
          `Name: ${form.name}`,
          `Email: ${form.email}`,
          `Phone: ${form.phone}`,
          "",
          form.message,
          "",
          `SMS consent: ${smsConsent ? "yes" : "no"}`,
          `Marketing consent: ${marketingConsent ? "yes" : "no"}`,
        ].join("\n");
        window.location.href = mailtoHref(site.email.display, `Website inquiry from ${form.name}`, body);
        toast("Opening your email app", { description: "Your message is ready to send." });
      }
      setForm(emptyForm);
      setSmsConsent(false);
      setMarketingConsent(false);
    } catch {
      toast.error("Something went wrong", { description: `Please call us at ${site.phone.display}.` });
    } finally {
      setSending(false);
    }
  };

  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Contact", path: "/contact" },
  ];
  const description = `Call ${site.phone.display}, email ${site.email.display} or send a message to book a free IT consultation with Net-Tech in New Albany, MS.`;

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
        lead="Call, email or send a note. We read every message and reply quickly. Consultations are free and never come with a hard sell."
      />

      <section>
        <Container className="py-16 sm:py-20 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <form
              onSubmit={handleSubmit}
              className="card space-y-6 p-6 sm:p-8 lg:col-span-7 lg:p-10"
              aria-label="Contact form"
            >
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" name="name" autoComplete="name" value={form.name} onChange={update("name")} required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={form.email}
                    onChange={update("email")}
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  placeholder="(662) 555-0000"
                  value={form.phone}
                  onChange={update("phone")}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">How can we help?</Label>
                <Textarea
                  id="message"
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
                  {sending ? "Sending…" : "Send message"}
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
