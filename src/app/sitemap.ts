import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { slugs } from "@/content/building";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes = [
    "",
    "/about",
    "/skills",
    "/experience",
    "/startup",
    "/work",
    "/building",
    "/contact",
  ].map((path) => ({
    url: `${site.url}${path}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const buildingPages = slugs.map((slug) => ({
    url: `${site.url}/building/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...routes, ...buildingPages];
}
