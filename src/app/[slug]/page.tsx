import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd, serviceJsonLd } from "@/lib/json-ld";
import { buildMetadata } from "@/lib/metadata";
import { getProductBySlug, products } from "@/lib/products-data";
import { getProductPath, getServicePath } from "@/lib/routes";
import { getServiceBySlug, services } from "@/lib/services-data";

interface DetailPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return [
    ...services.map((service) => ({ slug: service.slug })),
    ...products.map((product) => ({ slug: product.slug })),
  ];
}

export async function generateMetadata({ params }: DetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (service) {
    return buildMetadata({
      title: service.name,
      description: service.description,
      path: getServicePath(service.slug),
      keywords: service.keywords,
    });
  }

  const product = getProductBySlug(slug);
  if (product) {
    return buildMetadata({
      title: product.name,
      description: product.description,
      path: getProductPath(product.slug),
      keywords: [product.highlightLabel, ...product.keyModules, ...product.targetBusinesses],
    });
  }

  return {};
}

export default async function DetailPage({ params }: DetailPageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (service) {
    const servicePath = getServicePath(service.slug);

    return (
      <section className="page-section surface-soft">
        <div className="content-shell section-pad-compact">
          <JsonLd
            data={serviceJsonLd({
              name: service.name,
              description: service.description,
              path: servicePath,
            })}
          />
          <JsonLd
            data={breadcrumbJsonLd([
              { name: "Home", path: "/" },
              { name: "Services", path: "/services" },
              { name: service.name, path: servicePath },
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

  const product = getProductBySlug(slug);
  if (product) {
    const productPath = getProductPath(product.slug);

    return (
      <section className="page-section surface-soft">
        <div className="content-shell-wide section-pad-compact">
          <JsonLd
            data={breadcrumbJsonLd([
              { name: "Home", path: "/" },
              { name: "Products", path: "/products" },
              { name: product.name, path: productPath },
            ])}
          />

          <div className="max-w-5xl">
            <nav className="text-base text-slate-500">
              <Link href="/products" className="hover:text-teal-600">
                Products
              </Link>{" "}
              / {product.name}
            </nav>
            <p className="marketing-kicker mt-5 text-teal-700">{product.highlightLabel}</p>
            <h1 className="marketing-title mt-4 font-bold text-slate-900">{product.name}</h1>
            <p className="mt-5 text-[1.3rem] font-medium text-slate-700">{product.purpose}</p>
            <p className="marketing-body mt-6 max-w-4xl text-slate-600">{product.description}</p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(18rem,0.8fr)]">
            <div className="surface-panel-strong rounded-[1.8rem] p-8">
              <h2 className="text-[1.9rem] font-semibold tracking-tight text-slate-900">
                Workflow focus
              </h2>
              <p className="marketing-body mt-4 text-slate-700">{product.workflowFocus}</p>
            </div>
            <div className="surface-panel rounded-[1.8rem] p-8">
              <h2 className="text-[1.65rem] font-semibold tracking-tight text-slate-900">
                Best for
              </h2>
              <ul className="marketing-support mt-5 space-y-2.5 text-slate-700">
                {product.targetBusinesses.map((business) => (
                  <li key={business}>{business}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8 grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-[1.75rem] border border-slate-200 bg-white p-8 shadow-[0_20px_50px_rgba(15,23,42,0.06)]">
              <h2 className="text-[1.9rem] font-semibold tracking-tight text-slate-900">
                Key modules
              </h2>
              <div className="mt-5 flex flex-wrap gap-3">
                {product.keyModules.map((module) => (
                  <span
                    key={module}
                    className="rounded-full bg-slate-100 px-4 py-2 text-[0.95rem] font-medium text-slate-700"
                  >
                    {module}
                  </span>
                ))}
              </div>
            </div>
            <div className="surface-panel rounded-[1.75rem] p-8">
              <h2 className="text-[1.65rem] font-semibold tracking-tight text-slate-900">
                Product fit
              </h2>
              <p className="marketing-support mt-4 text-slate-600">
                This product is shaped for teams that need operational clarity, billing
                discipline, and day-to-day execution support without a heavyweight ERP rollout.
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {product.detailCards.map((card) => (
              <article
                key={card.title}
                className="surface-panel rounded-[1.6rem] p-6 shadow-[0_20px_45px_rgba(15,23,42,0.05)]"
              >
                <p className="marketing-caption font-semibold uppercase tracking-[0.18em] text-teal-700">
                  Detail
                </p>
                <h2 className="mt-3 text-xl font-semibold text-slate-900">{card.title}</h2>
                <p className="marketing-support mt-3 text-slate-600">{card.description}</p>
              </article>
            ))}
          </div>

          <div className="mt-10 rounded-[2rem] bg-slate-900 px-6 py-10 text-white sm:px-8">
            <h2 className="marketing-section-title font-bold">Plan the right Nexio Suite rollout</h2>
            <p className="marketing-body mt-4 max-w-3xl text-slate-200">
              If this product matches the workflows you need to control, we can map the
              rollout approach, required modules, and delivery support around it.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex rounded-full bg-white px-8 py-3.5 font-semibold text-slate-950 transition-colors duration-200 hover:bg-slate-100"
              >
                Talk to NexioHyper
              </Link>
              <Link
                href="/services"
                className="inline-flex rounded-full border border-white/20 bg-white/10 px-8 py-3.5 font-semibold text-white transition-colors duration-200 hover:bg-white/16"
              >
                See implementation services
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return notFound();
}
