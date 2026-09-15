import { Link } from "react-router-dom";
import { ArrowLeft, LifeBuoy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/site/Container";
import { site } from "@/lib/site";
import { Seo } from "@/components/site/Seo";

const NotFound = () => {

  return (
    <>
      <Seo
        title="Page not found"
        description="That page is not here. Head back to the Net-Tech home page or call (662) 539-7787."
        path="/404"
        noindex
      />
    <section className="relative overflow-hidden bg-navy">
      <div aria-hidden className="pointer-events-none absolute inset-0 dot-grid mask-fade opacity-50" />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 -top-32 h-[28rem] w-[28rem] rounded-full brand-glow blur-3xl"
      />

      <Container className="relative flex min-h-[70vh] flex-col justify-center py-20">
        <p className="eyebrow eyebrow-inverse animate-rise-in">Error 404</p>
        <h1 className="display mt-6 max-w-2xl text-[2.6rem] text-white animate-rise-in [animation-delay:80ms] sm:text-5xl lg:text-[3.5rem]">
          That page is <span className="text-brand-bright">not here.</span>
        </h1>
        <p className="mt-6 max-w-prose text-[17px] leading-relaxed text-white/65 animate-rise-in [animation-delay:160ms]">
          The link may be old, or the page may have moved. Head back home, or give us a call at{" "}
          <a href={site.phone.href} className="tabular font-medium text-white underline underline-offset-4">
            {site.phone.display}
          </a>{" "}
          and we will point you the right way.
        </p>
        <div className="mt-10 flex flex-col gap-3 animate-rise-in [animation-delay:240ms] sm:flex-row">
          <Button asChild variant="inverse" size="lg">
            <Link to="/">
              <ArrowLeft />
              Back to home
            </Link>
          </Button>
          <Button asChild variant="outlineInverse" size="lg">
            <Link to="/support-form">
              <LifeBuoy />
              Client support
            </Link>
          </Button>
        </div>
      </Container>
    </section>
    </>
  );
};


export const Component = NotFound;
export default NotFound;
