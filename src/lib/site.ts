/**
 * Single source of truth for business details used across the site.
 */
export const site = {
  name: "Net-Tech",
  legalName: "Net-Tech",
  tagline: "Software. Hardware. Security.",
  url: "https://nettech.ms",
  phone: {
    display: "(662) 539-7787",
    href: "tel:+16625397787",
    e164: "+1-662-539-7787",
  },
  email: {
    display: "support@nettech.ms",
    href: "mailto:support@nettech.ms",
  },
  address: {
    street: "112 W Main St",
    city: "New Albany",
    state: "MS",
    stateName: "Mississippi",
    zip: "38652",
    county: "Union County",
    mapsHref: "https://www.google.com/maps/search/?api=1&query=112+W+Main+St+New+Albany+MS+38652",
    /**
     * Rooftop geocode for 112 W Main St (OpenStreetMap, Sep 2026).
     * Worth sanity-checking against the pin on the Google Business Profile.
     */
    geo: { lat: 34.4941979, lng: -89.0108712 },
    /**
     * Keyless Google Maps embed built from the postal address. Replace with the
     * embed string from the Business Profile dashboard (Share → Embed a map)
     * once the listing is verified, so the site and the profile resolve to the
     * same place entity.
     */
    embedSrc:
      "https://www.google.com/maps?q=112+W+Main+St,+New+Albany,+MS+38652&output=embed",
  },
  /**
   * Office hours are not published anywhere we can verify, so the site and the
   * schema both omit them rather than guess. Fill this in and the Contact page
   * and openingHoursSpecification both start rendering automatically.
   *
   * Shape when known, e.g.:
   *   hours: { days: ["Monday","Tuesday","Wednesday","Thursday","Friday"], opens: "08:00", closes: "17:00" }
   */
  hours: null as null | { days: string[]; opens: string; closes: string },
  yearsInBusiness: "15+",
  serviceArea: "New Albany and surrounding North Mississippi",
  remoteSupportHref: "https://sos.splashtop.com/",
  supportWebhookUrl:
    import.meta.env.VITE_SUPPORT_WEBHOOK_URL ||
    "https://services.leadconnectorhq.com/hooks/ErZnn0dKKTqWAnjTnzaP/webhook-trigger/1f29b918-a9b2-4aa9-9338-bf9344887baf",
  contactWebhookUrl: import.meta.env.VITE_CONTACT_WEBHOOK_URL || "",
  /**
   * Public profiles, emitted as schema `sameAs`. Add only URLs that exist —
   * a wrong or missing profile is worse than an absent one.
   */
  sameAs: [] as string[],
} as const;

export interface Town {
  name: string;
  county: string;
  /** Approximate drive time from the New Albany office. */
  drive: string;
  /** Only towns with a dedicated page carry a slug. */
  slug?: string;
}

/**
 * Towns Net-Tech actually covers. The first three have dedicated pages; the
 * rest are named in copy and in `areaServed` so the business is matchable to
 * those queries without spinning up thin doorway pages for each one.
 */
export const towns: Town[] = [
  { name: "New Albany", county: "Union County", drive: "Home office", slug: "new-albany-ms" },
  { name: "Tupelo", county: "Lee County", drive: "about 30 minutes", slug: "tupelo-ms" },
  { name: "Oxford", county: "Lafayette County", drive: "about 40 minutes", slug: "oxford-ms" },
  { name: "Pontotoc", county: "Pontotoc County", drive: "about 25 minutes" },
  { name: "Ripley", county: "Tippah County", drive: "about 30 minutes" },
  { name: "Booneville", county: "Prentiss County", drive: "about 40 minutes" },
  { name: "Corinth", county: "Alcorn County", drive: "about an hour" },
  { name: "Baldwyn", county: "Lee County", drive: "about 30 minutes" },
  { name: "Blue Springs", county: "Union County", drive: "about 15 minutes" },
  { name: "Ecru", county: "Pontotoc County", drive: "about 15 minutes" },
];

export const featuredTowns = towns.filter((t) => t.slug);

export const navigation = [
  { label: "Services", to: "/services" },
  { label: "Pricing", to: "/pricing" },
  { label: "About", to: "/about" },
  { label: "FAQ", to: "/faq" },
  { label: "Contact", to: "/contact" },
  { label: "Support", to: "/support-form" },
] as const;
