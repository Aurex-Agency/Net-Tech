import { Link } from "react-router-dom";
import { Container } from "@/components/site/Container";
import { PageHero } from "@/components/site/PageHero";
import { Seo } from "@/components/site/Seo";
import { CTABand } from "@/components/site/CTABand";
import { breadcrumbNode, graph, webPageNode } from "@/lib/schema";
import { site, towns } from "@/lib/site";
const description = "Commercial IT support, business networking and security cameras within 100 miles of New Albany, Mississippi. Check Net-Tech coverage and request an assessment.";
export function Component() {
  return <>
    <Seo title="Commercial IT Service Area | New Albany, MS" description={description} path="/service-area" schema={graph([webPageNode({ path: "/service-area", name: "Net-Tech commercial service area", description }), breadcrumbNode("/service-area", [{ name: "Home", path: "/" }, { name: "Service area", path: "/service-area" }])])} />
    <PageHero eyebrow="Commercial customers only" title="Business IT within 100 miles of New Albany, MS." lead="Net-Tech is based at 112 W Main St in New Albany. We travel to commercial customers throughout our 100-mile service radius for IT support, network projects and security-camera installations." />
    <Container className="py-16 space-y-12">
      <section><h2 className="display-sm text-2xl">Local service, one home base</h2><p className="mt-4 max-w-prose">We serve businesses in the towns below and other communities within the radius. These are service destinations, not additional Net-Tech offices. Send your business address so we can confirm coverage and scheduling.</p>
        <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{towns.map(t => <li className="card p-5" key={t.name}>{t.slug ? <Link className="link" to={`/locations/${t.slug}`}>{t.name}, MS</Link> : <span>{t.name}, MS</span>}<p className="mt-2 text-sm text-ink-soft">{t.county}</p></li>)}</ul>
      </section>
      <section><h2 className="display-sm text-2xl">How on-site work is arranged</h2><p className="mt-4 max-w-prose">Tell us your location, the business systems involved and whether you need ongoing support or a one-time project. We confirm the scope, availability and any travel charges before you approve work. A 100-mile service radius does not promise a particular arrival time.</p><p className="mt-4 max-w-prose">Remote support may resolve suitable issues without a visit. On-site work and after-hours support depend on the agreed service scope and schedule. We do not provide residential computer repair.</p></section>
      <section><h2 className="display-sm text-2xl">Choose the right starting point</h2><ul className="mt-5 space-y-3"><li><Link className="link" to="/services/managed-it">Ongoing managed IT and help desk</Link></li><li><Link className="link" to="/services/networking">Business Wi-Fi, cabling and UniFi networks</Link></li><li><Link className="link" to="/services/security-cameras">Commercial security-camera project</Link></li><li><Link className="link" to="/industries/healthcare-rehab">IT for clinics and rehab practices</Link></li></ul></section>
      <section><h2 className="display-sm text-2xl">Near the edge of our area?</h2><p className="mt-4">Call <a className="link" href={site.phone.href}>{site.phone.display}</a> or include your city and ZIP in the <Link className="link" to="/contact">assessment request</Link>. We will confirm the address before arranging a visit.</p></section>
    </Container><CTABand />
  </>;
}
export default Component;
