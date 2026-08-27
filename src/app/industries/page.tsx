import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { industries } from "@/lib/industries-data";

export const metadata: Metadata = buildMetadata({
  title: "Industries We Serve",
  description:
    "NexioHyper serves IT & software, healthcare, education, manufacturing, startups & SMEs, and public sector organizations across Bhubaneswar, India, and globally.",
  path: "/industries",
});

export default function IndustriesPage() {
  return (
    <section className="page-section surface-soft">
      <div className="content-shell section-pad-compact">
        <div className="max-w-4xl">
          <p className="marketing-kicker text-teal-700">Industries</p>
          <h1 className="marketing-title mt-5 font-bold text-slate-900">
            Industries We Serve
          </h1>
          <p className="marketing-body mt-5 max-w-3xl text-slate-600">
            NexioHyper works across sectors, applying the same disciplined engineering
            approach to each, adapted to the compliance, scale, and workflow needs of your
            industry.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => (
            <div key={industry.slug} className="surface-panel rounded-[1.5rem] p-6">
              <h2 className="text-xl font-semibold text-slate-900">{industry.name}</h2>
              <p className="marketing-support mt-3 text-slate-600">{industry.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
