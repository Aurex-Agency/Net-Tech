import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "Segoe UI", "sans-serif"],
        mono: ["'JetBrains Mono'", "ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
      colors: {
        base: "hsl(var(--base))",
        surface: {
          DEFAULT: "hsl(var(--surface))",
          sunk: "hsl(var(--surface-sunk))",
        },
        navy: {
          DEFAULT: "hsl(var(--navy))",
          soft: "hsl(var(--navy-soft))",
          line: "hsl(var(--navy-line))",
        },
        ink: {
          DEFAULT: "hsl(var(--ink))",
          body: "hsl(var(--ink-body))",
          soft: "hsl(var(--ink-soft))",
        },
        line: {
          DEFAULT: "hsl(var(--line))",
          strong: "hsl(var(--line-strong))",
        },
        brand: {
          DEFAULT: "hsl(var(--brand))",
          bright: "hsl(var(--brand-bright))",
          deep: "hsl(var(--brand-deep))",
          ink: "hsl(var(--brand-ink))",
          tint: "hsl(var(--brand-tint))",
        },
        signal: "hsl(var(--signal))",

        // Aliases used by the shadcn form primitives (input, select, checkbox).
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: { DEFAULT: "hsl(var(--primary))", foreground: "hsl(var(--primary-foreground))" },
        muted: { DEFAULT: "hsl(var(--muted))", foreground: "hsl(var(--muted-foreground))" },
        accent: { DEFAULT: "hsl(var(--accent))", foreground: "hsl(var(--accent-foreground))" },
        popover: { DEFAULT: "hsl(var(--popover))", foreground: "hsl(var(--popover-foreground))" },
        destructive: { DEFAULT: "hsl(var(--destructive))", foreground: "hsl(var(--destructive-foreground))" },
      },
      borderRadius: {
        DEFAULT: "var(--radius)",
        md: "var(--radius)",
        lg: "calc(var(--radius) + 4px)",
        xl: "calc(var(--radius) + 10px)",
        "2xl": "calc(var(--radius) + 18px)",
      },
      boxShadow: {
        // A single, consistent elevation scale. Cool-tinted so shadows sit in
        // the same colour family as the surfaces they fall on.
        xs: "0 1px 2px 0 hsl(var(--shadow) / 0.05)",
        sm: "0 1px 3px 0 hsl(var(--shadow) / 0.07), 0 1px 2px -1px hsl(var(--shadow) / 0.05)",
        md: "0 4px 12px -2px hsl(var(--shadow) / 0.08), 0 2px 4px -2px hsl(var(--shadow) / 0.05)",
        lg: "0 12px 28px -6px hsl(var(--shadow) / 0.12), 0 4px 10px -4px hsl(var(--shadow) / 0.06)",
        xl: "0 24px 56px -12px hsl(var(--shadow) / 0.18), 0 8px 20px -8px hsl(var(--shadow) / 0.08)",
        glow: "0 0 0 1px hsl(var(--brand) / 0.25), 0 8px 32px -8px hsl(var(--brand) / 0.35)",
      },
      maxWidth: {
        site: "1200px",
        prose: "38rem",
      },
      transitionTimingFunction: {
        out: "cubic-bezier(0.22, 0.72, 0.24, 1)",
        spring: "cubic-bezier(0.34, 1.4, 0.44, 1)",
      },
      keyframes: {
        "rise-in": {
          from: { opacity: "0", transform: "translateY(16px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "pulse-dot": {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.45", transform: "scale(0.82)" },
        },
        sweep: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(200%)" },
        },
      },
      animation: {
        "rise-in": "rise-in 0.75s cubic-bezier(0.22, 0.72, 0.24, 1) both",
        "fade-in": "fade-in 0.6s ease-out both",
        "pulse-dot": "pulse-dot 2.4s ease-in-out infinite",
        sweep: "sweep 3.5s cubic-bezier(0.4, 0, 0.2, 1) infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
