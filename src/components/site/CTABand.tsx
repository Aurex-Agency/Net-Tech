import { Link } from "react-router-dom";
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
  title = "Ready to stop worrying about your IT?",
  lead = "Book a free, no-pressure consultation. We will look at what you have, tell you what we would change and give you a straightforward quote.",
}: CTABandProps) {
  return (
    <section className="bg-ink text-paper">
      <Container className="py-20 sm:py-28">
        <Reveal className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <h2 className="display text-4xl sm:text-5xl lg:text-6xl">{title}</h2>
            <p className="mt-6 max-w-prose text-lg leading-relaxed text-paper/70">{lead}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:col-span-4 lg:justify-end">
            <Button asChild variant="inverse" size="lg">
              <Link to="/contact">
                Book a consultation
                <ArrowRight className="transition-transform duration-300 ease-out group-hover:translate-x-0.5" />
              </Link>
            </Button>
            <Button asChild variant="ghost" size="lg" className="text-paper hover:bg-paper/10">
              <a href={site.phone.href}>
                <Phone />
                {site.phone.display}
              </a>
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
