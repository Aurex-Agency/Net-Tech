import { Toaster as Sonner } from "sonner";

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => (
  <Sonner
    position="bottom-center"
    toastOptions={{
      classNames: {
        toast: "group toast !rounded-md !border !border-line !bg-surface !text-ink !shadow-lg !shadow-ink/10 !font-sans",
        description: "!text-ink-soft",
        actionButton: "!bg-ink !text-white",
      },
    }}
    {...props}
  />
);

export { Toaster };
