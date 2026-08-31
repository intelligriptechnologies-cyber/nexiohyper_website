import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { getServicePath } from "@/lib/routes";
import { services } from "@/lib/services-data";

export const metadata: Metadata = buildMetadata({
  title: "IT Services",
  description:
    "Explore NexioHyper's IT services: custom software development, IT consulting & staffing, cloud & DevOps, and data, AI & analytics for clients in Bhubaneswar, across India, and globally.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <section className="page-section surface-soft">
      <div className="content-shell section-pad-compact">
        <div className="max-w-4xl">
          <p className="marketing-kicker text-teal-700">Services</p>
          <h1 className="marketing-title mt-5 font-bold text-slate-900">Our Services</h1>
          <p className="marketing-body mt-5 max-w-3xl text-slate-600">
            From the first line of code to production-scale cloud infrastructure,
            NexioHyper delivers end-to-end IT services for clients in Bhubaneswar, across
            India, and worldwide.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={getServicePath(service.slug)}
              className="surface-panel-strong rounded-[1.5rem] p-7 transition hover:-translate-y-1 hover:border-teal-300"
            >
              <h2 className="text-[1.55rem] font-semibold tracking-tight text-slate-900">
                {service.name}
              </h2>
              <p className="marketing-support mt-3 text-slate-600">
                {service.shortDescription}
              </p>
              <span className="mt-5 inline-block text-base font-semibold text-teal-700">
                Learn more &rarr;
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
