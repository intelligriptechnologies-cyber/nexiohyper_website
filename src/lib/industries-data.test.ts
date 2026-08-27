import { describe, expect, it } from "vitest";
import { getIndustryBySlug, industries } from "./industries-data";

describe("industries", () => {
  it("contains the expected industry slugs", () => {
    expect(industries.map((industry) => industry.slug).sort()).toEqual(
      [
        "education",
        "healthcare",
        "it-software",
        "manufacturing",
        "public-sector",
        "startups-smes",
      ].sort()
    );
  });

  it("gives each industry a non-empty description", () => {
    for (const industry of industries) {
      expect(industry.name.length).toBeGreaterThan(3);
      expect(industry.description.length).toBeGreaterThan(20);
    }
  });
});

describe("getIndustryBySlug", () => {
  it("finds an industry by slug", () => {
    expect(getIndustryBySlug("healthcare")?.name).toBe("Healthcare");
  });

  it("returns undefined for an unknown slug", () => {
    expect(getIndustryBySlug("does-not-exist")).toBeUndefined();
  });
});
