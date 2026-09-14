import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Geist", "Inter", "system-ui", "-apple-system", "Segoe UI", "sans-serif"],
        display: ["'Instrument Serif'", "Georgia", "'Times New Roman'", "serif"],
      },
      colors: {
        paper: "hsl(var(--paper))",
        surface: "hsl(var(--surface))",
        ink: {
          DEFAULT: "hsl(var(--ink))",
          soft: "hsl(var(--ink-soft))",
        },
        line: {
          DEFAULT: "hsl(var(--line))",
          strong: "hsl(var(--line-strong))",
        },
        brand: {
          DEFAULT: "hsl(var(--brand))",
          deep: "hsl(var(--brand-deep))",
          soft: "hsl(var(--brand-soft))",
        },
        amber: "hsl(var(--amber))",

        // Aliases used by the retained form primitives (input, select, checkbox).
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
      },
      maxWidth: {
        site: "1180px",
        prose: "38rem",
      },
      transitionTimingFunction: {
        out: "cubic-bezier(0.2, 0.7, 0.2, 1)",
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
      },
      animation: {
        "rise-in": "rise-in 0.8s cubic-bezier(0.2, 0.7, 0.2, 1) both",
        "fade-in": "fade-in 0.6s ease-out both",
      },
    },
  },
  plugins: [],
} satisfies Config;
