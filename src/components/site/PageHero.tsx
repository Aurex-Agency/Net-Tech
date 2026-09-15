import { Container } from "./Container";
import { cn } from "@/lib/utils";

interface PageHeroProps {
  eyebrow: string;
  title: React.ReactNode;
  lead?: React.ReactNode;
  /** Optional right-hand column: contact details, stats, a callout. */
  aside?: React.ReactNode;
  /** Tightens vertical rhythm for secondary pages (legal, 404). */
  compact?: boolean;
  className?: string;
}

/**
 * The navy opening band shared by every interior page. Keeping it on all
 * routes is what lets the header render transparently at scroll-top.
 */
export function PageHero({ eyebrow, title, lead, aside, compact = false, className }: PageHeroProps) {
  return (
    <section className={cn("relative overflow-hidden bg-navy", className)}>
      <div aria-hidden className="pointer-events-none absolute inset-0 grid-lines" />
      <div aria-hidden className="pointer-events-none absolute inset-0 dot-grid mask-fade opacity-50" />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-40 h-[30rem] w-[30rem] rounded-full brand-glow blur-3xl"
      />

      <Container
        className={cn(
          "relative",
          compact ? "py-14 sm:py-16" : "py-16 sm:py-20 lg:py-24",
          aside && "grid gap-12 lg:grid-cols-12 lg:items-end",
        )}
      >
        <div className={cn(aside && "lg:col-span-7")}>
          <p className="eyebrow eyebrow-inverse animate-rise-in">{eyebrow}</p>
          <h1
            className={cn(
              "display mt-6 text-white animate-rise-in [animation-delay:80ms]",
              compact ? "text-[2.1rem] sm:text-[2.75rem]" : "text-[2.6rem] sm:text-5xl lg:text-[3.6rem]",
            )}
          >
            {title}
          </h1>
          {lead && (
            <p className="mt-6 max-w-prose text-[17px] leading-relaxed text-white/65 animate-rise-in [animation-delay:160ms]">
              {lead}
            </p>
          )}
        </div>

        {aside && <div className="animate-fade-in [animation-delay:240ms] lg:col-span-5">{aside}</div>}
      </Container>
    </section>
  );
}
