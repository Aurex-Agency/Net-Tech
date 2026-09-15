import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowUpRight, Check, Download, Mail, MonitorSmartphone, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Container } from "@/components/site/Container";
import { PageHero } from "@/components/site/PageHero";
import { postWebhook } from "@/lib/forms";
import { site } from "@/lib/site";
import { Seo } from "@/components/site/Seo";

const issueTypes = ["Computer", "Phone", "Copier", "Internet", "Other"] as const;

const supportSchema = z.object({
  fullName: z.string().trim().min(1, "Please enter your name").max(100),
  businessName: z.string().trim().min(1, "Please enter your business name").max(100),
  phoneNumber: z.string().trim().min(1, "Please enter a phone number").max(30),
  email: z.string().trim().email("Please enter a valid email address").max(255),
  issueType: z.string().min(1, "Please choose an issue type"),
  description: z.string().trim().min(1, "Please describe the issue").max(2000),
});

type SupportFormValues = z.infer<typeof supportSchema>;

const Support = () => {

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const form = useForm<SupportFormValues>({
    resolver: zodResolver(supportSchema),
    defaultValues: { fullName: "", businessName: "", phoneNumber: "", email: "", issueType: "", description: "" },
  });

  const onSubmit = async (data: SupportFormValues) => {
    setSubmitting(true);
    try {
      await postWebhook(site.supportWebhookUrl, {
        full_name: data.fullName,
        business_name: data.businessName,
        phone: data.phoneNumber,
        email: data.email,
        issue_type: data.issueType,
        description: data.description,
      });
    } finally {
      // The webhook is opaque (no-cors); treat any completed request as submitted.
      setSubmitted(true);
      setSubmitting(false);
    }
  };

  return (
    <>
      <Seo
        title="Customer Support"
        description="Existing Net-Tech clients can submit a support ticket or download the remote access client here."
        path="/support-form"
        noindex
      />
      <PageHero
        eyebrow="Existing clients"
        title={
          <>
            Customer <span className="text-brand-bright">support.</span>
          </>
        }
        lead="Tell us what is going on and we will get on it. If you are already on the phone with us, grab the remote access client so we can see your screen."
        aside={
          /* Remote access is the single highest-intent action on this page, so
             it gets its own card above the fold rather than sitting in a list. */
          <div className="rounded-xl border border-brand/25 bg-white/[0.05] p-6 shadow-glow backdrop-blur-sm sm:p-7">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-brand/15 text-brand-bright">
              <MonitorSmartphone className="h-5 w-5" strokeWidth={1.75} />
            </span>
            <h2 className="display-sm mt-5 text-xl text-white">Need us on your screen?</h2>
            <p className="mt-3 text-[15px] leading-relaxed text-white/60">
              Download the remote access client, run it and read us the session code. We can be looking at the problem
              with you in about a minute.
            </p>
            <Button asChild variant="inverse" size="lg" className="mt-6 w-full">
              <a href={site.remoteSupportHref} target="_blank" rel="noopener noreferrer">
                <Download />
                Remote access client
                <ArrowUpRight className="h-4 w-4 opacity-50" />
              </a>
            </Button>
          </div>
        }
      />

      <section>
        <Container className="py-16 sm:py-20 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Ticket form */}
            <div className="lg:col-span-7">
              {submitted ? (
                <div className="card p-8 sm:p-10" role="status">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand-tint text-brand-deep">
                    <Check className="h-6 w-6" strokeWidth={2.5} />
                  </span>
                  <h2 className="display mt-6 text-[2rem] sm:text-4xl">Ticket submitted.</h2>
                  <p className="mt-4 max-w-prose text-[15px] leading-relaxed text-ink-soft">
                    Thanks. Our team has your request and will respond as soon as possible. If it is urgent, call us at{" "}
                    <a href={site.phone.href} className="tabular font-medium text-brand-deep underline underline-offset-4">
                      {site.phone.display}
                    </a>
                    .
                  </p>
                  <Button
                    variant="outline"
                    className="mt-8"
                    onClick={() => {
                      form.reset();
                      setSubmitted(false);
                    }}
                  >
                    Submit another ticket
                  </Button>
                </div>
              ) : (
                <div className="card p-6 sm:p-8 lg:p-10">
                  <h2 className="display-sm text-xl text-ink">Submit a support ticket</h2>
                  <p className="mt-2 text-[15px] text-ink-soft">
                    All fields are required so we can reach you quickly.
                  </p>

                  <Form {...form}>
                    <form
                      onSubmit={form.handleSubmit(onSubmit)}
                      className="mt-8 space-y-6"
                      aria-label="Support ticket form"
                      noValidate
                    >
                      <div className="grid gap-6 sm:grid-cols-2">
                        <FormField
                          control={form.control}
                          name="fullName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Full name</FormLabel>
                              <FormControl>
                                <Input autoComplete="name" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="businessName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Business name</FormLabel>
                              <FormControl>
                                <Input autoComplete="organization" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <div className="grid gap-6 sm:grid-cols-2">
                        <FormField
                          control={form.control}
                          name="phoneNumber"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Phone number</FormLabel>
                              <FormControl>
                                <Input type="tel" autoComplete="tel" placeholder="(662) 555-0000" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email address</FormLabel>
                              <FormControl>
                                <Input type="email" autoComplete="email" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="issueType"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>What is the issue with?</FormLabel>
                            <Select onValueChange={field.onChange} value={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Choose one" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {issueTypes.map((t) => (
                                  <SelectItem key={t} value={t}>
                                    {t}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="description"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Description</FormLabel>
                            <FormControl>
                              <Textarea
                                rows={6}
                                placeholder="What is happening, when it started and anything you have already tried."
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Button type="submit" size="lg" disabled={submitting} className="w-full sm:w-auto sm:min-w-[210px]">
                        {submitting ? "Submitting…" : "Submit ticket"}
                      </Button>
                    </form>
                  </Form>
                </div>
              )}
            </div>

            {/* Direct contact */}
            <aside className="lg:col-span-5">
              <div className="lg:sticky lg:top-28">
                <h2 className="eyebrow">Prefer to talk?</h2>
                <p className="mt-5 text-[15px] leading-relaxed text-ink-soft">
                  A ticket is the fastest way to get in the queue, but if something is down right now, call us.
                </p>

                <ul className="mt-6 space-y-3">
                  <li>
                    <a href={site.phone.href} className="card card-interactive group flex items-center gap-4 p-5">
                      <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-brand-tint text-brand-deep transition-colors group-hover:bg-brand-deep group-hover:text-white">
                        <Phone className="h-5 w-5" strokeWidth={1.75} />
                      </span>
                      <span>
                        <span className="block font-mono text-[11px] uppercase tracking-[0.14em] text-ink-soft">
                          Call us
                        </span>
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
                        <span className="block font-mono text-[11px] uppercase tracking-[0.14em] text-ink-soft">
                          Email
                        </span>
                        <span className="mt-0.5 block truncate text-lg font-medium text-ink">{site.email.display}</span>
                      </span>
                    </a>
                  </li>
                </ul>

                <div className="mt-6 rounded-xl border border-line bg-surface-sunk p-5">
                  <p className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-soft">
                    <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-signal animate-pulse-dot" />
                    What happens next
                  </p>
                  <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">
                    Your ticket goes straight to our technicians. Most issues are handled remotely the same business
                    day; if we need to come out, we will call you to set a time.
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </Container>
      </section>
    </>
  );
};


export const Component = Support;
export default Support;
