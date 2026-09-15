export interface ServiceSection {
  heading: string;
  body: string[];
}

export interface Service {
  slug: string;
  /** Full name, used as the page H1 and in navigation. */
  title: string;
  /** Short label for cards and breadcrumbs. */
  shortTitle: string;
  /** schema.org serviceType. */
  serviceType: string;
  metaTitle: string;
  metaDescription: string;
  /** One-line summary used in lists and on the home page. */
  short: string;
  /** Opening paragraph on the service page. */
  lead: string;
  /** Problem-led opening written to the buyer, not about the service. */
  problem: ServiceSection;
  /** Main body. Each service has its own section shape on purpose. */
  sections: ServiceSection[];
  /** Concrete things Net-Tech does for this service. */
  includes: string[];
  /** Named hardware or platforms, so the expertise is specific, not generic. */
  equipment?: { label: string; note: string }[];
  /** What the customer gets out of it. */
  outcomes: { name: string; description: string }[];
  faqs: { q: string; a: string }[];
  /** Slugs of related services for internal linking. */
  related: string[];
}

export const services: Service[] = [
  {
    slug: "managed-it",
    title: "Managed IT & Help Desk",
    shortTitle: "Managed IT",
    serviceType: "Managed IT services",
    metaTitle: "Managed IT Services in New Albany, MS",
    metaDescription:
      "Flat-fee managed IT and help desk for North Mississippi businesses. Proactive monitoring, patching, backup and a technician who actually answers.",
    short:
      "Proactive monitoring, patching and a help desk that actually answers, so small problems never become big ones.",
    lead: "We keep your computers, servers and software running so you can focus on the business. One flat monthly fee, no surprise bills.",
    problem: {
      heading: "The problem with calling someone only when it breaks",
      body: [
        "Most small businesses in North Mississippi handle IT the same way: something stops working, somebody calls a guy, the guy comes out, and the business loses half a day. It feels cheaper than paying monthly. It usually is not.",
        "The costs that hurt are the ones that never show up on an invoice. The drive-time wait while nobody can print invoices. The failed backup nobody noticed until the drive died. The workstation still running an operating system that stopped getting security patches two years ago. The employee who left in March whose email account is still active in September.",
        "Managed IT flips the order of operations. Instead of waiting for the phone to ring, we watch the things that fail before they fail, and we fix them on a Tuesday afternoon rather than on the morning of your busiest day.",
      ],
    },
    sections: [
      {
        heading: "What proactive monitoring actually catches",
        body: [
          "Monitoring is not a dashboard nobody looks at. It is a set of specific alarms tied to the failures that actually take small businesses offline.",
          "Hard drives announce themselves before they die — SMART attributes degrade, reallocated sector counts climb. We see that and swap the drive during business-as-usual instead of rebuilding a machine from scratch. Backup jobs that silently fail are the single most common disaster we find when taking over an account; a backup nobody has tested is not a backup. Disk space filling on a server, a domain or SSL certificate approaching expiry, a security patch that has not applied across three machines — all of it is visible in advance if somebody is looking.",
        ],
      },
      {
        heading: "What the help desk is like to actually use",
        body: [
          "You call and a technician picks up, or you submit a ticket and get a real response the same business day. There is no tier-one script, no queue position, no explaining your setup from scratch every time because we already have it documented.",
          "Most issues get solved remotely in minutes. When we need to see your screen, we send a remote access client, you read us a session code, and we are looking at the problem with you. When it needs hands on the machine, we are in New Albany — on-site is a short drive, not a scheduled appointment for next week.",
        ],
      },
      {
        heading: "Vendor management: one number instead of five",
        body: [
          "A surprising amount of what small businesses call an IT problem is actually a vendor problem. The internet is down and the ISP wants you to reboot the modem for the fourth time. The copier will not scan to email because someone changed an SMTP setting. The point-of-sale vendor says it is a network issue and the network vendor says it is a POS issue.",
          "We deal with them so you do not have to. You call us, we work out whose problem it is, and we sit on hold with them instead of you.",
        ],
      },
      {
        heading: "Backup and recovery, tested",
        body: [
          "Every managed client gets backups configured, monitored and periodically test-restored. The test is the part most businesses skip and the part that determines whether a backup is worth anything.",
          "We plan around two numbers that are worth knowing for your own business: how much data you can afford to lose (which sets how often backups run) and how long you can afford to be down (which sets how we recover). A file server that can be down overnight is a different design from a system that has to be back in an hour.",
        ],
      },
    ],
    includes: [
      "Remote and on-site help desk",
      "Proactive monitoring, alerting and patching",
      "Workstation, server and network device management",
      "Vendor management for internet, phones and copiers",
      "Backup configuration, monitoring and test restores",
      "Antivirus, endpoint protection and security policy",
      "Onboarding and offboarding for staff accounts",
      "IT planning and budgeting for equipment refresh",
    ],
    outcomes: [
      { name: "Predictable costs", description: "One flat monthly fee covers support, monitoring and maintenance. No hourly surprises." },
      { name: "Faster fixes", description: "Most issues are handled remotely, usually the same business day." },
      { name: "Fewer surprises", description: "Failing drives, expiring licences and risky updates get caught before they cost you." },
      { name: "One number to call", description: "Internet down? Copier jammed? Call us and we deal with the vendor." },
    ],
    faqs: [
      {
        q: "Do I have to sign a long-term contract?",
        a: "No. You do not need a contract to get a quote or an assessment, and we would rather earn the renewal than hold you to a term you regret.",
      },
      {
        q: "How many computers do I need before managed IT makes sense?",
        a: "Usually somewhere around five. Below that, most businesses are better served by as-needed support. Above it, the maths on proactive maintenance starts working strongly in your favour, and we will tell you honestly which side of the line you are on.",
      },
      {
        q: "Can you support software we already use?",
        a: "In most cases yes. We manage the machines, the network and the accounts underneath your line-of-business software, and we handle the vendor relationship when the application itself needs attention.",
      },
      {
        q: "What happens if something breaks after hours?",
        a: "Call the office number and follow the prompts. For anything that stops the business running, reach us by phone rather than the ticket form — that is what it is there for.",
      },
    ],
    related: ["networking", "cloud", "multi-site"],
  },

  {
    slug: "networking",
    title: "Business Networking & Security",
    shortTitle: "Networking & Security",
    serviceType: "Business network installation and security",
    metaTitle: "Ubiquiti UniFi Installers, North Mississippi",
    metaDescription:
      "Ubiquiti UniFi network design and installation for businesses in New Albany, Tupelo and Oxford, MS. Business Wi-Fi, firewalls and VPN, no licence fees.",
    short:
      "Rock-solid business networks built on Ubiquiti UniFi: fast Wi-Fi, proper firewalls and secure remote access.",
    lead: "A slow or flaky network costs you every day. We design, install and manage Ubiquiti UniFi networks that simply work, with security built in from the start.",
    problem: {
      heading: "Why the Wi-Fi keeps dropping in the back of the building",
      body: [
        "Almost every bad small-business network we are called out to has the same history. Someone bought a consumer router from a big-box store. When coverage did not reach the warehouse, someone added a range extender. When that was not enough, a second router went in, running its own DHCP, quietly fighting the first one for control of the network.",
        "The symptoms are always the same: Wi-Fi that works at the front desk and dies halfway down the building, devices that drop mid-call, a card reader that fails at the worst possible moment, and nobody able to say why because there is no way to see what is happening.",
        "The fix is not a bigger router. It is a network that was designed for the building it is in — access points placed for the actual floor plan and construction, one system managing all of them, and a firewall doing real work at the edge.",
      ],
    },
    sections: [
      {
        heading: "Designed for your building, not guessed at",
        body: [
          "Coverage is a function of the building, not the box. Metal racking in a warehouse, brick interior walls in an older Main Street building, insulated partitions in a clinic — all of it changes where signal goes and where it dies.",
          "We walk the building, work out where access points need to go and what they need to be mounted on, and plan the cable runs to reach them. Then we tune the result: channel assignments that do not collide, transmit power set so devices roam cleanly instead of clinging to a distant access point, and separate networks for staff, guests and card readers or cameras that have no business talking to each other.",
        ],
      },
      {
        heading: "Security that is actually configured, not just purchased",
        body: [
          "A firewall out of the box is a router with a marketing term attached. The value is in the configuration: what is allowed out, what is blocked, what gets inspected, and what happens when something on the inside starts behaving strangely.",
          "We set up content and threat filtering, segment the network so a compromised device cannot reach everything else, and configure secure VPN access so staff working from home or on the road are not exposing the network to do it. Where you have obligations — payment card handling, patient data, client confidentiality — the segmentation is where most of that work actually gets done.",
        ],
      },
      {
        heading: "Why we standardised on Ubiquiti",
        body: [
          "There is a real argument here, and it is about the licence, not the hardware. Most business-grade networking vendors sell you the equipment and then sell you the right to keep using its features: per-device annual subscriptions for threat protection, management, or support, renewed forever, scaling with every access point you add.",
          "UniFi does not work that way. You buy the hardware and the management software is free, for the life of the equipment. For a ten-person business in New Albany that difference compounds into real money over a five-year equipment cycle — money better spent on the access points themselves than on the right to keep managing them.",
          "The second reason is that everything lives in one interface. Network, Wi-Fi, cameras and door access all managed from the same place, by us remotely and by you if you want visibility. That is also what makes multi-site work practical.",
        ],
      },
      {
        heading: "Cabling and rack work",
        body: [
          "Most of what makes a network reliable is unglamorous. Cable run properly and terminated correctly. A patch panel labelled so the next person can work out what is plugged into what. Equipment in a rack with airflow rather than stacked on a shelf in a closet.",
          "We do that part carefully because it is the part that determines whether a fault takes ten minutes or two hours to find.",
        ],
      },
    ],
    equipment: [
      { label: "UniFi gateways", note: "Routing, firewall, threat management and VPN at the network edge." },
      { label: "UniFi access points", note: "Wi-Fi sized and placed for your floor plan, indoor and outdoor." },
      { label: "UniFi switching", note: "Managed switches with PoE to power access points and cameras over the same cable." },
      { label: "Structured cabling", note: "Cat6 runs, terminations, patch panels and rack build-out." },
    ],
    includes: [
      "Site survey and network design for your building",
      "Ubiquiti UniFi installation and configuration",
      "Business Wi-Fi with full-building coverage",
      "Firewall configuration and threat protection",
      "Network segmentation for guests, staff and devices",
      "Secure VPN for remote and travelling staff",
      "Structured cabling, patch panels and rack cleanup",
      "Ongoing monitoring, firmware updates and support",
    ],
    outcomes: [
      { name: "Wi-Fi that reaches every corner", description: "Access points placed and tuned for your building, not guessed at." },
      { name: "Enterprise-grade protection", description: "Firewall, content filtering and intrusion detection on every site." },
      { name: "Secure remote work", description: "Staff connect from home or the road without exposing your network." },
      { name: "No licensing fees", description: "UniFi hardware carries no per-device subscription, so the cost stops at the equipment." },
    ],
    faqs: [
      {
        q: "Can you work with the equipment we already have?",
        a: "Sometimes. If it is business-grade and not end-of-life, we will often keep switches and cabling and replace only what is holding the network back. We will tell you plainly when keeping something costs more in support time than replacing it.",
      },
      {
        q: "How long does an install take?",
        a: "A small office is usually a day. A building needing new cable runs takes longer, and we schedule the disruptive part around your hours where we can.",
      },
      {
        q: "Do you install outside New Albany?",
        a: "Yes. We regularly work across North Mississippi including Tupelo, Oxford, Pontotoc, Ripley, Booneville and Corinth.",
      },
      {
        q: "Will we be able to see the network ourselves?",
        a: "If you want to. UniFi has a clear interface and we are happy to give you visibility into it. Most clients would rather we just watch it, and that is fine too.",
      },
    ],
    related: ["security-cameras", "managed-it", "multi-site"],
  },

  {
    slug: "security-cameras",
    title: "Security Camera Systems",
    shortTitle: "Security Cameras",
    serviceType: "Security camera installation",
    metaTitle: "Business Security Cameras, North Mississippi",
    metaDescription:
      "UniFi Protect camera systems for North Mississippi businesses. Clear day and night video, smart alerts and on-site storage with no monthly cloud fee.",
    short:
      "Professional UniFi Protect camera systems with crisp video, smart alerts and remote viewing from your phone.",
    lead: "See what is happening at your business day or night, from anywhere. We design and install UniFi Protect systems sized to your property and budget.",
    problem: {
      heading: "Most camera systems fail at exactly the wrong moment",
      body: [
        "The time a camera system matters is the time you need to hand footage to an insurer or a police officer. That is when people discover the problems: the resolution is too low to read a plate or recognise a face, the night footage is a white smear of headlight glare, the system overwrote the incident three days ago, or nobody can remember the login.",
        "Cheap systems are not cheap when they fail that test. They are the full cost of the incident plus the cost of the system.",
      ],
    },
    sections: [
      {
        heading: "Coverage is a design problem, not a camera count",
        body: [
          "The question is never how many cameras. It is what you need to be able to prove, and where the light is coming from.",
          "Identification needs far more detail than general observation — recognising who someone is takes several times the pixel density of simply seeing that a person walked through. A camera pointed at a doorway with bright afternoon sun behind it will silhouette everyone who walks through unless the exposure is handled for it. Entrances, registers, stockrooms, loading areas and car parks each need different placement and different lenses.",
          "We plan for what you actually need to see, then size the system to it.",
        ],
      },
      {
        heading: "Your footage stays on your property",
        body: [
          "This is the decision that costs most businesses the most money over time, and it is usually made without anyone explaining the trade-off.",
          "Cloud camera systems are cheaper on day one and charge you per camera, per month, forever — usually with tiers that limit how far back you can look. Cancel the subscription and the footage goes with it. Over a five-year life, the subscription on a modest system commonly costs more than the hardware did.",
          "We install systems that record to a network video recorder on site. The footage is yours, it is on your property, and there is no monthly bill attached to keeping it. You still get remote viewing on your phone from anywhere — the difference is where the recording lives and who controls access to it.",
          "There is one honest caveat: on-site recording means the recorder itself is a physical target, so it goes somewhere secure rather than on the counter next to the till. That is a placement decision, and we handle it during design.",
        ],
      },
      {
        heading: "Alerts you will not immediately turn off",
        body: [
          "The fastest way to make a camera system useless is to set it to alert on any motion. Within a week you have learned to ignore it, because a cat, a passing truck and a shadow at dusk all look like motion.",
          "Modern detection distinguishes people and vehicles from everything else, and can be restricted to zones that matter — the loading door after hours, not the road beyond it. Configured properly, an alert means something happened worth looking at.",
        ],
      },
      {
        heading: "Cameras and the network are the same project",
        body: [
          "Cameras run over your network and draw power over the same cable. A camera system dropped onto an already-struggling network makes both worse.",
          "That is why we treat them as one job: cameras on their own network segment so they cannot reach your business systems, switching sized to power them, and recording storage calculated for how many days of retention you actually want rather than whatever the box happened to come with.",
        ],
      },
    ],
    equipment: [
      { label: "UniFi Protect cameras", note: "Indoor, outdoor and licence-plate models with infrared night vision." },
      { label: "Network video recorder", note: "On-site recording sized to the retention you need, not a default." },
      { label: "PoE switching", note: "Power and data to each camera over one cable run." },
      { label: "Remote viewing", note: "Live and recorded footage on phone and desktop, from anywhere." },
    ],
    includes: [
      "Walkthrough, camera placement and system design",
      "Professional installation, mounting and cabling",
      "On-site recording sized to your retention needs",
      "Person and vehicle detection with zone-based alerts",
      "Remote viewing on phone and desktop",
      "Network segmentation so cameras stay isolated",
      "Ongoing maintenance, firmware updates and expansion",
    ],
    outcomes: [
      { name: "Clear video, day and night", description: "High-resolution cameras with night vision, placed for the light you actually have." },
      { name: "Alerts that matter", description: "Smart detection for people and vehicles, not every passing shadow." },
      { name: "Your footage stays yours", description: "Recorded on site with no monthly cloud fees and no third party holding it." },
      { name: "Grows with you", description: "Add cameras or locations without replacing the system." },
    ],
    faqs: [
      {
        q: "How many days of footage will we keep?",
        a: "That is a design decision we make with you. Two weeks is common for a small retail site; longer retention costs more storage and we will price both so you can choose.",
      },
      {
        q: "Can I see the cameras on my phone?",
        a: "Yes, live and recorded, from anywhere with an internet connection.",
      },
      {
        q: "Do you charge a monthly fee for the cameras?",
        a: "Not for the footage. The system records to a recorder on your property, so there is no per-camera subscription to keep your own video.",
      },
      {
        q: "Can you add to a system we already have?",
        a: "If it is a platform we can work with, often yes. If it is a proprietary system at end of life, we will be straight with you about whether extending it is throwing good money after bad.",
      },
    ],
    related: ["networking", "managed-it", "multi-site"],
  },

  {
    slug: "cloud",
    title: "Cloud & Microsoft 365",
    shortTitle: "Cloud & Microsoft 365",
    serviceType: "Cloud and Microsoft 365 migration and support",
    metaTitle: "Microsoft 365 Migration in Mississippi",
    metaDescription:
      "Microsoft 365 and Google Workspace migration for Mississippi businesses. Email moved without downtime, MFA enabled properly, cloud data backed up.",
    short:
      "Email, files and collaboration set up right: Microsoft 365 or Google Workspace, migrated, secured and backed up.",
    lead: "Move to the cloud without the headaches. We handle migration, security and backups so your team can work from anywhere with confidence.",
    problem: {
      heading: "Two ways this usually goes wrong",
      body: [
        "The first is the migration itself. Email is the one system a business genuinely cannot be without for a day, and a badly planned move loses mail, breaks calendar invitations, strands shared mailboxes or leaves half the office unable to send for an afternoon.",
        "The second is quieter and more common: the migration works, and then nothing else happens. Multi-factor authentication never gets switched on because it seemed like a hassle. The departing employee's mailbox stays licensed and active for a year. Nobody realises that Microsoft hosting your email is not the same as Microsoft backing it up for you.",
        "Business email compromise — an attacker getting into a mailbox and quietly redirecting an invoice payment — is one of the most expensive things that happens to small businesses, and it is overwhelmingly preventable with configuration that takes an afternoon.",
      ],
    },
    sections: [
      {
        heading: "Migration, planned and tested",
        body: [
          "We start by working out what actually has to move: mailboxes and their sizes, shared and resource mailboxes, distribution lists, calendars, contacts, public folders, and file shares with their permissions.",
          "Then we pick an approach that fits. A small office can often move in a single cutover over a weekend. A larger one moves in batches so there is never a moment where the whole business is mid-migration. Either way we test with a pilot group first, keep the old system reachable until the new one is verified, and handle the DNS and mail-flow records so that mail does not bounce during the switch.",
        ],
      },
      {
        heading: "Security configuration that is not optional",
        body: [
          "Multi-factor authentication on every account is the single highest-value thing a small business can do for its own security, and it is included as standard rather than offered as an upgrade.",
          "Beyond that we configure conditional access rules, anti-phishing and impersonation protection, and — importantly — alerting on the specific things that indicate an account has been compromised, such as a mailbox rule that silently forwards or deletes incoming mail. That rule is the fingerprint of an invoice-redirection attack, and catching it early is the difference between an incident and a loss.",
        ],
      },
      {
        heading: "The backup gap nobody mentions",
        body: [
          "Microsoft and Google run the infrastructure. They are explicit that protecting your data within it is your responsibility, and their retention windows are shorter than most businesses assume.",
          "If an employee deletes a folder and nobody notices for two months, or ransomware encrypts a synced document library, or a departing employee empties their own mailbox, the platform's own recovery options may well have expired. We configure independent backup of cloud mail and files, so recovery does not depend on noticing quickly.",
        ],
      },
      {
        heading: "Licensing, right-sized",
        body: [
          "Microsoft 365 licensing is genuinely confusing, and most small businesses are paying for at least one tier they do not use or one seat belonging to someone who left.",
          "We review what you are paying for against what your people actually need, and adjust. It is not unusual for this to pay for a meaningful share of the migration itself.",
        ],
      },
    ],
    includes: [
      "Microsoft 365 and Google Workspace setup",
      "Email, calendar and file migration, planned and tested",
      "Multi-factor authentication across all accounts",
      "Conditional access and anti-phishing policy",
      "Independent backup of cloud mail and files",
      "Shared drives, permissions and collaboration setup",
      "Staff onboarding and offboarding procedures",
      "Licence review and ongoing cost management",
    ],
    outcomes: [
      { name: "Work from anywhere", description: "Email, files and calendars on every device, securely." },
      { name: "Protected accounts", description: "MFA, conditional access and phishing protection on by default." },
      { name: "Backed up independently", description: "Cloud data is backed up separately, so a deleted mailbox is not gone for good." },
      { name: "Right-sized licensing", description: "Pay for the plans your people actually use, reviewed as the team changes." },
    ],
    faqs: [
      {
        q: "Will we lose email during the migration?",
        a: "No. The old system stays reachable until the new one is verified, and mail flow is cut over deliberately rather than all at once and hoped for.",
      },
      {
        q: "Should we choose Microsoft 365 or Google Workspace?",
        a: "Usually whichever your industry's software expects. If you rely heavily on Excel or on line-of-business applications built around Office, Microsoft 365 is the easier fit. If your team already lives in Google tools, moving them has a cost and little benefit.",
      },
      {
        q: "Is Microsoft not already backing up our email?",
        a: "Not in the way most people assume. They keep the service running and offer limited retention, which is different from a backup you can restore from months later. We configure independent backup for exactly this reason.",
      },
      {
        q: "Can you move us from an old on-site Exchange server?",
        a: "Yes, and it is one of the more common jobs we do. Ageing on-site mail servers are usually both the largest security exposure and the largest single hardware risk a small business is carrying.",
      },
    ],
    related: ["managed-it", "networking", "multi-site"],
  },

  {
    slug: "multi-site",
    title: "Multi-Site IT Management",
    shortTitle: "Multi-Site",
    serviceType: "Multi-site IT management",
    metaTitle: "Multi-Location IT Management, Mississippi",
    metaDescription:
      "One standard, one help desk and one contact across every location. Centralised monitoring and site-to-site VPN for multi-location Mississippi businesses.",
    short:
      "One standard, one help desk and one point of contact across every location you operate.",
    lead: "Running more than one location should not mean running more than one IT setup. We centralize monitoring, security and support so every site works the same way.",
    problem: {
      heading: "Every location becomes its own island",
      body: [
        "Multi-site IT problems rarely start as a decision. The second location opened and whoever was available set it up. The third was handled by a different contractor. Five years later each site has different equipment, different passwords, different internet providers and a different idea of what normal looks like.",
        "The cost shows up as time. Nobody can answer a simple question — is that site down, or is it just that phone? — without driving there. Staff who move between locations find nothing works the same way. Opening a new site means starting from scratch again, because there is no pattern to copy.",
      ],
    },
    sections: [
      {
        heading: "One standard, applied everywhere",
        body: [
          "We build a single template for what a Net-Tech site looks like: the same gateway and access point family, the same network layout, the same security policy, the same naming, the same guest network behaviour.",
          "Standardisation is not tidiness for its own sake. It is what makes every subsequent thing cheap. A firmware update or a policy change goes out to every location at once. A fault at one site is diagnosed against a known-good pattern rather than investigated from first principles.",
        ],
      },
      {
        heading: "Visibility from one place",
        body: [
          "Every site reports into one dashboard. Which locations are online, which access points are struggling, which internet connection dropped at four this morning and came back on its own.",
          "This is the part that changes how a multi-location business operates day to day. The question stops being whether there is a problem somewhere and becomes which problem to deal with first.",
        ],
      },
      {
        heading: "Connecting sites securely",
        body: [
          "Where locations need to share systems — a central server, a shared drive, a point-of-sale or management platform — we connect them with site-to-site VPN so the traffic between them is encrypted and the systems behave as if they were in the same building.",
          "Where they do not need to share, we deliberately keep them separate. A problem at one location should not be able to become a problem at all of them, and that containment is a design decision made up front.",
        ],
      },
      {
        heading: "Opening the next location",
        body: [
          "Once the standard exists, a new site becomes a checklist rather than a project. We know what hardware to order, how it is configured, what the cabling needs to look like and how long it takes.",
          "The practical result is that IT stops being the thing that delays an opening. We can have a location online in days, configured the same way as every other one, before the doors open.",
        ],
      },
    ],
    includes: [
      "Centralised monitoring across all locations",
      "Standardised network, security and Wi-Fi policy",
      "Site-to-site VPN and shared resource access",
      "One help desk and one point of contact for every site",
      "Backup and recovery configured per location",
      "Rollout playbook for opening new sites",
      "Consolidated reporting and IT budgeting",
    ],
    outcomes: [
      { name: "Consistency everywhere", description: "Same Wi-Fi, same security, same experience at every site." },
      { name: "One call for any location", description: "Staff at any branch reach the same team that knows your setup." },
      { name: "Open new sites faster", description: "A repeatable playbook gets a new location online in days, not weeks." },
      { name: "Full visibility", description: "See the health of every site from a single dashboard." },
    ],
    faqs: [
      {
        q: "Do all our locations have to be in Mississippi?",
        a: "No. Monitoring and management are remote, so sites can be anywhere. On-site work outside North Mississippi is something we handle case by case.",
      },
      {
        q: "We have different equipment at every site. Is that a problem?",
        a: "It is the normal starting point. We usually standardise gradually, replacing equipment at natural refresh points rather than rebuilding everything at once.",
      },
      {
        q: "How many locations before this makes sense?",
        a: "Two is often enough to feel the pain, particularly if they need to share systems. By three or four the savings in time alone usually justify it.",
      },
    ],
    related: ["networking", "managed-it", "cloud"],
  },
];

export const serviceBySlug = (slug: string) => services.find((s) => s.slug === slug);

export const advantages = [
  {
    title: "Professional-grade equipment",
    points: [
      "Only Ubiquiti hardware, professionally deployed",
      "Obsessive attention to detail in every install",
      "No hidden fees or subscriptions",
    ],
  },
  {
    title: "Hassle-free management",
    points: [
      "Simple, intuitive management tools",
      "We manage it all for you",
      "Plain-English reporting",
    ],
  },
  {
    title: "Solutions that grow with you",
    points: [
      "From a single office to multiple sites",
      "Redundant, reliable architecture",
      "Scales as your business does",
    ],
  },
  {
    title: "Proactive support",
    points: [
      "Ongoing updates at no extra cost",
      "Rapid security patching",
      "Problems caught before they cost you",
    ],
  },
];
