# Net-Tech website

Marketing site for [Net-Tech](https://nettech.ms), a managed IT, networking and security company at 112 W Main St, New Albany, Mississippi.

Built with Vite, React 18, TypeScript and Tailwind CSS. **Statically pre-rendered**: every route builds to a real HTML file. No page builder, no external CMS.

## Develop

```sh
npm install
npm run dev        # http://localhost:8080
```

| Script              | What it does                                              |
| ------------------- | --------------------------------------------------------- |
| `npm run build`     | Type-checks, pre-renders every route, writes SEO files     |
| `npm run preview`   | Serves the production build locally                        |
| `npm run lint`      | ESLint                                                     |
| `npm run typecheck` | `tsc` without emitting                                     |
| `npm test`          | Vitest (jsdom + Testing Library)                           |

CI runs lint, typecheck, tests and a production build on every push and pull request (`.github/workflows/ci.yml`).

## Why pre-rendering

This was a client-rendered SPA and shipped an empty `<div id="root">`, meaning zero words of HTML. Google renders JavaScript on a deferred second pass, but the crawlers behind AI answers (GPTBot, OAI-SearchBot, PerplexityBot, ClaudeBot, Claude-SearchBot, Meta-ExternalAgent) do not execute JavaScript at all, so the site was invisible to them.

`vite-react-ssg` now generates static HTML per route at build time. Pinned to **0.8.7**, because 0.9.x requires Vite 6+ and this project is on Vite 5.

Two consequences worth knowing:

- **Head tags must render, not mutate.** A `useEffect` that sets `document.title` never runs during a static render. Everything page-specific goes through `src/components/site/Seo.tsx`, which emits the title, description, self-referencing canonical, Open Graph tags and JSON-LD at build time.
- **Pages need a `Component` export.** Routes load lazily via `lazy: () => import(...)`, so each page exports `Component` alongside its default export.

Adding a route means adding it to `src/App.tsx` (route table plus `staticPaths`) and to the page list in `scripts/generate-seo-files.mjs`.

## Deploy

Static output. Any host works, but it must **not** rewrite unknown paths to `index.html`. That produces soft 404s, which is what the old config did.

- **Vercel**: import the repo. `vercel.json` sets `cleanUrls`, `trailingSlash: false`, security headers and immutable caching for `/assets` and `/fonts`. No SPA rewrite.
- **Netlify / Cloudflare Pages**: build `npm run build`, publish `dist`. Do not add a catch-all redirect.
- **Anything else**: serve `dist/` as plain files and let missing paths 404.

Point the `nettech.ms` DNS at the new host once the deployment is verified.

### After deploying

- Change the `www` to apex redirect from 302 to **301** (Cloudflare), so link authority consolidates.
- Verify the property in Google Search Console and submit `https://nettech.ms/sitemap.xml`.
- Confirm a nonsense path returns 404, not 200.

## Forms

- **Support ticket** (`/support-form`) posts to the existing LeadConnector webhook. Override with `VITE_SUPPORT_WEBHOOK_URL`.
- **Contact** (`/contact`) posts to `VITE_CONTACT_WEBHOOK_URL` when set; otherwise it opens the visitor's email client with the message pre-filled.

Copy `.env.example` to `.env` for local use; set them as build-time variables on the host.

## What to fill in

These render automatically once the data exists, and stay hidden until then. Nothing here is invented.

| File | What's missing | Why it matters |
| ---- | -------------- | -------------- |
| `src/data/trust.ts` | Team, testimonials, credentials, case studies | The largest remaining credibility gap. A named owner with a photo is the highest-impact, lowest-effort item on the site. |
| `src/lib/site.ts` `sameAs` | Google Business Profile, Facebook, LinkedIn URLs | Links the entity across platforms in schema. Add only profiles that exist. |
| `src/lib/site.ts` `address.embedSrc` | Real embed string from the Business Profile dashboard | The current embed is built from the postal address, not the verified listing. |

Do **not** add `aggregateRating` to the schema until there are real reviews *and* they are visible on the page. Schema-only ratings breach Google's guidelines.

## Project layout

```
src/
  assets/              Photos and logos (WebP + JPEG/PNG fallbacks, 3 widths)
  components/
    layout/            Header, footer, logo, page shell
    site/              Seo, PageHero, Breadcrumbs, Picture, Trust, Container,
                       Reveal, SectionHeading, CTABand
    ui/                Form primitives (button, input, select, checkbox, ...)
  data/
    services.ts        Five services: copy, includes, equipment, FAQs
    locations.ts       Three location pages, each with market-specific content
    pricing.ts         Pricing models and cost drivers
    faqs.ts            Site-wide FAQ
    trust.ts           Team, testimonials, credentials (empty until filled)
    industries.ts      Vertical landing pages (healthcare and rehab)
    posts/             Blog: one file per article, plus types and an index
  lib/
    site.ts            Business details, hours, towns, nav
    schema.ts          JSON-LD graph builders
  pages/               One file per route
  fonts.css            Self-hosted Inter + JetBrains Mono (latin subset)
  index.css            Design tokens and global styles
scripts/
  generate-seo-files.mjs   sitemap.xml, llms.txt, charset hoist (post-build)
```

Business details live in `src/lib/site.ts`; page copy lives in `src/data/`. Update those rather than hunting through pages.

## Analytics

Google Analytics 4 (`G-81YTRTKY6S`) lives in `index.html`, not in a component, so it is present in every pre-rendered page without waiting for hydration.

The loader is injected **after the window load event** rather than during it. Measured on the home page: in the critical path it cost 18 Lighthouse points and pushed LCP from 3.7s to 5.7s. Deferred, observed LCP is 2.2s. The `page_view` still fires on every real visit; only sessions abandoned before load completes are missed, and those are bounces either way.

To keep your own visits out of the reports, use GA4's internal traffic filter (Admin, Data streams, Configure tag settings) rather than adding a condition in code.

There is no cookie consent banner. The privacy policy names Google Analytics and links to Google's opt-out. If you need a consent gate, that is a separate piece of work.

## SEO notes

- **Location pages** exist for New Albany, Tupelo and Oxford only. Each carries content specific to that market. A fourth town belongs in running copy and `areaServed` unless it can clear the same bar. A city name swapped into a template is a doorway page.
- **No `FAQPage` schema.** Google retired FAQ rich results for all sites in May 2026. The FAQ content stays; the markup would buy nothing.
- **`/support-form` and `/ticketclaimed` are `noindex`**, being utility pages with no organic value.
- **No em dashes.** The client asked for none anywhere on the site, and `src/test/no-em-dash.test.ts` fails the build if one appears in `src/`, `scripts/`, `public/`, `index.html` or this README. Rewrite the sentence rather than swapping the character.
- **Businesses only.** Net-Tech does not take residential work, and the site says so in the footer, the FAQ and a dedicated article. That is deliberate lead filtering, not an oversight.
- `robots.txt` names AI crawlers explicitly. They were never blocked (the wildcard already allowed them), but being explicit removes the ambiguity.
