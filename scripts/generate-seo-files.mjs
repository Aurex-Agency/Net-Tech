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

// Mirrors src/data — kept as literals so this script has no build step.
const serviceSlugs = ["managed-it", "networking", "security-cameras", "cloud", "multi-site"];
const locationSlugs = ["new-albany-ms", "tupelo-ms", "oxford-ms"];

/** Indexable routes only. /support-form and /ticketclaimed are noindex. */
const pages = [
  { path: "/", priority: "1.0", changefreq: "monthly" },
  { path: "/services", priority: "0.9", changefreq: "monthly" },
  ...serviceSlugs.map((s) => ({ path: `/services/${s}`, priority: "0.9", changefreq: "monthly" })),
  ...locationSlugs.map((l) => ({ path: `/locations/${l}`, priority: "0.8", changefreq: "monthly" })),
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
 * It is cheap, and it is plain text — which means a non-rendering crawler that
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

## Locations
- [IT support in New Albany, MS](${URL}/locations/new-albany-ms)
- [Managed IT services in Tupelo, MS](${URL}/locations/tupelo-ms)
- [IT support in Oxford, MS](${URL}/locations/oxford-ms)

## Key pages
- [Pricing and how quotes are built](${URL}/pricing)
- [Frequently asked questions](${URL}/faq)
- [About Net-Tech](${URL}/about)
- [Contact](${URL}/contact)
`;

if (!existsSync(dist)) {
  console.error("dist/ not found — run the build first.");
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
  const out = withoutCharset.replace(/<head([^>]*)>/i, `<head$1>${CHARSET}`);
  if (out !== html) {
    writeFileSync(file, out);
    hoisted++;
  }
}
walk(dist);
console.log(`[seo] charset      hoisted in ${hoisted} pages`);
