import { cn } from "@/lib/utils";

type ContainerProps<T extends React.ElementType = "div"> = {
  as?: T;
  className?: string;
  children: React.ReactNode;
} & Omit<React.ComponentPropsWithoutRef<T>, "as" | "className" | "children">;

/** Site-wide horizontal gutter and max width. */
export function Container<T extends React.ElementType = "div">({
  as,
  className,
  children,
  ...rest
}: ContainerProps<T>) {
  const Tag = (as ?? "div") as React.ElementType;
  return (
    <Tag className={cn("mx-auto w-full max-w-site px-5 sm:px-8", className)} {...rest}>
      {children}
    </Tag>
  );
}
