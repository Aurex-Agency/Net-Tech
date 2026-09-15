import type { Post } from "./types";

export const post: Post = {
  slug: "clinic-wifi-drops-treatment-rooms",
  title: "Why your clinic Wi-Fi dies in the back treatment rooms",
  metaTitle: "Why Clinic Wi-Fi Dies in Treatment Rooms",
  metaDescription:
    "Therapists losing notes halfway across the gym is almost never an internet problem. What actually causes it in clinic and rehab buildings, and how it gets fixed.",
  excerpt:
    "A therapist walks from the front desk to the back bay and the documentation stops saving. Practices assume they need faster internet. They almost never do.",
  date: "2026-09-15",
  category: "networking",
  tags: ["Wi-Fi", "Rehab clinics", "Troubleshooting"],
  relatedServices: ["networking", "managed-it"],
  relatedPosts: ["internet-down-checklist", "unifi-five-year-cost"],
  body: [
    {
      type: "p",
      text: "This is the most common call we get from therapy and rehab practices, and the description is almost word for word the same every time. The Wi-Fi is fine at the front desk. It is fine in the first treatment room. Somewhere around the back of the gym it gets unreliable, and a therapist trying to finish documentation on a tablet loses the session and has to walk back to a desktop to redo it.",
    },
    {
      type: "p",
      text: "The instinct is to call the internet provider and buy more bandwidth. That almost never helps, because bandwidth is not what is failing. Here is what actually is.",
    },

    { type: "h2", text: "Your building is the problem, not your connection" },
    {
      type: "p",
      text: "Wi-Fi is radio. Radio gets absorbed, reflected and blocked by what is between the transmitter and the device, and clinical buildings are full of exactly the wrong materials.",
    },
    {
      type: "ul",
      items: [
        "Metal is the worst offender. Exercise equipment frames, parallel bars, racking, filing cabinets and metal studs in the walls all reflect and block signal.",
        "Mirrors, which most therapy gyms have a lot of, are glass with a metal backing. They behave like a wall to Wi-Fi.",
        "Water absorbs the frequencies Wi-Fi uses, and a room full of people is a room full of water. A gym that tests fine when empty can degrade noticeably when it is busy.",
        "Tile, concrete, and the plaster-over-lath in older Main Street buildings all attenuate signal far more than modern drywall.",
      ],
    },
    {
      type: "p",
      text: "None of this is affected by how fast your connection is. You can have a gigabit fibre line and still have a dead corner forty feet from the access point.",
    },

    { type: "h2", text: "One access point cannot cover an open gym" },
    {
      type: "p",
      text: "This is the single most common design fault. A consumer router or a single business access point gets mounted near the front of the building, because that is where the internet comes in, and it is expected to cover the whole floor.",
    },
    {
      type: "p",
      text: "It cannot. A device at the far end of a large open space might still show one or two bars, which is what makes this confusing: the signal is technically present but so weak that the connection negotiates down to a very low data rate and drops packets. To the person holding the tablet that looks like the app freezing, not like a Wi-Fi problem.",
    },
    {
      type: "p",
      text: "A therapy gym usually needs two or three properly placed access points where it has one, and placement matters more than the model. Ceiling-mounted, spread out, aimed down into the space rather than tucked on a shelf behind a monitor.",
    },

    { type: "h2", text: "Roaming is the part nobody configures" },
    {
      type: "p",
      text: "Here is the failure that specifically affects clinical staff, because it only shows up when people walk while they work.",
    },
    {
      type: "p",
      text: "When you move from the coverage of one access point to another, your device has to hand off. Devices are stubborn about this: left alone, a tablet will cling to the access point it first connected to long after a closer one would serve it better, because it can still technically hear the old one. It only gives up when the connection fails completely, which is the moment your therapist loses the note they were writing.",
    },
    {
      type: "p",
      text: "Fixing this is configuration rather than hardware. Transmit power gets turned down so the edges of each access point's coverage are cleaner, minimum data rates get set so devices are pushed to disconnect from a weak link rather than limp along, and the standards that help devices hand off get enabled. Done properly, a therapist walks the length of the gym and the session never notices.",
    },
    {
      type: "callout",
      title: "The quick tell",
      text: "If the problem is worst for staff who move around and barely affects people sitting at a fixed desk, it is a roaming problem, not a coverage or bandwidth problem.",
    },

    { type: "h2", text: "Adding a range extender usually makes it worse" },
    {
      type: "p",
      text: "When coverage falls short, somebody buys a range extender from a big-box store. It is a reasonable instinct and it usually backfires.",
    },
    {
      type: "p",
      text: "A typical extender repeats traffic on the same channel it receives it on, which roughly halves the usable throughput for everything connected through it. It also creates a second network name, or the same name with no coordination, so devices get confused about which to use. Two extenders is worse than one.",
    },
    {
      type: "p",
      text: "The proper fix is an access point with its own cable run back to the switch. That means pulling cable, which is the part practices are trying to avoid, and it is the part that actually solves it.",
    },

    { type: "h2", text: "Channel congestion, especially in a shared building" },
    {
      type: "p",
      text: "If your practice is in a professional building or a plaza, you are sharing the airwaves with everyone else in it. The 2.4 GHz band in particular has very few non-overlapping channels, and if four businesses have all left their equipment on the factory default, they are all shouting over one another.",
    },
    {
      type: "p",
      text: "Moving devices onto 5 GHz where possible, and planning channels rather than leaving them on automatic, usually produces an immediate improvement in a congested building.",
    },

    { type: "h2", text: "What a fix actually looks like" },
    {
      type: "p",
      text: "For a typical single-floor clinic, the work is:",
    },
    {
      type: "ol",
      items: [
        "Walk the building and measure. Not guess. Where does signal actually reach, where does it die, and what is in the way.",
        "Work out how many access points the space needs and where they mount, based on the floor plan rather than a rule of thumb.",
        "Pull cable to those positions and terminate it properly, with a patch panel so the next person can tell what is plugged in where.",
        "Configure one system managing all of the access points, with the roaming settings, channel plan and transmit power set deliberately.",
        "Separate the networks while you are in there: clinical systems, staff, and a guest network for the waiting room that cannot reach either.",
        "Walk it again with a device and confirm the handoffs are clean.",
      ],
    },
    {
      type: "p",
      text: "A small clinic is usually a day. A larger building needing longer cable runs takes longer, and the disruptive part gets scheduled around your patients.",
    },

    { type: "h2", text: "Before you call anyone" },
    {
      type: "p",
      text: "Two things worth checking yourself, because occasionally they are the whole answer. First, look at where your access point actually is. If it is sitting on a shelf behind a monitor or inside a cabinet, moving it into open air can make a surprising difference. Second, check whether the problem happens on the 5 GHz network as well as 2.4 GHz, if you have both, because that tells you whether it is congestion or coverage.",
    },
    {
      type: "p",
      text: "If neither helps, it is a design problem, and buying faster internet will not touch it.",
    },
    {
      type: "callout",
      title: "We will come and measure it",
      text: "A site survey tells you what is actually happening rather than what anyone assumes. Free, no obligation, and you get a straight answer about whether it needs new equipment or just configuration. Call (662) 539-7787.",
    },
  ],
};
