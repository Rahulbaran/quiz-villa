import { resolve } from "path";
import { defineConfig } from "vite";
import legacy from "@vitejs/plugin-legacy";

const root = resolve(__dirname, "src");
const outDir = resolve(__dirname, "dist");
const env = process.env.NODE_ENV === "production";

export default defineConfig({
  root,
  build: {
    outDir,
    emptyOutDir: true
  },
  mode: env ? "production" : "development",
  server: {
    port: 5000,
    host: "localhost"
  },
  preview: {
    port: 5050
  },

  plugins: [
    legacy({
      targets: ["defaults", "not IE 8"]
    })
  ]
});
