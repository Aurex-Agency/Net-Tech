import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: React.ReactNode;
  lead?: React.ReactNode;
  /** Puts the lead paragraph beside the title on wide screens. */
  split?: boolean;
  as?: "h1" | "h2";
  className?: string;
}

export function SectionHeading({ eyebrow, title, lead, split = false, as = "h2", className }: SectionHeadingProps) {
  const Heading = as;
  const titleClass = as === "h1" ? "display text-5xl sm:text-6xl lg:text-7xl" : "display text-4xl sm:text-5xl";

  return (
    <div className={cn(split && "grid gap-6 lg:grid-cols-12 lg:items-end", className)}>
      <div className={cn(split && "lg:col-span-7")}>
        {eyebrow && <p className="eyebrow mb-5">{eyebrow}</p>}
        <Heading className={titleClass}>{title}</Heading>
      </div>
      {lead && (
        <p className={cn("max-w-prose text-lg leading-relaxed text-ink-soft", split ? "lg:col-span-5 lg:pb-2" : "mt-6")}>
          {lead}
        </p>
      )}
    </div>
  );
}
