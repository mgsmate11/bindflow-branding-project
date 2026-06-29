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
  // Static prerendering (vite-react-ssg): minden route saját, tartalommal teli
  // HTML-t kap, így a JS-t nem futtató AI-k/crawlerek is látják. A "flat" forma
  // (/services.html) illik a Netlify Pretty URLs-höz: az /services kiterjesztés
  // nélküli, perjel nélküli címen szolgálja ki — pont mint a canonical URL-ek.
  ssgOptions: {
    dirStyle: "flat",
  },
}));
