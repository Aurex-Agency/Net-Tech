/**
 * Site-wide FAQ content.
 *
 * Written as plain visible copy with no FAQPage markup: Google retired FAQ
 * rich results for all sites in May 2026, so the schema buys nothing, while
 * the content still earns its place for long-tail search and for the way
 * people phrase questions to assistants.
 */

export interface FaqGroup {
  id: string;
  title: string;
  items: { q: string; a: string }[];
}

export const faqGroups: FaqGroup[] = [
  {
    id: "working-together",
    title: "Working with Net-Tech",
    items: [
      {
        q: "Do you require a long-term contract?",
        a: "No. You do not need a contract to get an assessment or a quote, and managed plans are built to be worth renewing rather than difficult to leave.",
      },
      {
        q: "What are your hours?",
        a: "Monday to Friday, 8am to 5pm. Tickets submitted outside those hours are picked up first thing the next business morning, so if something is stopping you working, call rather than filling in the form.",
      },
      {
        q: "How fast do you respond?",
        a: "Most issues are picked up the same business day and handled remotely, often within the hour. Anything that stops your business running should come by phone rather than the ticket form, so it reaches a technician immediately.",
      },
      {
        q: "Are you actually local?",
        a: "Yes. We are at 112 W Main St in New Albany, locally owned and locally staffed. The phone is answered here, not by a call centre.",
      },
      {
        q: "What areas do you cover?",
        a: "New Albany and Union County are home. We work regularly across North Mississippi, including Tupelo, Oxford, Pontotoc, Ripley, Booneville, Baldwyn and Corinth.",
      },
      {
        q: "Can you take over from our current IT provider?",
        a: "Yes, and it is common. The first step is documenting what you actually have, since that knowledge often leaves with the outgoing provider. We handle the transition so you are not caught between two companies.",
      },
      {
        q: "What size business do you work with?",
        a: "Mostly small and mid-sized businesses, from a handful of computers up to multi-location operations. If you are smaller than makes sense for a managed plan, we will say so and offer as-needed support instead.",
      },
    ],
  },
  {
    id: "cost",
    title: "Cost and billing",
    items: [
      {
        q: "How much does managed IT cost?",
        a: "It depends on how many people and devices you have, whether you run servers, how many locations you operate and what compliance obligations you carry. We price it as one flat monthly fee after a free assessment. The pricing page explains what moves the number.",
      },
      {
        q: "Is the assessment really free?",
        a: "Yes, and it carries no obligation. We will look at what you have, tell you what we would change and give you a straightforward quote.",
      },
      {
        q: "Will I get surprise invoices?",
        a: "Project work is a fixed quote agreed before anything starts. Managed plans are a flat monthly fee. Work outside a plan is agreed with you first.",
      },
      {
        q: "Do you charge a monthly fee per camera or access point?",
        a: "No. We build on Ubiquiti specifically because it has no per-device licence fee, and camera footage records on your own property rather than to a paid cloud tier.",
      },
    ],
  },
  {
    id: "technical",
    title: "Technical questions",
    items: [
      {
        q: "Why do you use Ubiquiti rather than other brands?",
        a: "Two reasons. There is no recurring per-device licence, so the cost stops at the hardware. And network, Wi-Fi, cameras and door access all live in one interface, which is what makes managing several sites practical.",
      },
      {
        q: "Our Wi-Fi is slow. Do we need faster internet?",
        a: "Usually not. Slow Wi-Fi is far more often about access point placement, density and channel planning inside the building than about the connection coming into it. Paying an ISP for more bandwidth rarely fixes it.",
      },
      {
        q: "Is Microsoft 365 backing up our email already?",
        a: "Not in the way most people assume. Microsoft keeps the service running and offers limited retention, which is not the same as a backup you can restore from months later. We configure independent backup for exactly that reason.",
      },
      {
        q: "How long will our camera footage be kept?",
        a: "As long as you size the storage for. Two weeks is common for a small site; longer retention just needs more storage, and we will quote both so you can choose.",
      },
      {
        q: "Can we still use our existing equipment?",
        a: "Often, if it is business-grade and not end-of-life. We will keep what is worth keeping and tell you plainly when something costs more in support time than it would cost to replace.",
      },
      {
        q: "Do you handle our internet, phone and copier vendors?",
        a: "Yes. A lot of what feels like an IT problem is a vendor problem. Managed clients call us and we deal with whoever needs dealing with.",
      },
    ],
  },
  {
    id: "security",
    title: "Security and data",
    items: [
      {
        q: "What is the single most useful thing we could do for our security?",
        a: "Turn on multi-factor authentication for every account, everywhere. It is the highest-value change available to a small business and it is included as standard when we set up Microsoft 365 or Google Workspace.",
      },
      {
        q: "We handle patient or client records. Can you support that?",
        a: "Yes. The work is mainly network segmentation, access control, secure email and backups that have actually been test-restored — the things you need to be able to evidence if anyone asks.",
      },
      {
        q: "You would have access to our systems. How is that handled?",
        a: "Access is limited to the technicians working your account, remote sessions need you to start them and read us a code, and access is revoked when someone leaves. If that matters to your industry, ask us and we will walk you through it properly.",
      },
      {
        q: "What happens if we get hit by ransomware?",
        a: "The answer is decided long before it happens, by whether your backups are isolated and whether anyone has tested restoring from them. That is why test restores are part of a managed plan rather than an optional extra.",
      },
    ],
  },
];

export const allFaqCount = faqGroups.reduce((n, g) => n + g.items.length, 0);
