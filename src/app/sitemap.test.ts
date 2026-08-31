import { getAllPublishedPosts } from "@/lib/blog-data";
import { describe, expect, it } from "vitest";
import sitemap from "./sitemap";
import { industries } from "@/lib/industries-data";
import { products } from "@/lib/products-data";
import { siteConfig } from "@/lib/site-config";
import { services } from "@/lib/services-data";

describe("sitemap", () => {
  it("includes static pages plus all service, product, and industry detail pages", () => {
    const entries = sitemap();
    expect(entries).toHaveLength(
      7 + services.length + products.length + industries.length + getAllPublishedPosts().length
    );
  });

  it("gives the homepage the highest priority", () => {
    const entries = sitemap();
    const home = entries.find((entry) => entry.url === siteConfig.url);
    expect(home?.priority).toBe(1);
  });

  it("includes service, product, and industry detail URLs", () => {
    const entries = sitemap();
    const urls = entries.map((entry) => entry.url);
    expect(urls).toContain(`${siteConfig.url}/cloud-devops`);
    expect(urls).toContain(`${siteConfig.url}/products`);
    expect(urls).toContain(`${siteConfig.url}/nexio-stock`);
    expect(urls).toContain(`${siteConfig.url}/industries/healthcare`);
  });

  it("includes the blog landing page and published post URLs", () => {
    const entries = sitemap();
    const urls = entries.map((entry) => entry.url);
    expect(urls).toContain(`${siteConfig.url}/blog`);
    expect(urls).toContain(
      `${siteConfig.url}/blog/choosing-custom-software-vs-off-the-shelf-tools`
    );
  });
});
