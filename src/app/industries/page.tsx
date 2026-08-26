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
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <h1 className="text-4xl font-bold text-slate-900">Industries We Serve</h1>
      <p className="mt-4 max-w-2xl text-slate-600">
        NexioHyper works across sectors, applying the same disciplined engineering
        approach to each — adapted to the compliance, scale, and workflow needs of your
        industry.
      </p>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {industries.map((industry) => (
          <div key={industry.slug} className="rounded-xl border border-slate-200 p-6">
            <h2 className="text-lg font-semibold text-slate-900">{industry.name}</h2>
            <p className="mt-2 text-sm text-slate-600">{industry.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
