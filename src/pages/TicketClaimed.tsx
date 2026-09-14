import { Check } from "lucide-react";
import { Container } from "@/components/site/Container";
import { usePageMeta } from "@/lib/usePageMeta";

const TicketClaimed = () => {
  usePageMeta({ title: "Ticket claimed" });

  return (
    <section>
      <Container className="flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand-soft text-brand-deep">
          <Check className="h-6 w-6" strokeWidth={2.5} />
        </span>
        <h1 className="display mt-6 text-4xl sm:text-5xl">You have claimed this ticket.</h1>
        <p className="mt-4 max-w-prose text-ink-soft">You can close this tab.</p>
      </Container>
    </section>
  );
};

export default TicketClaimed;
