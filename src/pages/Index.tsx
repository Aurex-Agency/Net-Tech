import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Cloud,
  Headset,
  LifeBuoy,
  MapPin,
  Network,
  Phone,
  Video,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/site/Container";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { CTABand } from "@/components/site/CTABand";
import { services } from "@/data/services";
import { site } from "@/lib/site";
import { usePageMeta } from "@/lib/usePageMeta";
import rackImage from "@/assets/network-rack.jpg";
import rackImageSmall from "@/assets/network-rack-800.jpg";
import officeImage from "@/assets/office-handshake.jpg";
import officeImageSmall from "@/assets/office-handshake-800.jpg";

/** Icon per service slug, so the data file stays free of presentation. */
const serviceIcons: Record<string, typeof Network> = {
  "managed-it": Headset,
  networking: Network,
  "security-cameras": Video,
  cloud: Cloud,
  "multi-site": MapPin,
};

const facts = [
  { value: "15+", label: "Years in business" },
  { value: "Local", label: "Main St, New Albany" },
  { value: "UniFi", label: "Certified installer" },
  { value: "1 call", label: "Straight to a technician" },
];

const reasons = [
  {
    title: "Local and trusted",
    body: "We are right here on Main Street in New Albany, so on-site help is a short drive, not a scheduled visit next week.",
  },
  {
    title: "15+ years of experience",
    body: "Proven expertise across networking, security and managed IT, backed by Ubiquiti certification.",
  },
  {
    title: "Personalized service",
    body: "We know your name, your setup and your history. You will never have to explain your business from scratch.",
  },
];

const steps = [
  {
    title: "Tell us what is going on",
    body: "Call, email or send the form. We will ask a few questions and set a time that works for you.",
  },
  {
    title: "We come take a look",
    body: "A free, no-pressure on-site assessment. You get a plain-English plan and a straightforward quote.",
  },
  {
    title: "We fix it, then keep it fixed",
    body: "Install, migrate or repair, then monitor and maintain so problems get caught before they cost you.",
  },
];

