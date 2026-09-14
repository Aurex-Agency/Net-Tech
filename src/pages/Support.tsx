import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowUpRight, Check, Download, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Container } from "@/components/site/Container";
import { SectionHeading } from "@/components/site/SectionHeading";
import { postWebhook } from "@/lib/forms";
import { site } from "@/lib/site";
import { usePageMeta } from "@/lib/usePageMeta";

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
  usePageMeta({
    title: "Customer Support",
    description: "Existing Net-Tech clients can submit a support ticket or download the remote access client here.",
  });

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
    <section>
      <Container className="py-16 sm:py-24">
        <SectionHeading
          as="h1"
          eyebrow="Existing clients"
          title="Customer support."
          lead="Tell us what is going on and we will get on it. If you are already on the phone with us, grab the remote access client so we can see your screen."
          split
          className="animate-rise-in"
        />

        <div className="mt-14 grid gap-12 lg:grid-cols-12 lg:gap-16">
          <aside className="space-y-8 animate-rise-in [animation-delay:100ms] lg:col-span-5">
            <div className="rounded-lg bg-ink p-8 text-paper">
              <p className="eyebrow text-paper/60 before:bg-paper/60">Remote support</p>
              <h2 className="display mt-4 text-3xl sm:text-4xl">Need us on your screen?</h2>
              <p className="mt-4 text-[15px] leading-relaxed text-paper/70">
                Download the remote access client, run it and read us the session code. We can be looking at the
                problem with you in about a minute.
              </p>
              <Button asChild variant="inverse" size="lg" className="mt-8 w-full sm:w-auto">
                <a href={site.remoteSupportHref} target="_blank" rel="noopener noreferrer">
                  <Download />
                  Remote access client
                  <ArrowUpRight className="h-4 w-4 opacity-60" />
                </a>
              </Button>
            </div>

            <ul className="divide-y divide-line border-y border-line">
              <li>
                <a href={site.phone.href} className="group flex items-center gap-4 py-5">
                  <Phone className="h-5 w-5 text-brand-deep" />
                  <div>
                    <p className="text-xs uppercase tracking-[0.14em] text-ink-soft">Prefer to talk?</p>
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
            </ul>
          </aside>

          <div className="animate-rise-in [animation-delay:180ms] lg:col-span-7">
            {submitted ? (
              <div className="rounded-lg border border-line bg-surface p-8 sm:p-12" role="status">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand-soft text-brand-deep">
                  <Check className="h-6 w-6" strokeWidth={2.5} />
                </span>
                <h2 className="display mt-6 text-4xl">Ticket submitted.</h2>
                <p className="mt-4 max-w-prose text-[15px] leading-relaxed text-ink-soft">
                  Thanks. Our team has your request and will respond as soon as possible. If it is urgent, call us at{" "}
                  <a href={site.phone.href} className="tabular font-medium text-ink underline underline-offset-4">
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
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" aria-label="Support ticket form" noValidate>
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
                  <Button type="submit" size="lg" disabled={submitting} className="w-full sm:w-auto sm:min-w-[200px]">
                    {submitting ? "Submitting…" : "Submit ticket"}
                  </Button>
                </form>
              </Form>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Support;
