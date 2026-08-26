import { describe, expect, it } from "vitest";
import { services, getServiceBySlug } from "./services-data";

describe("services", () => {
  it("has exactly the four contracted services", () => {
    expect(services.map((s) => s.slug).sort()).toEqual(
      [
        "cloud-devops",
        "data-ai-analytics",
        "it-consulting-staffing",
        "software-development",
      ].sort()
    );
  });

  it("gives every service a non-empty description and at least one benefit", () => {
    for (const service of services) {
      expect(service.description.length).toBeGreaterThan(20);
      expect(service.benefits.length).toBeGreaterThan(0);
    }
  });
});

describe("getServiceBySlug", () => {
  it("finds a service by slug", () => {
    expect(getServiceBySlug("cloud-devops")?.name).toBe("Cloud & DevOps");
  });

  it("returns undefined for an unknown slug", () => {
    expect(getServiceBySlug("does-not-exist")).toBeUndefined();
  });
});
