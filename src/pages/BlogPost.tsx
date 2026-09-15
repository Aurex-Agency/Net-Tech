import { Link, useParams } from "react-router-dom";
import { ArrowUpRight, Clock, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/site/Container";
import { PageHero } from "@/components/site/PageHero";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { CTABand } from "@/components/site/CTABand";
import { Seo } from "@/components/site/Seo";
import { PostBody } from "@/components/site/PostBody";
import { slugifyHeading } from "@/lib/slug";
import { postBySlug, postCategories, readingMinutes, wordCount } from "@/data/posts";
import { serviceBySlug } from "@/data/services";
import { site } from "@/lib/site";
import { blogPostingNode, breadcrumbNode, graph, webPageNode } from "@/lib/schema";
import NotFound from "./NotFound";

const formatDate = (iso: string) =>
  new Date(`${iso}T00:00:00`).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });

const BlogPost = () => {
  const { slug = "" } = useParams();
  const post = postBySlug(slug);

  if (!post) return <NotFound />;

  const path = `/blog/${post.slug}`;
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Insights", path: "/blog" },
    { name: post.title, path },
  ];

  const headings = post.body.filter((b) => b.type === "h2" && b.text);
  const services = post.relatedServices
    .map((s) => serviceBySlug(s))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));
  const related = post.relatedPosts
    .map((s) => postBySlug(s))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  return (
    <>
      <Seo
        title={post.metaTitle}
        description={post.metaDescription}
        path={path}
        schema={graph([
          webPageNode({ path, name: post.title, description: post.metaDescription }),
          breadcrumbNode(path, crumbs),
          blogPostingNode({
            path,
            headline: post.title,
            description: post.metaDescription,
            datePublished: post.date,
            dateModified: post.updated,
            wordCount: wordCount(post),
            keywords: post.tags,
          }),
        ])}
      />

      <PageHero
        eyebrow={postCategories[post.category]}
        title={post.title}
        lead={post.excerpt}
        above={<Breadcrumbs items={crumbs} inverse className="mb-7" />}
      >
        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-[11px] tracking-[0.08em] text-white/55">
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          <span className="flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5" strokeWidth={1.75} />
            <span className="tabular">{readingMinutes(post)} min read</span>
          </span>
          {post.updated && <span>Updated {formatDate(post.updated)}</span>}
        </div>
      </PageHero>

      <section>
        <Container className="py-16 sm:py-20 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Contents */}
            <nav aria-label="On this page" className="lg:col-span-3 lg:order-last">
              <div className="lg:sticky lg:top-28">
                <p className="eyebrow">On this page</p>
                <ul className="mt-6 space-y-2.5 border-l border-line pl-4">
                  {headings.map((h) => (
                    <li key={h.text}>
                      <a
                        href={`#${slugifyHeading(h.text ?? "")}`}
                        className="block text-[14px] leading-snug text-ink-soft transition-colors hover:text-brand-deep"
                      >
                        {h.text}
                      </a>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 rounded-xl border border-line bg-surface-sunk p-5">
                  <p className="text-[15px] leading-relaxed text-ink-soft">
                    Questions about your own setup? We are open {site.hours.display}.
                  </p>
                  <Button asChild variant="outline" className="mt-4 w-full">
                    <a href={site.phone.href}>
                      <Phone />
                      <span className="tabular">{site.phone.display}</span>
                    </a>
                  </Button>
                </div>
              </div>
            </nav>

            {/* Article */}
            <article className="lg:col-span-9">
              <PostBody blocks={post.body} />

              {post.tags.length > 0 && (
                <ul className="mt-12 flex flex-wrap gap-2 border-t border-line pt-8">
                  {post.tags.map((t) => (
                    <li
                      key={t}
                      className="rounded-md bg-surface-sunk px-3 py-1.5 font-mono text-[11px] tracking-[0.06em] text-ink-soft"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              )}

              {services.length > 0 && (
                <div className="mt-10 rounded-xl border border-line bg-surface p-7">
                  <h2 className="eyebrow">What this relates to</h2>
                  <ul className="mt-6 grid gap-3 sm:grid-cols-2">
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
                </div>
              )}
            </article>
          </div>
        </Container>
      </section>

      {related.length > 0 && (
        <section className="border-t border-line bg-surface">
          <Container className="py-16 sm:py-20">
            <h2 className="eyebrow">Read next</h2>
            <ul className="mt-8 grid gap-5 sm:grid-cols-2">
              {related.map((r) => (
                <li key={r.slug}>
                  <Link to={`/blog/${r.slug}`} className="card card-interactive group flex h-full flex-col p-7">
                    <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-brand-deep">
                      {postCategories[r.category]}
                    </p>
                    <h3 className="display-sm mt-4 text-lg text-ink">{r.title}</h3>
                    <p className="mt-3 flex-1 text-[15px] leading-relaxed text-ink-soft">{r.excerpt}</p>
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-8">
              <Link to="/blog" className="link text-[15px]">
                All articles
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </p>
          </Container>
        </section>
      )}

      <CTABand />
    </>
  );
};

export const Component = BlogPost;
export default BlogPost;
