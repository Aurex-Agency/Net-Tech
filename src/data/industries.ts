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
      "HIPAA-aware IT for clinics, therapy and rehab practices in North Mississippi. Segmented networks, secure email, tested backups and a signed BAA. Call (662) 539-7787.",
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
        heading: "What HIPAA actually asks of your IT",
        body: [
          "HIPAA is not a product you can buy, and no vendor can make you compliant on their own. What the Security Rule does is set out safeguards you have to have in place and be able to evidence. Most of the technical half lands on whoever runs your IT.",
          "In practice that means a handful of concrete things. Access has to be limited to the people who need it, with unique logins rather than a shared password taped under a monitor. Activity has to be logged so there is an audit trail. Data has to be protected in transit and at rest. There has to be a documented backup and recovery plan that someone has actually tested. And there has to be a process for removing access when a staff member leaves, on the day they leave.",
          "None of that is exotic. What catches practices out is that it has to be documented and demonstrable, not just true. We keep that documentation as part of the service rather than assembling it in a panic when someone asks.",
          "One thing worth being plain about: we handle the technical safeguards. Your policies, training and the administrative side belong with you and your compliance advisor. We are an IT company, not a law firm, and anyone telling you their software makes you compliant is selling something.",
        ],
      },
      {
        heading: "A Business Associate Agreement, signed before we touch anything",
        body: [
          "Any IT provider with access to systems holding patient information is a business associate under HIPAA, and that relationship is supposed to be covered by a signed agreement setting out how that information is handled.",
          "We sign one. If a provider is reluctant to, or does not know what you are asking for, that tells you something useful about how they treat the rest of it.",
        ],
      },
      {
        heading: "Why rehab and therapy spaces break ordinary Wi-Fi",
        body: [
          "A therapy gym is one of the more hostile Wi-Fi environments in small-business work, and it is almost always designed as though it were an office.",
          "The rooms are large and open, which sounds easy until you realise a single access point at one end has to cover forty or fifty feet of floor with equipment, mirrors and metal frames in between. Treatment bays divided by curtains behave like one big room for signal and like separate rooms for privacy. Staff carry tablets and walk while they document, so they roam constantly between access points, and a network that has not been tuned for roaming drops the session every time they cross a boundary.",
          "The symptom a practice notices is documentation that will not save, or a therapist who has to walk back to the front desk to finish notes. The cause is nearly always access point density and roaming configuration rather than the internet connection, which means paying the provider for more bandwidth does not fix it.",
        ],
      },
      {
        heading: "Segmenting a clinical network",
        body: [
          "This is where most of the real security work happens, and it is largely invisible once done.",
          "Clinical systems, the front desk, staff devices, guest Wi-Fi for patients in the waiting room and any connected equipment all belong on separate segments that cannot freely reach one another. A patient on your guest network should have no path to the machine running your practice management software. A smart TV in the waiting room should not be on the same network as anything clinical.",
          "We see the opposite constantly: one flat network where everything can talk to everything, a guest password that has not changed in three years, and a printer with a web interface reachable from the car park. Splitting that apart is usually a day of work and it is the single highest-value security change available to most practices.",
        ],
      },
      {
        heading: "Cameras in a clinical setting",
        body: [
          "Practices ask for cameras for good reasons: entrances after hours, medication storage, parking areas, and liability cover in the gym if a patient falls.",
          "The design conversation is about where they do not go. Treatment rooms, changing areas and anywhere a patient would reasonably expect privacy are off limits, and footage that captures patients is information you then have to protect and control access to like any other record. That is a strong argument for recording on site rather than to a third-party cloud tier, and for locking the recorder somewhere only named staff can reach.",
          "We will design around what you actually need to see and tell you plainly when a camera position creates more risk than it removes. Confirm the specifics with your compliance advisor; we will build to what you decide.",
        ],
      },
      {
        heading: "Ransomware is the scenario that decides everything",
        body: [
          "Healthcare gets targeted because downtime is intolerable, which makes payment more likely. For a small practice, the difference between a bad week and an existential event comes down to decisions made long before anything happens.",
          "Specifically: whether backups are isolated from the network that gets encrypted, whether anyone has ever restored from them, how long a full restore actually takes, and whether staff have somewhere to write down appointments while systems are down. We plan for all four, and the test restore is part of the service rather than an optional extra, because an untested backup is a hope rather than a plan.",
        ],
      },
    ],
    priorityServices: ["managed-it", "networking", "cloud", "security-cameras"],
    faqs: [
      {
        q: "Will you sign a Business Associate Agreement?",
        a: "Yes, before we have access to anything that touches patient information. If an IT provider hesitates at that question, treat it as an answer.",
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
        a: "Almost always, and it is usually a roaming and access point density problem rather than an internet problem. It needs a survey of the actual space rather than a guess, but it is a common fix.",
      },
      {
        q: "We are a single-location practice. Is this overkill?",
        a: "No. Most of what is described here applies at any size, and a single location with one server is often carrying more risk than a larger practice with proper separation, simply because everything sits in one place.",
      },
    ],
  },
];

export const industryBySlug = (slug: string) => industries.find((i) => i.slug === slug);
