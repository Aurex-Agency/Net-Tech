# Net-Tech website

Marketing site for [Net-Tech](https://nettech.ms), a managed IT, networking and security company at 112 W Main St, New Albany, Mississippi.

Built with Vite, React 18, TypeScript and Tailwind CSS. No page builder, no external CMS.

## Develop

```sh
npm install
npm run dev        # http://localhost:8080
```

Other scripts:

| Script              | What it does                                  |
| ------------------- | --------------------------------------------- |
| `npm run build`     | Type-checks, then builds to `dist/`           |
| `npm run preview`   | Serves the production build locally           |
| `npm run lint`      | ESLint                                        |
| `npm run typecheck` | `tsc` without emitting                        |
| `npm test`          | Vitest (jsdom + Testing Library)              |

CI runs lint, typecheck, tests and a production build on every push and pull request (`.github/workflows/ci.yml`).

## Deploy

The build is a static single-page app. Any static host works:

- **Vercel**: import the repo. `vercel.json` sets the SPA rewrite and long-lived caching for hashed assets.
- **Netlify / Cloudflare Pages**: build command `npm run build`, publish directory `dist`. `public/_redirects` handles the SPA rewrite.
- **Anything else**: serve `dist/` and route unknown paths to `index.html`.

Point the `nettech.ms` DNS at the new host once the deployment is verified.

## Forms

- **Support ticket** (`/support-form`) posts to the existing LeadConnector webhook. Override it with `VITE_SUPPORT_WEBHOOK_URL`.
- **Contact** (`/contact`) posts to `VITE_CONTACT_WEBHOOK_URL` when that variable is set. When it is not, the form opens the visitor's email client with the message pre-filled and addressed to support@nettech.ms.

Copy `.env.example` to `.env` to set either variable locally. On a host, set them as build-time environment variables.

## Project layout

```
src/
  assets/            Optimised photos, logo mark and wordmark
  components/
    layout/          Header, footer, logo, page shell
    site/            Container, Reveal (scroll-in), SectionHeading, CTABand
    ui/              Form primitives (button, input, select, checkbox, ...)
  data/services.ts   Service catalogue shown on the home and services pages
  lib/site.ts        Business details (phone, email, address, webhooks) and nav
  lib/usePageMeta.ts Per-route <title> and meta description
  pages/             One file per route
  index.css          Design tokens and global styles
```

Business details live in one place, `src/lib/site.ts`. Service copy lives in `src/data/services.ts`. Update those files rather than hunting through pages.
