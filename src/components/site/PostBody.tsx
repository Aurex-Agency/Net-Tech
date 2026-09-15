import { Info } from "lucide-react";
import type { Block } from "@/data/posts";
import { slugifyHeading } from "@/lib/slug";

/**
 * Renders a post's typed blocks.
 *
 * Headings carry ids so the in-page contents links work and so a section can
 * be linked to directly, which is how an assistant quoting a passage tends to
 * cite it.
 */
export function PostBody({ blocks }: { blocks: Block[] }) {
  return (
    <div className="flex flex-col">
      {blocks.map((block, i) => {
        const key = `${block.type}-${i}`;

        switch (block.type) {
          case "h2":
            return (
              <h2
                key={key}
                id={slugifyHeading(block.text ?? "")}
                className="display-sm mt-12 scroll-mt-28 text-[1.5rem] first:mt-0 sm:text-[1.7rem]"
              >
                {block.text}
              </h2>
            );

          case "h3":
            return (
              <h3
                key={key}
                id={slugifyHeading(block.text ?? "")}
                className="mt-8 scroll-mt-28 text-[1.15rem] font-semibold tracking-[-0.01em] text-ink"
              >
                {block.text}
              </h3>
            );

          case "ul":
            return (
              <ul key={key} className="mt-4 space-y-2.5">
                {block.items?.map((item) => (
                  <li key={item} className="flex gap-3 text-[16.5px] leading-relaxed text-ink-soft">
                    <span aria-hidden className="mt-[11px] h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                    {item}
                  </li>
                ))}
              </ul>
            );

          case "ol":
            return (
              <ol key={key} className="mt-4 space-y-3">
                {block.items?.map((item, n) => (
                  <li key={item} className="flex gap-3.5 text-[16.5px] leading-relaxed text-ink-soft">
                    <span className="tabular mt-0.5 shrink-0 font-mono text-[12px] text-brand-deep">
                      {String(n + 1).padStart(2, "0")}
                    </span>
                    {item}
                  </li>
                ))}
              </ol>
            );

          case "callout":
            return (
              <aside key={key} className="mt-8 rounded-xl border border-brand/25 bg-brand-tint/60 p-6">
                <p className="flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.14em] text-brand-deep">
                  <Info className="h-3.5 w-3.5" strokeWidth={2} />
                  {block.title ?? "Worth knowing"}
                </p>
                <p className="mt-3 text-[16px] leading-relaxed text-ink-body">{block.text}</p>
              </aside>
            );

          case "quote":
            return (
              <blockquote key={key} className="mt-8 border-l-2 border-brand pl-6 text-[17px] italic text-ink-body">
                {block.text}
              </blockquote>
            );

          default:
            return (
              <p key={key} className="mt-4 text-[16.5px] leading-relaxed text-ink-soft">
                {block.text}
              </p>
            );
        }
      })}
    </div>
  );
}
