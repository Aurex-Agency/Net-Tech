import { describe, expect, it } from "vitest";
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

/**
 * The client asked for no em dashes anywhere on the site. This guards the
 * whole source tree rather than just the copy files, so the rule survives
 * future edits instead of depending on anyone remembering it.
 *
 * Rewrite the sentence rather than swapping the character: an em dash usually
 * marks a spot where a full stop, a colon or a plain "because" reads better.
 */
const BANNED = [
  { char: "—", name: "em dash (—)" },
  { char: "–", name: "en dash (–)" },
];

const SRC = join(__dirname, "..");
const PROJECT = join(SRC, "..");
/** Everything that can end up in the shipped HTML or text files. */
const ROOTS = [SRC, join(PROJECT, "scripts"), join(PROJECT, "public")];
const SINGLE_FILES = [join(PROJECT, "index.html"), join(PROJECT, "README.md")];
const SKIP_DIRS = new Set(["test", "assets"]);
const EXTENSIONS = [".ts", ".tsx", ".css", ".html", ".md"];

function walk(dir: string, out: string[] = []): string[] {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) {
      if (!SKIP_DIRS.has(entry)) walk(full, out);
    } else if (EXTENSIONS.some((e) => entry.endsWith(e))) {
      out.push(full);
    }
  }
  return out;
}

describe("typography", () => {
  for (const { char, name } of BANNED) {
    it(`contains no ${name}`, () => {
      const offenders: string[] = [];
      const files = [...ROOTS.flatMap((r) => walk(r)), ...SINGLE_FILES];
      for (const file of files) {
        readFileSync(file, "utf8")
          .split("\n")
          .forEach((line, i) => {
            if (line.includes(char)) {
              offenders.push(`${file.replace(PROJECT + "/", "")}:${i + 1}  ${line.trim().slice(0, 90)}`);
            }
          });
      }
      expect(offenders, `Rewrite these lines:\n${offenders.join("\n")}`).toEqual([]);
    });
  }
});

/*
  White text on the navy ground needs at least 50% opacity to clear WCAG AA
  for normal text. Measured: 35% is 3.21:1, 45% is 4.48:1, 50% is 5.26:1.
  This has now been reintroduced twice by hand, so it is a test.
*/
describe("contrast", () => {
  it("uses no white text below 50% opacity", () => {
    const offenders: string[] = [];
    const pattern = /text-white\/(\d+)/g;
    for (const file of ROOTS.flatMap((r) => walk(r))) {
      readFileSync(file, "utf8")
        .split("\n")
        .forEach((line, i) => {
          for (const m of line.matchAll(pattern)) {
            if (Number(m[1]) < 50) {
              offenders.push(`${file.replace(PROJECT + "/", "")}:${i + 1}  ${m[0]}`);
            }
          }
        });
    }
    expect(offenders, `Raise these to text-white/50 or above:\n${offenders.join("\n")}`).toEqual([]);
  });
});
