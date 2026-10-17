# Net-Tech SEO implementation handoff

Branch: `codex/nettech-seo-commercial-growth`.

## Source and release status

The correct public marketing source is `Aurex-Agency/Net-Tech`, not the operations application. Repository README, site configuration, canonical origin and the original Vercel project name `net-tech` agree on `https://nettech.ms`.

The original local checkout was clean at `82b060a`. Read-only remote verification found `main` at `a553e90340d8f77e2716e844485d53e38c282586`, the merge of that exact content branch, with an identical file tree. This implementation branch was fast-forwarded to that current main before committing. Exact hosting deployed SHA still requires the Vercel deployment record; domain/project mapping is confirmed, deployed commit is not asserted.

Work is isolated in `/private/tmp/seo-implementation-20261016/net-tech`. No production environment file was copied. No push, deployment, webmaster submission, listing edit, outreach or test lead was performed. The release approval gate still applies.

## Plan coverage

| Approved plan section | Status and evidence |
| --- | --- |
| 1. Baseline | Preserved October 14 baseline: 5 Google clicks, 828 impressions, 8 organic sessions, zero organic key events. The small sample does not prove conversion performance. Current GA4/GSC and Bing baselines remain an account workstream. |
| 2. Strategy | Implemented commercial-only article topics, service-specific inquiry links and explicit prospect/support separation. Expanded responsibility boundaries on healthcare and service pages. Removed unsupported same-day local repair implication and blanket healthcare statements in touched copy. No invented case study, office or credentials. |
| 3. Roadmap | Feasible foundation and four-post branch package complete. 60/90-day observation and evidence-dependent project story cannot be completed before release and elapsed measurement periods. |
| 4. Pages | Extended managed IT, networking, cameras and multi-site scope guidance; strengthened healthcare/rehab responsibilities; added real-base, scheduling and inquiry guidance to New Albany, Tupelo and Oxford pages. Existing homepage, pricing and service-area commercial positioning and buyer-guide linking were already implemented in base and retained. |
| 5. Four new posts | All four implemented, 606-673 body words each before CTA/source material, with unique metadata, organizational authorship, related resources, contextual links, CTA service mapping, static routes and sitemap inclusion. See article register below. Existing camera-cost and managed-IT comparison guides retained as separate supporting content. |
| 6. Technical | Verified all 38 sitemap routes: one title/H1, correct canonical, indexable HTML, valid JSON-LD and working local links. Support utilities remain noindex. Production HTTP homepage redirects 308 to HTTPS; a deliberately nonexistent production route returns 404. No speculative redirect introduced. Fixed local preview fallback defect. Mobile layout checked. New live Core Web Vitals measurement and selected-canonical inspection remain release/account checks. |
| 7. Google/Bing/local | Implemented safe opt-in IndexNow verification and submission preparation with tests. No submissions or external edits. Google/Bing checklist below prepared; Bing access, listing verification, citations and legitimate partner outreach remain external. |
| 8. Measurement | Preserved confirmed-email acceptance and retry behavior; existing API tests prove delivery failure cannot become success. Kept support_request separate from generate_lead. Added production hostname guard so local/preview visits cannot load GA4. Weekly report specification below; no automation created. |
| 9. Acceptance | Build, typecheck, lint, 27 Vitest tests and 3 IndexNow tests pass. Lint retains two existing fast-refresh warnings. Static route audit and desktop/mobile browser checks completed. No real form delivery. Release-owner review, hosted deployment checks and field performance remain explicit. |
| 10. Agent handoff | This document, route manifest, source register, test evidence and rollout/rollback steps supplied. Branch isolated and committed locally. |
| 11. Approval scope | User approved implementation. Merge, deployment, public profile edits and outreach remain separate actions. |
| 12. Sources | Primary-source references listed below; no invented keywords, volumes, results or professional review. |

## Article register

All four are complete branch content, not outline placeholders. They are available in the local preview and will become indexable only if this branch is released. Editorial attribution is Net-Tech as an organization; no named expert review is falsely claimed. Technical-owner release review should confirm service fit, tone and scope. General guidance avoids undocumented business promises and does not need fabricated credentials to be useful.

