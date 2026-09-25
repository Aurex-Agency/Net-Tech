export interface LocationSection {
  heading: string;
  body: string[];
}

export interface Location {
  slug: string;
  city: string;
  county: string;
  /** Drive time from the New Albany office, written for humans. */
  drive: string;
  metaTitle: string;
  metaDescription: string;
  /** H1 on the page. */
  title: string;
  lead: string;
  /** Why this market is different. The part that must not be templated. */
  sections: LocationSection[];
  /** The industries we actually see in this market. */
  sectors: { name: string; note: string }[];
  /** Service slugs most relevant here, in order. */
  priorityServices: string[];
  faqs: { q: string; a: string }[];
}

/**
 * Location pages exist for three markets only.
 *
 * Each one has to say something a business owner in that town would find true
 * and useful that a business owner in the next town would not. If a fourth
 * town cannot clear that bar, it belongs in running copy and in `areaServed`,
 * not in a page of its own. A city name swapped into a template is a doorway
 * page, and Google treats it as one.
 */
export const locations: Location[] = [
  {
    slug: "new-albany-ms",
    city: "New Albany",
    county: "Union County",
    drive: "Home office",
    metaTitle: "IT Support in New Albany, MS",
    metaDescription:
      "New Albany's locally owned IT company, on W Main St. Managed IT, networking, security cameras and Microsoft 365 for Union County businesses.",
    title: "IT support for New Albany businesses",
    lead: "Business IT support from 112 W Main St in New Albany. Managed IT, business networks and commercial camera projects for Union County and businesses within our 100-mile service radius.",
    sections: [
      {
        heading: "Being down the street is the whole point",
        body: [
          "Our home base is in Union County. Tell us whether your issue needs ongoing support, a site visit or a planned project so we can agree the right next step.",
          "We are at 112 W Main St. When something needs hands on it, we are minutes away, and we will often just come rather than talk you through it over the phone. That changes what is practical: swapping a failed switch before lunch instead of losing a day, or dropping in to check a camera angle rather than asking you to describe it.",
        ],
      },
      {
        heading: "What we actually see in Union County",
        body: [
          "New Albany's business base is a mix that shapes the work: manufacturing and supplier operations, a downtown of independent retail and professional offices, healthcare and dental practices, and the businesses that grew up around the Toyota plant at Blue Springs and its supply chain.",
          "That mix means two different kinds of job. Production and warehouse sites need networks that work across metal, distance and dust, with cameras covering loading areas and yards. Downtown offices in older Main Street buildings need Wi-Fi that will actually pass through brick interior walls, and the kind of email and file security that a practice holding client or patient records has to be able to account for.",
        ],
      },
      {
        heading: "Local in a way that is checkable",
        body: [
          "We are not a franchise with a New Albany phone number that routes elsewhere. Our address is on Main Street, our number is answered here, and you will see us around town.",
          "That is also why we take the work seriously in a way a distant provider does not have to. A business we let down in New Albany is a business we run into at the grocery store.",
        ],
      },
    ],
    sectors: [
      { name: "Manufacturing & suppliers", note: "Networks that hold up across production floors, warehouses and yards." },
      { name: "Downtown retail & offices", note: "Wi-Fi and point-of-sale that work in older Main Street buildings." },
      { name: "Healthcare & dental", note: "Practice systems, secure email and record-handling you can account for." },
      { name: "Professional services", note: "Law, accounting and insurance offices with confidentiality obligations." },
    ],
    priorityServices: ["managed-it", "networking", "security-cameras", "cloud"],
    faqs: [
      {
        q: "How quickly can you get to us in New Albany?",
        a: "Call to check current availability. We are based on W Main St, but arrival time depends on the issue, schedule and agreed support coverage.",
      },
      {
        q: "Do you work with businesses outside Union County?",
        a: "Yes, regularly in Tupelo, Oxford, Pontotoc, Ripley, Booneville and Corinth. New Albany is simply where we are based.",
      },
      {
        q: "Are you actually local, or a national company with a local number?",
        a: "Locally owned, locally staffed, and physically at 112 W Main St. Come by.",
      },
    ],
  },

  {
    slug: "tupelo-ms",
    city: "Tupelo",
    county: "Lee County",
    drive: "about 30 minutes",
    metaTitle: "Managed IT Services in Tupelo, MS",
    metaDescription:
      "Managed IT, Ubiquiti networking and security cameras for Tupelo businesses. Locally owned, 30 minutes away in New Albany, no per-device licence fees.",
    title: "Managed IT services for Tupelo businesses",
    lead: "Commercial IT support for Tupelo and Lee County, delivered from our New Albany base. We help businesses plan reliable networks, manage user access and coordinate support across locations.",
    sections: [
      {
        heading: "A bigger market with a different set of problems",
        body: [
          "Tupelo businesses tend to be a step larger than their Union County equivalents, and the IT problems change shape with size. More staff means account management actually matters: onboarding, offboarding, and the departed employee whose access nobody revoked. More locations means the question of whether every site works the same way. More regulatory exposure, particularly around the medical district, means someone has to be able to answer how data is handled.",
          "It is also a market where businesses have usually had IT support before, often several times. A good part of our Tupelo work starts by documenting a setup nobody has a record of, because the last provider left and took the knowledge with them.",
        ],
      },
      {
        heading: "The healthcare corridor",
        body: [
          "Tupelo's medical sector, meaning the regional hospital and the dense ring of specialist practices, clinics, therapy and rehab offices around it, is unlike anything else in North Mississippi.",
          "Practices in that orbit carry obligations that most small businesses do not: patient data that has to be handled defensibly, systems that cannot simply be down, and vendors for practice-management and imaging software that all need to talk to each other. The network design work there is mostly segmentation and documentation, and the email work is mostly making sure secure communication is actually secure rather than assumed to be.",
        ],
      },
      {
        heading: "Retail, hospitality and the traffic that comes with them",
        body: [
          "Tupelo draws shoppers and visitors from across the region, and the businesses serving them live or die on systems that cannot afford a bad Saturday. Point-of-sale that stays up, card processing that does not drop, guest Wi-Fi that does not put customers on the same network as the till.",
          "Guest and business traffic should be separated with appropriate network rules. The work depends on the existing equipment, payment systems and coverage requirements; survey and testing come before a time estimate.",
        ],
      },
      {
        heading: "Honest about distance",
        body: [
          "We are in New Albany, about thirty minutes from Tupelo. For monitoring, help desk and anything solvable remotely, which is most things, that distance makes no difference at all.",
          "On-site work is a scheduled drive from New Albany. We confirm scope, availability and travel arrangements before work begins. We do not have a separate Tupelo office.",
        ],
      },
    ],
    sectors: [
      { name: "Medical & dental practices", note: "Segmented networks, defensible data handling, practice software support." },
      { name: "Retail & hospitality", note: "Point-of-sale uptime, card processing and separated guest Wi-Fi." },
      { name: "Manufacturing & logistics", note: "Coverage across production floors, warehouses and loading areas." },
      { name: "Professional & financial services", note: "Email security, MFA and backup for firms handling client money and records." },
    ],
    priorityServices: ["managed-it", "cloud", "networking", "multi-site"],
    faqs: [
      {
        q: "You are in New Albany. How does that work for a Tupelo business?",
        a: "Suitable issues can be handled remotely. On-site visits are arranged from New Albany, roughly thirty minutes away depending on traffic. Scheduling and any travel charges are confirmed with the scope.",
      },
      {
        q: "Do you support medical practices?",
        a: "Yes. The work is mostly network segmentation, access control, secure email and documented backup. Those are the things you need to be able to evidence if anyone asks.",
      },
      {
        q: "Can you take over from our current IT provider?",
        a: "Routinely. The first phase is usually documentation: working out what you actually have, since that knowledge often leaves with the previous provider.",
      },
      {
        q: "Do you charge per device for network management?",
        a: "No. We build on Ubiquiti, which carries no per-device licence fee, so adding access points or cameras does not add a recurring bill.",
      },
    ],
  },

  {
    slug: "oxford-ms",
    city: "Oxford",
    county: "Lafayette County",
    drive: "about 40 minutes",
    metaTitle: "IT Support & Business Wi-Fi in Oxford, MS",
    metaDescription:
      "IT support and business Wi-Fi for Oxford, MS. Networks built for Square-area retail, restaurants and rentals that handle real game-weekend load.",
    title: "IT support for Oxford businesses",
    lead: "Oxford's business rhythm is unlike anywhere else in North Mississippi. Systems that are comfortable in July have to survive a home game weekend in October, and most of them were never designed for it.",
    sections: [
      {
        heading: "Built for the busy weekend, not the quiet Tuesday",
        body: [
          "Most small-business networks are sized for typical load. In Oxford, typical load is not the problem. The problem is the weekend when the town's population effectively doubles.",
          "A restaurant that handles forty covers comfortably discovers its Wi-Fi collapses at a hundred and forty, because the access point that was adequate is now serving five times the devices. A retailer's card terminals start timing out at the exact hour they can least afford it. The failure is almost never bandwidth from the internet provider; it is access point density and channel planning inside the building.",
          "We design for the peak, because in Oxford the peak is the part that pays.",
        ],
      },
      {
        heading: "The Square and its buildings",
        body: [
          "Oxford's commercial heart is historic buildings, and historic buildings are hostile to Wi-Fi. Thick masonry, plaster over lath, additions built across decades, and in many cases a preservation constraint on what you can drill, run and mount.",
          "Those jobs are a design problem more than an equipment problem: working out where signal can actually reach, where a cable can legitimately run, and how to get coverage into a back dining room or upstairs office without anything visible from the street. It is slower work than a modern building and it is a good part of what we do in Oxford.",
        ],
      },
      {
        heading: "Rental property and the multi-site pattern",
        body: [
          "A large share of Oxford business is property: student rentals, short-term lets and the management companies running them, often across many addresses.",
          "That is a multi-site problem wearing different clothes. Each property needs internet that works without a technician visiting, access that can be handed over and revoked between tenants, and a way to see remotely whether a unit is actually online before someone arrives to complain. Managing twenty properties the way you manage one does not scale, and it is usually the first thing we fix.",
        ],
      },
      {
        heading: "University-adjacent professional services",
        body: [
          "Around the university sits a dense layer of law firms, accountants, medical practices and consultancies, many small but handling genuinely sensitive material.",
          "For those, the work is rarely dramatic: multi-factor authentication actually enabled, email secured against impersonation, backups that have been test-restored, and a clear answer to what happens when a laptop goes missing. Unglamorous, and the difference between a bad afternoon and a reportable incident.",
        ],
      },
    ],
    sectors: [
      { name: "Restaurants & bars", note: "Wi-Fi and card processing designed for game-day density, not average nights." },
      { name: "Square-area retail", note: "Coverage in historic buildings without visible cable runs." },
      { name: "Property management", note: "Many addresses, remote visibility, tenant turnover handled cleanly." },
      { name: "Law, accounting & medical", note: "MFA, secure email, tested backup and defensible data handling." },
    ],
    priorityServices: ["networking", "managed-it", "multi-site", "security-cameras"],
    faqs: [
      {
        q: "Can you handle Wi-Fi in a building on the Square?",
        a: "Yes, and it is a different job from a modern building. Masonry and preservation limits mean the design matters more than the hardware. We survey first rather than guessing at access point placement.",
      },
      {
        q: "Our Wi-Fi only fails on busy weekends. Why?",
        a: "Busy-period problems can involve access point capacity, interference, cabling or internet bandwidth. We measure the network under load before recommending equipment or a faster connection.",
      },
      {
        q: "Do you work with property management companies?",
        a: "Yes. Multiple addresses with remote visibility and clean tenant turnover is the same problem as multi-site business IT, and we approach it the same way.",
      },
      {
        q: "How far is Oxford from your office?",
        a: "About forty minutes from New Albany. Remote support is unaffected; on-site work is a scheduled drive and we will tell you honestly when that is the right call.",
      },
    ],
  },
];

export const locationBySlug = (slug: string) => locations.find((l) => l.slug === slug);
