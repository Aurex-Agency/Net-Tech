import * as React from "react";
import { cn } from "@/lib/utils";

const Textarea = React.forwardRef<HTMLTextAreaElement, React.ComponentProps<"textarea">>(
  ({ className, ...props }, ref) => (
    <textarea
      className={cn(
        "flex min-h-[120px] w-full rounded-md px-4 py-3 text-[15px] leading-6 text-ink border border-input bg-surface-sunk shadow-xs transition-[background-color,border-color,box-shadow] placeholder:text-ink-soft/70 hover:border-line-strong hover:bg-surface focus:border-brand focus:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/25 disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      ref={ref}
      {...props}
    />
  ),
);
Textarea.displayName = "Textarea";

export { Textarea };
