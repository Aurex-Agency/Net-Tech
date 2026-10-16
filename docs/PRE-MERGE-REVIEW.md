# Net-Tech pre-merge review

Reviewed October 16, 2026 against current `origin/main` (`a553e90340d8f77e2716e844485d53e38c282586`). A merge-tree check succeeds without conflicts. No production deployment or lead delivery was performed.

## Verdict

Ready for code merge after the branch CI succeeds. Four new articles, commercial service changes, links and production analytics initialization pass the checks below. This is not a claim of zero security risk or verified live deployment behavior.

## Changes made during review

- Updated compatible locked dependencies, including sharp and TypeScript ESLint tooling, to address available security patches.
- Upgraded the development test runner to Vitest 4.1.11, removing vulnerable mocker and tinypool versions. Explicit Node types preserve type checking of server API and test code after the runner upgrade.
- Added repeatable built-site verification to CI: every sitemap route must have unique title/description, a single H1, the correct canonical, parseable structured data and working internal links/fragments. Private support utilities remain excluded and noindex.
- Added a production analytics initialization test covering simultaneous load/interaction triggers, alongside existing preview-exclusion tests. No real Google requests are sent.
- Enabled CI on this implementation branch so GitHub checks run before merge. Article tests now identify the four posts by stable slugs instead of a date that must change if publication is delayed.

## Validation

- Production build and its TypeScript check: pass.
- Lint: zero errors, two existing fast-refresh warnings.
- Application tests: 28 pass; delivery is mocked.
- IndexNow tests: three pass; submission is mocked.
- Built-site SEO verification: all 38 public routes pass, plus both private utility exclusions.
- Existing desktop/mobile screenshots and layout review remain applicable: no visual source was changed during this pass. The fresh generated routes retain the article body and linked service CTA.
- Remote CI status is reported separately against the pushed commit; a local pass is not represented as a remote pass.

## Dependency findings and exposure assessment

After patching, npm audit reports 10 package entries: zero critical, five high and five moderate. These are not 10 independently exploitable production defects.

- Five high entries originate from `braces` through Tailwind's development/build-time file matching. This static site's runtime does not accept file patterns or run Tailwind. A Tailwind major migration remains maintenance work; do not expose build tools or run builds against untrusted source/patterns.
- Two moderate entries originate from PostCSS selector parsing in the same trusted build pipeline. No user-supplied stylesheet is compiled at runtime.
- Three moderate entries originate from React Router through react-router-dom and vite-react-ssg. The two upstream advisories require attacker-controlled navigation destinations, or attacker-controlled SSR errors. All navigation destinations were reviewed: they are fixed or derived from checked-in site content; this build generates static HTML and has no request-time route loaders/actions accepting attacker input. No affected input path was found. vite-react-ssg's current peer constraint is Router 6, so forcing Router 7 would be an incompatible framework migration. Reassess before adding externally supplied navigation or dynamic SSR.
- Advisory references: [Router navigation](https://github.com/advisories/GHSA-wrjc-x8rr-h8h6), [Router SSR errors](https://github.com/advisories/GHSA-337j-9hxr-rhxg), [braces](https://github.com/advisories/GHSA-vfj7-8cjw-p6xm), [PostCSS](https://github.com/advisories/GHSA-rj75-hqrm-r3gf).

## Release follow-through

The earlier handoff's local-only statement is historical: the implementation and this review are now pushed to the same GitHub branch. Before production release, confirm the hosting project, preserve delivery environment settings and inspect the resulting live routes/forms without sending unapproved test leads. Confirm business-owned claims and use actual publication dates. Google/Bing account tasks and post-release measurement remain separate work.
