import type { Post } from "./types";

export const post: Post = {
  slug: "second-clinic-it-checklist",
  title: "Opening a second clinic: the IT checklist nobody gives you",
  metaTitle: "Opening a Second Clinic: IT Checklist",
  metaDescription:
    "What to sort out before a second practice location opens, in the order it has to happen. Lead times, the decisions that are hard to undo, and what to standardise now.",
  excerpt:
    "The internet order is the item that delays openings, and it is the one nobody places early enough. Here is the sequence, working backwards from your open date.",
  date: "2026-09-15",
  category: "healthcare",
  tags: ["Multi-site", "Practice growth", "Planning"],
  relatedServices: ["multi-site", "networking", "managed-it"],
  relatedPosts: ["managed-it-cost-medical-practice", "hipaa-it-checklist-small-practice"],
  body: [
    {
      type: "p",
      text: "A second location is where most practices discover that their first one was never really designed. It grew. Whatever was needed got added, and it works, and nobody could write down how.",
    },
    {
      type: "p",
      text: "That matters now because you are about to either copy it or replace it, and this is the one moment when replacing it is cheap. Here is the sequence, working backwards from the day you want to see patients.",
    },

    { type: "h2", text: "Twelve weeks out: order the internet" },
    {
      type: "p",
      text: "If you take one thing from this, take this. The internet connection is the single most common cause of a delayed opening, and it is almost always because somebody assumed it was a week's job.",
    },
    {
      type: "p",
      text: "For an existing commercial building with service already run to it, a new connection can be quick. For a new build, a unit that has never had business service, or anywhere needing fibre pulled, it can take considerably longer, and the timeline is not under your control or your provider's sales rep's.",
    },
    {
      type: "p",
      text: "Order it the moment the lease is signed. Ask specifically whether the building already has service from that provider, because that is the question that determines whether you are waiting weeks or months. If the answer is uncertain, order a backup option in parallel; paying two install fees is cheaper than delaying an opening.",
    },
    {
      type: "callout",
      title: "While you are on the phone",
      text: "Ask for a static IP if anything at the new site needs to be reachable from your main location, and check whether the service is genuinely business class with a support path, or a residential product being sold into a commercial address. The second one costs less and will let you down at the worst moment.",
    },

    { type: "h2", text: "Ten weeks out: decide what this location actually is" },
    {
      type: "p",
      text: "There is a fork here and it shapes everything else. Is the new site a satellite that depends on the main location, or is it independent?",
    },
    {
      type: "p",
      text: "If your practice management system runs on a server at the first location, the new site will connect back to it, which means a site-to-site VPN, and it means an outage at the main site stops both locations. If you are on cloud software, the sites are independent and each just needs its own connection.",
    },
    {
      type: "p",
      text: "A second location is often the right moment to move off an on-site server, because duplicating that dependency is a decision you live with for years. Worth a conversation before the cabling is designed rather than after.",
    },

    { type: "h2", text: "Eight weeks out: cabling, while the walls are open" },
    {
      type: "p",
      text: "This is the genuinely irreversible one. Pulling cable through a finished building costs several times what it costs before the walls close, and in a leased space you may not be permitted to at all.",
    },
    {
      type: "p",
      text: "Run more than you think you need. A spare drop in each treatment room and two spares to the ceiling in open areas cost almost nothing while the contractor is already there, and they are the difference between adding an access point later in an hour or in a day.",
    },
    {
      type: "ul",
      items: [
        "Every place a fixed machine will sit, plus one spare.",
        "Ceiling positions for access points, planned from the floor plan rather than guessed. An open therapy gym usually needs two or three.",
        "Camera positions, decided now even if the cameras come later.",
        "The printer and copier locations.",
        "A proper spot for the equipment: a small rack or a wall-mounted cabinet, somewhere ventilated and lockable, not a shelf in a cupboard with no airflow.",
      ],
    },
    {
      type: "p",
      text: "For a practice, the lockable part is not optional. Network equipment that anyone can reach is a physical access problem as much as a technical one.",
    },

    { type: "h2", text: "Six weeks out: order hardware and licences" },
    {
      type: "p",
      text: "Standardise on whatever the first location uses, or take this opportunity to standardise both. The point is that two locations running different equipment means every future change is done twice, differently, with two sets of quirks to remember.",
    },
    {
      type: "p",
      text: "Order the workstations now too. Lead times on business machines fluctuate and a practice waiting on laptops during opening week is a practice whose staff cannot train on the system.",
    },

    { type: "h2", text: "Four weeks out: accounts, access and the boring half" },
    {
      type: "p",
      text: "This is where practices lose time because it feels administrative rather than technical.",
    },
    {
      type: "ul",
      items: [
        "New staff need accounts, mailboxes, multi-factor set up and role-appropriate access. Not everyone gets administrator rights because it was faster on the day.",
        "Your practice management vendor needs to know about the new location, and often needs to configure it their end. Ask them early what their lead time is; it is frequently longer than expected.",
        "Billing, clearinghouse and any referral portals may need the new site registered.",
        "Phone numbers. If the new site needs its own, porting or provisioning takes time.",
        "Update your documentation: the network diagram, the equipment inventory, who has access to what.",
      ],
    },

    { type: "h2", text: "Two weeks out: build it and test it properly" },
    {
      type: "p",
      text: "Equipment goes in, gets configured, and then somebody actually uses it before patients do.",
    },
    {
      type: "p",
      text: "Testing means walking the building with a tablet and confirming the Wi-Fi holds across the whole floor, not standing next to the access point and seeing full bars. It means logging into the practice management system from the new site and doing a real task. It means printing something. It means confirming the card terminal works.",
    },
    {
      type: "p",
      text: "Run a full day of pretend operation a week before opening. Everything that is going to be wrong will be wrong that day instead of on the day patients arrive.",
    },

    { type: "h2", text: "The thing that makes the third location easy" },
    {
      type: "p",
      text: "Write down what you did. The equipment list, the configuration, the cabling layout, the vendor lead times, what went wrong and what you would change.",
    },
    {
      type: "p",
      text: "That document turns your third opening from a project into a checklist. Practices that have it open new sites in days. Practices that do not start from scratch every time, because the knowledge was in somebody's head and that person is busy.",
    },
    {
      type: "callout",
      title: "Planning a second location?",
      text: "We do this regularly and the timeline above is where most of the risk sits. Talk to us before the cabling is designed, which is the point where decisions get expensive to reverse. Free assessment, no obligation. Call (662) 539-7787.",
    },
  ],
};
