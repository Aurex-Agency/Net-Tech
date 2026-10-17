import type { Post } from "./types";

export const post: Post = {
  "slug": "business-it-employee-offboarding-checklist",
  "title": "An Employee Is Leaving: A Business IT Offboarding Checklist",
  "metaTitle": "Business IT Employee Offboarding Checklist",
  "metaDescription": "Coordinate employee departure with HR and IT: approved timing, business account access, device return, ownership transfer and documented follow-through.",
  "excerpt": "Make account ownership, device return and access removal part of one coordinated departure process. Give each step an owner and a confirmed time.",
  "category": "security",
  "tags": [
    "Access management",
    "Employee offboarding",
    "Business IT"
  ],
  "relatedServices": [
    "managed-it",
    "cloud"
  ],
  "relatedPosts": [
    "microsoft-365-migration-practice",
    "switching-it-providers"
  ],
  "body": [
    {
      "type": "p",
      "text": "When an employee leaves, IT needs an authorized request and a coordinated plan. Disabling one email account is only part of the work: the person may also have access to business applications, shared files, remote tools, building systems and subscriptions. Use a checklist with the business owner, HR and the authorized IT provider so that access changes match the departure arrangements."
    },
    {
      "type": "h2",
      "text": "Confirm authority and timing first"
    },
    {
      "type": "p",
      "text": "Record who approved the departure request, when changes should happen and who will be available to resolve questions. HR or management should define the employment process and communication. IT should carry out the authorized access work, not infer a termination decision from an informal message."
    },
    {
      "type": "p",
      "text": "For a time-sensitive departure, agree an escalation contact before the change window. For a planned transition, identify the work that needs a new owner ahead of time. Keep departure details in an appropriate restricted channel. This general checklist does not replace employment, privacy or record-retention advice for a particular situation."
    },
    {
      "type": "h2",
      "text": "Inventory business access, including forgotten tools"
    },
    {
      "type": "ul",
      "items": [
        "Primary identity, email, cloud storage and collaboration services.",
        "Business applications, financial systems and customer-management tools.",
        "Remote-access services and provider-managed accounts.",
        "Shared resources, distribution groups and delegated mailbox access.",
        "Business-owned devices, security keys and physical access items.",
        "Subscriptions or integrations administered by the departing person."
      ]
    },
    {
      "type": "p",
      "text": "Use the inventory and the person’s role to find relevant access. A manager may know about an application that IT never administered. Ask application owners to confirm their part of the process; removing a central account may not remove every independent login or active session. Avoid distributing credentials in the checklist itself."
    },
    {
      "type": "h2",
      "text": "Transfer work before removing the owner"
    },
    {
      "type": "p",
      "text": "Assign new owners for shared documents, calendars, projects and subscriptions that the business still needs. Determine the approved approach to mailbox and file retention with the business decision-maker. Do not automatically forward every message to another employee or delete data just because a license can be removed."
    },
    {
      "type": "p",
      "text": "Some accounts run integrations, scheduled tasks or vendor connections. Treat these as dependencies to investigate, not a reason to keep an employee’s personal access active indefinitely. Agree a controlled transfer to an appropriate business-managed identity and test the affected workflow. Record any temporary exception, the approving owner and when it must be closed."
    },
    {
      "type": "h2",
      "text": "Coordinate access removal and device return"
    },
    {
      "type": "p",
      "text": "At the authorized time, have the responsible administrators remove or restrict access using the controls available in each system. Confirm what happens to active sessions and previously authorized devices. Where a shared secret was known, arrange an appropriate change without interrupting unrelated systems through an unplanned blanket reset."
    },
    {
      "type": "p",
      "text": "Track company equipment by asset identifier and condition when it is returned. Handle any personal-device access according to the business’s approved policies and agreements. A public support or sales form is not a place to send sensitive employee information or instructions to erase a device. Use the established secure support channel and verify the requester’s authority."
    },
    {
      "type": "h2",
      "text": "Check the result and close the record"
    },
    {
      "type": "ul",
      "items": [
        "Ask each application owner to confirm the relevant access change.",
        "Verify that the remaining team can use the transferred business resources.",
        "Document equipment returned and outstanding items.",
        "Record unresolved dependencies with an owner and follow-up date.",
        "Update the inventory and remove obsolete subscriptions only after retention and ownership decisions are complete."
      ]
    },
    {
      "type": "p",
      "text": "A completed checklist should show who confirmed each action, not simply that an email was sent to IT. Review the process when the business adds an application or changes how staff work. Net-Tech’s managed IT scope can include agreed account and support responsibilities; discuss the offboarding process during onboarding so requests have a clear route before the next departure."
    },
    {
      "type": "link",
      "text": "Discuss managed IT responsibilities",
      "href": "/services/managed-it"
    },
    {
      "type": "link",
      "text": "Review cloud and Microsoft 365 support",
      "href": "/services/cloud"
    }
  ],
  "date": "2026-10-16",
  "sources": [
    {
      "title": "NIST Small Business Cybersecurity Corner: further planning resources",
      "url": "https://www.nist.gov/itl/smallbusinesscyber"
    }
  ],
  "cta": {
    "title": "Plan the next step for your business",
    "text": "Describe your commercial IT needs and location. Net-Tech will discuss scope, responsibilities and site arrangements before work is agreed. Do not send passwords or sensitive records.",
    "label": "Request a business review",
    "service": "managed-it"
  }
};
