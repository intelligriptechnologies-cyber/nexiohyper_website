import type { Metadata } from "next";
import { siteConfig } from "./site-config";

interface BuildMetadataInput {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  openGraphType?: "website" | "article";
}

export function buildMetadata({
  title,
  description,
  path,
  keywords = [],
  openGraphType = "website",
}: BuildMetadataInput): Metadata {
  const url = `${siteConfig.url}${path === "/" ? "" : path}`;
  const fullTitle = path === "/" ? title : `${title} | ${siteConfig.name}`;
  const ogImage = `${siteConfig.url}/icons/nh_logo_gradient_20260828.png`;

  return {
    title: fullTitle,
    description,
    keywords: [...siteConfig.keywords, ...keywords],
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: siteConfig.name,
      images: [{ url: ogImage, width: 1200, height: 630, alt: `${siteConfig.name} logo` }],
      locale: "en_IN",
      type: openGraphType,
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImage],
    },
  };
}
