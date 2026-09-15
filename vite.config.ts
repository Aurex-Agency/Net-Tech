import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig(({ isSsrBuild }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    sourcemap: false,
    rollupOptions: {
      // React is external during the SSR pass, so it cannot be forced into a
      // manual chunk there. Split only the client bundle.
      output: isSsrBuild
        ? {}
        : {
            manualChunks: {
              react: ["react", "react-dom", "react-router-dom"],
            },
          },
    },
  },
  ssgOptions: {
    // /foo -> /foo/index.html, so the CDN serves clean URLs without rewrites
    // and unknown paths fall through to a real 404.
    dirStyle: "nested",
    formatting: "none",
    /*
      Critical CSS inlining is off deliberately.

      The whole stylesheet is about 7.4 kB over the wire. Beasties was inlining
      roughly 25 kB into every page to avoid that request, emitting a duplicate
      stylesheet link, and deferring the real CSS to ~830 ms. Until it landed
      the hero image had no layout constraint, so the browser picked the 1600w
      candidate on top of the 800w it had already preloaded. Measured cost:
      about 1.5s of LCP on mobile.
    */
    beastiesOptions: false,
  },
}));
