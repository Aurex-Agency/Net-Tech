# Net-Tech lead operations

Owner: Brian Adair. New website inquiries and support notifications go to brian@nettech.ms. Sender: team@support.nettech.ms (sending only). Reply-To: brian@nettech.ms. Customer contact details are included in the notification body.

## Intake and delivery

The website validates a submission and sends it through Resend before showing success. Resend's accepted message ID is the inquiry reference. Provider acceptance is not final delivery: use the Resend record to check Delivered, Bounced, Delayed or Failed. A Delivered status confirms acceptance by the recipient's mail server, not inbox placement or that someone read it.

Support also forwards to the existing LeadConnector webhook. CRM failures are logged as `crm_forward_failed_email_accepted`; the email still reaches the intake owner. CRM forwarding is not a guaranteed durable sales pipeline. A sales CRM and its access have not been supplied. Until connected, Brian must record business inquiries and follow-up in the business's chosen lead register. Do not treat the support workflow as the sales pipeline.

Resend deduplicates unchanged request retries using a 24-hour idempotency key. The browser retains the key during an unchanged retry. This does not provide a permanent lead database, cross-device deduplication, automatic CRM retry queue or a service-level guarantee. A durable CRM/outbox remains a separate dependency.

## Lead register fields

Record: received date, submission/email ID, business, contact, service interest, business city, landing path, referring site, campaign tags, sales owner, first-response time, next follow-up date, stage, assessment date, quote amount, outcome, and reason lost. Keep contact information in the private register, never GA4.

Stages: New inquiry -> Contacted -> Qualified commercial opportunity -> Assessment scheduled -> Quote sent -> Won / Lost / Not a fit. Support requests stay separate. Brian sets response expectations according to staffing; the website promises no unconfirmed response deadline.

## Weekly review

1. Reconcile accepted contact emails against the lead register and Resend delivery outcomes. Resolve bounces and failed submissions before promoting the site.
2. Review qualified opportunities by service, city and source. Exclude labeled delivery tests and existing-client support from sales results.
3. Review GA4 generate_lead, form starts, call intent and email intent. Clicks do not prove connected conversations.
4. Check GSC index status for managed IT, networking, healthcare, New Albany, Tupelo, Oxford and service-area pages. Record dates rather than assuming an indexing request succeeded.
5. Check follow-up ownership and next actions for every open inquiry.

## Analytics implementation

GA4 property 554578221, stream 15785183976, measurement ID G-81YTRTKY6S.

- generate_lead: accepted contact inquiry, one event per accepted email ID in the browser session. Marked a GA4 key event, once per event, no default monetary value.
- consultation_request_start: first contact-form change.
- support_request: accepted support inquiry; not a sales key event.
- click_to_call / click_email: link intent only, with page path and placement.
- Pageviews: existing GA4 enhanced measurement for page loads and browser history changes. No second React pageview sender.
- Automatic form interactions disabled in GA4 in favor of explicit form-start/accepted events.

Custom events contain no name, address, email, telephone number or message body. source/medium/campaign and landing path accompany the private inquiry. Privacy policy documents Vercel, Resend, support CRM and analytics processing.

## Honest review request template

For Brian to send consistently to eligible customers after completed work, without incentives or asking only happy customers:

“Thank you for choosing Net-Tech. If you would like to share your experience, please leave an honest Google review: https://maps.app.goo.gl/CABAMead1gLyrdSV6. Your feedback helps other local businesses understand our service.”

No review requests were sent during this implementation.
