import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, Phone, X } from "lucide-react";
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

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 border-b bg-paper/90 backdrop-blur-md transition-colors duration-300",
          scrolled || open ? "border-line" : "border-transparent",
        )}
      >
        <Container className="flex h-[72px] items-center justify-between">
          <Logo />

          <nav
            className="hidden items-center gap-8 lg:flex"
            aria-label="Primary"
          >
            {navigation.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  cn(
                    "relative py-2 text-[15px] font-medium text-ink-soft transition-colors hover:text-ink",
                    "after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-ink after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100",
                    isActive && "text-ink after:scale-x-100",
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden items-center gap-6 lg:flex">
            <a href={site.phone.href} className="link text-[15px] tabular">
              <Phone className="h-4 w-4" />
              {site.phone.display}
            </a>
            <Button asChild size="sm">
              <Link to="/contact">Free consultation</Link>
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="-mr-2 inline-flex h-11 w-11 items-center justify-center rounded-md text-ink lg:hidden"
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
          "fixed inset-x-0 bottom-0 top-[72px] z-40 overflow-y-auto bg-paper transition-opacity duration-200 lg:hidden",
          open ? "opacity-100" : "pointer-events-none opacity-0",
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
                    "display flex items-center justify-between border-b border-line py-5 text-4xl transition-all duration-500 ease-out",
                    open
                      ? "translate-y-0 opacity-100"
                      : "translate-y-3 opacity-0",
                    isActive ? "text-ink" : "text-ink-soft",
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div
            className={cn(
              "mt-auto space-y-4 pt-10 transition-all duration-500 ease-out",
              open ? "opacity-100" : "opacity-0",
            )}
            style={{ transitionDelay: open ? "300ms" : "0ms" }}
          >
            <a
              href={site.phone.href}
              className="flex items-center gap-3 text-lg font-medium text-ink"
            >
              <Phone className="h-5 w-5 text-brand-deep" />
              {site.phone.display}
            </a>
            <p className="text-sm text-ink-soft">
              {site.address.street}, {site.address.city}, {site.address.state}{" "}
              {site.address.zip}
            </p>
            <Button asChild size="lg" className="w-full">
              <Link to="/contact">Book a free consultation</Link>
            </Button>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Header;
