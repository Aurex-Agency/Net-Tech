import { Check } from "lucide-react";
import { Container } from "@/components/site/Container";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { PageHero } from "@/components/site/PageHero";
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
      <PageHero
        eyebrow="Services"
        title={
          <>
            Networking, security and support for{" "}
            <span className="text-brand-bright">Mississippi businesses.</span>
          </>
        }
        lead="Five things we do well, priced plainly and installed properly. Pick what you need today and add the rest as you grow."
      />

      {/* Jump nav. Sticks below the header so long service pages stay navigable. */}
      <nav
        aria-label="Jump to a service"
        className="sticky top-[70px] z-30 border-b border-line bg-base/90 backdrop-blur-xl"
      >
        <Container>
          <ul className="scrollbar-none -mx-1 flex gap-1 overflow-x-auto py-3">
            {services.map((s, i) => (
              <li key={s.slug} className="shrink-0">
                <a
                  href={`#${s.slug}`}
                  className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-ink-body transition-colors hover:bg-brand-tint hover:text-brand-deep"
                >
                  <span className="tabular font-mono text-[11px] text-brand">{String(i + 1).padStart(2, "0")}</span>
                  {s.title}
                </a>
              </li>
            ))}
          </ul>
        </Container>
      </nav>

      {services.map((s, i) => (
        <section
          key={s.slug}
          id={s.slug}
          className={cn("scroll-mt-32 border-b border-line", i % 2 === 0 ? "bg-base" : "bg-surface")}
        >
          <Container className="grid gap-10 py-16 sm:py-20 lg:grid-cols-12 lg:gap-16 lg:py-24">
            <Reveal className="lg:col-span-5">
              <div className="lg:sticky lg:top-36">
                <p className="tabular font-mono text-xs uppercase tracking-[0.18em] text-brand-deep">
                  Service {String(i + 1).padStart(2, "0")}
                </p>
                <h2 className="display mt-4 text-[2.1rem] sm:text-4xl lg:text-[2.75rem]">{s.title}</h2>
                <p className="mt-6 max-w-prose text-[17px] leading-relaxed text-ink-soft">{s.lead}</p>
              </div>
            </Reveal>

            <div className="grid gap-8 sm:grid-cols-2 lg:col-span-7 lg:gap-x-8">
              <Reveal delay={60} className="card p-6 sm:p-7">
                <h3 className="eyebrow">What we do</h3>
                <ul className="mt-6 space-y-3.5">
                  {s.includes.map((item) => (
                    <li key={item} className="flex gap-3 text-[15px] leading-relaxed text-ink-body">
                      <Check className="mt-[3px] h-4 w-4 shrink-0 text-brand" strokeWidth={2.75} />
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>

              <Reveal delay={120} className="card p-6 sm:p-7">
                <h3 className="eyebrow">What you get</h3>
                <dl className="mt-6 divide-y divide-line">
                  {s.outcomes.map((o) => (
                    <div key={o.name} className="py-4 first:pt-0 last:pb-0">
                      <dt className="text-[15px] font-semibold tracking-[-0.01em] text-ink">{o.name}</dt>
                      <dd className="mt-1 text-[15px] leading-relaxed text-ink-soft">{o.description}</dd>
                    </div>
                  ))}
                </dl>
              </Reveal>
            </div>
          </Container>
        </section>
      ))}

      <section className="bg-base">
        <Container className="py-20 sm:py-24 lg:py-28">
          <Reveal>
            <SectionHeading
              eyebrow="The Net-Tech advantage"
              title="Built to perform. Built to last."
              lead="Every install follows the same standard: professional hardware, careful work and support that keeps going after the invoice is paid."
              split
            />
          </Reveal>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {advantages.map((a, i) => (
              <Reveal key={a.title} delay={i * 70} className="card flex flex-col p-7">
                <span className="tabular font-mono text-[11px] tracking-[0.18em] text-brand">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="display-sm mt-4 text-lg text-ink">{a.title}</h3>
                <ul className="mt-5 space-y-2.5">
                  {a.points.map((p) => (
                    <li key={p} className="flex gap-3 text-[15px] leading-relaxed text-ink-soft">
                      <span aria-hidden className="mt-[10px] h-px w-3 shrink-0 bg-brand" />
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
        title={
          <>
            Networking, security and more. <span className="text-brand-bright">Unified by a local expert.</span>
          </>
        }
        lead="Seamless, reliable IT for businesses in New Albany and beyond. Tell us what you are working with and we will tell you what we would do."
      />
    </>
  );
};

export default Services;
