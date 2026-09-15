/**
 * Pricing content.
 *
 * Deliberately a framework rather than a rate card: the site promises "no
 * surprise bills" in several places, and saying nothing at all about money
 * contradicts that. Explaining what drives cost lets a buyer self-qualify
 * without a sales call, which is the gap this page exists to close.
 *
 * If Net-Tech wants to publish real starting figures, put them in
 * `startingAt` on each model and they will render automatically.
 */

export interface PricingModel {
  name: string;
  who: string;
  how: string;
  includes: string[];
  /** e.g. "from $85 per user / month". Omitted until the owner sets it. */
  startingAt?: string;
  cta: { label: string; to: string };
}

export const pricingModels: PricingModel[] = [
  {
    name: "Managed IT",
    who: "Businesses with roughly five or more computers that would rather not think about IT.",
    how: "A flat monthly fee, priced per user or per device depending on which fits your setup better.",
    includes: [
      "Unlimited remote help desk",
      "Proactive monitoring and patching",
      "Backup configuration and monitoring",
      "Vendor management",
      "On-site visits included at an agreed level",
    ],
    cta: { label: "Get a managed IT quote", to: "/contact" },
  },
  {
    name: "Project work",
    who: "Network installs, camera systems, cabling, Microsoft 365 migrations and office moves.",
    how: "A fixed quote for the job, given after a free on-site assessment. You approve the number before anything starts.",
    includes: [
      "Free assessment and written quote",
      "Hardware quoted at cost plus a stated margin",
      "Labour and configuration included in the figure",
      "A defined scope, so changes are visible",
    ],
    cta: { label: "Book a free assessment", to: "/contact" },
  },
  {
    name: "As-needed support",
    who: "Smaller businesses not yet ready for a monthly agreement, or existing clients with work outside their plan.",
    how: "Billed hourly, in clearly stated increments, with the rate agreed before work begins.",
    includes: [
      "No monthly commitment",
      "Same technicians as managed clients",
      "Credited toward a managed plan if you move to one",
    ],
    cta: { label: "Ask about hourly support", to: "/contact" },
  },
];

export const costDrivers = [
  {
    factor: "How many people and devices",
    detail:
      "The single largest driver. Ten users with one laptop each is a very different job from ten users with a laptop, a tablet and a shared workstation.",
  },
  {
    factor: "Servers and line-of-business software",
    detail:
      "A business running everything in Microsoft 365 costs less to support than one with an on-site server and specialist software that needs vendor coordination.",
  },
  {
    factor: "Number of locations",
    detail:
      "Each site adds equipment and its own internet connection. The per-site cost drops once sites are standardised, which is the point of doing it.",
  },
  {
    factor: "Compliance obligations",
    detail:
      "Handling patient records, card payments or client financial data raises the bar on documentation, access control and retention, and the work that goes with it.",
  },
  {
    factor: "The state of what you have now",
    detail:
      "Taking over a well-documented setup is straightforward. Taking over one nobody has records for includes a discovery phase, which we quote separately and only once.",
  },
  {
    factor: "Response expectations",
    detail:
      "Same-business-day remote support is standard. If you need guaranteed after-hours cover, that is a different plan and we will price it as one.",
  },
];

export const pricingPrinciples = [
  {
    title: "The quote is the price",
    body: "Project work is quoted as a fixed figure after an assessment. If we get the scope wrong, that is our problem, not a change order.",
  },
  {
    title: "No per-device licence fees",
    body: "We build networks on Ubiquiti, which has no recurring per-device charge. What you pay for the hardware is what the hardware costs to keep running.",
  },
  {
    title: "No contract to get a number",
    body: "The assessment and the quote are free and carry no obligation. Plenty of businesses use them to find out their current provider is doing fine.",
  },
  {
    title: "Licensing reviewed, not resold",
    body: "We review what you pay Microsoft or Google against what your team actually uses. It is common for this to reduce a bill rather than grow one.",
  },
];
