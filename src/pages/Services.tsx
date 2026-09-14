import { Check } from "lucide-react";
import { Container } from "@/components/site/Container";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { CTABand } from "@/components/site/CTABand";
import { advantages, services } from "@/data/services";
import { usePageMeta } from "@/lib/usePageMeta";
import { cn } from "@/lib/utils";

const Services = () => {
  usePageMeta({
    title: "Services",
    description:
      "Managed IT, Ubiquiti networking, security cameras, Microsoft 365 and multi-site management for businesses in New Albany and North Mississippi.",
  });

  return (
    <>
      <section>
        <Container className="py-16 sm:py-24">
          <SectionHeading
            as="h1"
            eyebrow="Services"
            title="Networking, security and support for Mississippi businesses."
            lead="Five things we do well, priced plainly and installed properly. Pick what you need today and add the rest as you grow."
            split
            className="animate-rise-in"
          />
          <nav aria-label="Jump to a service" className="mt-12 animate-rise-in [animation-delay:120ms]">
            <ul className="flex flex-wrap gap-2">
              {services.map((s, i) => (
                <li key={s.slug}>
                  <a
                    href={`#${s.slug}`}
                    className="inline-flex items-center gap-2 rounded-full border border-line-strong px-4 py-2 text-sm font-medium text-ink transition-colors hover:border-ink hover:bg-surface"
                  >
                    <span className="tabular text-brand-deep">{String(i + 1).padStart(2, "0")}</span>
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </Container>
      </section>

      {services.map((s, i) => (
        <section key={s.slug} id={s.slug} className={cn("border-t border-line", i % 2 === 0 ? "bg-surface" : "bg-paper")}>
          <Container className="grid gap-10 py-20 sm:py-24 lg:grid-cols-12 lg:gap-16">
            <Reveal className="lg:col-span-5">
              <div className="lg:sticky lg:top-28">
                <p className="tabular text-sm font-medium text-brand-deep">{String(i + 1).padStart(2, "0")}</p>
                <h2 className="display mt-3 text-4xl sm:text-5xl">{s.title}</h2>
                <p className="mt-6 max-w-prose text-lg leading-relaxed text-ink-soft">{s.lead}</p>
              </div>
            </Reveal>

            <div className="grid gap-12 lg:col-span-7 sm:grid-cols-2 lg:gap-x-12">
              <Reveal delay={60}>
                <h3 className="eyebrow">What we do</h3>
                <ul className="mt-6 space-y-3.5">
                  {s.includes.map((item) => (
                    <li key={item} className="flex gap-3 text-[15px] leading-relaxed text-ink">
                      <Check className="mt-1 h-4 w-4 shrink-0 text-brand-deep" strokeWidth={2.5} />
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
              <Reveal delay={120}>
                <h3 className="eyebrow">What you get</h3>
                <dl className="mt-6 divide-y divide-line border-y border-line">
                  {s.outcomes.map((o) => (
                    <div key={o.name} className="py-4">
                      <dt className="font-semibold text-ink">{o.name}</dt>
                      <dd className="mt-1 text-[15px] leading-relaxed text-ink-soft">{o.description}</dd>
                    </div>
                  ))}
                </dl>
              </Reveal>
            </div>
          </Container>
        </section>
      ))}

      <section className="border-t border-line bg-surface">
        <Container className="py-20 sm:py-28">
          <Reveal>
            <SectionHeading
              eyebrow="The Net-Tech advantage"
              title="Built to perform. Built to last."
              lead="Every install follows the same standard: professional hardware, careful work and support that keeps going after the invoice is paid."
              split
            />
          </Reveal>
          <div className="mt-14 grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {advantages.map((a, i) => (
              <Reveal key={a.title} delay={i * 60} className="bg-surface p-8">
                <h3 className="text-lg font-semibold text-ink">{a.title}</h3>
                <ul className="mt-5 space-y-2.5">
                  {a.points.map((p) => (
                    <li key={p} className="flex gap-3 text-[15px] leading-relaxed text-ink-soft">
                      <span className="mt-[11px] h-px w-3 shrink-0 bg-brand-deep" aria-hidden />
                      {p}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CTABand
        title="Networking, security and more. Unified by a local expert."
        lead="Seamless, reliable IT for businesses in New Albany and beyond. Tell us what you are working with and we will tell you what we would do."
      />
    </>
  );
};

export default Services;
