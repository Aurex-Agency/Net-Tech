import type { Post } from "./types";

export const post: Post = {
  slug: "why-we-work-with-businesses-only",
  title: "Why we work with businesses only",
  metaTitle: "Why Net-Tech Works With Businesses Only",
  metaDescription:
    "Net-Tech does not take on residential work. Why that is, what it means if you are a homeowner, and what it means for the commercial clients we do look after.",
  excerpt:
    "We get asked this weekly, usually by someone who has been passed around. The honest answer is that doing both badly serves nobody, so we picked one.",
  date: "2026-09-15",
  category: "cost",
  tags: ["Commercial only", "How we work"],
  relatedServices: ["managed-it", "networking"],
  relatedPosts: ["managed-it-cost-medical-practice", "hipaa-it-checklist-small-practice"],
  body: [
    {
      type: "p",
      text: "Somebody calls about a laptop that will not start, or home Wi-Fi that drops in the back bedroom. We say we only work with businesses. They ask why, usually a bit annoyed, and fairly so, because being told no is irritating when you just want the thing fixed.",
    },
    {
      type: "p",
      text: "So here is the actual answer, and then a genuinely useful alternative if you are the person with the laptop.",
    },

    { type: "h2", text: "The two jobs are less similar than they look" },
    {
      type: "p",
      text: "From outside, business IT looks like home IT with more computers. It is not, and the difference is not scale.",
    },
    {
      type: "p",
      text: "A home network has one owner, no compliance obligations, no audit trail, and nobody loses revenue when it is down for an afternoon. A clinic that cannot check patients in is losing appointments it will never get back, has records it must be able to account for, and has half a dozen vendors whose software all has to keep talking to each other.",
    },
    {
      type: "p",
      text: "Those need different equipment, different monitoring, different documentation and a different response posture. Trying to run both means doing neither properly, and the one that quietly suffers is always the business work, because the emergency that shouts loudest wins the afternoon.",
    },

    { type: "h2", text: "What it means for the businesses we do look after" },
    {
      type: "p",
      text: "This is the part that matters if you are a client, and it is the real reason for the policy.",
    },
    {
      type: "ul",
      items: [
        "When you call, the technician is not on a residential call-out across the county. Our day is structured around commercial clients, which is why on-site help is usually a short drive rather than a slot next week.",
        "We keep a narrow set of equipment we know deeply rather than whatever a homeowner happened to buy. That is why a fault at one client is diagnosed against a known-good pattern instead of investigated from scratch.",
        "Our documentation, monitoring and backup practices are built for organisations that have to evidence them. That overhead only makes sense if every client needs it.",
        "We can say yes to a Business Associate Agreement and mean it, because handling regulated data is normal here rather than an exception.",
      ],
    },

    { type: "h2", text: "What counts as a business" },
    {
      type: "p",
      text: "Broadly, if there are staff, customers or patients, and being offline costs money, we can help. In practice that means clinics, therapy and rehab practices, dental and medical offices, manufacturers and their suppliers, professional offices, retail, restaurants, and businesses running more than one location.",
    },
    {
      type: "p",
      text: "A few edge cases come up often enough to answer directly.",
    },
    {
      type: "ul",
      items: [
        "A home office for a real business. Usually yes, if it is genuinely a business function rather than the family computer. Ask us.",
        "A rental or short-term let you operate commercially. Yes, and it is a more common job than people expect, particularly around Oxford.",
        "A church, clinic or non-profit. Yes. Non-commercial is not the same as non-business.",
        "A single-person business with one laptop. Honestly, probably not worth a managed plan, and we will say so rather than sell you one. As-needed support may still make sense.",
      ],
    },

    { type: "h2", text: "If you are a homeowner reading this" },
    {
      type: "p",
      text: "You deserve a better answer than no, so here are the things that fix most of what people call us about.",
    },
    {
      type: "p",
      text: "For Wi-Fi that dies at the back of the house: the usual culprit is one router doing all the work from wherever the cable comes in. A mesh system, with units placed roughly evenly rather than all at one end, solves most homes. A range extender usually does not, because it repeats traffic on the same channel and halves the throughput for everything behind it.",
    },
    {
      type: "p",
      text: "For a computer that has become slow: a mechanical hard drive in a machine more than a few years old is the most common cause, and replacing it with a solid state drive transforms the machine for far less than a new one costs. Any local repair shop can do this.",
    },
    {
      type: "p",
      text: "For anything involving lost photos or documents: stop using the machine immediately and take it somewhere. Continuing to use a failing drive is how recoverable data becomes unrecoverable.",
    },
    {
      type: "p",
      text: "And the one piece of advice that applies to everyone regardless: turn on multi-factor authentication for your email, today. Your email account is the master key to everything else you own, and it is the account people most often leave protected by a password alone.",
    },

    { type: "h2", text: "No hard feelings" },
    {
      type: "p",
      text: "Saying no to work is not something any small business does lightly, and we would rather point you somewhere useful than take a job we are not set up to do well. If you run a business in New Albany, Tupelo, Oxford or anywhere across North Mississippi, we would like to hear from you.",
    },
    {
      type: "callout",
      title: "Run a business in North Mississippi?",
      text: "Free assessment, straight answer about what we would change, fixed quote, no contract required to get a number. Call (662) 539-7787.",
    },
  ],
};
