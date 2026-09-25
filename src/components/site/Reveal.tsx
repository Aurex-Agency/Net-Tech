import { cn } from "@/lib/utils";
interface RevealProps extends React.HTMLAttributes<HTMLDivElement> {
  delay?: number;
  as?: "div" | "section" | "li" | "article" | "figure";
}
/** Content is visible in server HTML and never waits for JavaScript or scrolling. */
export function Reveal({ delay: _delay = 0, as = "div", className, children, ...rest }: RevealProps) {
  const Tag = as as "div";
  return <Tag className={cn("reveal is-visible", className)} {...rest}>{children}</Tag>;
}
