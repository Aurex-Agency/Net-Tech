import { MapPin } from "lucide-react";
import { Container } from "@/components/site/Container";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { PageHero } from "@/components/site/PageHero";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { Seo } from "@/components/site/Seo";
import { breadcrumbNode, graph, webPageNode } from "@/lib/schema";
import { CTABand } from "@/components/site/CTABand";
import { CredentialStrip, TeamSection, TestimonialsSection } from "@/components/site/Trust";
import { site } from "@/lib/site";
import { Picture } from "@/components/site/Picture";
import officeJpg from "@/assets/office-handshake.jpg";
import officeJpgSmall from "@/assets/office-handshake-800.jpg";
import officeWebp from "@/assets/office-handshake.webp";
import officeWebpSmall from "@/assets/office-handshake-800.webp";
import officeWebpTiny from "@/assets/office-handshake-400.webp";
import officeJpgTiny from "@/assets/office-handshake-400.jpg";

const promises = [
  {
    title: "Honest advice",
    body: "We will never sell you something you do not need. We recommend what is best for your business, period.",
  },
  {
    title: "Fast response",
    body: "When something breaks, every minute counts. We respond quickly because we know your business depends on it.",
  },
  {
    title: "Plain English",
    body: "No confusing tech jargon. We explain things clearly so you always know what is happening and why.",
  },
];

const details = [
  { label: "Location", value: `${site.address.street}, ${site.address.city}, ${site.address.state} ${site.address.zip}` },
  { label: "Phone", value: site.phone.display, href: site.phone.href },
  { label: "Email", value: site.email.display, href: site.email.href },
  { label: "Hours", value: site.hours.display },
  { label: "Service area", value: site.serviceArea },
  { label: "Specialties", value: "Managed IT, Ubiquiti networking, security cameras, Microsoft 365" },
];

const About = () => {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
  ];
  const description =
    "Net-Tech is a locally owned IT company on Main Street in New Albany, Mississippi, serving small businesses for more than 15 years.";

  return (
    <>
      <Seo
        title="About Net-Tech | Local IT Company in New Albany, MS"
        description={description}
        path="/about"
        schema={graph([
          webPageNode({ type: "AboutPage", path: "/about", name: "About Net-Tech", description }),
          breadcrumbNode("/about", crumbs),
        ])}
      />
      <PageHero
        above={<Breadcrumbs items={crumbs} inverse className="mb-7" />}
        eyebrow="About Net-Tech"
        title={
          <>
            Meet your <span className="text-brand-bright">local IT expert.</span>
          </>
        }
        lead="Net-Tech was founded on a simple idea: small businesses in New Albany deserve the same quality of IT support as the big guys, with a personal touch."
        aside={
          <div className="rounded-xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm">
            <p className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-brand-bright">
              <MapPin className="h-3.5 w-3.5" />
              Find us
            </p>
            <a
              href={site.address.mapsHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 block text-lg font-medium leading-relaxed text-white transition-colors hover:text-brand-bright"
            >
              {site.address.street}
              <br />
              {site.address.city}, {site.address.state} {site.address.zip}
            </a>
            <p className="mt-5 border-t border-white/10 pt-5 text-[15px] leading-relaxed text-white/55">
              Fifteen years on Main Street, serving {site.serviceArea}.
            </p>
          </div>
        }
      />

      <CredentialStrip className="mx-auto w-full max-w-site px-5 pt-10 sm:px-8" />

      <TeamSection />

      {/* Story */}
      <section className="border-b border-line bg-surface">
        <Container className="grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-12 lg:gap-16 lg:py-24">
          <Reveal className="lg:col-span-6">
            <SectionHeading eyebrow="Rooted in the community" title="Right on Main Street." />
            <p className="mt-6 max-w-prose text-[17px] leading-relaxed text-ink-soft">
              Located on Main Street in New Albany, we are part of the fabric of this community. We understand the
              challenges local businesses face because we face them too.
            </p>
            <p className="mt-5 max-w-prose text-[15px] leading-relaxed text-ink-soft sm:text-base">
              For more than 15 years we have helped local businesses stay connected, secure and running smoothly. We
              are not a faceless corporation. We are your neighbors, and we take pride in building lasting
              relationships with every client we serve.
            </p>
            <p className="mt-5 max-w-prose text-[15px] leading-relaxed text-ink-soft sm:text-base">
              When you call Net-Tech you will talk to a real person who knows your name, understands your setup and
              genuinely cares about keeping your business running. That is the Net-Tech difference.
            </p>
          </Reveal>

          <Reveal as="figure" delay={80} className="lg:col-span-6">
            <div className="overflow-hidden rounded-xl border border-line shadow-md">
              <Picture
                webp={officeWebp}
                webpSmall={officeWebpSmall}
                webpTiny={officeWebpTiny}
                jpg={officeJpg}
                jpgSmall={officeJpgSmall}
                jpgTiny={officeJpgTiny}
                sizes="(min-width: 1024px) 520px, 100vw"
                alt="A Net-Tech technician greeting a client in a brick-walled New Albany office"
                width={1600}
                height={893}
                className="aspect-[4/3]"
              />
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Details */}
      <section className="border-b border-line">
        <Container className="grid gap-12 py-16 sm:py-20 lg:grid-cols-12 lg:gap-16 lg:py-24">
          <Reveal className="lg:col-span-5">
            <SectionHeading eyebrow="The details" title="Everything in one place." />
            <p className="mt-6 max-w-prose text-[15px] leading-relaxed text-ink-soft">
              Locally owned, locally staffed, and reachable by a real phone number {site.hours.display.toLowerCase()}.
            </p>
          </Reveal>

          <Reveal delay={80} className="lg:col-span-7">
            <dl className="card divide-y divide-line overflow-hidden">
              {details.map((d) => (
                <div key={d.label} className="grid gap-1 p-6 sm:grid-cols-12 sm:gap-6">
                  <dt className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-soft sm:col-span-4 sm:pt-1">
                    {d.label}
                  </dt>
                  <dd className="text-[15px] text-ink sm:col-span-8">
                    {d.href ? (
                      <a href={d.href} className="link">
                        {d.value}
                      </a>
                    ) : (
                      d.value
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </Container>
      </section>

      {/* Promise */}
      <section className="bg-surface">
        <Container className="py-16 sm:py-20 lg:py-24">
          <Reveal>
            <SectionHeading
              eyebrow="Our promise"
              title="Three things you can count on."
              lead="The same commitments on every job, whether it is a single laptop or a five-site network."
              split
            />
          </Reveal>

          <ol className="mt-14 grid gap-5 md:grid-cols-3">
            {promises.map((p, i) => (
              <Reveal key={p.title} as="li" delay={i * 80} className="card p-7">
                <span className="tabular font-mono text-[11px] uppercase tracking-[0.18em] text-brand-deep">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="display-sm mt-4 text-xl text-ink">{p.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">{p.body}</p>
              </Reveal>
            ))}
          </ol>
        </Container>
      </section>

      <TestimonialsSection />

      <CTABand />
    </>
  );
};


export const Component = About;
export default About;
