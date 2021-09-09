import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import path from "path";

const __dirname = path.resolve();

export default defineConfig({
  plugins: [
    svelte(),
  ],
  resolve: {
    alias: {
      "@assets": path.resolve(__dirname, "src/assets/"),
      "@components": path.resolve(__dirname, "src/components/"),
      "@constants": path.resolve(__dirname, "src/constants/"),
      "@guards": path.resolve(__dirname, "src/guards/"),
      "@interfaces": path.resolve(__dirname, "src/interfaces/"),
      "@models": path.resolve(__dirname, "src/models/"),
      "@pages": path.resolve(__dirname, "src/pages/"),
      "@services": path.resolve(__dirname, "src/services/"),
      "@store": path.resolve(__dirname, "src/store/"),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        includePaths: ["./src/theme", "node_modules"]
      }
    }
  }
});
