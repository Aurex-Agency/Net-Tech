export interface IndustrySection {
  heading: string;
  body: string[];
}

export interface Industry {
  slug: string;
  name: string;
  shortName: string;
  metaTitle: string;
  metaDescription: string;
  title: string;
  lead: string;
  /** The specific pressures this sector puts on IT. */
  pressures: { name: string; note: string }[];
  sections: IndustrySection[];
  /** Service slugs, in the order this sector usually needs them. */
  priorityServices: string[];
  faqs: { q: string; a: string }[];
}

/**
 * Vertical landing pages.
 *
 * Healthcare and rehab is Net-Tech's strongest client segment, so it gets a
 * page written to that buyer rather than a generic "industries we serve" list.
 * Add a second vertical only when there is enough sector-specific substance to
 * fill it; a page that just swaps the industry noun is worth nothing.
 */
export const industries: Industry[] = [
  {
    slug: "healthcare-rehab",
    name: "Healthcare & rehab practices",
    shortName: "Healthcare & rehab",
    metaTitle: "IT for Medical & Rehab Practices, MS",
    metaDescription:
      "HIPAA-aware IT for clinics, therapy and rehab practices in North Mississippi. Segmented networks, secure email, tested backups and a scoped support plan. Call (662) 539-7787.",
    title: "IT for healthcare and rehab practices",
    lead: "Clinics, therapy practices and rehab facilities are a large share of who we look after. The work is different from ordinary small-business IT, and most of the difference is in what you have to be able to prove.",
    pressures: [
      {
        name: "Downtime is cancelled appointments",
        note: "A practice that cannot check patients in does not recover that revenue later. It is lost.",
      },
      {
        name: "Records you must account for",
        note: "Patient data raises the bar on access control, audit trails, retention and documentation.",
      },
      {
        name: "Devices that move",
        note: "Tablets on carts, laptops between treatment bays and staff phones all need coverage and control.",
      },
      {
        name: "Vendors who blame each other",
        note: "Practice management, imaging, billing and clearinghouse vendors all point at the network first.",
      },
    ],
    sections: [
      {
        heading: "Agree the practice and provider responsibilities",
        body: [
          "Name a practice contact for access approvals, software-vendor coordination and planned changes. Record who owns the domain, email tenant and other business accounts, and how the practice receives its documentation.",
          "Define which systems are covered, what backup and restore checks are included, and how a patient-facing interruption is escalated. Clinical, privacy and compliance decisions remain with the practice and its appropriate advisers; technical support does not by itself establish compliance.",
        ],
      },
      {
        heading: "What HIPAA actually asks of your IT",
        body: [
          "HIPAA is not a product you can buy, and no vendor can make you compliant on their own. What the Security Rule does is set out safeguards you have to have in place and be able to evidence. Most of the technical half lands on whoever runs your IT.",
          "Use the assessment to review account access, logging, data protection, recovery and staff departures. The practice should determine its obligations with its advisers and document the safeguards selected for its systems. A short service-page checklist is not a complete regulatory assessment.",
          "Agree which documentation Net-Tech will maintain under the support scope, who reviews it and how the practice can retrieve it. Keep changes and test outcomes recorded as work is completed.",
          "One thing worth being plain about: we handle the technical safeguards. Your policies, training and the administrative side belong with you and your compliance advisor. We are an IT company, not a law firm, and anyone telling you their software makes you compliant is selling something.",
        ],
      },
      {
        heading: "Agree responsibilities before access",
        body: [
          "Whether an IT provider is a business associate depends on the services and handling of protected health information. Have the practice and its appropriate advisers determine the relationship and required agreement before access is granted.",
          "Discuss your practice requirements, including any Business Associate Agreement, before granting access. Confirm the agreement, safeguards and responsibilities as part of the service scope.",
        ],
      },
      {
        heading: "Why rehab and therapy spaces break ordinary Wi-Fi",
        body: [
          "A therapy gym is one of the more hostile Wi-Fi environments in small-business work, and it is almost always designed as though it were an office.",
          "The rooms are large and open, which sounds easy until you realise a single access point at one end has to cover forty or fifty feet of floor with equipment, mirrors and metal frames in between. Treatment bays divided by curtains behave like one big room for signal and like separate rooms for privacy. Staff carry tablets and walk while they document, so they roam constantly between access points, and a network that has not been tuned for roaming drops the session every time they cross a boundary.",
          "The symptom a practice notices is documentation that will not save, or a therapist who has to walk back to the front desk to finish notes. Possible causes include coverage, roaming behavior, interference and internet connectivity. A survey and targeted testing help identify the right fix.",
        ],
      },
      {
        heading: "Segmenting a clinical network",
        body: [
          "This is where most of the real security work happens, and it is largely invisible once done.",
          "Clinical systems, the front desk, staff devices, guest Wi-Fi for patients in the waiting room and any connected equipment all belong on separate segments that cannot freely reach one another. A patient on your guest network should have no path to the machine running your practice management software. A smart TV in the waiting room should not be on the same network as anything clinical.",
          "Review the existing network before changing access rules. Segmentation needs to preserve required clinical workflows while limiting unnecessary access. Scope, disruption and timing depend on the equipment, applications and test results.",
        ],
      },
      {
        heading: "Cameras in a clinical setting",
        body: [
          "Practices ask for cameras for good reasons: entrances after hours, medication storage, parking areas, and liability cover in the gym if a patient falls.",
          "Start with privacy constraints and the business purpose of each camera. Have the practice and its advisers approve coverage, retention, access and any handling of patient information before installation. Local and cloud recording both need appropriate safeguards; storage location alone does not establish compliance.",
          "We will design around what you actually need to see and tell you plainly when a camera position creates more risk than it removes. Confirm the specifics with your compliance advisor; we will build to what you decide.",
        ],
      },
      {
        heading: "Ransomware is the scenario that decides everything",
        body: [
          "Healthcare gets targeted because downtime is intolerable, which makes payment more likely. For a small practice, the difference between a bad week and an existential event comes down to decisions made long before anything happens.",
          "Specifically: whether backups are isolated from the network that gets encrypted, whether anyone has ever restored from them, how long a full restore actually takes, and whether staff have somewhere to write down appointments while systems are down. Agree these responsibilities and a restore-test schedule in the service scope.",
        ],
      },
    ],
    priorityServices: ["managed-it", "networking", "cloud", "security-cameras"],
    faqs: [
      {
        q: "Will you sign a Business Associate Agreement?",
        a: "Discuss BAA requirements during scoping and confirm the appropriate agreement before granting access to patient information.",
      },
      {
        q: "Can you make us HIPAA compliant?",
        a: "No provider can, and anyone claiming otherwise is overselling. Compliance covers policies, training and administrative process as well as technology. We handle the technical safeguards and keep the documentation that evidences them, and we work alongside whoever advises you on the rest.",
      },
      {
        q: "Do you work with our practice management or EMR vendor?",
        a: "Yes. A good part of the job is being the person who sits on hold with them. We manage the machines, network and accounts underneath the software, and we deal with the vendor when the application itself needs attention.",
      },
      {
        q: "Our therapists lose their notes when they walk across the gym. Is that fixable?",
        a: "A survey can test coverage, roaming and connectivity to identify why sessions drop. We confirm the cause before proposing a fix.",
      },
      {
        q: "We are a single-location practice. Is this overkill?",
        a: "No. Most of what is described here applies at any size, and a single location with one server is often carrying more risk than a larger practice with proper separation, simply because everything sits in one place.",
      },
    ],
  },
];

export const industryBySlug = (slug: string) => industries.find((i) => i.slug === slug);
