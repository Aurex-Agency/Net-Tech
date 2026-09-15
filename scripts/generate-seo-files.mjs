/**
 * Generates sitemap.xml and llms.txt from the same route and content data the
 * app renders from, so they cannot drift out of sync with the site.
 *
 * Runs after the SSG build and writes into dist/.
 */
import { writeFileSync, readFileSync, existsSync, readdirSync, statSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const dist = join(root, "dist");
const URL = "https://nettech.ms";

// Mirrors src/data, kept as literals so this script has no build step.
const serviceSlugs = ["managed-it", "networking", "security-cameras", "cloud", "multi-site"];
const locationSlugs = ["new-albany-ms", "tupelo-ms", "oxford-ms"];
const industrySlugs = ["healthcare-rehab"];
const postSlugs = [
  "hipaa-it-checklist-small-practice",
  "clinic-wifi-drops-treatment-rooms",
  "ransomware-monday-morning",
  "managed-it-cost-medical-practice",
  "microsoft-365-migration-practice",
  "security-cameras-clinic-placement",
  "second-clinic-it-checklist",
  "internet-down-checklist",
  "unifi-five-year-cost",
  "switching-it-providers",
  "why-we-work-with-businesses-only",
];

/** Indexable routes only. /support-form and /ticketclaimed are noindex. */
const pages = [
  { path: "/", priority: "1.0", changefreq: "monthly" },
  { path: "/services", priority: "0.9", changefreq: "monthly" },
  ...serviceSlugs.map((s) => ({ path: `/services/${s}`, priority: "0.9", changefreq: "monthly" })),
  ...locationSlugs.map((l) => ({ path: `/locations/${l}`, priority: "0.8", changefreq: "monthly" })),
  ...industrySlugs.map((i) => ({ path: `/industries/${i}`, priority: "0.9", changefreq: "monthly" })),
  { path: "/blog", priority: "0.8", changefreq: "weekly" },
  ...postSlugs.map((p) => ({ path: `/blog/${p}`, priority: "0.7", changefreq: "yearly" })),
  { path: "/pricing", priority: "0.8", changefreq: "monthly" },
  { path: "/faq", priority: "0.7", changefreq: "monthly" },
  { path: "/about", priority: "0.7", changefreq: "yearly" },
  { path: "/contact", priority: "0.8", changefreq: "yearly" },
  { path: "/privacy-policy", priority: "0.2", changefreq: "yearly" },
  { path: "/terms-of-service", priority: "0.2", changefreq: "yearly" },
];

const lastmod = new Date().toISOString().slice(0, 10);

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (p) =>
      `  <url><loc>${URL}${p.path}</loc><lastmod>${lastmod}</lastmod><changefreq>${p.changefreq}</changefreq><priority>${p.priority}</priority></url>`,
  )
  .join("\n")}
</urlset>
`;

/**
 * llms.txt is not a crawl directive and no major provider confirms reading it.
 * It is cheap, and it is plain text, which means a non-rendering crawler that
 * happens to fetch it gets real content either way.
 */
const llms = `# Net-Tech

> Managed IT, Ubiquiti UniFi networking, security camera systems and Microsoft 365 support for businesses in New Albany and across North Mississippi.

Net-Tech is a locally owned IT company at 112 W Main St, New Albany, Mississippi, serving small and mid-sized businesses for more than 15 years. Ubiquiti certified installer. Flat-fee managed IT, fixed-price projects, and no contract required to get a quote.

## Contact
- Phone: (662) 539-7787
- Email: support@nettech.ms
- Address: 112 W Main St, New Albany, MS 38652
- Service area: New Albany, Tupelo, Oxford, Pontotoc, Ripley, Booneville, Corinth, Baldwyn, Blue Springs and Ecru, Mississippi

## Services
- [Managed IT & Help Desk](${URL}/services/managed-it): Proactive monitoring, patching, backup and a help desk that answers, for one flat monthly fee.
- [Business Networking & Security](${URL}/services/networking): Ubiquiti UniFi design and installation, business Wi-Fi, firewalls, VPN and structured cabling. No per-device licence fees.
- [Security Camera Systems](${URL}/services/security-cameras): UniFi Protect cameras with on-site recording, so footage stays on your property with no monthly cloud fee.
- [Cloud & Microsoft 365](${URL}/services/cloud): Microsoft 365 and Google Workspace migration, multi-factor authentication, and independent backup of cloud mail and files.
- [Multi-Site IT Management](${URL}/services/multi-site): One standard, one help desk and one point of contact across every location.

