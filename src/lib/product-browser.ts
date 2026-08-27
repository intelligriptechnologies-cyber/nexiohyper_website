import type { Product } from "./products-data";

export function getDefaultProductSlug(items: Product[]): string {
  return items[0]?.slug ?? "";
}

export function getProductBySlug(items: Product[], slug: string): Product | undefined {
  return items.find((item) => item.slug === slug) ?? items[0];
}
