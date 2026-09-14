export interface Service {
  slug: string;
  title: string;
  /** One-line summary used in lists and on the home page. */
  short: string;
  /** Opening paragraph on the services page. */
  lead: string;
  /** Concrete things Net-Tech does for this service. */
  includes: string[];
  /** What the customer gets out of it. */
  outcomes: { name: string; description: string }[];
}

export const services: Service[] = [
  {
    slug: "managed-it",
    title: "Managed IT & Help Desk",
    short:
      "Proactive monitoring, patching and a help desk that actually answers, so small problems never become big ones.",
    lead:
      "We keep your computers, servers and software running so you can focus on the business. One flat monthly fee, no surprise bills.",
    includes: [
      "Remote and on-site help desk",
      "Proactive monitoring and patching",
      "Workstation and server management",
      "Vendor management for internet, phones and copiers",
      "Backup and disaster recovery",
      "IT planning and budgeting",
    ],
    outcomes: [
      { name: "Predictable costs", description: "One flat monthly fee covers support, monitoring and maintenance." },
      { name: "Faster fixes", description: "Most issues are handled remotely, often the same business day." },
      { name: "Fewer surprises", description: "Failing drives, expiring licenses and risky updates get caught early." },
      { name: "One number to call", description: "Internet down? Copier jammed? Call us and we deal with the vendor." },
    ],
  },
  {
    slug: "networking",
    title: "Networking & Security",
    short:
      "Rock-solid business networks built on Ubiquiti UniFi: fast Wi-Fi, proper firewalls and secure remote access.",
    lead:
      "A slow or flaky network costs you every day. We design, install and manage Ubiquiti UniFi networks that simply work, with security built in from the start.",
    includes: [
      "Ubiquiti UniFi network design and installation",
      "Business Wi-Fi with full-building coverage",
      "Firewall configuration and threat protection",
      "Secure VPN for remote staff",
      "Structured cabling and rack cleanup",
      "24/7 network monitoring",
    ],
    outcomes: [
      { name: "Wi-Fi that reaches every corner", description: "Access points placed and tuned for your building, not guessed." },
      { name: "Enterprise-grade protection", description: "Firewall, content filtering and intrusion detection on every site." },
      { name: "Secure remote work", description: "Staff connect from home or the road without exposing your network." },
      { name: "No licensing fees", description: "UniFi hardware carries no per-device subscription, ever." },
    ],
  },
  {
    slug: "security-cameras",
    title: "Security Cameras",
    short:
      "Professional UniFi Protect camera systems with crisp video, smart alerts and remote viewing from your phone.",
    lead:
      "See what is happening at your business day or night, from anywhere. We design and install UniFi Protect systems sized to your property and budget.",
    includes: [
      "Camera placement and system design",
      "Professional installation and cabling",
      "Remote viewing on phone and desktop",
      "Motion detection and instant alerts",
      "Local, tamper-resistant video storage",
      "Ongoing maintenance and upgrades",
    ],
    outcomes: [
      { name: "Clear video, day and night", description: "High-resolution cameras with night vision and wide coverage." },
      { name: "Alerts that matter", description: "Smart detection for people and vehicles, not every passing shadow." },
      { name: "Your footage stays yours", description: "Recorded on site with no monthly cloud fees." },
      { name: "Grows with you", description: "Add cameras or locations without replacing the system." },
    ],
  },
  {
    slug: "cloud",
    title: "Cloud & Microsoft 365",
    short:
      "Email, files and collaboration set up right: Microsoft 365 or Google Workspace, migrated, secured and backed up.",
    lead:
      "Move to the cloud without the headaches. We handle migration, security and backups so your team can work from anywhere with confidence.",
    includes: [
      "Microsoft 365 and Google Workspace setup",
      "Email and file migration, planned and tested",
      "Multi-factor authentication and security policies",
      "Automated cloud backups",
      "Shared drives and collaboration tools",
      "License management and cost review",
    ],
    outcomes: [
      { name: "Work from anywhere", description: "Email, files and calendars on every device, securely." },
      { name: "Protected accounts", description: "MFA, conditional access and phishing protection on by default." },
      { name: "Backed up independently", description: "Cloud data is backed up separately, so a deleted mailbox is not gone for good." },
      { name: "Right-sized licensing", description: "Pay for the plans your people actually use." },
    ],
  },
  {
    slug: "multi-site",
    title: "Multi-Site Management",
    short:
      "One standard, one help desk and one point of contact across every location you operate.",
    lead:
      "Running more than one location should not mean running more than one IT setup. We centralize monitoring, security and support so every site works the same way.",
    includes: [
      "Centralized monitoring across all locations",
      "Standardized network and security policies",
      "Site-to-site VPN and shared resources",
      "Unified help desk for every location",
      "Backup and recovery for every site",
      "Rollout planning for new locations",
    ],
    outcomes: [
      { name: "Consistency everywhere", description: "Same Wi-Fi, same security, same experience at every site." },
      { name: "One call for any location", description: "Staff at any branch reach the same team that knows your setup." },
      { name: "Open new sites faster", description: "A repeatable playbook gets a new location online in days, not weeks." },
      { name: "Full visibility", description: "See the health of every site from a single dashboard." },
    ],
  },
];

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
