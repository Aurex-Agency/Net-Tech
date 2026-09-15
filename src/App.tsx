import type { RouteRecord } from "vite-react-ssg";
import Layout from "./components/layout/Layout";
import { services } from "./data/services";
import { locations } from "./data/locations";
import { industries } from "./data/industries";
import { posts } from "./data/posts";

/**
 * Route table for vite-react-ssg.
 *
 * Every route is statically pre-rendered to its own HTML file at build time,
 * so crawlers get real markup, including the AI crawlers that never execute
 * JavaScript. Pages load lazily, which keeps
 * the form stack (react-hook-form, zod, Radix) out of the bundle for the six
 * routes that do not have a form on them.
 *
 * Dynamic segments enumerate their own paths through `getStaticPaths`, so
 * adding a service or a location generates a page without touching this file.
 */
export const routes: RouteRecord[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, entry: "src/pages/Index.tsx", lazy: () => import("./pages/Index") },

      { path: "services", entry: "src/pages/Services.tsx", lazy: () => import("./pages/Services") },
      {
        path: "services/:slug",
        entry: "src/pages/ServiceDetail.tsx",
        lazy: () => import("./pages/ServiceDetail"),
        getStaticPaths: () => services.map((s) => `/services/${s.slug}`),
      },

      {
        path: "locations/:slug",
        entry: "src/pages/LocationDetail.tsx",
        lazy: () => import("./pages/LocationDetail"),
        getStaticPaths: () => locations.map((l) => `/locations/${l.slug}`),
      },

      {
        path: "industries/:slug",
        entry: "src/pages/IndustryDetail.tsx",
        lazy: () => import("./pages/IndustryDetail"),
        getStaticPaths: () => industries.map((i) => `/industries/${i.slug}`),
      },

      { path: "blog", entry: "src/pages/Blog.tsx", lazy: () => import("./pages/Blog") },
      {
        path: "blog/:slug",
        entry: "src/pages/BlogPost.tsx",
        lazy: () => import("./pages/BlogPost"),
        getStaticPaths: () => posts.map((p) => `/blog/${p.slug}`),
      },

      { path: "pricing", entry: "src/pages/Pricing.tsx", lazy: () => import("./pages/Pricing") },
      { path: "faq", entry: "src/pages/Faq.tsx", lazy: () => import("./pages/Faq") },
      { path: "about", entry: "src/pages/About.tsx", lazy: () => import("./pages/About") },
      { path: "contact", entry: "src/pages/Contact.tsx", lazy: () => import("./pages/Contact") },

      { path: "support-form", entry: "src/pages/Support.tsx", lazy: () => import("./pages/Support") },
      { path: "ticketclaimed", entry: "src/pages/TicketClaimed.tsx", lazy: () => import("./pages/TicketClaimed") },

      { path: "privacy-policy", entry: "src/pages/PrivacyPolicy.tsx", lazy: () => import("./pages/PrivacyPolicy") },
      { path: "terms-of-service", entry: "src/pages/TermsOfService.tsx", lazy: () => import("./pages/TermsOfService") },

      { path: "*", entry: "src/pages/NotFound.tsx", lazy: () => import("./pages/NotFound") },
    ],
  },
];

/** Every path that gets a pre-rendered HTML file. Used to build the sitemap. */
export const staticPaths = [
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
  "/support-form",
  "/ticketclaimed",
  "/privacy-policy",
  "/terms-of-service",
];
