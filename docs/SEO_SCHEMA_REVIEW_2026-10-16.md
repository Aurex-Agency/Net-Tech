# SEO and schema review, 2026-10-16

Removed the undocumented $$ priceRange from the shared ProfessionalService entity. Existing service catalog, local areas, canonical metadata and commercial content remain intact.

Based on the verified Vercel production source `main` at `6b4254d8f774`. Reviewed existing SEO work before making this focused follow-up.

Validation: lint; typecheck; application tests; build; 38-route SEO audit; IndexNow tests. The built-page validator parsed 38 JSON-LD blocks across 40 HTML files using the official Schema.org vocabulary and found no issues in the implemented checks. Representative homepage checks at desktop and mobile widths found no horizontal overflow, with primary conversion paths present. No production lead was submitted.

Remaining dependencies: Confirm business pricing only if a public range is desired. Existing dependency exposure review remains in docs/PRE-MERGE-REVIEW.md.

This PR is independently reviewable. After release, recrawl production and recheck Search Console; local validation does not guarantee Google indexing or rich-result display.
