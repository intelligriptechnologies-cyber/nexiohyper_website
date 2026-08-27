import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd, serviceJsonLd } from "@/lib/json-ld";
import { buildMetadata } from "@/lib/metadata";
import { getServiceBySlug, services } from "@/lib/services-data";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return buildMetadata({
    title: service.name,
    description: service.description,
    path: `/services/${service.slug}`,
    keywords: service.keywords,
  });
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  return (
    <section className="page-section surface-soft">
      <div className="content-shell section-pad-compact">
        <JsonLd
          data={serviceJsonLd({
            name: service.name,
            description: service.description,
            path: `/services/${service.slug}`,
          })}
        />
        <JsonLd
          data={breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: service.name, path: `/services/${service.slug}` },
          ])}
        />
        <div className="max-w-4xl">
          <nav className="text-base text-slate-500">
            <Link href="/services" className="hover:text-teal-600">
              Services
            </Link>{" "}
            / {service.name}
          </nav>
          <h1 className="marketing-title mt-4 font-bold text-slate-900">{service.name}</h1>
          <p className="marketing-body mt-6 max-w-3xl text-slate-700">{service.description}</p>
        </div>
        <div className="mt-12 max-w-4xl rounded-[1.75rem] border border-slate-200 bg-white p-8 shadow-[0_20px_50px_rgba(15,23,42,0.06)]">
          <h2 className="text-[1.9rem] font-semibold tracking-tight text-slate-900">
            What you get
          </h2>
          <ul className="marketing-support mt-5 space-y-3 text-slate-700">
            {service.benefits.map((benefit) => (
              <li key={benefit} className="flex gap-3">
                <span className="text-teal-500">✓</span>
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
          <Link
            href="/contact"
            className="mt-10 inline-block rounded-full bg-teal-500 px-8 py-3.5 font-semibold text-slate-950 hover:bg-teal-400"
          >
            Discuss Your Project
          </Link>
        </div>
      </div>
    </section>
  );
}
