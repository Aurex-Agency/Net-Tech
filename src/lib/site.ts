/**
 * Single source of truth for business details used across the site.
 */
export const site = {
  name: "Net-Tech",
  tagline: "Software. Hardware. Security.",
  url: "https://nettech.ms",
  phone: {
    display: "(662) 539-7787",
    href: "tel:+16625397787",
  },
  email: {
    display: "support@nettech.ms",
    href: "mailto:support@nettech.ms",
  },
  address: {
    street: "112 W Main St",
    city: "New Albany",
    state: "MS",
    zip: "38652",
    mapsHref: "https://www.google.com/maps/search/?api=1&query=112+W+Main+St+New+Albany+MS+38652",
    embedSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3264.5!2d-89.0078!3d34.4943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDI5JzM5LjUiTiA4OcKwMDAnMjguMSJX!5e0!3m2!1sen!2sus!4v1",
  },
  serviceArea: "New Albany and surrounding North Mississippi",
  remoteSupportHref: "https://sos.splashtop.com/",
  supportWebhookUrl:
    import.meta.env.VITE_SUPPORT_WEBHOOK_URL ||
    "https://services.leadconnectorhq.com/hooks/ErZnn0dKKTqWAnjTnzaP/webhook-trigger/1f29b918-a9b2-4aa9-9338-bf9344887baf",
  contactWebhookUrl: import.meta.env.VITE_CONTACT_WEBHOOK_URL || "",
} as const;

export const navigation = [
  { label: "Services", to: "/services" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
  { label: "Support", to: "/support-form" },
] as const;
