import { Link } from "react-router-dom";
import { ArrowUpRight, Clock, Mail, MapPin, Phone } from "lucide-react";
import { Container } from "@/components/site/Container";
import { Logo } from "./Logo";
import { services } from "@/data/services";
import { locations } from "@/data/locations";
import { navigation, site } from "@/lib/site";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white">
      <Container className="py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <Logo inverse />
            <p className="mt-6 max-w-xs text-[15px] leading-relaxed text-white/55">
              Managed IT, Ubiquiti networking and security cameras for clinics, rehab practices and commercial
              businesses in {site.serviceArea}.
            </p>
            <p className="mt-4 max-w-xs text-[14px] leading-relaxed text-white/55">{site.residentialNotice}</p>

            <ul className="mt-8 space-y-3.5">
              <li>
                <a
                  href={site.phone.href}
                  className="group flex items-center gap-3 text-[15px] text-white/75 transition-colors hover:text-brand-bright"
                >
                  <Phone className="h-4 w-4 shrink-0 text-brand" strokeWidth={1.75} />
                  <span className="tabular">{site.phone.display}</span>
                </a>
              </li>
              <li>
                <a
                  href={site.email.href}
                  className="group flex items-center gap-3 text-[15px] text-white/75 transition-colors hover:text-brand-bright"
                >
                  <Mail className="h-4 w-4 shrink-0 text-brand" strokeWidth={1.75} />
                  {site.email.display}
                </a>
              </li>
              <li>
                <a
                  href={site.address.mapsHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-3 text-[15px] text-white/75 transition-colors hover:text-brand-bright"
                >
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand" strokeWidth={1.75} />
                  <address className="not-italic leading-relaxed">
                    {site.address.street}
                    <br />
                    {site.address.city}, {site.address.state} {site.address.zip}
                  </address>
                </a>
              </li>
              <li className="flex items-start gap-3 text-[15px] text-white/75">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-brand" strokeWidth={1.75} />
                <span>{site.hours.display}</span>
              </li>
            </ul>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:col-span-8 lg:col-start-5 lg:grid-cols-4">
            <div>
              <h2 className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/55">Company</h2>
              <ul className="mt-5 space-y-3 text-[15px]">
                <li>
                  <Link to="/" className="text-white/70 transition-colors hover:text-brand-bright">
                    Home
                  </Link>
                </li>
                {navigation.map((item) => (
                  <li key={item.to}>
                    <Link to={item.to} className="text-white/70 transition-colors hover:text-brand-bright">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/55">Services</h2>
              <ul className="mt-5 space-y-3 text-[15px]">
                {services.map((s) => (
                  <li key={s.slug}>
                    <Link
                      to={`/services/${s.slug}`}
                      className="text-white/70 transition-colors hover:text-brand-bright"
                    >
                      {s.shortTitle}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/55">Service area</h2>
              <ul className="mt-5 space-y-3 text-[15px]">
                {locations.map((l) => (
                  <li key={l.slug}>
                    <Link
                      to={`/locations/${l.slug}`}
                      className="text-white/70 transition-colors hover:text-brand-bright"
                    >
                      {l.city}, {site.address.state}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/55">Support</h2>
              <ul className="mt-5 space-y-3 text-[15px]">
                <li>
                  <Link to="/support-form" className="text-white/70 transition-colors hover:text-brand-bright">
                    Submit a ticket
                  </Link>
                </li>
                <li>
                  <a
                    href={site.remoteSupportHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-white/70 transition-colors hover:text-brand-bright"
                  >
                    Remote support client
                    <ArrowUpRight className="h-3.5 w-3.5 opacity-60" />
                  </a>
                </li>
                <li>
                  <Link to="/contact" className="text-white/70 transition-colors hover:text-brand-bright">
                    Book a consultation
                  </Link>
                </li>
                <li>
                  <Link to="/faq" className="text-white/70 transition-colors hover:text-brand-bright">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link to="/pricing" className="text-white/70 transition-colors hover:text-brand-bright">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link to="/blog" className="text-white/70 transition-colors hover:text-brand-bright">
                    Insights
                  </Link>
                </li>
                <li>
                  <Link
                    to="/industries/healthcare-rehab"
                    className="text-white/70 transition-colors hover:text-brand-bright"
                  >
                    Healthcare &amp; rehab
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-8 text-sm text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Net-Tech. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy-policy" className="transition-colors hover:text-white">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="transition-colors hover:text-white">
              Terms of Service
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
