import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { services } from "@/lib/services-data";

export const metadata: Metadata = buildMetadata({
  title: "IT Services",
  description:
    "Explore NexioHyper's IT services: custom software development, IT consulting & staffing, cloud & DevOps, and data, AI & analytics for clients in Bhubaneswar, across India, and globally.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <h1 className="text-4xl font-bold text-slate-900">Our Services</h1>
      <p className="mt-4 max-w-2xl text-slate-600">
        From the first line of code to production-scale cloud infrastructure,
        NexioHyper delivers end-to-end IT services for clients in Bhubaneswar, across
        India, and worldwide.
      </p>
      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {services.map((service) => (
          <Link
            key={service.slug}
            href={`/services/${service.slug}`}
            className="rounded-xl border border-slate-200 p-6 transition hover:border-teal-400 hover:shadow-lg"
          >
            <h2 className="text-xl font-semibold text-slate-900">{service.name}</h2>
            <p className="mt-2 text-sm text-slate-600">{service.shortDescription}</p>
            <span className="mt-4 inline-block text-sm font-semibold text-teal-600">
              Learn more →
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
