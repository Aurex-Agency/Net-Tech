import type { Post } from "./types";

export const post: Post = {
  slug: "ransomware-monday-morning",
  title: "Ransomware hits your practice on a Monday. What happens next?",
  metaTitle: "Ransomware at a Small Practice: Hour by Hour",
  metaDescription:
    "A realistic walkthrough of the first day after ransomware at a small clinic, and the four decisions made months earlier that determine how it ends.",
  excerpt:
    "Nobody can log in. The practice management system shows a ransom note. Whether this is a bad week or an existential event was decided long before this morning.",
  date: "2026-09-15",
  category: "security",
  tags: ["Ransomware", "Backup", "Healthcare"],
  relatedServices: ["managed-it", "cloud", "networking"],
  relatedPosts: ["hipaa-it-checklist-small-practice", "microsoft-365-migration-practice"],
  body: [
    {
      type: "p",
      text: "It is a quarter to eight on a Monday. The first patient is at eight. Nobody can log in, and the screen on the front desk machine is showing a note explaining that your files have been encrypted and giving an address to contact.",
    },
    {
      type: "p",
      text: "This walkthrough is not meant to frighten anyone. It is meant to show you where the decision points are, because almost all of them happened weeks or months before this morning.",
    },

    { type: "h2", text: "The first hour" },
    {
      type: "p",
      text: "The immediate job is containment, and it is counterintuitive: get machines off the network rather than start fixing them. Ransomware spreads laterally, and every minute a machine stays connected is a minute it can reach something else. Pull the network cables, switch off the Wi-Fi at the access points, leave the machines powered on but isolated.",
    },
    {
      type: "p",
      text: "Do not power things down in a hurry. Memory on a running machine can hold information useful for working out what happened and how it got in. This is also the point where you call your IT provider and, for a practice, start the clock on whether this becomes a notifiable event.",
    },
    {
      type: "p",
      text: "Meanwhile somebody needs to deal with eight o'clock. This is where a practice discovers whether it has a paper fallback: a printed schedule for the day, a way to take patient details on paper, a phone number for the answering service. Practices that have thought about this run a degraded but functioning morning. Practices that have not send people home.",
    },

    { type: "h2", text: "The four questions that decide everything" },
    {
      type: "p",
      text: "By mid-morning the situation resolves into four questions, and the answers were all set in advance.",
    },

    { type: "h3", text: "1. Are the backups reachable from the infected network?" },
    {
      type: "p",
      text: "This is the one that matters most. Modern ransomware looks for backups first and encrypts or deletes them, because a victim with good backups does not pay.",
    },
    {
      type: "p",
      text: "A backup drive plugged into the server is not protection. A network share the server can write to is usually not protection either. What survives is a copy the infected network cannot reach and cannot authenticate to: offsite, immutable, or both. If that copy exists, this is a recovery job. If it does not, you are looking at rebuilding from whatever paper and cloud records survive.",
    },

    { type: "h3", text: "2. Has anyone ever restored from them?" },
    {
      type: "p",
      text: "Backup jobs that report success and produce nothing usable are common enough that we treat an untested backup as no backup. The failure modes are mundane: a job that has been silently skipping the database for months, a retention setting that keeps two days instead of two weeks, a restore that works but takes four days because nobody sized the connection.",
    },
    {
      type: "p",
      text: "The time to find that out is a quiet Tuesday, not now.",
    },

    { type: "h3", text: "3. How long does a full restore actually take?" },
    {
      type: "p",
      text: "There is a difference between having a backup and being back at work. Restoring a server, reconnecting workstations, verifying data integrity and getting the practice management software talking to everything again is a day or more of work even when it goes well.",
    },
    {
      type: "p",
      text: "Knowing that number in advance changes what you plan for. A practice that knows recovery is two days can arrange those two days. A practice that assumed it was two hours cannot.",
    },

    { type: "h3", text: "4. What actually got taken?" },
    {
      type: "p",
      text: "Encryption is the visible part. Most ransomware operations now copy data out before encrypting it, precisely so they still have leverage over a victim who can restore.",
    },
    {
      type: "p",
      text: "For a healthcare practice this is the part with the longest tail, because it turns a technical incident into a question about patient information, with notification obligations attached. Working out what left the building requires logs, which is one of the less obvious reasons logging matters.",
    },

    { type: "h2", text: "On paying" },
    {
      type: "p",
      text: "We are not going to tell you what to do, because that is a decision for you, your insurer and your counsel. What we will say is what we have seen: payment does not guarantee a working decryption tool, it does not get the copied data back, and it does not shorten the recovery work by as much as people expect. Decryptors are frequently slow and imperfect.",
    },
    {
      type: "p",
      text: "If you carry cyber insurance, involve them early. Many policies have requirements about how an incident is handled, and breaching those can affect the claim.",
    },

    { type: "h2", text: "What actually prevents most of this" },
    {
      type: "p",
      text: "The interventions that matter are unglamorous and mostly cheap.",
    },
    {
      type: "ul",
      items: [
        "Multi-factor authentication everywhere. A large share of incidents start with a stolen password, and MFA stops that path cold.",
        "Segmented networks, so a compromised front desk machine cannot reach the server or the clinical systems.",
        "Isolated backups, with at least one copy the network cannot touch, and a documented test restore.",
        "Patching that is tracked, particularly on anything internet-facing and anything running an operating system past end of support.",
        "Staff who have seen a realistic phishing example and know they will not be blamed for reporting one.",
        "Removing access on the day someone leaves, every time.",
      ],
    },
    {
      type: "p",
      text: "None of that is exotic. All of it is the sort of thing that gets deferred because it is not urgent, right up until the Monday it becomes the only thing that matters.",
    },

    { type: "h2", text: "The paper plan" },
    {
      type: "p",
      text: "One last thing, which costs nothing and which almost no small practice has. Write down what happens if the systems are unavailable for a day. Who prints the schedule, and from where. How patients get seen. Where staff write things down. Who calls whom.",
    },
    {
      type: "p",
      text: "A single page, printed, in a drawer that does not need a computer to open. It is the cheapest item on this list and the one most likely to save your Monday.",
    },
    {
      type: "callout",
      title: "Find out where you actually stand",
      text: "We will check the four questions above against your practice: are the backups isolated, have they been restored, how long recovery takes, and what would be visible in your logs. Free assessment, no obligation. Call (662) 539-7787.",
    },
  ],
};
