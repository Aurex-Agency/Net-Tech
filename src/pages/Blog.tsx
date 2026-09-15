import { Link } from "react-router-dom";
import { ArrowUpRight, Clock } from "lucide-react";
import { Container } from "@/components/site/Container";
import { Reveal } from "@/components/site/Reveal";
import { PageHero } from "@/components/site/PageHero";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { CTABand } from "@/components/site/CTABand";
import { Seo } from "@/components/site/Seo";
import { postCategories, posts, readingMinutes } from "@/data/posts";
import { blogNode, breadcrumbNode, graph, webPageNode } from "@/lib/schema";

const PATH = "/blog";
const TITLE = "IT Advice for Mississippi Businesses";
const DESCRIPTION =
  "Practical writing on managed IT, HIPAA, clinic networks, security cameras and Microsoft 365 for businesses and healthcare practices in North Mississippi.";

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Insights", path: PATH },
];

const formatDate = (iso: string) =>
  new Date(`${iso}T00:00:00`).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });

const Blog = () => {
  const [lead, ...rest] = posts;

  return (
    <>
      <Seo
        title={TITLE}
        description={DESCRIPTION}
        path={PATH}
        schema={graph([
          webPageNode({ type: "CollectionPage", path: PATH, name: TITLE, description: DESCRIPTION }),
          breadcrumbNode(PATH, crumbs),
          blogNode(posts.map((p) => ({ path: `/blog/${p.slug}`, name: p.title }))),
        ])}
      />

      <PageHero
        eyebrow="Insights"
        title={
          <>
            Written for people who <span className="text-brand-bright">run the business.</span>
          </>
        }
        lead="No jargon, no filler and nothing written to hit a word count. These are the questions we actually get asked, answered properly."
        above={<Breadcrumbs items={crumbs} inverse className="mb-7" />}
      />

      <section>
        <Container className="py-16 sm:py-20 lg:py-24">
          {/* Lead article */}
          <Reveal>
            <Link
              to={`/blog/${lead.slug}`}
              className="card card-interactive group grid gap-8 p-7 sm:p-9 lg:grid-cols-12 lg:gap-12"
            >
              <div className="lg:col-span-8">
                <p className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[11px] uppercase tracking-[0.14em] text-brand-deep">
                  <span>Latest</span>
                  <span aria-hidden className="text-line-strong">
                    /
                  </span>
                  <span className="text-ink-soft">{postCategories[lead.category]}</span>
                </p>
                <h2 className="display mt-5 text-[1.9rem] text-ink sm:text-[2.35rem]">{lead.title}</h2>
                <p className="mt-5 max-w-prose text-[16.5px] leading-relaxed text-ink-soft">{lead.excerpt}</p>
                <span className="mt-7 inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-brand-deep">
                  Read it
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
              <div className="lg:col-span-4 lg:border-l lg:border-line lg:pl-10">
                <dl className="grid grid-cols-2 gap-5 lg:grid-cols-1">
                  <div>
                    <dt className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-soft">Published</dt>
                    <dd className="mt-1 text-[15px] text-ink">{formatDate(lead.date)}</dd>
                  </div>
                  <div>
                    <dt className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-soft">Reading time</dt>
                    <dd className="tabular mt-1 text-[15px] text-ink">{readingMinutes(lead)} min</dd>
                  </div>
                </dl>
              </div>
            </Link>
          </Reveal>

          {/* The rest */}
          <ul className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((p, i) => (
              <Reveal key={p.slug} as="li" delay={Math.min(i, 3) * 60}>
                <Link to={`/blog/${p.slug}`} className="card card-interactive group flex h-full flex-col p-7">
                  <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-brand-deep">
                    {postCategories[p.category]}
                  </p>
                  <h2 className="display-sm mt-4 text-lg text-ink">{p.title}</h2>
                  <p className="mt-3 flex-1 text-[15px] leading-relaxed text-ink-soft">{p.excerpt}</p>
                  <p className="mt-6 flex items-center gap-2 border-t border-line pt-5 font-mono text-[11px] tracking-[0.06em] text-ink-soft">
                    <Clock className="h-3.5 w-3.5" strokeWidth={1.75} />
                    <span className="tabular">{readingMinutes(p)} min read</span>
                  </p>
                </Link>
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      <CTABand
        title={
          <>
            Got a question we have not <span className="text-brand-bright">written about yet?</span>
          </>
        }
        lead="Call and ask. If it turns out other businesses are asking the same thing, it usually ends up on this page."
      />
    </>
  );
};

export const Component = Blog;
export default Blog;
