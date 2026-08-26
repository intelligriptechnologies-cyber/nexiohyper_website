export const siteConfig = {
  name: "NexioHyper",
  tagline: "Empowering Tomorrow",
  description:
    "NexioHyper is an IT solutions company in Bhubaneswar, Odisha, delivering custom software development, IT consulting & staffing, cloud & DevOps, and data, AI & analytics services to clients across India and globally.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.nexiohyper.com",
  phone: "+91 93489 74524",
  emails: ["nexiohyper@gmail.com", "connect@nexiohyper.com"],
  address: {
    line1: "1st Floor, New Annex Building",
    line2: "Arch Bishop's House, Satyanagar",
    city: "Bhubaneswar",
    region: "Odisha",
    postalCode: "751007",
    country: "IN",
  },
  social: {
    linkedin: "https://www.linkedin.com/company/nexiohyper",
  },
  keywords: [
    "IT company in Bhubaneswar",
    "best software company Bhubaneswar",
    "Bhubaneswar IT solutions",
    "software company Odisha",
    "software development company India",
    "IT consulting company India",
    "cloud services India",
    "IT outsourcing partner",
    "offshore software development team",
    "custom software development services",
  ],
  nav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Industries", href: "/industries" },
    { label: "Contact", href: "/contact" },
  ],
} as const;

export function formatAddress(config: typeof siteConfig = siteConfig): string {
  const { address } = config;
  return `${address.line1}, ${address.line2}, ${address.city} – ${address.postalCode}`;
}
