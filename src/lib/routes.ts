export type CanonicalRouteType = "service" | "product" | "industry" | "blog";

export function getServicePath(slug: string): string {
  return `/${slug}`;
}

export function getProductPath(slug: string): string {
  return `/${slug}`;
}

export function getIndustryPath(slug: string): string {
  return `/industries/${slug}`;
}

export function getBlogPath(slug: string): string {
  return `/blog/${slug}`;
}

export function getCanonicalPath(type: CanonicalRouteType, slug: string): string {
  switch (type) {
    case "service":
      return getServicePath(slug);
    case "product":
      return getProductPath(slug);
    case "industry":
      return getIndustryPath(slug);
    case "blog":
      return getBlogPath(slug);
  }
}
