import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import mark from "@/assets/logo-mark.png";
import markWebp from "@/assets/logo-mark.webp";
import wordmark from "@/assets/wordmark.png";
import wordmarkWebp from "@/assets/wordmark.webp";

interface LogoProps {
  className?: string;
  /** Renders the wordmark in white for dark backgrounds. */
  inverse?: boolean;
  priority?: boolean;
}

export function Logo({ className, inverse = false, priority = false }: LogoProps) {
  return (
    <Link to="/" className={cn("inline-flex shrink-0 items-center gap-2.5", className)} aria-label="Net-Tech home">
      <picture className="shrink-0">
        <source type="image/webp" srcSet={markWebp} />
        <img src={mark} alt="" width={36} height={40} className="h-9 w-auto" decoding="async" />
      </picture>
      <picture className="shrink-0">
        <source type="image/webp" srcSet={wordmarkWebp} />
        <img
          src={wordmark}
          alt="Net-Tech"
          width={320}
          height={58}
          className={cn("h-[18px] w-auto", inverse && "brightness-0 invert")}
          {...{ fetchpriority: priority ? "high" : "auto" }}
          loading="eager"
        />
      </picture>
    </Link>
  );
}
