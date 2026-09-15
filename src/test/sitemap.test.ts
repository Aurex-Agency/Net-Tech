import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { services } from "@/data/services";
import { locations } from "@/data/locations";
import { industries } from "@/data/industries";
import { posts } from "@/data/posts";
import { staticPaths } from "@/App";

/**
 * scripts/generate-seo-files.mjs keeps its own slug lists, because it is a
 * plain Node script that cannot import the TypeScript data directly. That is
 * a drift risk: add a post, forget the script, and the page is built but never
 * listed in the sitemap.
 *
 * These tests fail the build when the two disagree, so the sitemap cannot
 * quietly fall behind the site.
 */
const script = readFileSync(join(__dirname, "../../scripts/generate-seo-files.mjs"), "utf8");

function slugsFrom(constName: string): string[] {
  const match = script.match(new RegExp(`const ${constName} = \\[([^\\]]*)\\]`, "s"));
  if (!match) throw new Error(`${constName} not found in generate-seo-files.mjs`);
  return [...match[1].matchAll(/"([^"]+)"/g)].map((m) => m[1]);
}

describe("sitemap generator", () => {
  it("lists every service", () => {
    expect(slugsFrom("serviceSlugs").sort()).toEqual(services.map((s) => s.slug).sort());
  });

  it("lists every location", () => {
    expect(slugsFrom("locationSlugs").sort()).toEqual(locations.map((l) => l.slug).sort());
  });

  it("lists every industry", () => {
    expect(slugsFrom("industrySlugs").sort()).toEqual(industries.map((i) => i.slug).sort());
  });

  it("lists every post", () => {
    expect(slugsFrom("postSlugs").sort()).toEqual(posts.map((p) => p.slug).sort());
  });

  it("covers every pre-rendered route except the two noindex utility pages", () => {
    const sitemapPaths = new Set([
      "/",
      "/services",
      ...services.map((s) => `/services/${s.slug}`),
      ...locations.map((l) => `/locations/${l.slug}`),
      ...industries.map((i) => `/industries/${i.slug}`),
      "/blog",
      ...posts.map((p) => `/blog/${p.slug}`),
      "/pricing",
      "/faq",
      "/about",
      "/contact",
      "/privacy-policy",
      "/terms-of-service",
    ]);

    // Deliberately excluded: no organic value, and both are noindex.
    const excluded = new Set(["/support-form", "/ticketclaimed"]);

    const missing = staticPaths.filter((p) => !sitemapPaths.has(p) && !excluded.has(p));
    expect(missing, `Routes built but not in the sitemap: ${missing.join(", ")}`).toEqual([]);
  });
});
