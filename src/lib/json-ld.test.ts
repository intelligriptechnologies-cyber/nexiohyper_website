import { describe, expect, it } from "vitest";
import {
  articleJsonLd,
  organizationJsonLd,
  websiteJsonLd,
  breadcrumbJsonLd,
  localBusinessJsonLd,
  serviceJsonLd,
} from "./json-ld";
import { getPostBySlug } from "./blog-data";
import { siteConfig } from "./site-config";

describe("organizationJsonLd", () => {
  it("includes NAP data matching siteConfig", () => {
    const data = organizationJsonLd();
    expect(data["@type"]).toBe("Organization");
    expect(data.telephone).toBe(siteConfig.phone);
    expect(data.address.addressLocality).toBe("Bhubaneswar");
    expect(data.address.postalCode).toBe("751007");
    expect(data.sameAs).toContain(siteConfig.social.linkedin);
  });
});

describe("websiteJsonLd", () => {
  it("references the site URL", () => {
    expect(websiteJsonLd().url).toBe(siteConfig.url);
  });
});

describe("localBusinessJsonLd", () => {
  it("includes contact and location details for local SEO", () => {
    const data = localBusinessJsonLd();
    expect(data["@type"]).toBe("LocalBusiness");
    expect(data.url).toBe(`${siteConfig.url}/contact`);
    expect(data.email).toBe(siteConfig.primaryContactEmail);
    expect(data.sameAs).toContain(siteConfig.social.linkedin);
    expect(data.contactPoint[0].contactType).toBe("customer support");
    expect(data.areaServed[0].name).toBe("Bhubaneswar");
  });
});

describe("breadcrumbJsonLd", () => {
  it("builds a positioned item list", () => {
    const data = breadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: "Services", path: "/services" },
    ]);
    expect(data.itemListElement).toHaveLength(2);
    expect(data.itemListElement[0].position).toBe(1);
    expect(data.itemListElement[1].item).toBe(`${siteConfig.url}/services`);
  });
});

describe("serviceJsonLd", () => {
  it("builds a Service schema referencing the provider", () => {
    const data = serviceJsonLd({
      name: "Cloud & DevOps",
      description: "Cloud migration and DevOps services",
      path: "/cloud-devops",
    });
    expect(data["@type"]).toBe("Service");
    expect(data.provider.name).toBe(siteConfig.name);
    expect(data.url).toBe(`${siteConfig.url}/cloud-devops`);
  });
});

describe("articleJsonLd", () => {
  it("builds BlogPosting schema with the canonical blog URL", () => {
    const post = getPostBySlug("choosing-custom-software-vs-off-the-shelf-tools");
    expect(post).toBeDefined();
    const data = articleJsonLd(post!);
    expect(data["@type"]).toBe("BlogPosting");
    expect(data.url).toBe(
      `${siteConfig.url}/blog/choosing-custom-software-vs-off-the-shelf-tools`
    );
    expect(data.mainEntityOfPage).toBe(data.url);
  });
});
