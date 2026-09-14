import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Container } from "@/components/site/Container";
import { SectionHeading } from "@/components/site/SectionHeading";
import { mailtoHref, postWebhook } from "@/lib/forms";
import { site } from "@/lib/site";
import { usePageMeta } from "@/lib/usePageMeta";

const emptyForm = { name: "", email: "", phone: "", message: "" };

const Contact = () => {
  usePageMeta({
    title: "Contact",
    description: `Call ${site.phone.display}, email ${site.email.display} or send a message to book a free IT consultation with Net-Tech in New Albany, MS.`,
  });

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

  return (
    <section>
      <Container className="py-16 sm:py-24">
        <SectionHeading
          as="h1"
          eyebrow="Contact"
          title="Get in touch."
          lead="Call, email or send a note. We read every message and reply quickly. Consultations are free and never come with a hard sell."
          split
          className="animate-rise-in"
        />

        <div className="mt-14 grid gap-12 lg:grid-cols-12 lg:gap-16">
          <form
            onSubmit={handleSubmit}
            className="space-y-6 animate-rise-in [animation-delay:100ms] lg:col-span-7"
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

            <div className="space-y-4 rounded-md border border-line bg-surface p-5">
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

          <aside className="space-y-10 animate-rise-in [animation-delay:180ms] lg:col-span-5">
            <ul className="divide-y divide-line border-y border-line">
              <li>
                <a href={site.phone.href} className="group flex items-center gap-4 py-5">
                  <Phone className="h-5 w-5 text-brand-deep" />
                  <div>
                    <p className="text-xs uppercase tracking-[0.14em] text-ink-soft">Call</p>
                    <p className="tabular mt-0.5 text-lg font-medium text-ink group-hover:text-brand-deep">
                      {site.phone.display}
                    </p>
                  </div>
                </a>
              </li>
              <li>
                <a href={site.email.href} className="group flex items-center gap-4 py-5">
                  <Mail className="h-5 w-5 text-brand-deep" />
                  <div>
                    <p className="text-xs uppercase tracking-[0.14em] text-ink-soft">Email</p>
                    <p className="mt-0.5 text-lg font-medium text-ink group-hover:text-brand-deep">{site.email.display}</p>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href={site.address.mapsHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 py-5"
                >
                  <MapPin className="h-5 w-5 text-brand-deep" />
                  <div>
                    <p className="text-xs uppercase tracking-[0.14em] text-ink-soft">Visit</p>
                    <p className="mt-0.5 text-lg font-medium text-ink group-hover:text-brand-deep">
                      {site.address.street}, {site.address.city}, {site.address.state} {site.address.zip}
                    </p>
                  </div>
                  <ArrowUpRight className="ml-auto h-4 w-4 text-ink-soft opacity-0 transition-opacity group-hover:opacity-100" />
                </a>
              </li>
            </ul>

            <div className="overflow-hidden rounded-lg border border-line bg-line">
              <iframe
                title="Map showing Net-Tech at 112 W Main St, New Albany, MS"
                src={site.address.embedSrc}
                width="100%"
                height="260"
                style={{ border: 0, display: "block" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="rounded-lg border border-line bg-surface p-6">
              <p className="eyebrow">Already a client?</p>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">
                Skip the form and open a support ticket so it lands with the right person straight away.
              </p>
              <Link to="/support-form" className="link mt-4 text-[15px]">
                Submit a support ticket
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </aside>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
