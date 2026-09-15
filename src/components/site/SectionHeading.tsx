import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: React.ReactNode;
  lead?: React.ReactNode;
  /** Puts the lead paragraph beside the title on wide screens. */
  split?: boolean;
  as?: "h1" | "h2";
  /** Styles the block for a dark background. */
  inverse?: boolean;
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  lead,
  split = false,
  as = "h2",
  inverse = false,
  className,
}: SectionHeadingProps) {
  const Heading = as;

  return (
    <div className={cn(split && "grid gap-6 lg:grid-cols-12 lg:items-end", className)}>
      <div className={cn(split && "lg:col-span-7")}>
        {eyebrow && <p className={cn("eyebrow mb-5", inverse && "eyebrow-inverse")}>{eyebrow}</p>}
        <Heading
          className={cn(
            "display",
            as === "h1" ? "text-[2.6rem] sm:text-5xl lg:text-[3.75rem]" : "text-[2.1rem] sm:text-4xl lg:text-[2.85rem]",
            inverse && "text-white",
          )}
        >
          {title}
        </Heading>
      </div>
      {lead && (
        <p
          className={cn(
            "max-w-prose text-[17px] leading-relaxed",
            inverse ? "text-white/65" : "text-ink-soft",
            split ? "lg:col-span-5 lg:pb-2" : "mt-6",
          )}
        >
          {lead}
        </p>
      )}
    </div>
  );
}
