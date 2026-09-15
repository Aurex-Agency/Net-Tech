import { site, towns } from "./site";
import { services } from "@/data/services";

/**
 * Schema.org builders.
 *
 * Everything hangs off one `ProfessionalService` node with a stable `@id`, so
 * per-page graphs reference the business rather than redeclaring it. Nodes are
 * emitted at build time into each route's HTML, which is what makes them
 * readable by crawlers that never execute JavaScript.
 *
 * ProfessionalService is the most specific applicable type: schema.org has no
 * MSP/IT-services leaf, and ComputerStore is a retail Store subtype that would
 * misrepresent a services business.
 */

const URL = site.url;
export const ORG_ID = `${URL}/#organization`;
const SITE_ID = `${URL}/#website`;
const LOGO_ID = `${URL}/#logo`;

const abs = (path: string) => `${URL}${path === "/" ? "/" : path}`;

const townId = (name: string) => `${URL}/#area-${name.toLowerCase().replace(/\s+/g, "-")}`;

export const orgRef = { "@id": ORG_ID };

/** One City node per town we serve, so `areaServed` names real places. */
const townNodes = towns.map((t) => ({
  "@type": "City",
  "@id": townId(t.name),
  name: `${t.name}, ${site.address.state}`,
  containedInPlace: { "@type": "AdministrativeArea", name: site.address.stateName },
}));

const allTownRefs = towns.map((t) => ({ "@id": townId(t.name) }));

/** The business itself. Present on every page. */
export function organizationNode() {
  const node: Record<string, unknown> = {
    "@type": "ProfessionalService",
    "@id": ORG_ID,
    name: site.name,
    url: `${URL}/`,
    logo: { "@id": LOGO_ID },
    image: { "@id": LOGO_ID },
    telephone: site.phone.e164,
    email: site.email.display,
    description:
      "Managed IT, Ubiquiti UniFi networking, security camera installation and Microsoft 365 support for businesses in New Albany and across North Mississippi.",
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressRegion: site.address.state,
      postalCode: site.address.zip,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.address.geo.lat,
      longitude: site.address.geo.lng,
    },
    hasMap: site.address.mapsHref,
    areaServed: allTownRefs,
    priceRange: "$$",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Net-Tech services",
      itemListElement: services.map((s) => ({
        "@type": "Offer",
        itemOffered: { "@id": `${URL}/services/${s.slug}#service` },
      })),
    },
  };

  // Only emitted once real hours are known, never guessed.
  if (site.hours) {
    node.openingHoursSpecification = [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: site.hours.days,
        opens: site.hours.opens,
        closes: site.hours.closes,
      },
    ];
  }

  // Only emitted once real profiles exist.
  if (site.sameAs.length) node.sameAs = [...site.sameAs];

  return node;
}

const logoNode = () => ({
  "@type": "ImageObject",
  "@id": LOGO_ID,
  url: `${URL}/og.jpg`,
  contentUrl: `${URL}/og.jpg`,
  width: 1200,
  height: 630,
});

const websiteNode = () => ({
  "@type": "WebSite",
  "@id": SITE_ID,
  url: `${URL}/`,
  name: site.name,
  publisher: orgRef,
  inLanguage: "en-US",
});

export interface Crumb {
  name: string;
  path: string;
}

export function breadcrumbNode(path: string, crumbs: Crumb[]) {
  return {
    "@type": "BreadcrumbList",
    "@id": `${abs(path)}#breadcrumb`,
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: abs(c.path),
    })),
  };
}

export function webPageNode(opts: {
  type?: "WebPage" | "AboutPage" | "ContactPage" | "CollectionPage";
  path: string;
  name: string;
  description: string;
}) {
  return {
    "@type": opts.type ?? "WebPage",
    "@id": `${abs(opts.path)}#webpage`,
    url: abs(opts.path),
    name: opts.name,
    description: opts.description,
    isPartOf: { "@id": SITE_ID },
    about: orgRef,
    primaryImageOfPage: { "@id": LOGO_ID },
    inLanguage: "en-US",
  };
}

/** A single service, referenced from the org's offer catalog. */
export function serviceNode(slug: string) {
  const s = services.find((x) => x.slug === slug);
  if (!s) return null;
  return {
    "@type": "Service",
    "@id": `${URL}/services/${s.slug}#service`,
    url: `${URL}/services/${s.slug}`,
    name: s.title,
    serviceType: s.serviceType,
    description: s.short,
    provider: orgRef,
    areaServed: allTownRefs,
  };
}

/**
 * Wraps nodes into a page graph. Every page carries the org, logo, website and
 * the town nodes so the entity is complete no matter which URL a crawler hits
 * first.
 */
export function graph(nodes: unknown[]) {
  return {
    "@context": "https://schema.org",
    "@graph": [organizationNode(), logoNode(), websiteNode(), ...townNodes, ...nodes.filter(Boolean)],
  };
}

/** A blog post, for /blog/:slug. */
export function blogPostingNode(opts: {
  path: string;
  headline: string;
  description: string;
  datePublished: string;
  dateModified?: string;
  wordCount: number;
  keywords: string[];
}) {
  return {
    "@type": "BlogPosting",
    "@id": `${abs(opts.path)}#article`,
    mainEntityOfPage: { "@id": `${abs(opts.path)}#webpage` },
    headline: opts.headline,
    description: opts.description,
    datePublished: opts.datePublished,
    dateModified: opts.dateModified ?? opts.datePublished,
    wordCount: opts.wordCount,
    keywords: opts.keywords.join(", "),
    image: { "@id": LOGO_ID },
    inLanguage: "en-US",
    // The business is the author and the publisher. No individual byline is
    // claimed, because inventing one would be worse than having none.
    author: orgRef,
    publisher: orgRef,
  };
}

/** The blog index, as an item list of its posts. */
export function blogNode(items: { path: string; name: string }[]) {
  return {
    "@type": "Blog",
    "@id": `${URL}/blog#blog`,
    name: `${site.name} insights`,
    publisher: orgRef,
    blogPost: items.map((i) => ({
      "@type": "BlogPosting",
      "@id": `${abs(i.path)}#article`,
      headline: i.name,
      url: abs(i.path),
    })),
  };
}
