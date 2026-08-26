export interface ServiceDetail {
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  benefits: string[];
  keywords: string[];
}

export const services: ServiceDetail[] = [
  {
    slug: "software-development",
    name: "Custom Software Development",
    shortDescription:
      "Web and mobile applications and custom enterprise software built around your workflow.",
    description:
      "NexioHyper designs and builds custom web applications, mobile apps, and enterprise software tailored to how your business actually works — not the other way around. Whether you need a customer-facing product, an internal operations tool, or a full platform rebuild, our engineers pair modern frameworks with pragmatic architecture to ship software that stays maintainable long after launch.",
    benefits: [
      "Full-cycle product development, from requirements to deployment",
      "Web, mobile, and API development on modern, maintainable stacks",
      "Close collaboration with in-house or outsourced teams, in Bhubaneswar and remotely",
      "Code built for long-term ownership, not just a one-time delivery",
    ],
    keywords: [
      "custom software development company Bhubaneswar",
      "web application development India",
      "mobile app development company Odisha",
      "enterprise software development services",
    ],
  },
  {
    slug: "it-consulting-staffing",
    name: "IT Consulting & Staffing",
    shortDescription:
      "Technology strategy, staff augmentation, and dedicated teams to fill capability gaps fast.",
    description:
      "When you need technology expertise without a lengthy hiring cycle, NexioHyper provides IT consulting and staff augmentation — dedicated developers, architects, and technology leads who plug directly into your existing team or take ownership of a workstream end-to-end. We support clients in Bhubaneswar and across India, as well as international teams working with an offshore partner.",
    benefits: [
      "Dedicated developers and technology leads, embedded in your team",
      "Technology strategy and architecture consulting",
      "Flexible engagement models: staff augmentation, dedicated teams, or project-based delivery",
      "Faster ramp-up than direct hiring, with lower overhead",
    ],
    keywords: [
      "IT staffing company Bhubaneswar",
      "IT consulting services India",
      "staff augmentation company India",
      "offshore development team India",
    ],
  },
  {
    slug: "cloud-devops",
    name: "Cloud & DevOps",
    shortDescription:
      "Cloud migration, infrastructure automation, and DevOps for reliable, scalable systems.",
    description:
      "NexioHyper helps businesses move to the cloud and run there reliably. From migrating existing workloads to AWS, Azure, or Google Cloud, to building CI/CD pipelines and infrastructure-as-code, our cloud and DevOps engineers reduce manual operations overhead and help your systems scale predictably as your business grows.",
    benefits: [
      "Cloud migration and architecture across AWS, Azure, and Google Cloud",
      "CI/CD pipeline design and infrastructure-as-code",
      "Monitoring, cost optimization, and reliability engineering",
      "DevOps practices tailored to teams of any size",
    ],
    keywords: [
      "cloud migration services India",
      "DevOps consulting company Bhubaneswar",
      "AWS Azure cloud services India",
      "cloud infrastructure company Odisha",
    ],
  },
  {
    slug: "data-ai-analytics",
    name: "Data, AI & Analytics",
    shortDescription:
      "Data engineering, BI dashboards, and AI/ML solutions that turn raw data into decisions.",
    description:
      "NexioHyper builds the data foundations businesses need to make confident decisions — data pipelines, warehousing, BI dashboards, and applied AI/ML solutions, from predictive models to workflow automation. We work with clients across India and globally to turn scattered data into a governed, usable asset.",
    benefits: [
      "Data engineering and pipeline design for reliable, governed data",
      "Business intelligence dashboards and reporting",
      "Applied AI/ML solutions and process automation",
      "Data architecture that scales as data volume grows",
    ],
    keywords: [
      "data engineering company India",
      "AI ML solutions Bhubaneswar",
      "business intelligence services India",
      "data analytics company Odisha",
    ],
  },
];

export function getServiceBySlug(slug: string): ServiceDetail | undefined {
  return services.find((service) => service.slug === slug);
}
