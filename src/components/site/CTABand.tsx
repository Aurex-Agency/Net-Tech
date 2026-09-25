import { Link, useLocation } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "./Container";
import { Reveal } from "./Reveal";
import { site } from "@/lib/site";

interface CTABandProps {
  title?: React.ReactNode;
  lead?: string;
}

/** Dark closing panel used at the bottom of most pages. */
export function CTABand({
  title = (
    <>
      Ready to stop worrying <span className="text-brand-bright">about your IT?</span>
    </>
  ),
  lead = "Request a free business IT assessment. Tell us what you have and what needs to improve. We will discuss next steps and quote the agreed work, including any on-site or travel arrangements.",
}: CTABandProps) {
  const { pathname } = useLocation();
  const service = pathname.startsWith("/services/") ? pathname.split("/")[2] : pathname.startsWith("/industries/") ? "healthcare" : "other";
  return (
    <section className="relative overflow-hidden bg-navy">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 -top-32 h-[28rem] w-[28rem] rounded-full brand-glow blur-2xl"
      />

      <Container className="relative py-20 sm:py-24 lg:py-28">
        <Reveal className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <h2 className="display text-[2.1rem] text-white sm:text-4xl lg:text-[3rem]">{title}</h2>
            <p className="mt-6 max-w-prose text-[17px] leading-relaxed text-white/65">{lead}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:col-span-5 lg:justify-end">
            <Button asChild variant="inverse" size="lg">
              <Link to={`/contact?service=${service}`} data-cta-placement="closing">
                Request an assessment
                <ArrowRight className="transition-transform duration-300 ease-out group-hover:translate-x-0.5" />
              </Link>
            </Button>
            <Button asChild variant="outlineInverse" size="lg">
              <a href={site.phone.href}>
                <Phone />
                <span className="tabular">{site.phone.display}</span>
              </a>
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
