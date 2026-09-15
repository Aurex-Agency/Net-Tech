import { Link, useParams } from "react-router-dom";
import { ArrowRight, ArrowUpRight, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/site/Container";
import { Reveal } from "@/components/site/Reveal";
import { PageHero } from "@/components/site/PageHero";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { CTABand } from "@/components/site/CTABand";
import { Seo } from "@/components/site/Seo";
import { locationBySlug, locations } from "@/data/locations";
import { serviceBySlug } from "@/data/services";
import { site } from "@/lib/site";
import { breadcrumbNode, graph, webPageNode } from "@/lib/schema";
import NotFound from "./NotFound";

const LocationDetail = () => {
  const { slug = "" } = useParams();
  const loc = locationBySlug(slug);

  if (!loc) return <NotFound />;

  const path = `/locations/${loc.slug}`;
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Service area", path: "/#service-area" },
    { name: loc.city, path },
  ];

  const priority = loc.priorityServices
    .map((s) => serviceBySlug(s))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  const others = locations.filter((l) => l.slug !== loc.slug);
  const isHome = loc.slug === "new-albany-ms";

  return (
    <>
      <Seo
        title={loc.metaTitle}
        description={loc.metaDescription}
        path={path}
        schema={graph([
          webPageNode({ path, name: loc.metaTitle, description: loc.metaDescription }),
          breadcrumbNode(path, crumbs),
        ])}
      />

      <PageHero
        eyebrow={`${loc.city}, ${site.address.state}`}
        title={loc.title}
        lead={loc.lead}
        above={<Breadcrumbs items={crumbs} inverse className="mb-7" />}
        aside={
          <div className="rounded-xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm">
            <p className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-brand-bright">
              <MapPin className="h-3.5 w-3.5" />
              {isHome ? "Our office" : `From our office`}
            </p>
            <p className="mt-4 text-lg font-medium leading-relaxed text-white">
              {isHome ? (
                <>
                  {site.address.street}
                  <br />
                  {site.address.city}, {site.address.state} {site.address.zip}
                </>
              ) : (
                <>
                  {loc.drive} from
                  <br />
                  {site.address.city}, {site.address.state}
                </>
              )}
            </p>
            <p className="mt-5 border-t border-white/10 pt-5 text-[15px] leading-relaxed text-white/55">
              {loc.county} · Remote support is immediate; on-site work is a scheduled drive.
            </p>
            <div className="mt-6 flex flex-col gap-2.5">
              <Button asChild variant="inverse" className="w-full">
                <a href={site.phone.href}>
                  <Phone />
                  <span className="tabular">{site.phone.display}</span>
                </a>
              </Button>
              <Button asChild variant="outlineInverse" className="w-full">
                <Link to="/contact">Book a free assessment</Link>
              </Button>
            </div>
          </div>
        }
      />

      {/* Local context */}
      <section>
        <Container className="py-16 sm:py-20 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <div className="flex flex-col gap-12">
                {loc.sections.map((sec, i) => (
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
              <div className="lg:sticky lg:top-28">
                <Reveal className="card p-7">
                  <h2 className="eyebrow">Who we work with here</h2>
                  <dl className="mt-6 divide-y divide-line">
                    {loc.sectors.map((s) => (
                      <div key={s.name} className="py-4 first:pt-0 last:pb-0">
                        <dt className="text-[15px] font-semibold text-ink">{s.name}</dt>
                        <dd className="mt-1 text-[15px] leading-relaxed text-ink-soft">{s.note}</dd>
                      </div>
                    ))}
                  </dl>
                </Reveal>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      {/* Services for this market */}
      <section className="border-y border-line bg-surface">
        <Container className="py-16 sm:py-20">
          <h2 className="display text-[1.9rem] sm:text-[2.25rem]">
            What {loc.city} businesses call us for
          </h2>
          <ul className="mt-10 grid gap-5 sm:grid-cols-2">
            {priority.map((s, i) => (
              <Reveal key={s.slug} as="li" delay={i * 60}>
                <Link to={`/services/${s.slug}`} className="card card-interactive group flex h-full flex-col p-6">
                  <h3 className="display-sm text-lg text-ink">{s.title}</h3>
                  <p className="mt-2.5 flex-1 text-[15px] leading-relaxed text-ink-soft">{s.short}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-brand-deep">
                    Read more
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      {/* FAQ */}
      <section>
        <Container className="py-16 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <h2 className="display text-[1.9rem] sm:text-[2.25rem]">{loc.city} questions</h2>
              <p className="mt-5 text-[15px] leading-relaxed text-ink-soft">
                Anything else, just{" "}
                <a href={site.phone.href} className="link tabular">
                  call us
                </a>
                .
              </p>
            </div>
            <dl className="divide-y divide-line lg:col-span-8">
              {loc.faqs.map((f) => (
                <div key={f.q} className="py-6 first:pt-0 last:pb-0">
                  <dt className="text-[17px] font-semibold tracking-[-0.01em] text-ink">{f.q}</dt>
                  <dd className="mt-2.5 max-w-prose text-[15.5px] leading-relaxed text-ink-soft">{f.a}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Container>
      </section>

      {/* Other locations */}
      <section className="border-t border-line bg-surface">
        <Container className="py-16 sm:py-20">
          <h2 className="eyebrow">Also serving</h2>
          <ul className="mt-8 grid gap-5 sm:grid-cols-2">
            {others.map((o) => (
              <li key={o.slug}>
                <Link to={`/locations/${o.slug}`} className="card card-interactive group flex items-center gap-4 p-6">
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-brand-tint text-brand-deep transition-colors group-hover:bg-brand-deep group-hover:text-white">
                    <MapPin className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                  <span>
                    <span className="block text-[17px] font-semibold text-ink">{o.city}, {site.address.state}</span>
                    <span className="mt-0.5 block font-mono text-[11px] tracking-[0.06em] text-ink-soft">{o.drive}</span>
                  </span>
                  <ArrowRight className="ml-auto h-4 w-4 shrink-0 text-ink-soft transition-transform duration-300 ease-out group-hover:translate-x-0.5" />
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-8 max-w-prose text-[15px] leading-relaxed text-ink-soft">
            We also cover Pontotoc, Ripley, Booneville, Baldwyn, Corinth, Blue Springs and Ecru. If you are in North
            Mississippi and not on this list, call and ask. The answer is usually yes.
          </p>
        </Container>
      </section>

      <CTABand
        title={
          <>
            Serving {loc.city} from <span className="text-brand-bright">New Albany.</span>
          </>
        }
        lead="Book a free, no-pressure assessment. We will look at what you have, tell you what we would change and give you a straightforward quote."
      />
    </>
  );
};

export const Component = LocationDetail;
export default LocationDetail;
