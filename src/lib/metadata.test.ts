import { describe, expect, it } from "vitest";
import { buildMetadata } from "./metadata";
import { siteConfig } from "./site-config";

describe("buildMetadata", () => {
  it("builds a canonical URL from the path", () => {
    const metadata = buildMetadata({
      title: "About Us",
      description: "About NexioHyper",
      path: "/about",
    });
    expect(metadata.alternates?.canonical).toBe(`${siteConfig.url}/about`);
  });

  it("suffixes the site name onto non-root titles", () => {
    const metadata = buildMetadata({
      title: "About Us",
      description: "About NexioHyper",
      path: "/about",
    });
    expect(metadata.title).toBe("About Us | NexioHyper");
  });

  it("does not suffix the site name onto the root title", () => {
    const metadata = buildMetadata({
      title: "NexioHyper — Empowering Tomorrow",
      description: "Home",
      path: "/",
    });
    expect(metadata.title).toBe("NexioHyper — Empowering Tomorrow");
  });

  it("merges page keywords with site-wide keywords", () => {
    const metadata = buildMetadata({
      title: "Cloud & DevOps",
      description: "Cloud services",
      path: "/services/cloud-devops",
      keywords: ["cloud migration services India"],
    });
    expect(metadata.keywords).toContain("cloud migration services India");
    expect(metadata.keywords).toContain(siteConfig.keywords[0]);
  });

  it("sets Open Graph and Twitter card fields", () => {
    const metadata = buildMetadata({
      title: "About Us",
      description: "About NexioHyper",
      path: "/about",
    });
    expect(metadata.openGraph?.url).toBe(`${siteConfig.url}/about`);
    expect((metadata.twitter as { card?: string } | null)?.card).toBe(
      "summary_large_image"
    );
  });
});
