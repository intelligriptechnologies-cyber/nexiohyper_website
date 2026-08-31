import { siteConfig, formatAddress } from "./site-config";
import type { BlogPost } from "./blog-data";
import { getBlogPath } from "./routes";

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/icons/nh_logo_gradient_20260828.png`,
    description: siteConfig.description,
    telephone: siteConfig.phone,
    email: siteConfig.emails[0],
    sameAs: [siteConfig.social.linkedin],
    address: {
      "@type": "PostalAddress",
      streetAddress: `${siteConfig.address.line1}, ${siteConfig.address.line2}`,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.region,
      postalCode: siteConfig.address.postalCode,
      addressCountry: siteConfig.address.country,
    },
  };
}

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteConfig.url}/#localbusiness`,
    name: siteConfig.name,
    url: `${siteConfig.url}/contact`,
    image: `${siteConfig.url}/icons/nh_logo_gradient_20260828.png`,
    description: siteConfig.description,
    telephone: siteConfig.phone,
    email: siteConfig.primaryContactEmail,
    sameAs: Object.values(siteConfig.social),
    address: {
      "@type": "PostalAddress",
      streetAddress: `${siteConfig.address.line1}, ${siteConfig.address.line2}`,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.region,
      postalCode: siteConfig.address.postalCode,
      addressCountry: siteConfig.address.country,
    },
    areaServed: [
      {
        "@type": "City",
        name: siteConfig.address.city,
      },
      {
        "@type": "Country",
        name: "India",
      },
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        telephone: siteConfig.phone,
        email: siteConfig.primaryContactEmail,
        areaServed: "IN",
        availableLanguage: ["en"],
      },
    ],
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}${item.path === "/" ? "" : item.path}`,
    })),
  };
}

export function serviceJsonLd(input: { name: string; description: string; path: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: input.name,
    name: input.name,
    description: input.description,
    url: `${siteConfig.url}${input.path}`,
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
  };
}

export function articleJsonLd(post: BlogPost) {
  const url = `${siteConfig.url}${getBlogPath(post.slug)}`;

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.seoDescription,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    author: {
      "@type": "Person",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/icons/nh_logo_gradient_20260828.png`,
      },
    },
    mainEntityOfPage: url,
    url,
    image: post.coverImage ? [`${siteConfig.url}${post.coverImage}`] : undefined,
    keywords: post.tags.join(", "),
  };
}

export { formatAddress };
