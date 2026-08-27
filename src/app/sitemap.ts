import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";
import { services } from "@/lib/services-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = ["/", "/about", "/services", "/products", "/industries", "/contact"];
  const servicePaths = services.map((service) => `/services/${service.slug}`);
  const allPaths = [...staticPaths, ...servicePaths];

  return allPaths.map((path) => ({
    url: `${siteConfig.url}${path === "/" ? "" : path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
