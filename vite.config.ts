import { defineConfig } from "vite";

const base = process.env.GITHUB_PAGES === "true" ? "/CoffeeStation/" : "/";

export default defineConfig({
  base
});
