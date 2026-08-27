import { describe, expect, it } from "vitest";
import { formatAddress, siteConfig } from "./site-config";

describe("siteConfig", () => {
  it("has the correct NAP (name/address/phone) data", () => {
    expect(siteConfig.name).toBe("NexioHyper");
    expect(siteConfig.phone).toBe("+91 93489 74524");
    expect(siteConfig.emails).toContain("nexiohyper@gmail.com");
    expect(siteConfig.emails).toContain("connect@nexiohyper.com");
    expect(siteConfig.social.linkedin).toBe(
      "https://www.linkedin.com/company/nexiohyper"
    );
  });

  it("includes local, national, and global keywords", () => {
    expect(siteConfig.keywords.some((k) => k.includes("Bhubaneswar"))).toBe(true);
    expect(siteConfig.keywords.some((k) => k.includes("India"))).toBe(true);
    expect(siteConfig.keywords.length).toBeGreaterThan(5);
  });

  it("includes Products in the primary navigation", () => {
    expect(siteConfig.nav.map((item) => item.label)).toContain("Products");
  });
});

describe("formatAddress", () => {
  it("formats the full postal address on one line", () => {
    expect(formatAddress()).toBe(
      "1st Floor, New Annex Building, Arch Bishop's House, Satyanagar, Bhubaneswar - 751007"
    );
  });
});
