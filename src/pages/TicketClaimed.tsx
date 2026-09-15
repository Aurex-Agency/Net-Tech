import { Check } from "lucide-react";
import { Container } from "@/components/site/Container";
import { usePageMeta } from "@/lib/usePageMeta";

const TicketClaimed = () => {
  usePageMeta({ title: "Ticket claimed" });

  return (
    <section className="relative overflow-hidden bg-navy">
      <div aria-hidden className="pointer-events-none absolute inset-0 grid-lines" />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[26rem] w-[26rem] -translate-x-1/2 rounded-full brand-glow blur-3xl"
      />

      <Container className="relative flex min-h-[70vh] flex-col items-center justify-center py-20 text-center">
        <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-brand/15 text-brand-bright ring-1 ring-brand/30">
          <Check className="h-7 w-7" strokeWidth={2.5} />
        </span>
        <h1 className="display mt-7 text-[2.1rem] text-white sm:text-4xl">You have claimed this ticket.</h1>
        <p className="mt-4 max-w-prose text-[15px] leading-relaxed text-white/60">You can close this tab.</p>
      </Container>
    </section>
  );
};

export default TicketClaimed;
