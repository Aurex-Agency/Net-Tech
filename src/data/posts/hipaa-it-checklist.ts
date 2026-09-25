import type { Post } from "./types";

export const post: Post = {
  slug: "hipaa-it-checklist-small-practice",
  title: "The HIPAA IT checklist for a small practice",
  metaTitle: "HIPAA IT Checklist for Small Practices",
  metaDescription:
    "Prepare a clinic IT assessment with questions about risk analysis, access, backups, vendors and documentation, with links to HHS guidance.",
  excerpt:
    "No product makes you compliant. What the Security Rule asks for is a set of safeguards you can evidence, and most of the technical half lands on whoever runs your IT.",
  date: "2026-09-15",
  category: "healthcare",
  tags: ["HIPAA", "Compliance", "Security"],
  relatedServices: ["managed-it", "networking", "cloud"],
  relatedPosts: ["microsoft-365-migration-practice", "ransomware-monday-morning"],
  updated: "2026-09-25",
  sources: [{"title": "HHS: Summary of the HIPAA Security Rule", "url": "https://www.hhs.gov/hipaa/for-professionals/security/laws-regulations/index.html"}],
  body: [
  {
    "type": "p",
    "text": "A clinic IT assessment should identify risks, responsible people and evidence. A product or a completed checklist does not certify HIPAA compliance. Use this guide to prepare a conversation with your IT provider and compliance adviser."
  },
  {
    "type": "h2",
    "text": "Start with the practice risk analysis"
  },
  {
    "type": "p",
    "text": "HHS describes administrative, physical and technical safeguards for electronic protected health information. Risk analysis informs the protections appropriate to the organization. Technical work supports this process; it does not replace policies, training or legal advice."
  },
  {
    "type": "h2",
    "text": "Questions to bring to an IT assessment"
  },
  {
    "type": "ul",
    "items": [
      "Which systems store or transmit patient information, and who maintains the inventory?",
      "Who approves staff access, and how is access removed when a person leaves?",
      "Which devices leave the office, and how are they protected?",
      "Who can retrieve activity logs and investigate an incident?",
      "Which backups have been restored successfully, and who records the test?",
      "Which vendors handle patient information, and which business associate agreements are needed?"
    ]
  },
  {
    "type": "h2",
    "text": "Agree a practical work scope"
  },
  {
    "type": "p",
    "text": "For each identified issue, ask for an owner, proposed action and evidence of completion. Bring system names and vendor contacts to the discussion; do not put patient records or passwords in a website inquiry. Net-Tech can discuss the business network, access and backup work your practice needs. Confirm BAA requirements and responsibilities before granting access."
  },
  {
    "type": "h2",
    "text": "Request a practice IT assessment"
  },
  {
    "type": "p",
    "text": "Net-Tech serves commercial customers within 100 miles of New Albany, Mississippi. Describe your practice location, number of sites and the system concerns you want assessed. Scheduling, scope and any travel arrangements are agreed before work begins."
  }
],
};
