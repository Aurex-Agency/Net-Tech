/** Public inquiry copy. Scheduling, pricing and travel are agreed separately. */
export const serviceIntake: Record<string, { title: string; description: string; label: string; prepare: string; fit: string; scope: string }> = {
  "managed-it": {
    title: "Discuss your business IT options",
    description: "Tell us what needs to improve. We will discuss your current support and the scope of an assessment before recommending next steps.",
    label: "Request a business IT review",
    prepare: "Your business city, approximate user count, current support arrangement and the issues you want to resolve.",
    fit: "For commercial offices, clinics and growing teams that need a clear owner for routine IT support. We start with the systems your business depends on and the responsibilities you want help managing.",
    scope: "Your proposal should separate recurring support from onboarding, licenses, replacement equipment and project work. Support hours, response expectations, backup responsibilities and site visits are agreed in writing.",
  },
  networking: {
    title: "Plan your business network project",
    description: "Describe the devices, work areas and tasks affected. We will discuss what needs checking and agree any survey or travel arrangements.",
    label: "Request a business network review",
    prepare: "Your business city, building use, affected devices and areas, and any planned move or expansion date.",
    fit: "For offices, commercial premises and warehouse working areas that need reliable connectivity. Discuss Wi-Fi coverage, cabling, equipment replacement or backup connectivity around the tasks your staff need to perform.",
    scope: "Agree cable routes, equipment, installation access, business interruptions and acceptance tests before work starts. Carrier subscriptions, specialist application work and ongoing support need their own explicit scope.",
  },
  "security-cameras": {
    title: "Plan your commercial camera project",
    description: "Tell us which business areas you need to see. We will discuss coverage goals, recording needs and the scope of a site survey.",
    label: "Request a camera project review",
    prepare: "Your business city, building type, areas needing coverage, existing equipment and project timing.",
    fit: "For businesses planning coverage of entrances, loading areas and other agreed commercial spaces. Start with what you need to observe, then choose camera positions, recording and access arrangements.",
    scope: "A quote should separate cameras, cabling, mounting access, recording storage, configuration and support. Agree retention assumptions, day and night checks, footage export and any travel before approving the project.",
  },
};
