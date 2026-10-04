# Organic growth rollout: October 3, 2026

## Implemented in this PR

- Four complete buyer guides: commercial camera costs, managed IT vs. break-fix, warehouse Wi-Fi planning and backup internet.
- Accessible comparison tables, visible source links, truthful organization authorship and existing BlogPosting markup. No fabricated review by Brian, client results, prices or photos.
- Homepage and service-page guide links. Article CTAs preserve the relevant service through the contact form, including the closing CTA.
- Commercial buyer-fit and scope sections for managed IT, networking and security cameras. Contact guidance changes with the selected service.
- Removed contradictory free assessment/site-visit promises. No new promise of a free 20-minute consultation or written diagnostic report without confirmed terms.
- Sitemap and existing informational llms.txt updated; accurate modified dates for changed content. Search crawler access remains allowed. Training permission is not represented as a ranking mechanism.

## Baseline read October 3

GA4 September 5–October 2: 206 sessions, 4 Organic Search sessions, 0 organic key events. Support-form landings: 92. The one overall key event is not a verified customer lead; the prior release included an internal generate_lead test.

GA4 September 26–October 2: 59 sessions, 1 organic session, 0 key events.

GSC Web, 28-day selector with available September 14–29 data: 240 impressions, 2 clicks, 0.8% CTR, average position 16.6. Camera service page: 40 impressions, 0 clicks. Generative AI report: 9 impressions, not visits or leads.

Managed IT URL inspection: discovered, not indexed; live test passed. Camera service URL: indexed. The aggregate indexing report is dated September 20 and must not be described as a fresh sitewide count. Sitemap read September 30: successful, 30 URLs before this PR.

## After merging and deploying

Pre-PR validation: production build and TypeScript check passed; 25 tests passed; lint has zero errors and two existing fast-refresh warnings. Static output checked across all 34 sitemap URLs for one H1, self-canonical, indexability, JSON-LD and local link destinations. Both support utility pages remain noindex. Browser verification at 390px confirmed contained table scrolling and no page overflow; the camera article CTA preserved the selected service on the contact form. No live ranking, fresh mobile LCP or delivery improvement is claimed.

1. Confirm all four new URLs return 200 on nettech.ms, with rendered body, one H1, self-canonical and valid BlogPosting JSON-LD. Confirm the sitemap has 34 canonical indexable routes; support utilities remain noindex.
2. Inspect homepage, managed IT, networking, cameras, healthcare, New Albany, Tupelo, Oxford and service area in GSC. Record last crawl, selected canonical and index status. Request indexing once for materially changed/new priority pages; do not report requests as successful indexing.
3. Check HTTP-to-HTTPS and tracked-URL canonical consolidation. Historical HTTP/UTM impressions alone do not establish a present defect.
4. Run mobile PageSpeed on the deployed revision. The September 25 mobile LCP finding is historical; do not claim a new performance score or improvement without measurement.
5. Validate a clearly labeled internal inquiry only if delivery code or hosting changes. Existing Resend delivery was verified September 25; this PR does not change delivery code or send new test emails. Exclude internal tests from sales counts.

## Business actions and dependencies

These cannot be manufactured or completed by a GitHub code change:

- Brian supplies two approved project stories and permissioned photos: problem, general location, equipment/scope, documented outcome and consent. Publish only after factual review.
- Confirm exact certification wording, assessment terms, response commitment and travel terms. The site uses neutral inquiry language until then.
- GBP main category, commercial description, Main Street address, tracked website URL and service areas were verified again on October 3. All five commercial services are listed with no pending-review notice. The historical 621 Highland listing still needs ownership/duplicate resolution; an old address and phone also appear at https://www.merchantcircle.com/ms-new-albany/electronics/computer-repair. No recovery request or directory correction has been submitted. Do not create a new duplicate profile or claim ownership recovery succeeded without confirmation.
- Review UCDA, CDF and Oxford chamber eligibility/membership costs before signing up. Request genuine partner mentions; no bulk paid links.
- Request honest reviews after completed work, consistently and without incentives or selective gating. No customer requests were sent by this PR.
- Select a private CRM or use the provided empty lead-register CSV outside the public repository. Never commit customer records, email bodies or credentials. Assign an owner and next action to every real lead.

## Review cadence

Use rolling 28-day counts, segmented into commercial in-area queries, consumer repair queries and out-of-area queries. Measure accepted inquiries, qualified opportunities, quotes, wins and value. Support visits and call/email clicks are not confirmed sales leads.

Day 30: priority index review and scope pages. Day 60: assess article indexing and collect business proof. Day 90: compare relevant clicks, qualified inquiries and pipeline; invest further in the service/city combinations that generate profitable work.

AI monitoring: record exact prompt, date, engine, location context, whether web search ran and cited URLs. Keep Google AI impressions, AI referral sessions and qualified leads separate. Follow docs/measurement-review.md for the existing prompt protocol.
