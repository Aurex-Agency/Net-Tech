import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/site/Container";
import { usePageMeta } from "@/lib/usePageMeta";

const NotFound = () => {
  usePageMeta({ title: "Page not found" });

  return (
    <section>
      <Container className="flex min-h-[60vh] flex-col justify-center py-24">
        <p className="eyebrow">404</p>
        <h1 className="display mt-5 text-5xl sm:text-6xl">That page is not here.</h1>
        <p className="mt-6 max-w-prose text-lg text-ink-soft">
          The link may be old, or the page may have moved. Head back home or give us a call and we will point you the
          right way.
        </p>
        <div className="mt-10">
          <Button asChild size="lg">
            <Link to="/">
              <ArrowLeft />
              Back to home
            </Link>
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default NotFound;
