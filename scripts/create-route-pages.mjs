import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const distDir = new URL("../dist/", import.meta.url);
const distPath = fileURLToPath(distDir);
const indexHtml = await readFile(new URL("index.html", distDir), "utf8");
const sitemapXml = await readFile(new URL("sitemap.xml", distDir), "utf8");
const baseUrl = new URL("https://diogojp202.github.io/CoffeeStation/");

const routePaths = [...sitemapXml.matchAll(/<loc>(.*?)<\/loc>/g)]
  .map((match) => new URL(match[1]))
  .filter((url) => url.origin === baseUrl.origin && url.pathname.startsWith(baseUrl.pathname))
  .map((url) => url.pathname.slice(baseUrl.pathname.length).replace(/\/$/, ""))
  .filter(Boolean);

await writeFile(new URL("404.html", distDir), indexHtml);

for (const routePath of routePaths) {
  const routeFile = join(distPath, routePath, "index.html");
  await mkdir(dirname(routeFile), { recursive: true });
  await writeFile(routeFile, indexHtml);
}

console.log(`Created ${routePaths.length} route pages from sitemap.xml`);
