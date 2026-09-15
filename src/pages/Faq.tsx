import { Link } from "react-router-dom";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/site/Container";
import { PageHero } from "@/components/site/PageHero";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { CTABand } from "@/components/site/CTABand";
import { Seo } from "@/components/site/Seo";
import { allFaqCount, faqGroups } from "@/data/faqs";
import { site } from "@/lib/site";
import { breadcrumbNode, graph, webPageNode } from "@/lib/schema";

const PATH = "/faq";
const TITLE = "IT Support Questions, Answered";
const DESCRIPTION =
  "Straight answers about managed IT, pricing, response times, Ubiquiti networking, Microsoft 365 backup and security for North Mississippi businesses.";

const crumbs = [
  { name: "Home", path: "/" },
  { name: "FAQ", path: PATH },
];

/**
 * Plain visible copy, deliberately without FAQPage markup: Google retired FAQ
 * rich results for all sites in May 2026, so the schema buys nothing while the
 * content still earns long-tail search and matches how people ask assistants.
 */
const Faq = () => (
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
      eyebrow="Questions"
      title={
        <>
          Straight <span className="text-brand-bright">answers.</span>
        </>
      }
      lead={`${allFaqCount} questions we get asked most, answered the way we would answer them on the phone. If yours is not here, call and ask.`}
      above={<Breadcrumbs items={crumbs} inverse className="mb-7" />}
    />

    <section>
      <Container className="py-16 sm:py-20 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Section index */}
          <nav aria-label="FAQ sections" className="lg:col-span-3">
            <div className="lg:sticky lg:top-28">
              <p className="eyebrow">On this page</p>
              <ul className="mt-6 space-y-3">
                {faqGroups.map((g) => (
                  <li key={g.id}>
                    <a href={`#${g.id}`} className="text-[15px] text-ink-soft transition-colors hover:text-brand-deep">
                      {g.title}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="mt-8 rounded-xl border border-line bg-surface-sunk p-5">
                <p className="text-[15px] leading-relaxed text-ink-soft">Rather just ask someone?</p>
                <Button asChild variant="outline" className="mt-4 w-full">
                  <a href={site.phone.href}>
                    <Phone />
                    <span className="tabular">{site.phone.display}</span>
                  </a>
                </Button>
              </div>
            </div>
          </nav>

          <div className="lg:col-span-9">
            <div className="flex flex-col gap-14">
              {faqGroups.map((g) => (
                <section key={g.id} id={g.id} className="scroll-mt-28">
                  <h2 className="display-sm border-b border-line pb-4 text-[1.55rem] sm:text-[1.75rem]">{g.title}</h2>
                  <dl className="divide-y divide-line">
                    {g.items.map((item) => (
                      <div key={item.q} className="py-6">
                        <dt className="text-[17px] font-semibold tracking-[-0.01em] text-ink">{item.q}</dt>
                        <dd className="mt-2.5 max-w-prose text-[15.5px] leading-relaxed text-ink-soft">{item.a}</dd>
                      </div>
                    ))}
                  </dl>
                </section>
              ))}
            </div>

            <div className="mt-14 rounded-xl border border-line bg-surface p-7">
              <h2 className="display-sm text-xl text-ink">Still not answered?</h2>
              <p className="mt-3 max-w-prose text-[15.5px] leading-relaxed text-ink-soft">
                Call us and ask. If it turns out to be a question other people have too, it ends up on this page.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Button asChild>
                  <Link to="/contact">Send a message</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link to="/pricing">See how pricing works</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>

    <CTABand />
  </>
);

export const Component = Faq;
export default Faq;
