import { describe, expect, it } from "vitest";
import {
  organizationJsonLd,
  websiteJsonLd,
  breadcrumbJsonLd,
  serviceJsonLd,
} from "./json-ld";
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
      path: "/services/cloud-devops",
    });
    expect(data["@type"]).toBe("Service");
    expect(data.provider.name).toBe(siteConfig.name);
    expect(data.url).toBe(`${siteConfig.url}/services/cloud-devops`);
  });
});
