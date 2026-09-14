import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <img src={logo} alt="Net-Tech" className="h-10 w-auto brightness-0 invert" />
            </Link>
            <p className="text-primary-foreground/70 text-sm">
              Your friendly, local expert for reliable business IT in New Albany, Mississippi.
            </p>
          </div>

          {/* Sitemap */}
          <div>
            <h4 className="font-bold mb-4 text-sm uppercase tracking-wide">Sitemap</h4>
            <ul className="space-y-3">
              {[
                { name: "Home", href: "/" },
                { name: "About Us", href: "/about" },
                { name: "Services", href: "/services" },
                { name: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-4 text-sm uppercase tracking-wide">Services</h4>
            <ul className="space-y-3">
              {["Managed IT", "Network & Security", "Cloud Solutions", "Security Cameras"].map((s) => (
                <li key={s}>
                  <span className="text-primary-foreground/70 text-sm">{s}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4 text-sm uppercase tracking-wide">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a href="tel:+16625397787" className="flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors">
                  <Phone className="w-4 h-4" /> (662) 539-7787
                </a>
              </li>
              <li>
                <a href="mailto:support@nettech.ms" className="flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors">
                  <Mail className="w-4 h-4" /> support@nettech.ms
                </a>
              </li>
              <li className="flex items-start gap-2 text-primary-foreground/70 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>112 W Main St<br />New Albany, MS 38652</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center">
          <p className="text-primary-foreground/60 text-sm">
            © {new Date().getFullYear()} Net-Tech. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
