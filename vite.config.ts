import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Target modern browsers for smaller bundles
    target: "es2020",
    // Increase chunk warning limit (large deps like framer-motion are expected)
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        // Split vendor chunks to maximise long-term caching
        manualChunks: {
          // React runtime — almost never changes
          "vendor-react": ["react", "react-dom"],
          // Router — changes rarely
          "vendor-router": ["react-router-dom"],
          // Animation library — large, split separately
          "vendor-motion": ["framer-motion"],
          // Icon library — large, split separately
          "vendor-icons": ["lucide-react"],
          // UI / form primitives
          "vendor-ui": [
            "@radix-ui/react-dialog",
            "@radix-ui/react-select",
            "@radix-ui/react-tooltip",
            "@radix-ui/react-accordion",
            "@radix-ui/react-tabs",
            "@radix-ui/react-label",
            "@radix-ui/react-slot",
          ],
          // Data fetching
          "vendor-query": ["@tanstack/react-query"],
        },
      },
    },
    // Enable minification with esbuild (default, fast)
    minify: "esbuild",
    // Generate source maps only in development
    sourcemap: mode === "development",
  },
}));
