import type { Post } from "./types";

export const post: Post = {
  slug: "microsoft-365-migration-practice",
  title: "Moving a practice to Microsoft 365 without breaking anything",
  metaTitle: "Microsoft 365 Migration for a Medical Practice",
  metaDescription:
    "How to move a clinic's email to Microsoft 365 without downtime, what has to be configured afterwards for a healthcare practice, and the backup gap nobody mentions.",
  excerpt:
    "Email is the one system a practice genuinely cannot be without for a day. Here is how the move is planned, and the three things that get skipped afterwards.",
  date: "2026-09-15",
  category: "cloud",
  tags: ["Microsoft 365", "Email", "Healthcare"],
  relatedServices: ["cloud", "managed-it"],
  relatedPosts: ["hipaa-it-checklist-small-practice", "ransomware-monday-morning"],
  body: [
    {
      type: "p",
      text: "Most practices move to Microsoft 365 for a good reason: an ageing mail server in a cupboard is both the largest security exposure and the largest single hardware risk a small practice tends to carry. When that box dies, email stops, and email stopping is not survivable for a day.",
    },
    {
      type: "p",
      text: "The move itself is routine when planned and genuinely painful when not. Two things go wrong, and they go wrong in different places.",
    },

    { type: "h2", text: "Part one: moving without losing a morning" },

    { type: "h3", text: "Work out what actually has to move" },
    {
      type: "p",
      text: "This is the step that gets rushed. Before anything else, inventory the lot: every mailbox and its size, shared mailboxes like info@ or billing@, resource calendars for rooms and equipment, distribution lists, contacts, any public folders, and the file shares with their permissions.",
    },
    {
      type: "p",
      text: "Practices are always surprised by something here. A referrals mailbox nobody has logged into since 2019 but which still receives. A calendar the front desk relies on that nobody realised was attached to a departed employee's account.",
    },

    { type: "h3", text: "Pick an approach that suits the size" },
    {
      type: "p",
      text: "A small practice with a handful of mailboxes can usually move in a single cutover over a weekend: everything copies across, mail flow switches on Saturday, Monday morning is on the new system. Simple, and there is one moment of risk.",
    },
    {
      type: "p",
      text: "A larger practice moves in batches, a few users at a time, so there is never a point where the whole organisation is mid-migration. It takes longer and each individual step is lower risk.",
    },
    {
      type: "p",
      text: "Either way there is a pilot group first: two or three people who are comfortable telling you when something is odd, moved a week ahead of everyone else.",
    },

    { type: "h3", text: "The part that causes the visible failures" },
    {
      type: "p",
      text: "Mail routing is controlled by DNS records, and DNS changes take time to propagate. The mistake is flipping the record before mailboxes have finished syncing, which sends new mail to a destination that is not ready for it.",
    },
    {
      type: "p",
      text: "The old system stays reachable and able to receive until the new one is verified. Then mail flow cuts over deliberately. Then the old system stays running, silent, for a couple of weeks, because that is when you find the scanner that was configured to send through it in 2018 and that nobody remembered.",
    },
    {
      type: "callout",
      title: "The scanner problem",
      text: "Almost every practice has at least one device that sends email: a copier that scans to email, a practice management system that sends appointment reminders, a fax gateway. These authenticate against the old mail server and they break silently. Make a list before you migrate, not after someone notices reminders stopped going out.",
    },

    { type: "h2", text: "Part two: the configuration that gets skipped" },
    {
      type: "p",
      text: "The migration works, everyone gets their mail, and the project is declared finished. This is where most practices stop, and it is the point at which three things should happen and usually do not.",
    },

    { type: "h3", text: "1. Multi-factor authentication, on everybody" },
    {
      type: "p",
      text: "This is the single highest-value thing available to a small practice and it gets deferred because it feels like friction. Configured sensibly it is one approval on a trusted device, not a prompt every hour.",
    },
    {
      type: "p",
      text: "The thing to understand is what it prevents. Business email compromise, where somebody gets into a mailbox and quietly watches, is one of the more expensive events that happens to small organisations. The attacker reads the mail, learns how invoices are handled, and at the right moment sends a convincing message redirecting a payment. A stolen password alone is enough for that. A stolen password plus MFA usually is not.",
    },

    { type: "h3", text: "2. Alerting on the fingerprints of a compromise" },
    {
      type: "p",
      text: "The tell for the attack above is a mailbox rule: one that quietly forwards incoming mail to an outside address, or files certain messages straight into a folder nobody checks so the real invoice is never seen.",
    },
    {
      type: "p",
      text: "Microsoft 365 can alert when such a rule is created. It is off by default. Switching it on takes minutes and is the difference between noticing in an hour and noticing when a payment goes missing.",
    },

    { type: "h3", text: "3. Backup, which Microsoft does not do for you in the way people assume" },
    {
      type: "p",
      text: "This is the most common misunderstanding in the entire subject, and it is worth being precise about.",
    },
    {
      type: "p",
      text: "Microsoft runs the service and keeps it available. They are explicit in their own documentation that protecting your data within it is your responsibility. There is limited retention: a deleted item sits in a recoverable folder for a period, and then it does not.",
    },
    {
      type: "p",
      text: "So if a staff member deletes a folder and nobody notices for three months, or a departing employee empties their own mailbox, or ransomware encrypts a synced document library, the platform's own recovery window may well have closed. Independent backup of cloud mail and files closes that gap, and for a practice with retention obligations it is not optional.",
    },

    { type: "h2", text: "What healthcare practices specifically need to sort out" },
    {
      type: "p",
      text: "Beyond the above, there are a few items particular to a practice.",
    },
    {
      type: "ul",
      items: [
        "A Business Associate Agreement with Microsoft, which is available and which somebody needs to actually have accepted rather than assumed.",
        "A decision about how anything containing patient information is sent. Either an encryption mechanism on the platform, a portal, or a clear policy that it does not go by email at all. Pick one deliberately.",
        "Audit logging turned on and its retention understood, so there is a trail if anyone asks.",
        "Licence review. Practices routinely pay for a higher tier than they use, or for seats belonging to people who left. It is common for this to fund a meaningful share of the migration itself.",
      ],
    },

    { type: "h2", text: "Microsoft 365 or Google Workspace" },
    {
      type: "p",
      text: "Usually whichever your clinical software expects. Practice management, billing and imaging vendors overwhelmingly build around Office formats and Outlook, and fighting that costs more than it saves. If your team already lives in Google tools and your clinical vendors are happy, moving them has a real cost and little benefit.",
    },
    {
      type: "p",
      text: "We have no preference to sell you. We will ask what your software expects and recommend the one that causes fewer arguments.",
    },
    {
      type: "callout",
      title: "Thinking about moving?",
      text: "We will look at what you have, inventory what needs to move, and give you a fixed quote for the migration. Free assessment, no obligation, and no contract required to get a number. Call (662) 539-7787.",
    },
  ],
};
