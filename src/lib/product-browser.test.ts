import { describe, expect, it } from "vitest";
import { getDefaultProductSlug, getProductBySlug } from "./product-browser";
import { products } from "./products-data";

describe("product-browser helpers", () => {
  it("defaults to the first product slug", () => {
    expect(getDefaultProductSlug(products)).toBe(products[0]?.slug);
  });

  it("returns the matching product when a known slug is provided", () => {
    expect(getProductBySlug(products, "nexio-gym")?.name).toBe("Nexio Gym");
  });

  it("falls back to the first product when the slug is unknown", () => {
    expect(getProductBySlug(products, "missing-slug")?.slug).toBe(products[0]?.slug);
  });
});
