import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import path from "path";

const currentDir = path.resolve();

export default defineConfig({
  plugins: [svelte()],
  resolve: {
    alias: {
      "@assets": path.resolve(currentDir, "src/assets/"),
      "@components": path.resolve(currentDir, "src/components/"),
      "@constants": path.resolve(currentDir, "src/constants/"),
      "@guards": path.resolve(currentDir, "src/guards/"),
      "@interfaces": path.resolve(currentDir, "src/interfaces/"),
      "@models": path.resolve(currentDir, "src/models/"),
      "@pages": path.resolve(currentDir, "src/pages/"),
      "@services": path.resolve(currentDir, "src/services/"),
      "@store": path.resolve(currentDir, "src/store/"),
    },
  },
});