const Index = () => {
  usePageMeta({});

  return (
    <>
      {/* ───────────── Hero ───────────── */}
      <section className="relative overflow-hidden bg-navy">
        <div aria-hidden className="pointer-events-none absolute inset-0 grid-lines" />
        <div aria-hidden className="pointer-events-none absolute inset-0 dot-grid mask-fade opacity-60" />
        <div
          aria-hidden
          className="pointer-events-none absolute -left-32 top-0 h-[36rem] w-[36rem] rounded-full brand-glow blur-3xl"
        />

        <Container className="relative grid items-center gap-14 py-16 sm:py-20 lg:grid-cols-12 lg:gap-12 lg:py-24">
          <div className="lg:col-span-6">
            <p className="eyebrow eyebrow-inverse animate-rise-in">Managed IT · Networking · Security</p>

            <h1 className="display mt-6 text-[2.75rem] text-white animate-rise-in [animation-delay:80ms] sm:text-[3.5rem] lg:text-[4.25rem]">
              The IT partner
              <br />
              <span className="text-brand-bright">down the street.</span>
            </h1>

            <p className="mt-7 max-w-prose text-[17px] leading-relaxed text-white/65 animate-rise-in [animation-delay:160ms] sm:text-lg">
              Net-Tech keeps North Mississippi businesses connected, secure and running. Managed IT, Ubiquiti
              networking and security cameras, handled by people you can call by name.
            </p>

            <div className="mt-9 flex flex-col gap-3 animate-rise-in [animation-delay:240ms] sm:flex-row">
              <Button asChild size="lg">
                <Link to="/contact">
                  Book a free consultation
                  <ArrowRight className="transition-transform duration-300 ease-out group-hover:translate-x-0.5" />
                </Link>
              </Button>
              <Button asChild variant="outlineInverse" size="lg">
                <a href={site.phone.href}>
                  <Phone />
                  <span className="tabular">{site.phone.display}</span>
                </a>
              </Button>
            </div>

            <p className="mt-8 flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.16em] text-white/40 animate-fade-in [animation-delay:400ms]">
              <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-signal animate-pulse-dot" />
              No contracts to get a quote · Free on-site assessment
            </p>
          </div>

          {/* Photo, framed like a rack panel with a floating status chip. */}
          <figure className="relative lg:col-span-6 animate-fade-in [animation-delay:200ms]">
            <div className="relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-1.5 shadow-xl backdrop-blur-sm">
              <img
                src={rackImage}
                srcSet={`${rackImageSmall} 800w, ${rackImage} 1600w`}
                sizes="(min-width: 1024px) 560px, 100vw"
                alt="A Ubiquiti UniFi network rack with neatly dressed cabling in a small office"
                width={1600}
                height={893}
                className="aspect-[4/3] w-full rounded-lg object-cover"
                loading="eager"
                {...{ fetchpriority: "high" }}
                decoding="async"
              />
            </div>

            <figcaption className="mt-4 flex items-center gap-2.5 font-mono text-[11px] tracking-[0.08em] text-white/40">
              <span aria-hidden className="h-px w-6 bg-white/20" />
              UniFi rack build · New Albany, MS
            </figcaption>
          </figure>
        </Container>

        {/* Fact strip, flush to the bottom of the dark panel. */}
        <div className="relative border-t border-white/10">
          <Container>
            <dl className="grid grid-cols-2 lg:grid-cols-4">
              {facts.map((f, i) => (
                <Reveal
                  key={f.label}
                  delay={i * 70}
                  className="border-white/10 py-7 [&:nth-child(-n+2)]:border-b lg:border-b-0 lg:[&:not(:first-child)]:border-l lg:[&:not(:first-child)]:pl-8 [&:nth-child(odd)]:pr-6 lg:[&:nth-child(odd)]:pr-0"
                >
                  <dt className="display-sm text-2xl text-white sm:text-[1.75rem]">{f.value}</dt>
                  <dd className="mt-1.5 font-mono text-[11px] uppercase tracking-[0.13em] text-white/45">{f.label}</dd>
                </Reveal>
              ))}
            </dl>
          </Container>
        </div>
      </section>

      {/* ───────────── Services ───────────── */}
      <section id="services" className="relative overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0 grid-lines-light mask-fade-b opacity-50" />
        <Container className="relative py-20 sm:py-24 lg:py-28">
          <Reveal>
            <SectionHeading
              eyebrow="What we do"
              title="Everything a small business needs to stay running."
              lead="From everyday help desk support to complete network buildouts, we handle the technology so you can run the business."
              split
            />
          </Reveal>

          <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => {
              const Icon = serviceIcons[s.slug] ?? Network;
              return (
                <Reveal key={s.slug} as="li" delay={Math.min(i, 3) * 70}>
                  <Link
                    to={`/services#${s.slug}`}
                    className="card card-interactive group flex h-full flex-col p-7 focus-visible:ring-2 focus-visible:ring-brand"
                  >
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-brand-tint text-brand-deep transition-colors duration-300 group-hover:bg-brand-deep group-hover:text-white">
                      <Icon className="h-5 w-5" strokeWidth={1.75} />
                    </span>

                    <h3 className="display-sm mt-6 text-xl text-ink">{s.title}</h3>
                    <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">{s.short}</p>

                    <span className="mt-7 inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-brand-deep">
                      Learn more
                      <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </Link>
                </Reveal>
              );
            })}

            {/* Balances the 5-card grid and gives the section a second exit. */}
            <Reveal as="li" delay={280}>
              <div className="flex h-full flex-col justify-between rounded-xl border border-dashed border-line-strong bg-surface-sunk p-7">
                <div>
                  <h3 className="display-sm text-xl text-ink">Not sure what you need?</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">
                    Most clients start with a free walkthrough. We look at what you have and tell you honestly what is
                    worth changing.
                  </p>
                </div>
                <Button asChild variant="outline" className="mt-7 self-start">
                  <Link to="/contact">
                    Book a walkthrough
                    <ArrowRight className="transition-transform duration-300 ease-out group-hover:translate-x-0.5" />
                  </Link>
                </Button>
              </div>
            </Reveal>
          </ul>
        </Container>
      </section>

      {/* ───────────── Why Net-Tech ───────────── */}
      <section id="why" className="border-y border-line bg-surface">
        <Container className="grid items-center gap-12 py-20 sm:py-24 lg:grid-cols-12 lg:gap-16 lg:py-28">
          <Reveal as="figure" className="lg:col-span-5">
            <div className="overflow-hidden rounded-xl border border-line shadow-md">
              <img
                src={officeImage}
                srcSet={`${officeImageSmall} 800w, ${officeImage} 1600w`}
                sizes="(min-width: 1024px) 460px, 100vw"
                alt="A Net-Tech technician shaking hands with a client in a brick-walled office"
                width={1600}
                height={893}
                className="aspect-[4/3] w-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
          </Reveal>

          <Reveal delay={80} className="lg:col-span-7">
            <SectionHeading eyebrow="Why Net-Tech" title="Your neighbor, not your ticket number." />
            <p className="mt-6 max-w-prose text-[17px] leading-relaxed text-ink-soft">
              When you work with Net-Tech you are not another queue entry at a call center. You are a neighbor, and we
              will go the extra mile because we will see you around town.
            </p>

            <ul className="mt-10 space-y-px overflow-hidden rounded-xl bg-line">
              {reasons.map((r, i) => (
                <li key={r.title} className="grid gap-3 bg-surface p-6 sm:grid-cols-12 sm:gap-5">
                  <span className="tabular font-mono text-xs tracking-[0.1em] text-brand sm:col-span-1 sm:pt-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="sm:col-span-11">
                    <h3 className="text-[17px] font-semibold tracking-[-0.01em] text-ink">{r.title}</h3>
                    <p className="mt-1.5 text-[15px] leading-relaxed text-ink-soft">{r.body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </section>

      {/* ───────────── How it works ───────────── */}
      <section>
        <Container className="py-20 sm:py-24 lg:py-28">
          <Reveal>
            <SectionHeading
              eyebrow="How it works"
              title="Getting started is a phone call."
              lead="No long onboarding, no jargon. Three steps from first contact to a network you do not have to think about."
              split
            />
          </Reveal>

          <ol className="mt-14 grid gap-5 md:grid-cols-3">
            {steps.map((step, i) => (
              <Reveal key={step.title} as="li" delay={i * 90} className="card relative overflow-hidden p-7 sm:p-8">
                {/* Connector tick, purely decorative rhythm between steps. */}
                <span aria-hidden className="absolute inset-x-0 top-0 h-0.5 bg-brand/25">
                  <span className="block h-full w-1/3 bg-brand" />
                </span>

                <span className="tabular font-mono text-[11px] uppercase tracking-[0.18em] text-brand-deep">
                  Step {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="display-sm mt-5 text-xl text-ink">{step.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">{step.body}</p>
              </Reveal>
            ))}
          </ol>
        </Container>
      </section>

      {/* ───────────── Two doors ───────────── */}
      <section className="border-t border-line bg-surface">
        <Container className="grid gap-5 py-20 sm:py-24 lg:grid-cols-2 lg:py-28">
          <Reveal className="relative flex flex-col overflow-hidden rounded-xl bg-navy p-8 sm:p-10">
            <div aria-hidden className="pointer-events-none absolute inset-0 grid-lines opacity-70" />
            <div
              aria-hidden
              className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full brand-glow blur-2xl"
            />
            <div className="relative flex flex-1 flex-col">
              <p className="eyebrow eyebrow-inverse">New here?</p>
              <h2 className="display mt-5 text-[1.9rem] text-white sm:text-[2.25rem]">
                Let&rsquo;s talk about your setup.
              </h2>
              <p className="mt-5 max-w-prose text-[15px] leading-relaxed text-white/65 sm:text-base">
                Book a free consultation. We will look at what you have, tell you what we would change and give you a
                straightforward quote. No pressure, no jargon.
              </p>
              <div className="mt-auto pt-10">
                <Button asChild variant="inverse" size="lg">
                  <Link to="/contact">
                    Book a free consultation
                    <ArrowRight className="transition-transform duration-300 ease-out group-hover:translate-x-0.5" />
                  </Link>
                </Button>
              </div>
            </div>
          </Reveal>

          <Reveal delay={80} className="flex flex-col rounded-xl border border-line bg-base p-8 sm:p-10">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-brand-tint text-brand-deep">
              <LifeBuoy className="h-5 w-5" strokeWidth={1.75} />
            </span>
            <p className="eyebrow mt-6">Already a client?</p>
            <h2 className="display mt-5 text-[1.9rem] text-ink sm:text-[2.25rem]">Need a hand right now?</h2>
            <p className="mt-5 max-w-prose text-[15px] leading-relaxed text-ink-soft sm:text-base">
              Submit a support ticket and we will get on it. If you are on the phone with us, grab the remote access
              client and we can be on your screen in a minute.
            </p>
            <div className="mt-auto flex flex-col gap-3 pt-10 sm:flex-row">
              <Button asChild size="lg">
                <Link to="/support-form">Submit a ticket</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href={site.remoteSupportHref} target="_blank" rel="noopener noreferrer">
                  Remote access client
                  <ArrowUpRight className="h-4 w-4 opacity-60" />
                </a>
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>

      <CTABand
        title={
          <>
            Locally owned. <span className="text-brand-bright">Ubiquiti certified.</span>
          </>
        }
        lead="Fifteen years keeping North Mississippi businesses online. Book a free assessment and find out what we would do differently."
      />
    </>
  );
};

export default Index;
