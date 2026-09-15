/**
 * Blog content model.
 *
 * Posts are typed data rather than Markdown so the same structure drives the
 * page, the schema and the internal linking, and so a missing field is a build
 * error instead of a silently broken page.
 *
 * House style, enforced by src/test/no-em-dash.test.ts:
 *   No em dashes. Use a full stop, a colon, or rewrite the clause.
 */

export type BlockType = "p" | "h2" | "h3" | "ul" | "ol" | "callout" | "quote";

export interface Block {
  type: BlockType;
  /** Paragraph, heading or callout text. */
  text?: string;
  /** List items, for ul and ol. */
  items?: string[];
  /** Optional heading for a callout block. */
  title?: string;
}

export interface Post {
  slug: string;
  title: string;
  /** Page title tag. Keep the whole thing under about 50 characters. */
  metaTitle: string;
  metaDescription: string;
  /** One or two sentences under the H1. */
  excerpt: string;
  /** ISO date, used for datePublished and for ordering. */
  date: string;
  /** ISO date, only when meaningfully revised. */
  updated?: string;
  category: PostCategory;
  /** Plain-language tags shown on the card. */
  tags: string[];
  /** Service slugs this post should link to. */
  relatedServices: string[];
  /** Other post slugs worth reading next. */
  relatedPosts: string[];
  /** Location slug, when the post is written to a specific market. */
  location?: string;
  body: Block[];
}

export const postCategories = {
  healthcare: "Healthcare & rehab",
  security: "Security",
  networking: "Networking",
  cost: "Cost & planning",
  cloud: "Cloud & email",
} as const;

export type PostCategory = keyof typeof postCategories;

/** Roughly 220 words per minute, rounded up, minimum one. */
export function readingMinutes(post: Post): number {
  const words = post.body.reduce((n, b) => {
    if (b.text) return n + b.text.split(/\s+/).length;
    if (b.items) return n + b.items.join(" ").split(/\s+/).length;
    return n;
  }, 0);
  return Math.max(1, Math.round(words / 220));
}

export function wordCount(post: Post): number {
  return post.body.reduce((n, b) => {
    if (b.text) return n + b.text.split(/\s+/).length;
    if (b.items) return n + b.items.join(" ").split(/\s+/).length;
    return n;
  }, 0);
}
