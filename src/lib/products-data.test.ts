import { describe, expect, it } from "vitest";
import { products } from "./products-data";

describe("products", () => {
  it("contains the six Nexio Suite products", () => {
    expect(products.map((product) => product.slug).sort()).toEqual(
      [
        "nexio-academy",
        "nexio-crm",
        "nexio-gym",
        "nexio-stock",
        "nexio-workshop",
        "nexio-workspace",
      ].sort()
    );
  });

  it("gives each product a description, modules, and target businesses", () => {
    for (const product of products) {
      expect(product.highlightLabel.length).toBeGreaterThan(3);
      expect(product.description.length).toBeGreaterThan(40);
      expect(product.workflowFocus.length).toBeGreaterThan(30);
      expect(product.keyModules.length).toBeGreaterThan(2);
      expect(product.targetBusinesses.length).toBeGreaterThan(0);
      expect(product.detailCards.length).toBeGreaterThan(1);
      for (const card of product.detailCards) {
        expect(card.title.length).toBeGreaterThan(3);
        expect(card.description.length).toBeGreaterThan(20);
      }
    }
  });
});
