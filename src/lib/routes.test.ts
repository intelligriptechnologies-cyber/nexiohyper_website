import { describe, expect, it } from "vitest";
import {
  getBlogPath,
  getCanonicalPath,
  getIndustryPath,
  getProductPath,
  getServicePath,
} from "./routes";

describe("routes", () => {
  it("maps service slugs to top-level paths", () => {
    expect(getServicePath("software-development")).toBe("/software-development");
  });

  it("maps product slugs to top-level paths", () => {
    expect(getProductPath("nexio-workspace")).toBe("/nexio-workspace");
  });

  it("maps industry slugs to nested paths", () => {
    expect(getIndustryPath("healthcare")).toBe("/industries/healthcare");
  });

  it("maps blog slugs to nested paths", () => {
    expect(getBlogPath("hello-world")).toBe("/blog/hello-world");
  });

  it("returns canonical paths by content type", () => {
    expect(getCanonicalPath("service", "cloud-devops")).toBe("/cloud-devops");
    expect(getCanonicalPath("product", "nexio-stock")).toBe("/nexio-stock");
    expect(getCanonicalPath("industry", "education")).toBe("/industries/education");
    expect(getCanonicalPath("blog", "hello-world")).toBe("/blog/hello-world");
  });
});
