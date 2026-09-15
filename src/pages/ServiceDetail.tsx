import { Link, useParams } from "react-router-dom";
import { ArrowRight, ArrowUpRight, Check, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/site/Container";
import { Reveal } from "@/components/site/Reveal";
import { PageHero } from "@/components/site/PageHero";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { CTABand } from "@/components/site/CTABand";
import { Seo } from "@/components/site/Seo";
import { serviceBySlug, services } from "@/data/services";
import { featuredTowns, site } from "@/lib/site";
import { breadcrumbNode, graph, serviceNode, webPageNode } from "@/lib/schema";
import NotFound from "./NotFound";

const ServiceDetail = () => {
  const { slug = "" } = useParams();
  const service = serviceBySlug(slug);

  if (!service) return <NotFound />;

  const path = `/services/${service.slug}`;
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: service.shortTitle, path },
  ];

  const related = service.related
    .map((s) => serviceBySlug(s))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  return (
    <>
      <Seo
        title={service.metaTitle}
        description={service.metaDescription}
        path={path}
        schema={graph([
          webPageNode({ path, name: service.metaTitle, description: service.metaDescription }),
          breadcrumbNode(path, crumbs),
          serviceNode(service.slug),
        ])}
      />

      <PageHero
        eyebrow="Services"
        title={service.title}
        lead={service.lead}
        above={<Breadcrumbs items={crumbs} inverse className="mb-7" />}
        aside={
          <div className="rounded-xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm">
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-brand-bright">What&rsquo;s included</p>
            <ul className="mt-5 space-y-2.5">
              {service.includes.slice(0, 5).map((item) => (
                <li key={item} className="flex gap-2.5 text-[15px] leading-snug text-white/70">
                  <Check className="mt-1 h-3.5 w-3.5 shrink-0 text-brand-bright" strokeWidth={3} />
                  {item}
                </li>
              ))}
            </ul>
            <Button asChild variant="inverse" className="mt-6 w-full">
              <Link to="/contact">
                Get a quote
                <ArrowRight className="transition-transform duration-300 ease-out group-hover:translate-x-0.5" />
              </Link>
            </Button>
          </div>
        }
      />

      {/* Problem-led opening */}
      <section className="border-b border-line bg-surface">
        <Container className="py-16 sm:py-20">
          <div className="max-w-prose">
            <h2 className="display text-[1.9rem] sm:text-[2.25rem]">{service.problem.heading}</h2>
            {service.problem.body.map((p) => (
              <p key={p.slice(0, 40)} className="mt-5 text-[17px] leading-relaxed text-ink-soft">
                {p}
              </p>
            ))}
          </div>
        </Container>
      </section>

      {/* Body */}
      <section>
        <Container className="grid gap-12 py-16 sm:py-20 lg:grid-cols-12 lg:gap-16 lg:py-24">
          <div className="lg:col-span-7">
            <div className="flex flex-col gap-12">
              {service.sections.map((sec, i) => (
                <Reveal key={sec.heading} delay={i * 40}>
                  <h2 className="display-sm text-[1.55rem] sm:text-[1.75rem]">{sec.heading}</h2>
                  {sec.body.map((p) => (
                    <p key={p.slice(0, 40)} className="mt-4 text-[16.5px] leading-relaxed text-ink-soft">
                      {p}
                    </p>
                  ))}
                </Reveal>
              ))}
            </div>
          </div>

          <aside className="lg:col-span-5">
            <div className="flex flex-col gap-5 lg:sticky lg:top-28">
              <Reveal className="card p-7">
                <h2 className="eyebrow">Everything included</h2>
                <ul className="mt-6 space-y-3">
                  {service.includes.map((item) => (
                    <li key={item} className="flex gap-3 text-[15px] leading-relaxed text-ink-body">
                      <Check className="mt-[3px] h-4 w-4 shrink-0 text-brand" strokeWidth={2.75} />
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>

              {service.equipment && (
                <Reveal delay={60} className="card p-7">
                  <h2 className="eyebrow">What we install</h2>
                  <dl className="mt-6 divide-y divide-line">
                    {service.equipment.map((e) => (
                      <div key={e.label} className="py-3.5 first:pt-0 last:pb-0">
                        <dt className="text-[15px] font-semibold text-ink">{e.label}</dt>
                        <dd className="mt-1 text-[15px] leading-relaxed text-ink-soft">{e.note}</dd>
                      </div>
                    ))}
                  </dl>
                </Reveal>
              )}

              <Reveal delay={120} className="rounded-xl border border-line bg-surface-sunk p-7">
                <p className="flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-soft">
                  <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-signal animate-pulse-dot" />
                  Talk it through
                </p>
                <p className="mt-4 text-[15px] leading-relaxed text-ink-soft">
                  Free on-site assessment, a plain-English plan and a fixed quote. No contract needed to get a number.
                </p>
                <div className="mt-6 flex flex-col gap-2.5">
                  <Button asChild>
                    <Link to="/contact">Book an assessment</Link>
                  </Button>
                  <Button asChild variant="outline">
                    <a href={site.phone.href}>
                      <Phone />
                      <span className="tabular">{site.phone.display}</span>
                    </a>
                  </Button>
                </div>
              </Reveal>
            </div>
          </aside>
        </Container>
      </section>

      {/* Outcomes */}
      <section className="border-y border-line bg-surface">
        <Container className="py-16 sm:py-20">
          <h2 className="display text-[1.9rem] sm:text-[2.25rem]">What you get out of it</h2>
          <dl className="mt-10 grid gap-5 sm:grid-cols-2">
            {service.outcomes.map((o, i) => (
              <Reveal key={o.name} as="div" delay={i * 60} className="card p-6">
                <dt className="text-[17px] font-semibold tracking-[-0.01em] text-ink">{o.name}</dt>
                <dd className="mt-2 text-[15px] leading-relaxed text-ink-soft">{o.description}</dd>
              </Reveal>
            ))}
          </dl>
        </Container>
      </section>

      {/* Service area */}
      <section>
        <Container className="py-16 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <h2 className="display text-[1.9rem] sm:text-[2.25rem]">Where we do this work</h2>
              <p className="mt-5 max-w-prose text-[16.5px] leading-relaxed text-ink-soft">
                Based in New Albany, working across North Mississippi — Tupelo, Oxford, Pontotoc, Ripley, Booneville,
                Baldwyn and Corinth included.
              </p>
            </div>
            <ul className="grid gap-3 sm:grid-cols-3 lg:col-span-7">
              {featuredTowns.map((t) => (
                <li key={t.slug}>
                  <Link to={`/locations/${t.slug}`} className="card card-interactive group flex h-full flex-col p-5">
                    <span className="text-[17px] font-semibold text-ink">{t.name}</span>
                    <span className="mt-1 font-mono text-[11px] tracking-[0.06em] text-ink-soft">{t.drive}</span>
                    <span className="mt-4 inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-brand-deep">
                      Local page
                      <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="border-t border-line bg-surface">
        <Container className="py-16 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <h2 className="display text-[1.9rem] sm:text-[2.25rem]">Common questions</h2>
              <p className="mt-5 text-[15px] leading-relaxed text-ink-soft">
                More on the{" "}
                <Link to="/faq" className="link">
                  full FAQ
                </Link>
                , or just call and ask.
              </p>
            </div>
            <dl className="divide-y divide-line lg:col-span-8">
              {service.faqs.map((f) => (
                <div key={f.q} className="py-6 first:pt-0 last:pb-0">
                  <dt className="text-[17px] font-semibold tracking-[-0.01em] text-ink">{f.q}</dt>
                  <dd className="mt-2.5 max-w-prose text-[15.5px] leading-relaxed text-ink-soft">{f.a}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Container>
      </section>

      {/* Related */}
      <section className="border-t border-line">
        <Container className="py-16 sm:py-20">
          <h2 className="eyebrow">Related services</h2>
          <ul className="mt-8 grid gap-5 sm:grid-cols-3">
            {related.map((r) => (
              <li key={r.slug}>
                <Link to={`/services/${r.slug}`} className="card card-interactive group flex h-full flex-col p-6">
                  <h3 className="display-sm text-lg text-ink">{r.title}</h3>
                  <p className="mt-2.5 flex-1 text-[15px] leading-relaxed text-ink-soft">{r.short}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-brand-deep">
                    Read more
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-8">
            <Link to="/services" className="link text-[15px]">
              All {services.length} services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </p>
        </Container>
      </section>

      <CTABand
        title={
          <>
            Want this done properly? <span className="text-brand-bright">Start with a free look.</span>
          </>
        }
        lead={`We will come out, look at what you have and tell you what we would change. No contract required to get a quote.`}
      />
    </>
  );
};

export const Component = ServiceDetail;
export default ServiceDetail;