| Title | Route | Intent and links | Review |
| --- | --- | --- | --- |
| Choosing an IT Provider for a Medical or Rehab Practice: A Checklist | `/blog/choosing-it-provider-medical-rehab-practice` | Provider evaluation; healthcare/rehab, managed IT, cloud, existing switching/cost guides | Technical owner to confirm service fit; no legal-compliance determination |
| What to Prepare Before a Business Network Assessment | `/blog/prepare-business-network-assessment` | Assessment preparation; networking, multi-site, warehouse/backup guides | No credentials requested; no unverified visit terms |
| An Employee Is Leaving: A Business IT Offboarding Checklist | `/blog/business-it-employee-offboarding-checklist` | Account and equipment departure coordination; managed IT, cloud, migration/switching guides | Business/HR owns employment decisions; no customer examples |
| Opening a Second Business Location? Test These IT Workflows Before Launch | `/blog/second-business-location-it-acceptance-tests` | Acceptance testing and handover; multi-site, networking, service area | Distinct from existing `/blog/second-clinic-it-checklist`, which covers advance planning |

The fourth topic was narrowed to acceptance and handover to avoid duplicating the existing second-clinic planning guide. No city-name duplicates were added. Suggested editorial sequence, if release is staged: provider selection, network assessment, offboarding, second-site testing. Dates must reflect actual publication when released; update the draft date from October 16 if release occurs later. No schedule has been activated.

## Route and source register

`docs/seo-changed-paths.json` contains the materially changed public URLs for optional post-release IndexNow submission. There are no route removals or migrations in this change. The existing host canonical is `https://nettech.ms`; tracking query strings are preserved while canonical tags exclude them.

