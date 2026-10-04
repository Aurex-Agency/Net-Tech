import { Link } from "react-router-dom";
import { postsForService, posts } from "@/data/posts";

export function BuyerGuides({ service }: { service?: string }) {
  const guides = (service ? postsForService(service) : posts).filter(post => post.cta).slice(0, 4);
  if (!guides.length) return null;
  return <section aria-label="Business planning guides" className="py-12">
    <h2 className="display-sm text-2xl">Plan the work before you request a quote</h2>
    <p className="mt-4 max-w-prose text-ink-soft">Compare scope, prepare useful questions and know what to check at handover.</p>
    <ul className="mt-7 grid gap-5 sm:grid-cols-2">
      {guides.map(post => <li key={post.slug}><Link to={`/blog/${post.slug}`} className="card card-interactive block h-full p-6">
        <h3 className="text-lg font-semibold text-ink">{post.title}</h3>
        <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">{post.excerpt}</p>
      </Link></li>)}
    </ul>
  </section>;
}