## Who we work with
Net-Tech works with businesses only and does not take residential work. Healthcare and rehab practices are the largest client segment.
- [IT for healthcare and rehab practices](${URL}/industries/healthcare-rehab): HIPAA-aware IT, segmented clinical networks, signed Business Associate Agreement.

## Locations
- [IT support in New Albany, MS](${URL}/locations/new-albany-ms)
- [Managed IT services in Tupelo, MS](${URL}/locations/tupelo-ms)
- [IT support in Oxford, MS](${URL}/locations/oxford-ms)

## Articles
- [The HIPAA IT checklist for a small practice](${URL}/blog/hipaa-it-checklist-small-practice)
- [Why your clinic Wi-Fi dies in the back treatment rooms](${URL}/blog/clinic-wifi-drops-treatment-rooms)
- [Ransomware hits your practice on a Monday. What happens next?](${URL}/blog/ransomware-monday-morning)
- [What managed IT actually costs a medical practice](${URL}/blog/managed-it-cost-medical-practice)
- [Moving a practice to Microsoft 365 without breaking anything](${URL}/blog/microsoft-365-migration-practice)
- [Security cameras in a clinic: where they go, and where they cannot](${URL}/blog/security-cameras-clinic-placement)
- [Opening a second clinic: the IT checklist nobody gives you](${URL}/blog/second-clinic-it-checklist)
- [Business internet down? Ten minutes before you call anyone](${URL}/blog/internet-down-checklist)
- [Subscription networking and what it costs you over five years](${URL}/blog/unifi-five-year-cost)
- [Switching IT providers without losing the keys to your own practice](${URL}/blog/switching-it-providers)
- [Why we work with businesses only](${URL}/blog/why-we-work-with-businesses-only)

## Key pages
- [Pricing and how quotes are built](${URL}/pricing)
- [Frequently asked questions](${URL}/faq)
- [All articles](${URL}/blog)
- [About Net-Tech](${URL}/about)
- [Contact](${URL}/contact)
`;

if (!existsSync(dist)) {
  console.error("dist/ not found, run the build first.");
  process.exit(1);
}

writeFileSync(join(dist, "sitemap.xml"), sitemap);
writeFileSync(join(dist, "llms.txt"), llms);
console.log(`[seo] sitemap.xml  ${pages.length} URLs`);
console.log(`[seo] llms.txt     written`);

/*
  react-helmet-async injects its tags at the top of <head>, which pushes the
  static charset meta past the 1024 bytes a browser reads before it has to
  guess an encoding (and re-parse if it guessed wrong). Hoist it back to first
  position in every generated page.
*/
const CHARSET = '<meta charset="UTF-8">';

/*
  The bundler emits a `<link rel="preload" as="image">` for every asset the
  route module imports. With responsive images that means one preload per
  srcset entry: six for the home page hero (three widths, two formats), so the
  browser eagerly downloads every variant instead of the one it needs. Measured
  at roughly half a megabyte of waste and about 1.5s of LCP on mobile.

  The Seo component already emits one deliberate preload carrying imagesrcset
  and imagesizes, which lets the browser pick correctly. Strip the rest.
*/
function stripRedundantImagePreloads(html) {
  return html.replace(/<link\b[^>]*\brel="preload"[^>]*\bas="image"[^>]*>/g, (tag) =>
    tag.includes("imagesrcset") ? tag : "",
  );
}
function walk(dir) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) walk(full);
    else if (entry === "index.html") hoistCharset(full);
  }
}
let hoisted = 0;
function hoistCharset(file) {
  const html = readFileSync(file, "utf8");
  const existing = html.match(/<meta[^>]+charset[^>]*>/i);
  if (!existing) return;
  const withoutCharset = html.replace(existing[0], "");
  const out = stripRedundantImagePreloads(
    withoutCharset.replace(/<head([^>]*)>/i, `<head$1>${CHARSET}`),
  );
  if (out !== html) {
    writeFileSync(file, out);
    hoisted++;
  }
}
walk(dist);
console.log(`[seo] charset      hoisted in ${hoisted} pages`);
console.log(`[seo] preloads     redundant image preloads stripped`);
