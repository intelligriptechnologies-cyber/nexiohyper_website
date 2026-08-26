import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/metadata";
import { getServiceBySlug, services } from "@/lib/services-data";
import { JsonLd } from "@/components/JsonLd";
import { serviceJsonLd, breadcrumbJsonLd } from "@/lib/json-ld";

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
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
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
      <nav className="text-sm text-slate-500">
        <Link href="/services" className="hover:text-teal-600">
          Services
        </Link>{" "}
        / {service.name}
      </nav>
      <h1 className="mt-2 text-4xl font-bold text-slate-900">{service.name}</h1>
      <p className="mt-6 text-lg text-slate-700">{service.description}</p>
      <h2 className="mt-10 text-2xl font-semibold text-slate-900">What you get</h2>
      <ul className="mt-4 space-y-2 text-slate-700">
        {service.benefits.map((benefit) => (
          <li key={benefit} className="flex gap-2">
            <span className="text-teal-500">✓</span>
            <span>{benefit}</span>
          </li>
        ))}
      </ul>
      <Link
        href="/contact"
        className="mt-10 inline-block rounded-full bg-teal-500 px-8 py-3 font-semibold text-slate-950 hover:bg-teal-400"
      >
        Discuss Your Project
      </Link>
    </div>
  );
}
