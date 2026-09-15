import { cn } from "@/lib/utils";

interface PictureProps {
  /** WebP and JPEG sources at 1600w, 800w and 400w. */
  webp: string;
  webpSmall: string;
  webpTiny: string;
  jpg: string;
  jpgSmall: string;
  jpgTiny: string;
  alt: string;
  sizes: string;
  width: number;
  height: number;
  className?: string;
  /** True for the LCP image, which loads eagerly at high fetch priority. */
  priority?: boolean;
}

/**
 * WebP with a JPEG fallback.
 *
 * Because the page is now pre-rendered, this markup is in the HTML the browser
 * receives, so the preload scanner finds the hero image before any JavaScript
 * runs. That is what makes `fetchpriority` do anything at all.
 */
export function Picture({
  webp,
  webpSmall,
  webpTiny,
  jpg,
  jpgSmall,
  jpgTiny,
  alt,
  sizes,
  width,
  height,
  className,
  priority = false,
}: PictureProps) {
  return (
    <picture>
      <source type="image/webp" srcSet={`${webpTiny} 400w, ${webpSmall} 800w, ${webp} 1600w`} sizes={sizes} />
      <img
        src={jpg}
        srcSet={`${jpgTiny} 400w, ${jpgSmall} 800w, ${jpg} 1600w`}
        sizes={sizes}
        alt={alt}
        width={width}
        height={height}
        className={cn("w-full object-cover", className)}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        {...(priority ? { fetchpriority: "high" as const } : {})}
      />
    </picture>
  );
}
