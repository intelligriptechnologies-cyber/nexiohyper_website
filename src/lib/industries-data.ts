export interface Industry {
  slug: string;
  name: string;
  description: string;
}

export const industries: Industry[] = [
  {
    slug: "it-software",
    name: "IT & Software Product Companies",
    description:
      "Engineering capacity and specialist skills for product teams that need to ship faster without compromising quality.",
  },
  {
    slug: "healthcare",
    name: "Healthcare",
    description:
      "Secure, compliant applications and data systems for clinics, diagnostics, and healthcare service providers.",
  },
  {
    slug: "education",
    name: "Education",
    description:
      "Learning platforms, administration systems, and data tools for schools, colleges, and edtech ventures.",
  },
  {
    slug: "manufacturing",
    name: "Manufacturing",
    description:
      "Operational software, IoT-ready data pipelines, and automation for manufacturers modernizing their processes.",
  },
  {
    slug: "startups-smes",
    name: "Startups & SMEs",
    description:
      "Cost-effective, scalable technology foundations for growing businesses that need to move quickly.",
  },
  {
    slug: "public-sector",
    name: "Public Sector",
    description:
      "Reliable, well-governed digital systems for government and public-sector organizations.",
  },
];

export function getIndustryBySlug(slug: string): Industry | undefined {
  return industries.find((industry) => industry.slug === slug);
}
