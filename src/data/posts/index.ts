import type { Post } from "./types";

import { post as hipaaChecklist } from "./hipaa-it-checklist";
import { post as clinicWifi } from "./clinic-wifi-treatment-rooms";
import { post as managedItCost } from "./managed-it-cost-practice";
import { post as ransomware } from "./ransomware-monday-morning";
import { post as m365Migration } from "./microsoft-365-migration-practice";
import { post as clinicCameras } from "./cameras-in-a-clinic";
import { post as internetDown } from "./internet-down-checklist";
import { post as unifiCost } from "./unifi-five-year-cost";
import { post as secondClinic } from "./second-clinic-it-checklist";
import { post as businessesOnly } from "./why-businesses-only";
import { post as switchingProviders } from "./switching-it-providers";

/**
 * Editorial order, strongest first. The whole set published together, so a
 * date sort would be arbitrary: the first entry is the lead article on the
 * blog index and the one surfaced on the home page.
 */
export const posts: Post[] = [
  hipaaChecklist,
  clinicWifi,
  ransomware,
  managedItCost,
  m365Migration,
  clinicCameras,
  secondClinic,
  internetDown,
  unifiCost,
  switchingProviders,
  businessesOnly,
];

export const postBySlug = (slug: string) => posts.find((p) => p.slug === slug);

export const postsByCategory = (category: string) => posts.filter((p) => p.category === category);

export const postsForService = (serviceSlug: string) =>
  posts.filter((p) => p.relatedServices.includes(serviceSlug));

export * from "./types";
