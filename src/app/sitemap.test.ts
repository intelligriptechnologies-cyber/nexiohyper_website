import { describe, expect, it } from "vitest";
import sitemap from "./sitemap";
import { siteConfig } from "@/lib/site-config";

describe("sitemap", () => {
  it("includes all 6 static pages and all 4 service pages", () => {
    const entries = sitemap();
    expect(entries).toHaveLength(10);
  });

  it("gives the homepage the highest priority", () => {
    const entries = sitemap();
    const home = entries.find((entry) => entry.url === siteConfig.url);
    expect(home?.priority).toBe(1);
  });

  it("includes each service detail URL and the products page", () => {
    const entries = sitemap();
    const urls = entries.map((entry) => entry.url);
    expect(urls).toContain(`${siteConfig.url}/services/cloud-devops`);
    expect(urls).toContain(`${siteConfig.url}/products`);
  });
});
