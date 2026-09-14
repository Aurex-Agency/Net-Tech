import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/site/Container";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { services } from "@/data/services";
import { site } from "@/lib/site";
import { usePageMeta } from "@/lib/usePageMeta";
import rackImage from "@/assets/network-rack.jpg";
import rackImageSmall from "@/assets/network-rack-800.jpg";
import officeImage from "@/assets/office-handshake.jpg";
import officeImageSmall from "@/assets/office-handshake-800.jpg";

const facts = [
  { label: "Locally owned", detail: `${site.address.street}, ${site.address.city}` },
  { label: "15+ years", detail: "Serving North Mississippi businesses" },
  { label: "Ubiquiti certified", detail: "Authorized reseller and installer" },
  { label: "Real people", detail: "Talk to a technician, not a queue" },
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
      {/* Hero */}
      <section className="relative overflow-hidden">
        <Container className="grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-12 lg:gap-8 lg:py-24">
          <div className="lg:col-span-7">
            <p className="eyebrow animate-rise-in">Managed IT · Networking · Security</p>
            <h1 className="display mt-6 text-[2.9rem] leading-[1.02] sm:text-6xl lg:text-7xl animate-rise-in [animation-delay:80ms]">
              The IT partner <em className="text-brand-deep">down the street.</em>
            </h1>
            <p className="mt-7 max-w-prose text-lg leading-relaxed text-ink-soft animate-rise-in [animation-delay:160ms] sm:text-xl">
              Net-Tech keeps North Mississippi businesses connected, secure and running. Managed IT, Ubiquiti
              networking and security cameras, handled by people you can call by name.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row animate-rise-in [animation-delay:240ms]">
              <Button asChild size="lg">
                <Link to="/contact">
                  Book a free consultation
                  <ArrowRight className="transition-transform duration-300 ease-out group-hover:translate-x-0.5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href={site.phone.href}>
                  <Phone />
                  <span className="tabular">{site.phone.display}</span>
                </a>
              </Button>
            </div>
          </div>

          <figure className="lg:col-span-5 animate-fade-in [animation-delay:200ms]">
            <div className="overflow-hidden rounded-lg bg-line">
              <img
                src={rackImage}
                srcSet={`${rackImageSmall} 800w, ${rackImage} 1600w`}
                sizes="(min-width: 1024px) 480px, 100vw"
                alt="A Ubiquiti UniFi network rack with neatly dressed cabling in a small office"
                width={1600}
                height={893}
                className="aspect-[4/3] w-full object-cover lg:aspect-[4/5]"
                loading="eager"
                {...{ fetchpriority: "high" }}
                decoding="async"
              />
            </div>
            <figcaption className="mt-3 text-sm text-ink-soft">
              Ubiquiti UniFi networking, installed and managed by Net-Tech.
            </figcaption>
          </figure>
        </Container>

        {/* Fact strip */}
        <Container className="pb-4">
          <dl className="grid grid-cols-2 gap-x-6 border-t border-line lg:grid-cols-4">
            {facts.map((f, i) => (
              <Reveal key={f.label} delay={i * 60} className="border-b border-line py-6 lg:border-b-0">
                <dt className="text-base font-semibold text-ink">{f.label}</dt>
                <dd className="mt-1 text-sm text-ink-soft">{f.detail}</dd>
              </Reveal>
            ))}
          </dl>
        </Container>
      </section>

      {/* Services index */}
      <section id="services" className="bg-surface">
        <Container className="py-20 sm:py-28">
          <Reveal>
            <SectionHeading
              eyebrow="What we do"
              title="Everything a small business needs to stay running."
              lead="From everyday help desk support to complete network buildouts, we handle the technology so you can run the business."
              split
            />
          </Reveal>

          <ol className="mt-14 border-t border-line">
            {services.map((s, i) => (
              <Reveal key={s.slug} as="li" delay={Math.min(i, 3) * 50} className="border-b border-line">
                <Link
                  to={`/services#${s.slug}`}
                  className="group grid gap-4 py-8 transition-colors sm:grid-cols-12 sm:items-baseline sm:gap-6 sm:py-9"
                >
                  <span className="tabular text-sm font-medium text-brand-deep sm:col-span-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="display text-3xl text-ink transition-colors group-hover:text-brand-deep sm:col-span-4 sm:text-[2rem]">
                    {s.title}
                  </h3>
                  <p className="max-w-prose text-[15px] leading-relaxed text-ink-soft sm:col-span-6">{s.short}</p>
                  <span className="hidden justify-self-end text-ink-soft transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:text-ink sm:col-span-1 sm:block">
                    <ArrowRight className="h-5 w-5" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </ol>
        </Container>
      </section>

      {/* Why local */}
      <section id="why">
        <Container className="grid items-center gap-12 py-20 sm:py-28 lg:grid-cols-12 lg:gap-16">
          <Reveal as="figure" className="lg:col-span-6">
            <div className="overflow-hidden rounded-lg bg-line">
              <img
                src={officeImage}
                srcSet={`${officeImageSmall} 800w, ${officeImage} 1600w`}
                sizes="(min-width: 1024px) 560px, 100vw"
                alt="A Net-Tech technician shaking hands with a client in a brick-walled office"
                width={1600}
                height={893}
                className="aspect-[4/3] w-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
          </Reveal>

          <Reveal delay={80} className="lg:col-span-6">
            <SectionHeading eyebrow="Why Net-Tech" title="Your neighbor, not your ticket number." />
            <p className="mt-6 max-w-prose text-lg leading-relaxed text-ink-soft">
              When you work with Net-Tech you are not another queue entry at a call center. You are a neighbor,
              and we will go the extra mile because we will see you around town.
            </p>
            <ul className="mt-10 divide-y divide-line border-y border-line">
              {reasons.map((r, i) => (
                <li key={r.title} className="grid gap-2 py-5 sm:grid-cols-12 sm:gap-6">
                  <span className="tabular text-sm font-medium text-brand-deep sm:col-span-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="sm:col-span-11">
                    <h3 className="text-lg font-semibold text-ink">{r.title}</h3>
                    <p className="mt-1 text-[15px] leading-relaxed text-ink-soft">{r.body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </section>

      {/* How it works */}
      <section className="bg-surface">
        <Container className="py-20 sm:py-28">
          <Reveal>
            <SectionHeading
              eyebrow="How it works"
              title="Getting started is a phone call."
              lead="No long onboarding, no jargon. Three steps from first contact to a network you do not have to think about."
              split
            />
          </Reveal>
          <ol className="mt-14 grid gap-px overflow-hidden rounded-lg border border-line bg-line md:grid-cols-3">
            {steps.map((step, i) => (
              <Reveal key={step.title} as="li" delay={i * 80} className="bg-surface p-8 sm:p-10">
                <span className="display text-5xl text-brand-deep/80">{i + 1}</span>
                <h3 className="mt-6 text-xl font-semibold text-ink">{step.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">{step.body}</p>
              </Reveal>
            ))}
          </ol>
        </Container>
      </section>

      {/* Two doors */}
      <section>
        <Container className="grid gap-6 py-20 sm:py-28 lg:grid-cols-2">
          <Reveal className="flex flex-col rounded-lg bg-ink p-8 text-paper sm:p-12">
            <p className="eyebrow text-paper/60 before:bg-paper/60">New here?</p>
            <h2 className="display mt-5 text-4xl sm:text-5xl">Let&rsquo;s talk about your setup.</h2>
            <p className="mt-5 max-w-prose text-[15px] leading-relaxed text-paper/70 sm:text-base">
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
          </Reveal>

          <Reveal delay={80} className="flex flex-col rounded-lg border border-line bg-surface p-8 sm:p-12">
            <p className="eyebrow">Already a client?</p>
            <h2 className="display mt-5 text-4xl text-ink sm:text-5xl">Need a hand right now?</h2>
            <p className="mt-5 max-w-prose text-[15px] leading-relaxed text-ink-soft sm:text-base">
              Submit a support ticket and we will get on it. If you are on the phone with us, grab the remote access
              client and we can be on your screen in a minute.
            </p>
            <div className="mt-auto flex flex-col gap-3 pt-10 sm:flex-row">
              <Button asChild variant="outline" size="lg">
                <Link to="/support-form">Submit a ticket</Link>
              </Button>
              <Button asChild variant="ghost" size="lg">
                <a href={site.remoteSupportHref} target="_blank" rel="noopener noreferrer">
                  Remote access client
                </a>
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
};

export default Index;
