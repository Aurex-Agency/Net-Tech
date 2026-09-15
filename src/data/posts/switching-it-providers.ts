import type { Post } from "./types";

export const post: Post = {
  slug: "switching-it-providers",
  title: "Switching IT providers without losing the keys to your own practice",
  metaTitle: "How to Switch IT Providers Safely",
  metaDescription:
    "What to get hold of before you leave an IT provider, what a clean handover looks like, and the questions that tell you whether a new provider is worth hiring.",
  excerpt:
    "The risk in changing providers is not the changeover. It is discovering that nobody at your practice owns the accounts, the domain or the passwords.",
  date: "2026-09-15",
  category: "cost",
  tags: ["Switching", "Vendor management", "Planning"],
  relatedServices: ["managed-it"],
  relatedPosts: ["managed-it-cost-medical-practice", "hipaa-it-checklist-small-practice"],
  body: [
    {
      type: "p",
      text: "Most practices stay with an IT provider well past the point of being happy, for one reason: the fear that leaving will break something nobody knows how to fix.",
    },
    {
      type: "p",
      text: "That fear is not irrational. But the risk is not really in the changeover. It is in what a practice discovers about its own setup when it starts asking questions, and the fix for that is to start asking now, whether or not you are planning to move.",
    },

    { type: "h2", text: "The ownership audit" },
    {
      type: "p",
      text: "Do this today. It takes an afternoon and it is worth doing even if you love your current provider, because it protects you if they retire, sell up or simply stop answering.",
    },
    {
      type: "p",
      text: "For each item below, the question is not whether it works. It is whose name it is in.",
    },
    {
      type: "ul",
      items: [
        "Your domain name. Who is the registrant and who controls the account? This is the most important one on the list, because whoever holds it controls your email and your website.",
        "Your Microsoft 365 or Google Workspace tenant. Does your practice hold a global administrator account, or does only the provider?",
        "Your website hosting and DNS.",
        "Your backup platform. Where does the data physically go, and can you reach it without your provider?",
        "Your firewall and network equipment. Do you have administrator credentials?",
        "Your practice management, billing and clearinghouse portals. Are the master accounts in the practice's name?",
        "Any software licences. Bought in your name, or on the provider's account?",
      ],
    },
    {
      type: "callout",
      title: "The uncomfortable one",
      text: "If your domain is registered to your IT provider rather than to your practice, fix that before you do anything else, regardless of whether you are switching. It is the single point that can hold an entire organisation hostage, and sorting it out while the relationship is good takes one email.",
    },

    { type: "h2", text: "What a clean handover actually contains" },
    {
      type: "p",
      text: "When you do move, this is the list to ask for. A professional outgoing provider will hand it over without drama, because they know the industry is small and reputations travel.",
    },
    {
      type: "ol",
      items: [
        "Administrative credentials for every system, transferred securely rather than emailed in a spreadsheet.",
        "A network diagram, or at minimum a description of what connects to what.",
        "An inventory of machines: what they are, how old, what they run, warranty status.",
        "Details of every third-party service, what it costs and when it renews.",
        "Backup configuration: what is backed up, how often, where it goes, when it was last tested.",
        "Any documentation of custom configuration, particularly anything unusual that will not be obvious.",
        "A list of the vendor support contacts and account numbers they have been dealing with on your behalf.",
      ],
    },
    {
      type: "p",
      text: "Realistically you may get some of it. Practices often find that the documentation does not exist because the knowledge lived in one technician's head. That is not necessarily bad faith; it is just how a lot of small providers operate.",
    },

    { type: "h2", text: "What to expect if nothing is documented" },
    {
      type: "p",
      text: "This is the normal case rather than the exception, and it is worth setting expectations honestly.",
    },
    {
      type: "p",
      text: "The first phase of taking over an undocumented setup is discovery: working out what exists, what it does and how it is configured, because nobody can support a system they cannot see. That takes real time and should be quoted separately and charged once, not folded into your monthly fee forever.",
    },
    {
      type: "p",
      text: "Ask any prospective provider how they handle it. An answer of no charge should make you suspicious rather than pleased, because it usually means the discovery is not happening and they are planning to learn your setup on your emergencies.",
    },

    { type: "h2", text: "Questions worth asking a new provider" },
    {
      type: "p",
      text: "Beyond price, these separate providers more reliably than anything on a brochure.",
    },
    {
      type: "ul",
      items: [
        "Will you sign a Business Associate Agreement? For a healthcare practice this is non-negotiable, and hesitation is itself the answer.",
        "Who exactly answers when I call, and what are the hours? A named team beats a support portal.",
        "How often do you test restores from our backups, and will you show me the result?",
        "What happens to our documentation if we leave? A provider who commits to a clean handover is telling you something about their confidence.",
        "Is anything on this quote a subscription that renews, and what happens if it lapses?",
        "Who owns the licences and accounts you set up for us?",
      ],
    },

    { type: "h2", text: "Timing the change" },
    {
      type: "p",
      text: "There is rarely a perfect moment, but some are better than others. Avoid switching in the same window as a software upgrade, a location opening or your busiest season. Give the incoming provider time to do discovery before they take responsibility for anything.",
    },
    {
      type: "p",
      text: "A sensible overlap is a few weeks where the new provider has access and is learning the environment while the old one is still contactable. It costs slightly more for a month. It is considerably cheaper than a hard cutover that goes wrong.",
    },

    { type: "h2", text: "You might not need to switch" },
    {
      type: "p",
      text: "Worth saying, because we are not neutral here and you should know that.",
    },
    {
      type: "p",
      text: "Sometimes a practice is frustrated by something specific and fixable, and raising it plainly with the current provider resolves it. Sometimes an assessment confirms the existing setup is in decent shape and the irritation is about communication rather than competence.",
    },
    {
      type: "p",
      text: "Plenty of the assessments we do end with us telling a practice their current provider is doing fine. That is a legitimate outcome and it costs you nothing to find out.",
    },
    {
      type: "callout",
      title: "Want a second opinion?",
      text: "We will look at what you have and tell you honestly where it stands, including when the answer is that you are in good hands already. Free, no obligation, no contract required. Call (662) 539-7787.",
    },
  ],
};
