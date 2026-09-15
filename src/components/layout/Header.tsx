import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { LifeBuoy, Menu, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/site/Container";
import { Logo } from "./Logo";
import { navigation, site } from "@/lib/site";
import { cn } from "@/lib/utils";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  // The mobile panel is navy, so keep the bar reversed out while it is open.
  const solid = scrolled && !open;

  return (
    <>
      {/* Utility strip. Puts the phone number and support entry point above
          everything else — the two things existing clients come here for. */}
      <div className="hidden bg-navy text-white lg:block">
        <Container className="flex h-9 items-center justify-between font-mono text-[11px] tracking-[0.06em]">
          <p className="flex items-center gap-2 text-white/55">
            <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-signal animate-pulse-dot" />
            Serving {site.serviceArea}
          </p>
          <div className="flex items-center gap-6">
            <Link to="/support-form" className="flex items-center gap-1.5 text-white/70 transition-colors hover:text-brand-bright">
              <LifeBuoy className="h-3.5 w-3.5" />
              Client support
            </Link>
            <a href={site.phone.href} className="tabular text-white/70 transition-colors hover:text-brand-bright">
              {site.phone.display}
            </a>
          </div>
        </Container>
      </div>

      {/*
        Every page opens on a navy hero. The bar is sticky (not fixed), so it
        occupies its own band: at scroll-top that band is navy and reads as one
        block with the hero below it, and past the fold it becomes a light
        glass bar floating over the page body.
      */}
      <header
        className={cn(
          "sticky top-0 z-50 border-b transition-[background-color,border-color,box-shadow] duration-300",
          solid ? "border-line bg-base/85 shadow-sm backdrop-blur-xl" : "border-transparent bg-navy",
        )}
      >
        <Container className="flex h-[70px] items-center justify-between gap-6">
          <Logo inverse={!solid} />

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
            {navigation.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  cn(
                    "relative rounded-md px-3.5 py-2 text-[15px] font-medium transition-colors duration-200",
                    solid
                      ? isActive
                        ? "text-brand-deep"
                        : "text-ink-body hover:bg-ink/[0.04] hover:text-ink"
                      : isActive
                        ? "text-brand-bright"
                        : "text-white/70 hover:bg-white/10 hover:text-white",
                  )
                }
              >
                {({ isActive }) => (
                  <>
                    {item.label}
                    <span
                      aria-hidden
                      className={cn(
                        "absolute inset-x-3.5 -bottom-px h-0.5 origin-left rounded-full transition-transform duration-300 ease-out",
                        solid ? "bg-brand" : "bg-brand-bright",
                        isActive ? "scale-x-100" : "scale-x-0",
                      )}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Button asChild variant={solid ? "outline" : "outlineInverse"} size="sm">
              <a href={site.phone.href}>
                <Phone />
                <span className="tabular">{site.phone.display}</span>
              </a>
            </Button>
            <Button asChild variant={solid ? "primary" : "inverse"} size="sm">
              <Link to="/contact">Free consultation</Link>
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className={cn(
              "-mr-2 inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-md transition-colors lg:hidden",
              solid ? "text-ink hover:bg-ink/[0.06]" : "text-white hover:bg-white/10",
            )}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </Container>
      </header>

      {/* Mobile menu. Rendered outside the header because its backdrop-filter
          would otherwise become the containing block for this fixed panel. */}
      <div
        id="mobile-menu"
        className={cn(
          "fixed inset-x-0 bottom-0 top-[70px] z-40 overflow-y-auto bg-navy transition-[opacity,visibility] duration-200 lg:hidden",
          // `invisible` (not just opacity-0) takes the links out of the tab order,
          // so the aria-hidden panel holds no focusable content when closed.
          open ? "visible opacity-100" : "invisible pointer-events-none opacity-0",
        )}
        aria-hidden={!open}
      >
        <Container className="flex min-h-full flex-col py-8">
          <nav className="flex flex-col" aria-label="Mobile">
            {[{ label: "Home", to: "/" }, ...navigation].map((item, i) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                style={{ transitionDelay: open ? `${60 + i * 40}ms` : "0ms" }}
                className={({ isActive }) =>
                  cn(
                    "display-sm flex items-center justify-between border-b border-white/10 py-5 text-[2rem] transition-all duration-500 ease-out",
                    open ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0",
                    isActive ? "text-brand-bright" : "text-white",
                  )
                }
              >
                {item.label}
                <span aria-hidden className="font-mono text-xs tracking-[0.18em] text-white/50">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </NavLink>
            ))}
          </nav>

          <div
            className={cn("mt-auto space-y-5 pt-10 transition-all duration-500 ease-out", open ? "opacity-100" : "opacity-0")}
            style={{ transitionDelay: open ? "300ms" : "0ms" }}
          >
            <a href={site.phone.href} className="flex items-center gap-3 text-lg font-medium text-white">
              <Phone className="h-5 w-5 text-brand-bright" />
              <span className="tabular">{site.phone.display}</span>
            </a>
            <p className="font-mono text-xs leading-relaxed tracking-[0.06em] text-white/55">
              {site.address.street}
              <br />
              {site.address.city}, {site.address.state} {site.address.zip}
            </p>
            <div className="flex flex-col gap-3 pt-2">
              <Button asChild variant="inverse" size="lg" className="w-full">
                <Link to="/contact">Book a free consultation</Link>
              </Button>
              <Button asChild variant="outlineInverse" size="lg" className="w-full">
                <Link to="/support-form">Submit a support ticket</Link>
              </Button>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Header;
