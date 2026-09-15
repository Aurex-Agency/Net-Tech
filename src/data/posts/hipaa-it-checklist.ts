import type { Post } from "./types";

export const post: Post = {
  slug: "hipaa-it-checklist-small-practice",
  title: "The HIPAA IT checklist for a small practice",
  metaTitle: "HIPAA IT Checklist for Small Practices",
  metaDescription:
    "What the HIPAA Security Rule actually asks of your IT, in plain English. Twelve things a small clinic or rehab practice should be able to evidence today.",
  excerpt:
    "No product makes you compliant. What the Security Rule asks for is a set of safeguards you can evidence, and most of the technical half lands on whoever runs your IT.",
  date: "2026-09-15",
  category: "healthcare",
  tags: ["HIPAA", "Compliance", "Security"],
  relatedServices: ["managed-it", "networking", "cloud"],
  relatedPosts: ["microsoft-365-migration-practice", "ransomware-monday-morning"],
  body: [
    {
      type: "p",
      text: "Every few months a vendor tells a practice owner that their product is HIPAA compliant and therefore the practice is too. It does not work like that. Compliance is a property of your organisation, not of a piece of software, and no supplier can hand it to you.",
    },
    {
      type: "p",
      text: "What the HIPAA Security Rule actually does is set out safeguards you are required to have in place and be able to demonstrate. Some of those are administrative and belong with you: policies, training, sanctions, a named security official. Some are physical: who can walk into the server cupboard. And a large block of them are technical, which is where your IT provider either helps you or quietly leaves you exposed.",
    },
    {
      type: "p",
      text: "Below is the technical half, written the way we would walk a clinic through it. If you can answer all twelve with evidence rather than a shrug, you are in better shape than most small practices in North Mississippi.",
    },
    {
      type: "callout",
      title: "Worth saying plainly",
      text: "We are an IT company, not a law firm or a compliance consultancy. This covers the technical safeguards we implement and document. Your policies, training and risk analysis sit with you and whoever advises you on compliance. Anyone who tells you their software alone makes you compliant is selling something.",
    },

    { type: "h2", text: "1. Unique logins for every person" },
    {
      type: "p",
      text: "Shared accounts are the single most common finding when we take over a practice. One login for the front desk, one for the therapists, the password on a sticky note because five people need it.",
    },
    {
      type: "p",
      text: "The problem is not only that the password leaks. It is that an audit trail showing that someone accessed a record is worthless if it cannot say which someone. Every person gets their own account. This is not negotiable and it is usually a morning of work to fix.",
    },

    { type: "h2", text: "2. Access limited to what each role needs" },
    {
      type: "p",
      text: "A billing clerk does not need the same access as a clinician, and a receptionist does not need administrative rights on the machine. Most practice management systems have role-based permissions built in and most practices have everyone set to the highest tier because it was simpler on setup day.",
    },

    { type: "h2", text: "3. Access removed the day someone leaves" },
    {
      type: "p",
      text: "This one is dull and it is the one that bites. We regularly find active accounts belonging to people who left eighteen months ago, still able to log in, still holding a mailbox.",
    },
    {
      type: "p",
      text: "Offboarding should be a checklist, not a memory: disable the account, revoke the multi-factor device, reclaim the laptop, change any shared credentials the person knew, and record the date it was done. That record is the evidence.",
    },

    { type: "h2", text: "4. Multi-factor authentication on everything that has it" },
    {
      type: "p",
      text: "If you do one thing after reading this, do this one. A stolen password alone stops being enough to get into your email, your practice management system or your remote access.",
    },
    {
      type: "p",
      text: "The usual objection is that it will slow staff down. In practice, configured sensibly, most people approve a prompt once on a trusted device and forget about it. Weigh that against the alternative, which is an attacker reading your mail for three months before anyone notices.",
    },

    { type: "h2", text: "5. Encryption on laptops and anything that leaves the building" },
    {
      type: "p",
      text: "A laptop left in a car is a very different event depending on whether the drive was encrypted. Modern Windows and macOS both include full disk encryption; on a managed fleet it should be switched on and its status reported, not assumed.",
    },
    {
      type: "p",
      text: "The same applies to any USB drive anyone is still using to move records around, which is a habit worth ending regardless.",
    },

    { type: "h2", text: "6. Email that is actually secure when it needs to be" },
    {
      type: "p",
      text: "Ordinary email is not a secure channel. If your practice sends anything containing patient information by email, there needs to be a mechanism for that, whether it is an encryption feature on your mail platform, a portal, or a policy that it simply does not happen.",
    },
    {
      type: "p",
      text: "Pick one deliberately. The failure mode is a practice that assumes it is covered because the vendor mentioned encryption somewhere in the sales process.",
    },

    { type: "h2", text: "7. A segmented network" },
    {
      type: "p",
      text: "Clinical systems, the front desk, staff phones, guest Wi-Fi for the waiting room and any connected equipment should sit on separate segments that cannot freely reach each other.",
    },
    {
      type: "p",
      text: "The test is simple: from the guest Wi-Fi in your waiting room, can anything see the machine running your practice management software? On a flat network, which is what most small practices have, the answer is usually yes.",
    },

    { type: "h2", text: "8. Backups that are isolated and have been restored" },
    {
      type: "p",
      text: "Two separate questions, and practices usually only ask the first. Do backups run, and has anyone ever restored from them?",
    },
    {
      type: "p",
      text: "A backup sitting on a drive attached to the server it protects is not a backup against ransomware, because the ransomware will encrypt both. At least one copy needs to be somewhere the infected network cannot reach. And a restore that has never been tested is a hope: we have seen jobs that reported success for two years and produced nothing usable.",
    },

    { type: "h2", text: "9. Patching, tracked rather than hoped for" },
    {
      type: "p",
      text: "Not just Windows updates. Your firewall firmware, your network equipment, the browser, the PDF reader nobody thinks about. Someone should be able to tell you which machines are behind and why.",
    },
    {
      type: "p",
      text: "Watch particularly for anything running an operating system that no longer receives security updates. An old machine running one piece of specialist software is extremely common in clinical settings, and it needs either replacing or isolating on its own segment where it can do less harm.",
    },

    { type: "h2", text: "10. Audit logs that exist and are kept" },
    {
      type: "p",
      text: "Your practice management system almost certainly logs access to records. The question is whether logging is switched on, how long entries are retained, and whether anyone would notice something unusual in them.",
    },

    { type: "h2", text: "11. A signed Business Associate Agreement with every vendor that touches patient data" },
    {
      type: "p",
      text: "Your IT provider, your practice management vendor, your billing company, your backup provider, anyone hosting your email. Each of those relationships should be covered by a signed agreement.",
    },
    {
      type: "p",
      text: "If a provider is unclear about what you are asking for, that is informative. We sign one before we have access to anything.",
    },

    { type: "h2", text: "12. Documentation that someone could actually hand over" },
    {
      type: "p",
      text: "This is the difference between being in reasonable shape and being able to prove it. A network diagram. An inventory of machines. A list of who has access to what. The date of the last restore test. Your risk analysis.",
    },
    {
      type: "p",
      text: "Most practices have none of this, because the knowledge lives in the head of whoever set things up, and it leaves when they do. Keeping it current is part of what a managed service should be doing on your behalf.",
    },

    { type: "h2", text: "Where practices usually are" },
    {
      type: "p",
      text: "Honestly? Most single-location clinics we assess score somewhere around five or six of the twelve, and are surprised by which ones they fail. The multi-factor gap and the flat network are the two that come up most, and both are fixable in days rather than months.",
    },
    {
      type: "p",
      text: "The useful thing about this list is that it is finite. It is not an endless compliance treadmill; it is twelve concrete items, and once they are in place, keeping them in place is routine.",
    },
    {
      type: "callout",
      title: "Want the twelve checked against your practice?",
      text: "We will come out, work through the list with you and tell you where you actually stand. It is free, it takes about an hour, and there is no obligation at the end of it. Call (662) 539-7787.",
    },
  ],
};
