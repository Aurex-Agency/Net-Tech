import type { Post } from "./types";

export const post: Post = {
  slug: "security-cameras-clinic-placement",
  title: "Security cameras in a clinic: where they go, and where they cannot",
  metaTitle: "Security Cameras for Clinics and Rehab Facilities",
  metaDescription:
    "Camera placement for medical and rehab practices: what to cover, what to avoid, why footage of patients is a record you have to protect, and cloud versus on-site storage.",
  excerpt:
    "Practices want cameras for good reasons. The useful part of the conversation is about where they do not go, and what happens to footage once patients are in it.",
  date: "2026-09-15",
  category: "healthcare",
  tags: ["Cameras", "Privacy", "Rehab clinics"],
  relatedServices: ["security-cameras", "networking"],
  relatedPosts: ["hipaa-it-checklist-small-practice", "clinic-wifi-drops-treatment-rooms"],
  body: [
    {
      type: "p",
      text: "Practices ask us about cameras for a short list of sensible reasons. Entrances and car parks after dark, because staff leave late. Medication or supply storage. Liability cover in the therapy gym, because if a patient falls, what actually happened matters. Occasionally a specific incident that nobody wants repeated.",
    },
    {
      type: "p",
      text: "All reasonable. The part of the conversation that actually needs care is the other half: where cameras do not go, and what the footage becomes once patients appear in it.",
    },

    { type: "h2", text: "Footage with patients in it is a record" },
    {
      type: "p",
      text: "This is the point that reframes everything else. A camera covering a waiting room or a therapy gym is producing images of identifiable patients receiving care. That is information about their treatment, and it carries obligations: you have to control who can see it, know who did see it, decide how long you keep it and be able to account for all three.",
    },
    {
      type: "p",
      text: "Most practices have not thought of a camera system that way. They think of it as a security product rather than as something that generates records. The practical consequences are worth spelling out.",
    },
    {
      type: "ul",
      items: [
        "Access to live and recorded footage should be limited to named people, each with their own login, not a shared password at the front desk.",
        "There should be a retention period you chose deliberately, after which footage overwrites. Keeping everything forever is a liability, not a safeguard.",
        "Anyone with access to the recorder has access to patient images, which includes whoever maintains it. That is a business associate relationship and it should be covered by an agreement.",
        "If footage is ever handed to anyone, there should be a record of what was handed over and to whom.",
      ],
    },

    { type: "h2", text: "Where cameras should not go" },
    {
      type: "p",
      text: "Treatment rooms, examination rooms, changing areas, restrooms, and anywhere a patient would reasonably expect privacy. This is not a close call and no legitimate security need overrides it.",
    },
    {
      type: "p",
      text: "The harder cases are the ones in between, and they are where a practice benefits from thinking it through rather than mounting a camera and hoping.",
    },
    {
      type: "p",
      text: "An open therapy gym is the common one. Patients are in view, often partially undressed for treatment, and often in states of difficulty they would not want recorded. There is a genuine liability argument for coverage and a genuine privacy argument against it. Where practices land is usually a compromise: a camera covering the entrance to the gym and the equipment area rather than the treatment bays, angled to capture movement and incidents without dwelling on individuals.",
    },
    {
      type: "p",
      text: "The other frequent one is the front desk. A camera behind the desk pointed at the entrance is straightforward. A camera pointed at the desk itself will capture screens showing patient records and conversations about them, which is a different thing entirely.",
    },
    {
      type: "callout",
      title: "Confirm the specifics",
      text: "We design and install to what you decide, and we will tell you plainly when a position creates more risk than it removes. The final call on what is appropriate for your practice sits with you and whoever advises you on compliance. We are not the right people to give you that answer, and neither is any other IT company.",
    },

    { type: "h2", text: "What to actually cover" },
    {
      type: "p",
      text: "For most clinics the useful list is short.",
    },
    {
      type: "ol",
      items: [
        "Every exterior door, covering the approach rather than just the door itself, so you see someone arrive rather than only appear.",
        "The car park, particularly wherever staff park if anyone leaves after dark.",
        "Medication, supply or equipment storage, if you hold anything worth taking.",
        "The reception entrance, from behind the desk looking out.",
        "Delivery and loading areas.",
        "The gym or open treatment floor, if you have decided that is appropriate, positioned as discussed above.",
      ],
    },
    {
      type: "p",
      text: "Note what is not on that list: cameras everywhere. More cameras is not more security. It is more footage to protect, more storage to buy and more places to get placement wrong.",
    },

    { type: "h2", text: "On-site recording matters more here than anywhere else" },
    {
      type: "p",
      text: "For an ordinary retail business, choosing between cloud and on-site camera storage is mostly a cost question. Cloud is cheaper on day one and charges per camera per month forever, usually with tiers limiting how far back you can look, and the footage goes with the subscription if you cancel. Over five years, a modest system's subscription commonly exceeds what the hardware cost.",
    },
    {
      type: "p",
      text: "For a practice there is a second argument. Footage containing patients sent to a third party is patient information held by that third party, which means another vendor relationship to paper and another set of access controls you do not directly manage.",
    },
    {
      type: "p",
      text: "Recording to a device on your own property keeps that footage under your control and removes the recurring bill. You still get remote viewing on a phone from anywhere; what changes is where the recording lives.",
    },
    {
      type: "p",
      text: "There is one honest trade-off. An on-site recorder is a physical object that can be stolen or damaged, which is exactly why it does not sit on a shelf behind the front desk. It goes somewhere locked, ideally not in the same room as the main entrance it is recording.",
    },

    { type: "h2", text: "Cameras and your network are the same project" },
    {
      type: "p",
      text: "Cameras run over your network and draw power from it. Dropping them onto a network that is already struggling makes both worse, and in a clinical setting there is a security dimension too.",
    },
    {
      type: "p",
      text: "Cameras belong on their own segment, unable to reach your practice management system or your front desk machines. This cuts both ways: a compromised camera cannot become a route into clinical systems, and a compromised front desk machine cannot browse your camera feeds.",
    },
    {
      type: "p",
      text: "This is routine to set up at install time and awkward to retrofit, which is the argument for treating cameras and network as one job rather than two.",
    },

    { type: "h2", text: "Signage and staff" },
    {
      type: "p",
      text: "Two practical items that cost nothing. Put up notices where cameras are in use, which is good practice and in many contexts expected. And tell your staff what is recorded, where, and who can view it, because finding out informally is corrosive and a team that understands the system is more likely to use it properly.",
    },
    {
      type: "callout",
      title: "Walk it with us",
      text: "We will go through your building, work out what you actually need to see and tell you honestly which positions we would avoid and why. Free assessment, fixed quote, no monthly fee for your own footage. Call (662) 539-7787.",
    },
  ],
};
