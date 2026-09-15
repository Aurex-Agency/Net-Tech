import { Head } from "vite-react-ssg";
import { site } from "@/lib/site";

interface SeoProps {
  /** Page title without the brand suffix. Omit on the home page. */
  title?: string;
  description: string;
  /** Route path, e.g. "/services/networking". Drives canonical and og:url. */
  path: string;
  /** Keeps a page out of the index without hiding it from users. */
  noindex?: boolean;
  /** JSON-LD graph for this route. */
  schema?: object;
  /** Absolute or root-relative share image. Defaults to the site card. */
  image?: string;
  /**
   * Preloads the LCP image. Pre-rendering already lets the preload scanner
   * find the <img>, but an explicit preload starts the fetch in parallel with
   * the stylesheet rather than after it.
   */
  preloadImage?: { srcSet: string; sizes: string; type?: string };
}

const HOME_TITLE = `${site.name} | Managed IT, Networking & Security in New Albany, MS`;

/**
 * Per-route head tags.
 *
 * These render during the static build, so the title, description, canonical
 * and JSON-LD are in the HTML a crawler receives — including crawlers that
 * never run JavaScript. Every page canonicalises to itself; the previous
 * implementation left a single homepage canonical on every route, which told
 * Google the whole site was one page.
 */
export function Seo({ title, description, path, noindex = false, schema, image, preloadImage }: SeoProps) {
  // Some page titles already carry the brand; do not append it twice.
  const fullTitle = !title
    ? HOME_TITLE
    : title.includes(site.name)
      ? title
      : `${title} | ${site.name}`;
  const canonical = `${site.url}${path === "/" ? "/" : path}`;
  const shareImage = image?.startsWith("http") ? image : `${site.url}${image ?? "/og.jpg"}`;

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      {noindex && <meta name="robots" content="noindex,follow" />}

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={site.name} />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={shareImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={shareImage} />

      {preloadImage && (
        <link
          rel="preload"
          as="image"
          type={preloadImage.type ?? "image/webp"}
          imageSrcSet={preloadImage.srcSet}
          imageSizes={preloadImage.sizes}
          fetchPriority="high"
        />
      )}

      {schema && (
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      )}
    </Head>
  );
}
