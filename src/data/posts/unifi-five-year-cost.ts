import type { Post } from "./types";

export const post: Post = {
  slug: "unifi-five-year-cost",
  title: "Subscription networking and what it costs you over five years",
  metaTitle: "UniFi vs Subscription Networking: 5-Year Cost",
  metaDescription:
    "Most business networking vendors licence the right to keep using equipment you already bought. What that model costs a small clinic or office over five years, and when it is worth it.",
  excerpt:
    "The hardware quote is the part everyone compares. The licence renewal is the part that decides what the network actually costs, and it does not appear until year two.",
  date: "2026-09-15",
  category: "cost",
  tags: ["Ubiquiti", "Networking", "Pricing"],
  relatedServices: ["networking", "multi-site"],
  relatedPosts: ["clinic-wifi-drops-treatment-rooms", "managed-it-cost-medical-practice"],
  body: [
    {
      type: "p",
      text: "When a business gets quotes for a new network, the comparison is almost always on the hardware. Two vendors, two lists of access points and a switch, two totals. One is a bit cheaper and that is the one that wins.",
    },
    {
      type: "p",
      text: "The thing that comparison misses is that several major vendors do not sell you equipment in the way you assume. They sell you the equipment and then licence you the right to keep using its features, annually, per device, indefinitely. Let the licence lapse and capability degrades or the management interface stops working, on hardware you already own.",
    },
    {
      type: "p",
      text: "We are not going to pretend that model is illegitimate. It funds ongoing development and some organisations genuinely get value from it. But you should know which model you are buying into before you sign, because over an equipment lifetime the difference is not marginal.",
    },

    { type: "h2", text: "Run the arithmetic on your own situation" },
    {
      type: "p",
      text: "You do not need our numbers. Take whatever quote is in front of you and work this out.",
    },
    {
      type: "ol",
      items: [
        "Count the devices that carry a licence. Usually every access point, every switch and the gateway or firewall.",
        "Find the annual licence cost per device. It is often quoted as a three or five year term up front, so divide back out to a yearly figure.",
        "Multiply by your device count, then by five, which is a realistic life for this class of equipment.",
        "Add that to the hardware cost. That is the real five-year number.",
        "Now do the same with a licence-free option: hardware cost, and nothing recurring.",
      ],
    },
    {
      type: "p",
      text: "For a small office with a gateway, a switch and three access points, the recurring side often lands somewhere in the region of the hardware cost again over five years. For a therapy clinic with a larger floor needing six or eight access points, it can exceed it. That is money that could have bought better access points in the first place.",
    },
    {
      type: "callout",
      title: "The question to ask any vendor",
      text: "What happens to this equipment if I stop paying? A straight answer tells you everything. If features disable, the management console locks, or support and firmware updates stop, you are renting. That may still be the right call, but you should be choosing it deliberately.",
    },

    { type: "h2", text: "Why we standardised on Ubiquiti" },
    {
      type: "p",
      text: "Two reasons, and the licensing one is the larger.",
    },
    {
      type: "p",
      text: "You buy the hardware and the management software is free for the life of the equipment. No per-device annual fee, no tier that expires, no console that stops working. For a ten-person business in New Albany that difference compounds into real money across an equipment cycle.",
    },
    {
      type: "p",
      text: "The second reason is that network, Wi-Fi, cameras and door access all live in one interface. That sounds like a convenience and it turns into an economic argument once you have more than one site, because a firmware update or a policy change goes out everywhere at once rather than site by site.",
    },

    { type: "h2", text: "Where the subscription vendors genuinely win" },
    {
      type: "p",
      text: "It would be dishonest to leave this out, and if a vendor has told you any of the following, they are not wrong.",
    },
    {
      type: "ul",
      items: [
        "At large scale, with hundreds of sites and a dedicated network team, the tooling and support contracts around the big subscription platforms are more mature.",
        "Some regulated environments and some insurance requirements specify particular vendors or certifications, and that decision has been made for you.",
        "If your organisation values a vendor support contract with a guaranteed response over a local provider who answers the phone, that is a real preference and the subscription vendors sell it well.",
        "Certain advanced features, particularly in large wireless deployments and specialist security analytics, are genuinely more developed on the enterprise platforms.",
      ],
    },
    {
      type: "p",
      text: "None of those usually apply to a single-location practice or a business with two or three sites in North Mississippi, which is who we work with. If they apply to you, we will say so.",
    },

    { type: "h2", text: "The other recurring cost, which is the same argument" },
    {
      type: "p",
      text: "Camera systems work the same way and the maths is even starker, because cloud camera storage is charged per camera per month and cameras multiply.",
    },
    {
      type: "p",
      text: "A cloud system is cheaper on day one, charges forever, usually limits how far back you can look on the lower tiers, and takes the footage with it if you stop paying. Recording to a device on your own property has no recurring fee, keeps the footage under your control, and still gives you remote viewing from a phone. For a practice holding footage that may contain patients, the control question matters as much as the cost one.",
    },

    { type: "h2", text: "What we would actually tell you" },
    {
      type: "p",
      text: "Do the five-year arithmetic before you sign anything, on both options. Ask the lapse question. And weigh the recurring figure against what else that money buys, because in most small-business installs it buys noticeably better coverage.",
    },
    {
      type: "p",
      text: "If the numbers come out in favour of the subscription platform for your situation, take it. We would rather you made the decision with the whole cost visible than discover the renewal in year two.",
    },
    {
      type: "callout",
      title: "Want the numbers for your building?",
      text: "We will survey the space, tell you how many access points it actually needs, and give you a fixed quote with no recurring licence attached. Free assessment, no obligation. Call (662) 539-7787.",
    },
  ],
};
