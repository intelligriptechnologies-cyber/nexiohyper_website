import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/json-ld";
import { getIndustryBySlug, industries } from "@/lib/industries-data";
import { buildMetadata } from "@/lib/metadata";
import { getIndustryPath } from "@/lib/routes";

interface IndustryPageProps {
  params: Promise<{ slug: string }>;
}

const sectorSupportPoints = [
  "Discovery focused on your operational workflow, constraints, and reporting needs.",
  "Delivery shaped around compliance, reliability, and change-management realities.",
  "Architecture choices that keep room for integrations, data visibility, and scale.",
];

export function generateStaticParams() {
  return industries.map((industry) => ({ slug: industry.slug }));
}

export async function generateMetadata({ params }: IndustryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);
  if (!industry) return {};
  const industryPath = getIndustryPath(industry.slug);

  return buildMetadata({
    title: industry.name,
    description: industry.description,
    path: industryPath,
    keywords: [industry.name, `${industry.name} software solutions`],
  });
}

export default async function IndustryDetailPage({ params }: IndustryPageProps) {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);
  if (!industry) notFound();
  const industryPath = getIndustryPath(industry.slug);

  return (
    <section className="page-section surface-soft">
      <div className="content-shell section-pad-compact">
        <JsonLd
          data={breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Industries", path: "/industries" },
            { name: industry.name, path: industryPath },
          ])}
        />

        <div className="max-w-4xl">
          <nav className="text-base text-slate-500">
            <Link href="/industries" className="hover:text-teal-600">
              Industries
            </Link>{" "}
            / {industry.name}
          </nav>
          <p className="marketing-kicker mt-5 text-teal-700">Industry focus</p>
          <h1 className="marketing-title mt-4 font-bold text-slate-900">{industry.name}</h1>
          <p className="marketing-body mt-6 max-w-3xl text-slate-700">
            {industry.description}
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="surface-panel-strong rounded-[1.8rem] p-8">
            <h2 className="text-[1.9rem] font-semibold tracking-tight text-slate-900">
              How we work with this sector
            </h2>
            <p className="marketing-body mt-4 text-slate-600">
              We adapt the same engineering discipline to each sector by grounding delivery
              in the workflows, controls, and operating expectations that matter in that
              environment.
            </p>
            <ul className="marketing-support mt-6 space-y-3 text-slate-700">
              {sectorSupportPoints.map((point) => (
                <li key={point} className="flex gap-3">
                  <span className="text-teal-500">•</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="surface-panel rounded-[1.8rem] p-8">
            <h2 className="text-[1.65rem] font-semibold tracking-tight text-slate-900">
              Typical delivery support
            </h2>
            <p className="marketing-support mt-4 text-slate-600">
              Depending on the context, that can include custom software delivery, cloud
              modernization, data and analytics foundations, and practical workflow
              automation for internal teams and customer-facing operations.
            </p>
          </div>
        </div>

        <div className="mt-10 rounded-[2rem] bg-slate-900 px-6 py-10 text-white sm:px-8">
          <h2 className="marketing-section-title font-bold">
            Discuss work in {industry.name}
          </h2>
          <p className="marketing-body mt-4 max-w-3xl text-slate-200">
            If you need software, cloud, data, or AI delivery shaped for this sector, we
            can scope the workflow, constraints, and implementation path with your team.
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
              Review our services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
