import type { Post } from "./types";

export const post: Post = {
  slug: "managed-it-cost-medical-practice",
  title: "What managed IT actually costs a medical practice",
  metaTitle: "Managed IT Cost for a Medical Practice",
  metaDescription:
    "What drives the price of managed IT for a clinic or rehab practice, what is usually included, and how to tell whether a quote is fair. No rate card, real numbers behind the number.",
  excerpt:
    "Nobody publishes a price because the honest answer depends on six things. Here are all six, so you can estimate your own before you call anyone.",
  date: "2026-09-15",
  category: "cost",
  tags: ["Pricing", "Managed IT", "Healthcare"],
  relatedServices: ["managed-it", "cloud"],
  relatedPosts: ["hipaa-it-checklist-small-practice", "second-clinic-it-checklist"],
  body: [
    {
      type: "p",
      text: "Search for what managed IT costs and you get ranges so wide they are useless, usually from national aggregators who have never seen a practice in Mississippi. The reason nobody gives you a number is that the number genuinely depends on your situation, not because everyone is hiding something.",
    },
    {
      type: "p",
      text: "What we can do is show you exactly what goes into it, so you can work out roughly where you land and tell whether a quote you have been given is reasonable.",
    },

    { type: "h2", text: "How managed IT is normally priced" },
    {
      type: "p",
      text: "Almost every provider uses one of two models, and the difference matters more than it looks.",
    },
    {
      type: "p",
      text: "Per user means you pay for each person, and their laptop, their desktop, their phone and their tablet are all covered. Per device means you pay for each piece of equipment. A practice where every therapist has one laptop looks similar under both. A practice where clinicians use a laptop, a shared workstation and a tablet on a cart looks very different, and per user will usually be cheaper.",
    },
    {
      type: "p",
      text: "When you compare quotes, check which model each is using before you compare the numbers. We have seen practices pick the cheaper-looking quote and end up paying more because it was priced per device and they had not counted the devices.",
    },

    { type: "h2", text: "The six things that move the price" },

    { type: "h3", text: "1. How many people and how many devices" },
    {
      type: "p",
      text: "The biggest single factor, and the easiest for you to count. Be honest about the tablets and the shared machines at the front desk; they need patching and monitoring like anything else.",
    },

    { type: "h3", text: "2. Whether you run a server" },
    {
      type: "p",
      text: "A practice running everything in cloud software costs meaningfully less to support than one with a server in a cupboard. A server needs monitoring, patching, backup, a UPS, and somebody to care about its drives and its temperature. It is also the single point whose failure stops the practice.",
    },
    {
      type: "p",
      text: "If you have an ageing server running one piece of specialist software, that is worth a separate conversation. It is often both the largest ongoing cost and the largest risk you are carrying.",
    },

    { type: "h3", text: "3. Compliance obligations" },
    {
      type: "p",
      text: "This is the line that makes healthcare different from a retail business of the same size. The technical work is not dramatically harder, but the documentation, access control, audit trails and tested restores all take real time, and they have to be maintained rather than done once.",
    },
    {
      type: "p",
      text: "Expect a practice to sit somewhat above a general business of the same headcount for this reason. A provider quoting you the same as a five-person insurance office either has not understood the requirements or is not planning to meet them.",
    },

    { type: "h3", text: "4. How many locations" },
    {
      type: "p",
      text: "Each site adds equipment and its own internet connection. The per-site cost drops once sites are standardised, which is the main argument for standardising them.",
    },

    { type: "h3", text: "5. The state of what you have now" },
    {
      type: "p",
      text: "Taking over a well-documented setup is straightforward. Taking over one where nobody knows the passwords, there is no network diagram and the last provider left abruptly involves a discovery phase.",
    },
    {
      type: "p",
      text: "That should be quoted separately and charged once, not folded into your monthly fee forever. Ask about it explicitly.",
    },

    { type: "h3", text: "6. What response you actually need" },
    {
      type: "p",
      text: "Same-business-day remote support is the normal standard. Guaranteed after-hours cover is a different plan at a different price. Most single-location practices do not need it; a practice with evening clinics might.",
    },

    { type: "h2", text: "What should be included, and what usually is not" },
    {
      type: "p",
      text: "A monthly managed fee normally covers the labour: help desk, monitoring, patching, backup management, vendor liaison, and an agreed level of on-site visits. It does not normally cover hardware you buy, software licences, or large projects like a network rebuild or an office move.",
    },
    {
      type: "p",
      text: "Watch for three things when reading a proposal:",
    },
    {
      type: "ul",
      items: [
        "Whether on-site visits are included or billed separately, and how many. Unlimited remote with billed on-site is common and fine, as long as you know.",
        "Whether the backup is included or a separate line. Backup that is an optional add-on tends to become an optional add-on that nobody bought.",
        "Whether Microsoft 365 licences are being resold to you at a margin, and what that margin is. Resale is normal; not telling you is not.",
      ],
    },

    { type: "h2", text: "The comparison nobody does properly" },
    {
      type: "p",
      text: "Practices usually compare a monthly fee against zero, because right now they only pay when something breaks. That is the wrong comparison, because it ignores what breaking actually costs a clinic.",
    },
    {
      type: "p",
      text: "Work out your own figure. Take a morning of appointments, and what those appointments are worth. That is roughly the cost of one bad outage where nobody can check patients in. Now count how many of those you had last year, and add the hourly call-out invoices on top, and the staff time spent on hold with a vendor.",
    },
    {
      type: "p",
      text: "For most practices the arithmetic comes out clearly on one side, and it becomes obvious which side. For a very small practice, sometimes it does not, and we will tell you that rather than sell you a plan you do not need.",
    },

    { type: "h2", text: "When managed IT is not worth it yet" },
    {
      type: "p",
      text: "Below about five machines, with no server and everything in cloud software, most businesses are genuinely better served by as-needed support. We say so when we see it. A practice at that size usually has two or three IT events a year, and paying monthly against that is poor value.",
    },
    {
      type: "p",
      text: "The line moves once you add a server, a second location, staff turnover that needs onboarding and offboarding, or compliance obligations. Any one of those changes the answer.",
    },
    {
      type: "callout",
      title: "Get an actual number",
      text: "Describe your practice in two minutes on the phone and we will give you a range. Or book a free assessment and get a fixed quote with no obligation. Plenty of practices use ours to confirm their current provider is doing fine. Call (662) 539-7787.",
    },
  ],
};
