import { Link } from "react-router-dom";
import { ArrowUpRight, Cloud, Headset, MapPin, Network, Video } from "lucide-react";
import { Container } from "@/components/site/Container";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { PageHero } from "@/components/site/PageHero";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { CTABand } from "@/components/site/CTABand";
import { Seo } from "@/components/site/Seo";
import { advantages, services } from "@/data/services";
import { featuredTowns } from "@/lib/site";
import { breadcrumbNode, graph, serviceNode, webPageNode } from "@/lib/schema";

const PATH = "/services";
const TITLE = "IT Services for North Mississippi Businesses";
const DESCRIPTION =
  "Managed IT, Ubiquiti networking, security cameras and Microsoft 365 for businesses in New Albany, Tupelo, Oxford and across North Mississippi.";

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Services", path: PATH },
];

const icons: Record<string, typeof Network> = {
  "managed-it": Headset,
  networking: Network,
  "security-cameras": Video,
  cloud: Cloud,
  "multi-site": MapPin,
};

/**
 * Hub page. Deliberately short — its job is to route to the five service
 * pages, not to compete with them for the same queries.
 */
const Services = () => (
  <>
    <Seo
      title={TITLE}
      description={DESCRIPTION}
      path={PATH}
      schema={graph([
        webPageNode({ type: "CollectionPage", path: PATH, name: TITLE, description: DESCRIPTION }),
        breadcrumbNode(PATH, crumbs),
        ...services.map((s) => serviceNode(s.slug)),
      ])}
    />

    <PageHero
      eyebrow="Services"
      title={
        <>
          Five things we do, <span className="text-brand-bright">done properly.</span>
        </>
      }
      lead="Pick what you need today and add the rest as you grow. Everything is priced plainly, installed carefully and supported by the same people who put it in."
      above={<Breadcrumbs items={crumbs} inverse className="mb-7" />}
    />

    <section>
      <Container className="py-16 sm:py-20 lg:py-24">
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const Icon = icons[s.slug] ?? Network;
            return (
              <Reveal key={s.slug} as="li" delay={Math.min(i, 3) * 70}>
                <Link
                  to={`/services/${s.slug}`}
                  className="card card-interactive group flex h-full flex-col p-7 focus-visible:ring-2 focus-visible:ring-brand"
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-brand-tint text-brand-deep transition-colors duration-300 group-hover:bg-brand-deep group-hover:text-white">
                    <Icon className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                  <h2 className="display-sm mt-6 text-xl text-ink">{s.title}</h2>
                  <p className="mt-3 flex-1 text-[15px] leading-relaxed text-ink-soft">{s.short}</p>
                  <span className="mt-7 inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-brand-deep">
                    Read more
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </Link>
              </Reveal>
            );
          })}

          <Reveal as="li" delay={280}>
            <div className="flex h-full flex-col justify-between rounded-xl border border-dashed border-line-strong bg-surface-sunk p-7">
              <div>
                <h2 className="display-sm text-xl text-ink">Not sure what you need?</h2>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">
                  Most clients start with a free walkthrough. We look at what you have and tell you honestly what is
                  worth changing — and what is not.
                </p>
              </div>
              <Link to="/contact" className="link mt-7 text-[15px] self-start">
                Book a walkthrough
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </ul>
      </Container>
    </section>

    {/* Where */}
    <section className="border-y border-line bg-surface">
      <Container className="py-16 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading eyebrow="Service area" title="Where we work." />
            <p className="mt-6 max-w-prose text-[16.5px] leading-relaxed text-ink-soft">
              Based on Main Street in New Albany, covering North Mississippi — including Pontotoc, Ripley, Booneville,
              Baldwyn, Corinth, Blue Springs and Ecru alongside the three below.
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

    {/* Advantage */}
    <section>
      <Container className="py-16 sm:py-20 lg:py-24">
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
      lead="Tell us what you are working with and we will tell you what we would do. Free assessment, fixed quote, no contract required."
    />
  </>
);

export const Component = Services;
export default Services;
