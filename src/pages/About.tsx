import { Container } from "@/components/site/Container";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { CTABand } from "@/components/site/CTABand";
import { site } from "@/lib/site";
import { usePageMeta } from "@/lib/usePageMeta";
import officeImage from "@/assets/office-handshake.jpg";
import officeImageSmall from "@/assets/office-handshake-800.jpg";

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
  { label: "Service area", value: site.serviceArea },
  { label: "Specialties", value: "Managed IT, Ubiquiti networking, security cameras, Microsoft 365" },
];

const About = () => {
  usePageMeta({
    title: "About",
    description:
      "Net-Tech is a locally owned IT company on Main Street in New Albany, Mississippi, serving small businesses for more than 15 years.",
  });

  return (
    <>
      <section>
        <Container className="grid items-center gap-12 py-16 sm:py-24 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6 animate-rise-in">
            <SectionHeading as="h1" eyebrow="About Net-Tech" title="Meet your local IT expert." />
            <p className="mt-8 max-w-prose text-lg leading-relaxed text-ink-soft">
              Net-Tech was founded on a simple idea: small businesses in New Albany deserve the same quality of IT
              support as the big guys, with a personal touch.
            </p>
            <p className="mt-5 max-w-prose text-[15px] leading-relaxed text-ink-soft sm:text-base">
              For more than 15 years we have helped local businesses stay connected, secure and running smoothly. We
              are not a faceless corporation. We are your neighbors, and we take pride in building lasting
              relationships with every client we serve.
            </p>
          </div>
          <figure className="lg:col-span-6 animate-fade-in [animation-delay:150ms]">
            <div className="overflow-hidden rounded-lg bg-line">
              <img
                src={officeImage}
                srcSet={`${officeImageSmall} 800w, ${officeImage} 1600w`}
                sizes="(min-width: 1024px) 560px, 100vw"
                alt="A Net-Tech technician greeting a client in a brick-walled office"
                width={1600}
                height={893}
                className="aspect-[4/3] w-full object-cover"
                loading="eager"
                {...{ fetchpriority: "high" }}
                decoding="async"
              />
            </div>
          </figure>
        </Container>
      </section>

      <section className="border-t border-line bg-surface">
        <Container className="grid gap-12 py-20 sm:py-28 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-6">
            <SectionHeading eyebrow="Rooted in the community" title="Right on Main Street." />
            <p className="mt-6 max-w-prose text-lg leading-relaxed text-ink-soft">
              Located on Main Street in New Albany, we are part of the fabric of this community. We understand the
              challenges local businesses face because we face them too.
            </p>
            <p className="mt-5 max-w-prose text-[15px] leading-relaxed text-ink-soft sm:text-base">
              When you call Net-Tech you will talk to a real person who knows your name, understands your setup and
              genuinely cares about keeping your business running. That is the Net-Tech difference.
            </p>
          </Reveal>
          <Reveal delay={80} className="lg:col-span-6">
            <dl className="divide-y divide-line border-y border-line">
              {details.map((d) => (
                <div key={d.label} className="grid gap-1 py-4 sm:grid-cols-12 sm:gap-6">
                  <dt className="eyebrow before:hidden sm:col-span-4">{d.label}</dt>
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

      <section className="border-t border-line">
        <Container className="py-20 sm:py-28">
          <Reveal>
            <SectionHeading eyebrow="Our promise" title="Three things you can count on." />
          </Reveal>
          <ol className="mt-14 grid gap-10 border-t border-line pt-10 md:grid-cols-3">
            {promises.map((p, i) => (
              <Reveal key={p.title} as="li" delay={i * 70}>
                <span className="tabular text-sm font-medium text-brand-deep">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-3 text-xl font-semibold text-ink">{p.title}</h3>
                <p className="mt-3 max-w-prose text-[15px] leading-relaxed text-ink-soft">{p.body}</p>
              </Reveal>
            ))}
          </ol>
        </Container>
      </section>

      <CTABand />
    </>
  );
};

export default About;
