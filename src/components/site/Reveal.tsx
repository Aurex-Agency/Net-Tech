import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface RevealProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Stagger delay in milliseconds. */
  delay?: number;
  as?: "div" | "section" | "li" | "article" | "figure";
}

/**
 * Fades and lifts its children into view the first time they scroll on screen.
 * Renders visible immediately when IntersectionObserver is unavailable, and
 * the CSS disables the motion under prefers-reduced-motion.
 */
export function Reveal({ delay = 0, as = "div", className, style, children, ...rest }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.1 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const Tag = as as "div";
  return (
    <Tag
      ref={ref}
      className={cn("reveal", visible && "is-visible", className)}
      style={{ ...style, ["--reveal-delay" as string]: `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
