import { Link, useParams } from "react-router-dom";
import { ArrowUpRight, Phone, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/site/Container";
import { Reveal } from "@/components/site/Reveal";
import { PageHero } from "@/components/site/PageHero";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { CTABand } from "@/components/site/CTABand";
import { Seo } from "@/components/site/Seo";
import { industryBySlug } from "@/data/industries";
import { serviceBySlug } from "@/data/services";
import { posts, postCategories } from "@/data/posts";
import { site } from "@/lib/site";
import { breadcrumbNode, graph, webPageNode } from "@/lib/schema";
import NotFound from "./NotFound";

const IndustryDetail = () => {
  const { slug = "" } = useParams();
  const industry = industryBySlug(slug);

  if (!industry) return <NotFound />;

  const path = `/industries/${industry.slug}`;
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Industries", path: "/#industries" },
    { name: industry.shortName, path },
  ];

  const services = industry.priorityServices
    .map((s) => serviceBySlug(s))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  const reading = posts.filter((p) => p.category === "healthcare").slice(0, 3);

  return (
    <>
      <Seo
        title={industry.metaTitle}
        description={industry.metaDescription}
        path={path}
        schema={graph([
          webPageNode({ path, name: industry.metaTitle, description: industry.metaDescription }),
          breadcrumbNode(path, crumbs),
        ])}
      />

      <PageHero
        eyebrow={industry.shortName}
        title={industry.title}
        lead={industry.lead}
        above={<Breadcrumbs items={crumbs} inverse className="mb-7" />}
        aside={
          <div className="rounded-xl border border-brand/25 bg-white/[0.05] p-6 shadow-glow backdrop-blur-sm sm:p-7">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-brand/15 text-brand-bright">
              <ShieldCheck className="h-5 w-5" strokeWidth={1.75} />
            </span>
            <h2 className="display-sm mt-5 text-xl text-white">We sign a BAA</h2>
            <p className="mt-3 text-[15px] leading-relaxed text-white/60">
              Before we have access to anything that touches patient information. If a provider hesitates at that
              question, treat it as an answer.
            </p>
            <div className="mt-6 flex flex-col gap-2.5">
              <Button asChild variant="inverse" className="w-full">
                <Link to="/contact">Book a free assessment</Link>
              </Button>
              <Button asChild variant="outlineInverse" className="w-full">
                <a href={site.phone.href}>
                  <Phone />
                  <span className="tabular">{site.phone.display}</span>
                </a>
              </Button>
            </div>
          </div>
        }
      />

      {/* Pressures */}
      <section className="border-b border-line bg-surface">
        <Container className="py-16 sm:py-20">
          <h2 className="display text-[1.9rem] sm:text-[2.25rem]">What makes this different</h2>
          <dl className="mt-10 grid gap-5 sm:grid-cols-2">
            {industry.pressures.map((p, i) => (
              <Reveal key={p.name} as="div" delay={i * 60} className="card p-6">
                <dt className="text-[17px] font-semibold tracking-[-0.01em] text-ink">{p.name}</dt>
                <dd className="mt-2 text-[15px] leading-relaxed text-ink-soft">{p.note}</dd>
              </Reveal>
            ))}
          </dl>
        </Container>
      </section>

      {/* Body */}
      <section>
        <Container className="grid gap-12 py-16 sm:py-20 lg:grid-cols-12 lg:gap-16 lg:py-24">
          <div className="lg:col-span-7">
            <div className="flex flex-col gap-12">
              {industry.sections.map((sec, i) => (
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
                <h2 className="eyebrow">Where we usually start</h2>
                <ul className="mt-6 space-y-3">
                  {services.map((s) => (
                    <li key={s.slug}>
                      <Link
                        to={`/services/${s.slug}`}
                        className="group flex items-start gap-3 text-[15px] leading-snug text-ink-body transition-colors hover:text-brand-deep"
                      >
                        <ArrowUpRight className="mt-0.5 h-4 w-4 shrink-0 text-brand transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        {s.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </Reveal>

              {reading.length > 0 && (
                <Reveal delay={60} className="card p-7">
                  <h2 className="eyebrow">Worth reading</h2>
                  <ul className="mt-6 space-y-4">
                    {reading.map((r) => (
                      <li key={r.slug}>
                        <Link to={`/blog/${r.slug}`} className="group block">
                          <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-brand-deep">
                            {postCategories[r.category]}
                          </span>
                          <span className="mt-1 block text-[15px] font-medium leading-snug text-ink transition-colors group-hover:text-brand-deep">
                            {r.title}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </Reveal>
              )}
            </div>
          </aside>
        </Container>
      </section>

      {/* FAQ */}
      <section className="border-t border-line bg-surface">
        <Container className="py-16 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <h2 className="display text-[1.9rem] sm:text-[2.25rem]">What practices ask</h2>
              <p className="mt-5 text-[15px] leading-relaxed text-ink-soft">
                More on the{" "}
                <Link to="/faq" className="link">
                  full FAQ
                </Link>
                , or call and ask directly.
              </p>
            </div>
            <dl className="divide-y divide-line lg:col-span-8">
              {industry.faqs.map((f) => (
                <div key={f.q} className="py-6 first:pt-0 last:pb-0">
                  <dt className="text-[17px] font-semibold tracking-[-0.01em] text-ink">{f.q}</dt>
                  <dd className="mt-2.5 max-w-prose text-[15.5px] leading-relaxed text-ink-soft">{f.a}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Container>
      </section>

      <CTABand
        title={
          <>
            Want the technical side <span className="text-brand-bright">handled properly?</span>
          </>
        }
        lead="Free assessment, a plain-English view of where your practice actually stands, and a fixed quote. No contract required to get a number."
      />
    </>
  );
};

export const Component = IndustryDetail;
export default IndustryDetail;
