import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import type { Crumb } from "@/lib/schema";
import { cn } from "@/lib/utils";

interface BreadcrumbsProps {
  items: Crumb[];
  /** Styles for a dark hero background. */
  inverse?: boolean;
  className?: string;
}

/** Visible trail matching the BreadcrumbList emitted in the page schema. */
export function Breadcrumbs({ items, inverse = false, className }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className={className}>
      <ol className="flex flex-wrap items-center gap-1.5 font-mono text-[11px] tracking-[0.08em]">
        {items.map((item, i) => {
          const last = i === items.length - 1;
          return (
            <li key={item.path} className="flex items-center gap-1.5">
              {last ? (
                <span aria-current="page" className={inverse ? "text-white/50" : "text-ink-soft"}>
                  {item.name}
                </span>
              ) : (
                <>
                  <Link
                    to={item.path}
                    className={cn(
                      "transition-colors",
                      inverse ? "text-white/60 hover:text-brand-bright" : "text-ink-soft hover:text-brand-deep",
                    )}
                  >
                    {item.name}
                  </Link>
                  <ChevronRight
                    aria-hidden
                    className={cn("h-3 w-3", inverse ? "text-white/50" : "text-line-strong")}
                  />
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