- Business location, contact information and service categories: existing `src/lib/site.ts`, services and original production site. No new address, certification, service radius or support SLA was invented. Existing certification wording still needs owner evidence before relying on it as verified proof.
- General further planning resources: [NIST Small Business Cybersecurity Corner](https://www.nist.gov/itl/smallbusinesscyber). The new articles are original practical checklists, not a reproduction of NIST guidance.
- Healthcare role wording: [HHS Business Associates](https://www.hhs.gov/hipaa/for-professionals/privacy/guidance/business-associates/index.html), read October 16, 2026. Removed the overbroad statement that any access automatically establishes a business-associate relationship. Replaced blanket camera/storage conclusions with practice-specific review and scope language.
- Submission protocol: [IndexNow documentation](https://www.indexnow.org/documentation), read October 16, 2026. Receipt is not indexing or ranking.
- Conditional proof still missing: approved project story, customer permission, photographs, certification verification and any guaranteed commercial support terms. No placeholders for these were published.

## Conversion and reporting specification

`generate_lead` remains triggered only after the form endpoint returns its confirmed email acceptance identifier. `support_request` remains a separate event. A click-to-call or email click is intent, not a confirmed lead, and should not be counted as a completed conversation. Retry deduplication and delivery-failure tests are preserved. Existing event parameters contain service/placement identifiers, not submitted contact fields. The analytics loader now runs only on the canonical production hostname, preventing internal previews from contaminating GA4.

After deployment, confirm GA4 key-event configuration and debug one approved, labeled delivery if needed. Do not send test production leads casually. Report weekly by engine and page group: Google clicks/impressions, Bing clicks/impressions, brand versus relevant commercial non-brand queries, organic engaged sessions, confirmed sales requests, qualified business opportunities and outcome counts. Exclude client-support traffic from acquisition reporting and annotate internal tests. Compare 28-day periods and add 90-day/year-over-year context where data exists. The initial tiny sample cannot support a conversion-rate forecast.

## Google, Bing and local checklist

1. In GSC, inspect the canonical homepage, priority services, industry, three location pages and four articles after approved deployment. Review selected canonical, last crawl, indexability and sitemap processing; request indexing selectively. Check security/manual actions. Add the 90-day and year-over-year baseline.
2. In Bing Webmaster Tools, verify domain access, sitemap and priority URL inspection. Record independent Bing clicks/impressions and crawl/indexing issues before claiming improvement.
3. Confirm the real New Albany listing details on Google Business Profile and Bing Places. Existing repository notes describe a historic 621 Highland listing and stale directory data; verify their current status before taking recovery or correction action. Do not create duplicate offices.
4. Validate UCDA, CDF and Oxford chamber membership/eligibility and actual business connections before preparing a directory submission. No paid ranking links or unsolicited outreach sent.
5. Obtain the owner evidence listed above before publishing a project story or expanding factual claims. Keep useful original guidance when evidence is unavailable.

## IndexNow operation

Default behavior does not send a request. Choose a host key of 8-128 allowed letters, digits or hyphens, store it as server/build environment `INDEXNOW_KEY`, and build only the approved production release with `VERCEL_ENV=production`. The generator emits its verification text file into `dist` only in that environment. No key is committed and no verification file is emitted for local previews.

After release, use the same key and run:

```sh
npm run seo:indexnow -- --paths=docs/seo-changed-paths.json
```

This dry run validates canonical clean paths against the built sitemap, removes duplicates and prints only the URL list. It rejects parameterized, private, off-host and unknown paths. To actually submit, an operator must additionally set `VERCEL_ENV=production` and `INDEXNOW_CONFIRM_PRODUCTION=true` and pass `--submit`. The tool verifies the deployed key file before making the single submission request. Status 200/202 is a receipt; 429 and other errors stop without automatic retry storms. The local ignored log records time, count and status without the key or personal data. It does not automatically run in CI or during a preview build. Removed URLs require a separate reviewed process because this manifest intentionally allows only current sitemap routes.

## Validation and preview

- `npm run lint`: zero errors, two pre-existing UI fast-refresh warnings.
- `npm run typecheck`: passed.
- `npm test`: 27 passed; form endpoint tests use mocks, no delivery to real systems.
- `npm run test:indexnow`: 3 passed, mocked network calls only; included in CI.
- `npm run build`: passed; 38 indexable routes and 2 noindex utility routes rendered.
- Static audit: all sitemap pages have one H1, one title, exact canonical and valid JSON-LD; local link targets resolve; utility exclusions preserved.
- Browser: article desktop and mobile layout inspected; effective mobile content width 375px without overflow; article CTA selects Business Wi-Fi and networking on the contact form. No form was submitted.
- An existing Vite preview behavior returned homepage HTML on clean deep routes, creating hydration errors. Replaced the local preview command with a loopback-only static server that serves actual route HTML, sends noindex headers, returns true 404s and rejects form POSTs. Corrected browser render has no console errors. Deep article response confirmed 200; nonexistent local route 404.
- Production read-only check: HTTP homepage 308 to canonical HTTPS; unknown path 404. Production deep-route response and exact deployed commit must be checked at release. Local HTML proof does not replace hosting verification.
- Screenshots are local under `artifacts/article-desktop.jpg`, `artifacts/article-mobile.jpg` and `artifacts/contact-mobile.jpg`; they are not committed or published. No new field-performance score is claimed.

Start preview with `npm run build` then `npm run preview -- --port 8771`. The server serves `dist` and listens only on 127.0.0.1. The API endpoint is intentionally not available, preventing test leads.

## Deployment and rollback

1. Review the branch diff, article register and owner-dependent claims. Confirm the production Vercel project and deployed revision. Update publication dates to release day if needed.
2. After separate release approval, merge through the normal review process and deploy the approved commit. Preserve working production delivery configuration. Do not use local mocks in production.
3. Check representative static HTML, canonical tags, changed article discovery, sitemap, actual host redirects, a true 404 and the contact/support distinction. Verify mobile rendering and inspect real mobile performance before making an optimization claim.
4. Submit the sitemap/changed URLs only through the authorized account or the explicit IndexNow operation above. Record deployment date, revision and observations. Check indexing at 7/14/28 days and business outcomes at 60/90 days; no automation exists yet.
5. If a release regresses, restore the previous known-good deployment or revert this implementation commit through the normal review process. No database migration or irreversible content deletion is involved. Disable the optional IndexNow operation if its configuration is wrong; do not submit repeated retries.
