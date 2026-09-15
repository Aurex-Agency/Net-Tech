import type { Post } from "./types";

export const post: Post = {
  slug: "internet-down-checklist",
  title: "Business internet down? Ten minutes before you call anyone",
  metaTitle: "Business Internet Down: A 10-Minute Checklist",
  metaDescription:
    "A practical checklist for when your business internet stops. Nine checks in order, what each one tells you, and the information to have ready before you phone the provider.",
  excerpt:
    "Half the outages we get called to are not outages. Working through these in order either fixes it or tells you exactly who to call, which saves an afternoon either way.",
  date: "2026-09-15",
  category: "networking",
  tags: ["Troubleshooting", "Internet", "Downtime"],
  relatedServices: ["managed-it", "networking"],
  relatedPosts: ["clinic-wifi-drops-treatment-rooms", "unifi-five-year-cost"],
  body: [
    {
      type: "p",
      text: "Print this and put it somewhere the front desk can find it. It is written for whoever is standing there when things stop, not for a technician.",
    },
    {
      type: "p",
      text: "Work through it in order. Each step narrows down where the fault is, and by the end you either have it working or you know precisely who to phone and what to tell them.",
    },

    { type: "h2", text: "1. Is it everyone, or one person?" },
    {
      type: "p",
      text: "Ask someone else to check. This single question splits the problem in half and it is the one people skip.",
    },
    {
      type: "p",
      text: "If it is one machine, it is not an internet outage and you can stop reading the rest of this. Restart that machine, check its network cable is seated, and check whether it is connected to the right Wi-Fi network rather than a neighbour's or a guest network.",
    },
    {
      type: "p",
      text: "If it is everybody, carry on.",
    },

    { type: "h2", text: "2. Is it wired, wireless, or both?" },
    {
      type: "p",
      text: "Find a machine plugged in with a cable and try it. Then try a phone on the Wi-Fi.",
    },
    {
      type: "ul",
      items: [
        "Wired works, wireless does not: your internet is fine and the problem is your Wi-Fi equipment. Skip to step 7.",
        "Wireless works, wired does not: likely a switch or a cable, not the provider.",
        "Neither works: keep going.",
      ],
    },

    { type: "h2", text: "3. Try your phone on mobile data" },
    {
      type: "p",
      text: "Turn Wi-Fi off on a phone and load any website. This confirms whether the wider internet is up and, more usefully, gives you a working device to look things up on while everything else is down.",
    },

    { type: "h2", text: "4. Look at the lights on the modem or the box from your provider" },
    {
      type: "p",
      text: "This is the highest-value thirty seconds in the whole list. Every provider's equipment labels these slightly differently, but the pattern is consistent.",
    },
    {
      type: "ul",
      items: [
        "A power light that is off means check the plug and the socket before anything else.",
        "A light that names the connection itself, often labelled DSL, WAN, Internet, Online or Fiber, is the one that matters. Solid usually means the line is up. Blinking usually means it is trying and failing to establish. Off or red means the line is down.",
        "If that light is blinking or red, the fault is almost certainly on the provider's side or in the line coming into the building, and nothing you do inside will change it.",
      ],
    },
    {
      type: "p",
      text: "Take a photo of the lights. It is genuinely useful when you get through to support, and it saves them asking you to describe it.",
    },

    { type: "h2", text: "5. Restart things in the right order, once" },
    {
      type: "p",
      text: "Order matters and most people get it wrong by restarting everything simultaneously.",
    },
    {
      type: "ol",
      items: [
        "Power off the modem or provider box, the router or firewall, and the switches. All of them.",
        "Wait a full sixty seconds. Actually count it. This is not superstition: it lets the provider's end release the session rather than hold it open.",
        "Power on the modem or provider box first, on its own. Wait until its lights settle, which can take two or three minutes.",
        "Then power on the router or firewall. Wait for it to come up.",
        "Then the switches, then the access points if they are separately powered.",
      ],
    },
    {
      type: "p",
      text: "Do this once. If it does not work, doing it again will not help, and repeated restarts make it harder for anyone to diagnose afterwards.",
    },
    {
      type: "callout",
      title: "If restarting fixes it more than about twice a year",
      text: "That is not a fix, it is a symptom. Equipment that needs regular restarts is usually failing, overheating, or running firmware with a memory leak. Worth someone looking at properly rather than living with.",
    },

    { type: "h2", text: "6. Check the obvious physical things" },
    {
      type: "p",
      text: "Feel the top of the router and the switch. If a device is too hot to keep your hand on comfortably, it may be throttling or crashing, and the cupboard it lives in may have no airflow.",
    },
    {
      type: "p",
      text: "Check that nothing has been unplugged. Cleaners, contractors and anyone hunting for a socket to charge a phone are all documented causes of a business-wide outage. Look for a cable hanging loose, and check whether anything was moved yesterday.",
    },

    { type: "h2", text: "7. If it is only the Wi-Fi" },
    {
      type: "p",
      text: "Check the access points have power. Most business access points are powered over the same cable that carries data, from the switch, so a switch that has lost power takes the Wi-Fi with it even though the internet is fine.",
    },
    {
      type: "p",
      text: "Check whether the network name is even visible on a phone. Visible but will not connect is a different fault from not visible at all, and it is worth knowing which you have.",
    },

    { type: "h2", text: "8. Work out whether it is the whole building" },
    {
      type: "p",
      text: "If you are in a shared building or a plaza, ask a neighbour. A provider outage affecting the street is common, and it immediately tells you this is a waiting problem rather than a fixing problem.",
    },
    {
      type: "p",
      text: "Most providers also have a status page or an automated line that will tell you about a known outage in your area, which is faster than waiting to speak to somebody.",
    },

    { type: "h2", text: "9. Call, with the information ready" },
    {
      type: "p",
      text: "If you are calling the provider, having this to hand turns a forty-minute call into a ten-minute one.",
    },
    {
      type: "ul",
      items: [
        "The account number, which is on the bill rather than on the equipment.",
        "The service address, which is occasionally different from your billing address.",
        "What the lights on their box are doing, in their words: which light, solid or blinking, what colour.",
        "What time it stopped.",
        "That you have already restarted in the correct order and it did not help.",
        "Whether it is wired, wireless or both.",
      ],
    },
    {
      type: "p",
      text: "Ask for a ticket number and write it down. If this turns into a multi-day problem, that number is the only thing that makes the next call easier.",
    },

    { type: "h2", text: "What to do while you wait" },
    {
      type: "p",
      text: "A phone hotspot will usually keep a card terminal and one or two critical machines going. It is worth knowing in advance which of your systems can run on a hotspot and which cannot, so that you are testing this during a quiet week rather than during the outage.",
    },
    {
      type: "p",
      text: "For businesses where being offline stops the day entirely, a second connection from a different provider, or a cellular backup that fails over automatically, moves an outage from a crisis to an inconvenience. It is not expensive relative to a lost day.",
    },
    {
      type: "callout",
      title: "Tired of being the one who works out whose fault it is?",
      text: "Dealing with providers is part of a managed plan. You call us, we work out whose problem it is, and we sit on hold instead of you. Call (662) 539-7787.",
    },
  ],
};
