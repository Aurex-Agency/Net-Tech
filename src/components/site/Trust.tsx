import { Link } from "react-router-dom";
import { ArrowUpRight, BadgeCheck, Quote } from "lucide-react";
import { Container } from "./Container";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { credentials, team, testimonials } from "@/data/trust";
import { cn } from "@/lib/utils";

/*
  Each section returns null when its data array is empty, so an unfilled site
  simply does not show the section rather than showing an empty shell. Populate
  src/data/trust.ts and they appear.
*/

export function TeamSection({ className }: { className?: string }) {
  if (team.length === 0) return null;

  return (
    <section className={cn("border-y border-line bg-surface", className)}>
      <Container className="py-16 sm:py-20 lg:py-24">
        <Reveal>
          <SectionHeading
            eyebrow="Who you'll be working with"
            title="The people behind Net-Tech."
            lead="You will talk to the same technicians every time, and they will already know your setup."
            split
          />
        </Reveal>

        <ul className={cn("mt-14 grid gap-5", team.length > 2 ? "sm:grid-cols-2 lg:grid-cols-3" : "sm:grid-cols-2")}>
          {team.map((person, i) => (
            <Reveal key={person.name} as="li" delay={i * 70} className="card overflow-hidden">
              {person.photo && (
                <img
                  src={person.photo}
                  alt={`${person.name}, ${person.role} at Net-Tech`}
                  width={600}
                  height={600}
                  className="aspect-square w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              )}
              <div className="p-6">
                <h3 className="display-sm text-lg text-ink">{person.name}</h3>
                <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.14em] text-brand-deep">{person.role}</p>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">{person.bio}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}

export function TestimonialsSection({ className }: { className?: string }) {
  if (testimonials.length === 0) return null;

  return (
    <section className={cn("border-t border-line", className)}>
      <Container className="py-16 sm:py-20 lg:py-24">
        <Reveal>
          <SectionHeading
            eyebrow="What clients say"
            title="In their words."
            lead="Real businesses in North Mississippi, quoted with their permission."
            split
          />
        </Reveal>

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.business} as="li" delay={i * 70} className="card flex h-full flex-col p-7">
              <Quote aria-hidden className="h-6 w-6 shrink-0 text-brand" strokeWidth={1.75} />
              <blockquote className="mt-5 flex-1 text-[16px] leading-relaxed text-ink-body">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <footer className="mt-6 border-t border-line pt-5">
                <p className="text-[15px] font-semibold text-ink">{t.name}</p>
                <p className="mt-0.5 text-[14px] text-ink-soft">
                  {t.business}
                  {t.location && ` · ${t.location}`}
                </p>
              </footer>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}

/** Compact credential strip. Sits well under a hero or above a CTA. */
export function CredentialStrip({ className }: { className?: string }) {
  if (credentials.length === 0) return null;

  return (
    <ul className={cn("flex flex-wrap gap-3", className)}>
      {credentials.map((c) => {
        const inner = (
          <>
            <BadgeCheck className="h-4 w-4 shrink-0 text-brand" strokeWidth={2} />
            <span>
              <span className="font-medium text-ink">{c.name}</span>
              <span className="text-ink-soft">
                {" · "}
                {c.issuer}
                {c.since && ` since ${c.since}`}
              </span>
            </span>
            {c.verifyUrl && <ArrowUpRight className="h-3.5 w-3.5 shrink-0 text-ink-soft" />}
          </>
        );
        return (
          <li key={c.name}>
            {c.verifyUrl ? (
              <a
                href={c.verifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 rounded-lg border border-line bg-surface px-4 py-2.5 text-[14px] transition-colors hover:border-brand"
              >
                {inner}
              </a>
            ) : (
              <span className="inline-flex items-center gap-2.5 rounded-lg border border-line bg-surface px-4 py-2.5 text-[14px]">
                {inner}
              </span>
            )}
          </li>
        );
      })}
    </ul>
  );
}

/** Points at the trust data file when nothing is filled in. Dev only. */
export function TrustGapNotice() {
  if (!import.meta.env.DEV) return null;
  if (team.length || testimonials.length || credentials.length) return null;

  return (
    <div className="border-y border-amber/30 bg-amber/5">
      <Container className="py-4">
        <p className="text-[14px] text-ink-soft">
          <span className="font-semibold text-ink">Dev note:</span> team, testimonials and credentials are empty in{" "}
          <code className="rounded bg-surface-sunk px-1.5 py-0.5 font-mono text-[13px]">src/data/trust.ts</code>. These
          sections stay hidden until filled.{" "}
          <Link to="/about" className="link">
            About page
          </Link>{" "}
          is where they land.
        </p>
      </Container>
    </div>
  );
}
