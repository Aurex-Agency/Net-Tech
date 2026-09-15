import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  [
    "group inline-flex cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-md",
    "font-medium tracking-[-0.005em]",
    "transition-[background-color,color,border-color,box-shadow,transform] duration-200 ease-out",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-base",
    "disabled:pointer-events-none disabled:opacity-50",
    "active:translate-y-px [&_svg]:size-4 [&_svg]:shrink-0",
  ].join(" "),
  {
    variants: {
      variant: {
        /* Primary action. Brand blue with a soft brand-tinted shadow. */
        primary:
          "bg-brand-deep text-white shadow-sm hover:bg-brand hover:shadow-[0_6px_20px_-6px_hsl(var(--brand)/0.55)]",
        /* High-contrast neutral, for use beside a brand primary. */
        ink: "bg-ink text-white shadow-sm hover:bg-navy-soft",
        outline:
          "border border-line-strong bg-surface text-ink shadow-xs hover:border-brand hover:text-brand-deep hover:shadow-sm",
        /* On dark sections. */
        inverse: "bg-white text-ink shadow-sm hover:bg-brand-tint",
        outlineInverse:
          "border border-white/20 bg-white/[0.04] text-white backdrop-blur-sm hover:border-white/40 hover:bg-white/10",
        ghost: "text-ink hover:bg-ink/[0.06] hover:text-brand-deep",
      },
      size: {
        sm: "h-10 px-4 text-sm",
        md: "h-12 px-6 text-[15px]",
        lg: "h-14 px-7 text-base",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
