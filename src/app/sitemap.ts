import { getAllPublishedPosts } from "@/lib/blog-data";
import type { MetadataRoute } from "next";
import { industries } from "@/lib/industries-data";
import { products } from "@/lib/products-data";
import { getBlogPath, getIndustryPath, getProductPath, getServicePath } from "@/lib/routes";
import { siteConfig } from "@/lib/site-config";
import { services } from "@/lib/services-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const blogPosts = getAllPublishedPosts();
  const staticPaths = ["/", "/about", "/services", "/products", "/industries", "/contact", "/blog"];
  const servicePaths = services.map((service) => getServicePath(service.slug));
  const productPaths = products.map((product) => getProductPath(product.slug));
  const industryPaths = industries.map((industry) => getIndustryPath(industry.slug));
  const blogPaths = blogPosts.map((post) => getBlogPath(post.slug));
  const allPaths = [
    ...staticPaths,
    ...servicePaths,
    ...productPaths,
    ...industryPaths,
    ...blogPaths,
  ];

  return allPaths.map((path) => ({
    url: `${siteConfig.url}${path === "/" ? "" : path}`,
    lastModified:
      path === "/blog"
        ? blogPosts[0]?.publishedAt ?? new Date()
        : blogPosts.find((post) => getBlogPath(post.slug) === path)?.publishedAt ?? new Date(),
    changeFrequency: path.startsWith("/blog") ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
