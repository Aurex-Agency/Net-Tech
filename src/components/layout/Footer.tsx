import { Link } from "react-router-dom";
import { Container } from "@/components/site/Container";
import { Logo } from "./Logo";
import { services } from "@/data/services";
import { navigation, site } from "@/lib/site";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-paper">
      <Container className="py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Logo />
            <p className="mt-5 max-w-xs text-[15px] leading-relaxed text-ink-soft">
              Managed IT, Ubiquiti networking and security cameras for businesses in {site.serviceArea}.
            </p>
            <address className="mt-6 text-[15px] not-italic leading-relaxed text-ink-soft">
              <a href={site.address.mapsHref} target="_blank" rel="noopener noreferrer" className="hover:text-ink">
                {site.address.street}
                <br />
                {site.address.city}, {site.address.state} {site.address.zip}
              </a>
            </address>
          </div>

          <div className="grid gap-10 sm:grid-cols-3 lg:col-span-7">
            <div>
              <h2 className="eyebrow">Company</h2>
              <ul className="mt-5 space-y-3 text-[15px]">
                <li>
                  <Link to="/" className="text-ink-soft transition-colors hover:text-ink">
                    Home
                  </Link>
                </li>
                {navigation.map((item) => (
                  <li key={item.to}>
                    <Link to={item.to} className="text-ink-soft transition-colors hover:text-ink">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="eyebrow">Services</h2>
              <ul className="mt-5 space-y-3 text-[15px]">
                {services.map((s) => (
                  <li key={s.slug}>
                    <Link to={`/services#${s.slug}`} className="text-ink-soft transition-colors hover:text-ink">
                      {s.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="eyebrow">Contact</h2>
              <ul className="mt-5 space-y-3 text-[15px]">
                <li>
                  <a href={site.phone.href} className="tabular text-ink-soft transition-colors hover:text-ink">
                    {site.phone.display}
                  </a>
                </li>
                <li>
                  <a href={site.email.href} className="text-ink-soft transition-colors hover:text-ink">
                    {site.email.display}
                  </a>
                </li>
                <li>
                  <a
                    href={site.remoteSupportHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-ink-soft transition-colors hover:text-ink"
                  >
                    Remote support client
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-line pt-8 text-sm text-ink-soft sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Net-Tech. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy-policy" className="transition-colors hover:text-ink">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="transition-colors hover:text-ink">
              Terms of Service
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
