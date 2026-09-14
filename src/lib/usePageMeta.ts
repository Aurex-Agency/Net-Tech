import { useEffect } from "react";

const SITE_TITLE = "Net-Tech | Managed IT, Networking & Security in New Albany, MS";
const SITE_DESCRIPTION =
  "Net-Tech provides managed IT, Ubiquiti networking, security cameras and Microsoft 365 support for businesses in New Albany and across North Mississippi.";

interface PageMeta {
  title?: string;
  description?: string;
}

/**
 * Sets the document title and meta description for a route.
 * Titles are suffixed with the business name; omit `title` for the home page.
 */
export function usePageMeta({ title, description }: PageMeta) {
  useEffect(() => {
    document.title = title ? `${title} | Net-Tech` : SITE_TITLE;
    const meta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (meta) meta.content = description ?? SITE_DESCRIPTION;
  }, [title, description]);
}
