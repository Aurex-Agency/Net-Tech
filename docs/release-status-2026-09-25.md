# Net-Tech implementation status: September 25, 2026

The website improvements are implemented. This is a release record, not a claim that the full 90-day growth program or all external dependencies are complete.

## Implemented

- Commercial-only positioning, a 100-mile New Albany service-area page, priority internal links, service-specific assessment links, and clearer scope and travel wording.
- Owner Brian Adair and owner-confirmed Ubiquiti installer certification. No certification tier, accreditation number, project results or testimonial has been invented.
- Contact form now collects business, city and service interest; phone is optional. Existing-client support remains separate.
- Server-side Resend notifications, fixed sender and recipient, validation, origin checks, best-effort rate limiting, retry idempotency and honest error handling. Credentials stay server-side.
- GA4 accepted-inquiry key event, explicit form start, call/email intent, separate support event and service/audience custom dimensions. Automatic form interactions were disabled to avoid competing form measurements. Existing enhanced pageviews remain enabled.
- Six existing buyer guides revised, including official source links where relevant, explicit update dates and better paths to services and assessments.
- Updated organization/person information, verified public profile link, sitemap and factual llms.txt. Sitemap lastmod uses maintained dates instead of changing on every build.
- Visible server-rendered sections, immediate hero content, improved logo sizing and responsive navigation, and stronger contrast for homepage numbered labels.
- Privacy notice and operational handoff documents updated.

## Confirmed email delivery

All records below were submitted through live website forms to brian@nettech.ms. Resend displayed Delivered. This confirms recipient mail-server acceptance, not inbox placement or that Brian read the message.

| Test | Resend email ID | Result |
| --- | --- | --- |
| Contact, 3:35 PM CDT | 01a0da47-e533-70b1-9cf0-4ea4fc9ddc86 | Delivered |
| Support, 3:36 PM CDT | 01a0da48-921b-76b9-9741-d448c43caebd | Delivered |
| Revised commercial contact, 3:51 PM CDT | 01a0da56-2995-74be-be36-40d9ec6a0779 | Delivered |

The last contact test used networking, company and city fields with no phone. GA4 DebugView showed one consultation_request_start and one generate_lead; its lead_id matched the delivered Resend record. Tests were labeled as internal tests requiring no callback or dispatch. Sender and Reply-To were verified as team@support.nettech.ms and brian@nettech.ms respectively.

## Verification

- Production build and TypeScript check passed. All 23 tests passed; lint reported zero errors and two existing fast-refresh warnings.
- Live crawl: 30 sitemap URLs returned 200, one H1, self-canonical, valid JSON-LD and no noindex. Support utilities remain noindex; an unknown route returns 404.
- Google live inspection confirmed managed IT is available for indexing. Google accepted indexing requests for managed IT and the new service-area page. A request is not a confirmed index entry.
- Initial release PageSpeed run: mobile 80, LCP 4.7 seconds, CLS 0; desktop 100, LCP 0.5 seconds, CLS 0. No field data was available. Report: https://pagespeed.web.dev/analysis/https-nettech-ms/noclv32nd4 . This run preceded the final hero, contrast and logo sizing adjustments. Mobile performance remains an area to measure and improve.

## Dependencies and remaining work

1. Google Business Profile: access pending from the owner. Prepared description, services, service areas and HTTPS tracking link are in local-profile-and-evidence.md. Old 621 Highland St listing is confirmed historical; ownership recovery and duplicate resolution still need account access and Google's process.
2. Durable sales intake: no sales CRM or durable storage service has been selected or supplied. Email works, but it is not a durable CRM/outbox. Automatic failed-CRM retries, cross-device duplicate protection, pipeline reporting and reconciliation require this connection. Existing support webhook forwarding remains, but a created CRM ticket was not verified inside its destination.
3. Business proof: approved project photos, customer permissions, testimonials and two factual case studies are still needed. Additional city pages remain conditional on useful local evidence, not merely town-name substitution.
4. Commercial terms: Brian has not set travel terms. The site asks customers to confirm scope and travel charges before approving work; it publishes no invented price or arrival guarantee. Verify the exact certification title before adding a badge or specific credential tier.
5. Measurement: evaluate processed GA4 reports after data arrives, reconcile real inquiries against Brian's private pipeline, and build source-to-won-customer reporting after CRM selection. Debug tests are validation, not sales leads. No growth or ranking improvement has yet been established.
6. Ongoing work: weekly index and lead-quality reviews, monthly content improvements and consistent AI visibility checks are future work over the approved 90-day program. See measurement-review.md. No autonomous recurring schedule has been configured.

A broad production-log request was rejected by automatic approval review because it could expose unrelated submission data. Verification continued successfully using a query limited to the authorized test email ID.
