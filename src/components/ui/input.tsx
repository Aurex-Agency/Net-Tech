import * as React from "react";
import { cn } from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => (
    <input
      type={type}
      className={cn(
        "flex h-12 w-full rounded-md px-4 text-[15px] text-ink border border-input bg-surface-sunk shadow-xs transition-[background-color,border-color,box-shadow] placeholder:text-ink-soft/70 hover:border-line-strong hover:bg-surface focus:border-brand focus:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/25 disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      ref={ref}
      {...props}
    />
  ),
);
Input.displayName = "Input";

export { Input };
