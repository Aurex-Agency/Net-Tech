import { Link } from "react-router-dom";
import { ArrowRight, Check, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/site/Container";
import { Reveal } from "@/components/site/Reveal";
import { PageHero } from "@/components/site/PageHero";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { CTABand } from "@/components/site/CTABand";
import { Seo } from "@/components/site/Seo";
import { costDrivers, pricingModels, pricingPrinciples } from "@/data/pricing";
import { site } from "@/lib/site";
import { breadcrumbNode, graph, webPageNode } from "@/lib/schema";

const PATH = "/pricing";
const TITLE = "IT Support Pricing in Mississippi";
const DESCRIPTION =
  "How Net-Tech prices managed IT, network installs and camera systems. Flat monthly fees, fixed project quotes and no contract needed to get a number.";

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Pricing", path: PATH },
];

const Pricing = () => (
  <>
    <Seo
      title={TITLE}
      description={DESCRIPTION}
      path={PATH}
      schema={graph([
        webPageNode({ path: PATH, name: TITLE, description: DESCRIPTION }),
        breadcrumbNode(PATH, crumbs),
      ])}
    />

    <PageHero
      eyebrow="Pricing"
      title={
        <>
          What this actually <span className="text-brand-bright">costs.</span>
        </>
      }
      lead="We cannot put a single number on a page honestly, because a five-person office and a three-location manufacturer are not the same job. What we can do is tell you exactly how the number is built, so you can work out roughly where you land before you call anyone."
      above={<Breadcrumbs items={crumbs} inverse className="mb-7" />}
    />

    {/* How we charge */}
    <section>
      <Container className="py-16 sm:py-20 lg:py-24">
        <h2 className="display text-[1.9rem] sm:text-[2.25rem]">Three ways we charge</h2>
        <p className="mt-5 max-w-prose text-[16.5px] leading-relaxed text-ink-soft">
          Most clients end up on a managed plan, but plenty start with a single project and move across later. There is
          no penalty either way.
        </p>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {pricingModels.map((m, i) => (
            <Reveal key={m.name} delay={i * 70} className="card flex flex-col p-7">
              <h3 className="display-sm text-xl text-ink">{m.name}</h3>
              {m.startingAt && (
                <p className="tabular mt-2 font-mono text-[13px] text-brand-deep">{m.startingAt}</p>
              )}
              <p className="mt-4 text-[15px] leading-relaxed text-ink-soft">
                <span className="font-semibold text-ink">Who it fits: </span>
                {m.who}
              </p>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">
                <span className="font-semibold text-ink">How it works: </span>
                {m.how}
              </p>
              <ul className="mt-6 space-y-2.5 border-t border-line pt-6">
                {m.includes.map((inc) => (
                  <li key={inc} className="flex gap-3 text-[15px] leading-relaxed text-ink-body">
                    <Check className="mt-[3px] h-4 w-4 shrink-0 text-brand" strokeWidth={2.75} />
                    {inc}
                  </li>
                ))}
              </ul>
              <Button asChild variant="outline" className="mt-7 self-start">
                <Link to={m.cta.to}>
                  {m.cta.label}
                  <ArrowRight className="transition-transform duration-300 ease-out group-hover:translate-x-0.5" />
                </Link>
              </Button>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>

    {/* What moves the number */}
    <section className="border-y border-line bg-surface">
      <Container className="py-16 sm:py-20 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <h2 className="display text-[1.9rem] sm:text-[2.25rem]">What moves the number</h2>
            <p className="mt-5 text-[16.5px] leading-relaxed text-ink-soft">
              These are the six things we actually look at during an assessment. If you can answer them, you can
              estimate your own quote within a reasonable range.
            </p>
            <Button asChild className="mt-8">
              <Link to="/contact">
                Get a real number
                <ArrowRight className="transition-transform duration-300 ease-out group-hover:translate-x-0.5" />
              </Link>
            </Button>
          </div>

          <dl className="divide-y divide-line lg:col-span-8">
            {costDrivers.map((d, i) => (
              <div key={d.factor} className="grid gap-2 py-6 first:pt-0 last:pb-0 sm:grid-cols-12 sm:gap-6">
                <dt className="sm:col-span-5">
                  <span className="tabular mr-3 font-mono text-[11px] tracking-[0.1em] text-brand">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[17px] font-semibold tracking-[-0.01em] text-ink">{d.factor}</span>
                </dt>
                <dd className="text-[15.5px] leading-relaxed text-ink-soft sm:col-span-7">{d.detail}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </section>

    {/* Principles */}
    <section>
      <Container className="py-16 sm:py-20">
        <h2 className="display text-[1.9rem] sm:text-[2.25rem]">How we handle money</h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {pricingPrinciples.map((p, i) => (
            <Reveal key={p.title} delay={i * 60} className="card p-7">
              <h3 className="text-[17px] font-semibold tracking-[-0.01em] text-ink">{p.title}</h3>
              <p className="mt-2.5 text-[15.5px] leading-relaxed text-ink-soft">{p.body}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>

    {/* Straight answer */}
    <section className="border-t border-line bg-surface">
      <Container className="py-16 sm:py-20">
        <div className="max-w-prose">
          <h2 className="display text-[1.9rem] sm:text-[2.25rem]">Just want a ballpark?</h2>
          <p className="mt-5 text-[16.5px] leading-relaxed text-ink-soft">
            Call and describe your business in two minutes. How many people, how many locations, whether you run a
            server, what breaks most often. We will give you a range on the phone.
          </p>
          <p className="mt-4 text-[16.5px] leading-relaxed text-ink-soft">
            If a monthly plan is not right for you yet, we will tell you that too. Some businesses are genuinely better
            off on as-needed support for another year, and saying so has never cost us a client worth having.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <a href={site.phone.href}>
                <Phone />
                <span className="tabular">{site.phone.display}</span>
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/faq">Read the FAQ</Link>
            </Button>
          </div>
        </div>
      </Container>
    </section>

    <CTABand
      title={
        <>
          Free assessment. <span className="text-brand-bright">Fixed quote.</span>
        </>
      }
      lead="No contract to get a number, and no obligation after you have one. Plenty of businesses use our assessment to find out their current setup is fine."
    />
  </>
);

export const Component = Pricing;
export default Pricing;
