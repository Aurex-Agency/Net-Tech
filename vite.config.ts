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
    // Inline critical CSS per route to cut render-blocking work on first paint.
    beastiesOptions: {
      preload: "swap",
      pruneSource: false,
    },
  },
}));
