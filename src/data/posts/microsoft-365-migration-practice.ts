import type { Post } from "./types";

export const post: Post = {
  slug: "microsoft-365-migration-practice",
  title: "Moving a practice to Microsoft 365 without breaking anything",
  metaTitle: "Microsoft 365 Migration for a Medical Practice",
  metaDescription:
    "Plan a clinic Microsoft 365 migration with an account inventory, cutover window, security settings, backup decisions and post-migration checks.",
  excerpt:
    "A practice email migration needs an inventory, a scheduled cutover and clear checks afterwards. Use this guide to prepare the scope with your provider.",
  date: "2026-09-15",
  category: "cloud",
  tags: ["Microsoft 365", "Email", "Healthcare"],
  relatedServices: ["cloud", "managed-it"],
  relatedPosts: ["hipaa-it-checklist-small-practice", "ransomware-monday-morning"],
  updated: "2026-09-25",
  sources: [{"title": "Microsoft: Ways to migrate email accounts to Microsoft 365", "url": "https://learn.microsoft.com/en-us/exchange/mailbox-migration/mailbox-migration"}],
  body: [
  {
    "type": "p",
    "text": "A business email migration is more than moving mailboxes. Shared calendars, scanners, mobile devices, domain settings and staff access all need a place in the plan. Choose the migration method after checking the source system and the data that must move."
  },
  {
    "type": "h2",
    "text": "Inventory before choosing a date"
  },
  {
    "type": "ul",
    "items": [
      "Active users, shared mailboxes, aliases and distribution lists.",
      "Mailbox sizes, calendars, contacts and archives.",
      "Domain ownership and access to DNS settings.",
      "Applications, copiers and scanners that send email.",
      "Devices and Outlook versions used by staff.",
      "Licensing, security requirements and any BAA requirements."
    ]
  },
  {
    "type": "h2",
    "text": "Select the migration method and pilot"
  },
  {
    "type": "p",
    "text": "Microsoft documents different email migration paths depending on the source platform and requirements. A pilot group can reveal missing permissions, calendar issues or device setup work before the wider change. Agree the scope of data migration explicitly: moving email does not automatically move every application or file store."
  },
  {
    "type": "h2",
    "text": "Make cutover and recovery decisions explicit"
  },
  {
    "type": "p",
    "text": "Agree the change window, communication plan and tests. Record the previous DNS settings and define the conditions that would require a rollback. Keep the outgoing service available for the agreed transition period rather than assuming every client updates immediately."
  },
  {
    "type": "h2",
    "text": "Verify the everyday workflow"
  },
  {
    "type": "ul",
    "items": [
      "Internal and external email send and receive.",
      "Shared mailbox and calendar access.",
      "Mobile sign-in and multi-factor enrollment.",
      "Copier/scanner delivery and business application notifications.",
      "Administrator ownership, documentation and recovery contacts."
    ]
  },
  {
    "type": "h2",
    "text": "Confirm ongoing responsibilities"
  },
  {
    "type": "p",
    "text": "The quote should explain licensing, user changes, backup and retention responsibilities, monitoring and support coverage. Ask what happens when an employee leaves or a mailbox is deleted. Those decisions belong in the service scope, not an assumption about the migration."
  },
  {
    "type": "h2",
    "text": "Plan a commercial migration with Net-Tech"
  },
  {
    "type": "p",
    "text": "Send your company location, current email platform and approximate mailbox count. Do not submit account passwords. Net-Tech serves businesses within 100 miles of New Albany; scheduling, project scope and any travel charges are agreed before work starts."
  }
],
};
