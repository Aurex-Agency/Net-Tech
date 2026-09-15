/**
 * Proof: people, credentials and client stories.
 *
 * This is the single largest remaining gap in the site's credibility, and the
 * one thing that cannot be written without the business. Every array below is
 * empty on purpose — nothing here is invented. Fill an array and the matching
 * section starts rendering on the pages that use it; leave it empty and the
 * section does not appear at all, so the site never shows a hollow placeholder.
 *
 * Priority order, by how much each closes the trust gap:
 *   1. team          — a named human with a face. Highest impact, lowest effort.
 *   2. testimonials  — three to five, with real business names and permission.
 *   3. credentials   — the actual Ubiquiti tier, with a verification link.
 *   4. caseStudies   — two short before/after stories.
 */

export interface TeamMember {
  name: string;
  role: string;
  /** Import the image and pass it in, e.g. `import owner from "@/assets/team/owner.jpg"`. */
  photo?: string;
  /** Two or three sentences. Who they are, how long, what they handle. */
  bio: string;
}

export interface Testimonial {
  /** Keep it specific — a sentence about what actually changed beats praise. */
  quote: string;
  name: string;
  /** Business name, with the client's permission. */
  business: string;
  /** e.g. "Tupelo, MS" — local attribution is worth more than a generic title. */
  location?: string;
}

export interface Credential {
  name: string;
  issuer: string;
  /** Public verification page, if the issuer has one. */
  verifyUrl?: string;
  /** e.g. "2019" */
  since?: string;
}

export interface CaseStudy {
  slug: string;
  title: string;
  client: string;
  location: string;
  /** What was broken before. */
  problem: string;
  /** What Net-Tech did. */
  work: string;
  /** What changed, ideally with a number. */
  result: string;
  /** Service slug this belongs to, for cross-linking. */
  service: string;
}

export const team: TeamMember[] = [];

export const testimonials: Testimonial[] = [];

/**
 * "Ubiquiti certified" currently appears on the site with no tier and no link.
 * UniFi certifications are distinct qualifications (UCA, UCP, UEWA and so on),
 * so naming the real one — and linking to a verification page if there is one —
 * turns an unverifiable adjective into a checkable credential.
 */
export const credentials: Credential[] = [];

export const caseStudies: CaseStudy[] = [];

export const hasTeam = () => team.length > 0;
export const hasTestimonials = () => testimonials.length > 0;
export const hasCredentials = () => credentials.length > 0;
export const hasCaseStudies = () => caseStudies.length > 0;
