import Link from "next/link";
import { services } from "@/lib/services-data";
import { industries } from "@/lib/industries-data";

export default function HomePage() {
  return (
    <>
      <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-teal-900 px-4 py-24 text-center text-white sm:px-6">
        <h1 className="mx-auto max-w-3xl text-4xl font-bold sm:text-5xl">
          Empowering Tomorrow with Custom Software, Cloud &amp; AI Solutions
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-200">
          NexioHyper is an IT solutions company in Bhubaneswar helping businesses across
          India and worldwide build, scale, and modernize with software development, IT
          consulting, cloud engineering, and data &amp; AI services.
        </p>
        <Link
          href="/contact"
          className="mt-8 inline-block rounded-full bg-teal-500 px-8 py-3 font-semibold text-slate-950 hover:bg-teal-400"
        >
          Talk to Us
        </Link>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="text-center text-3xl font-bold text-slate-900">What We Do</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="rounded-xl border border-slate-200 p-6 transition hover:border-teal-400 hover:shadow-lg"
            >
              <h3 className="text-lg font-semibold text-slate-900">{service.name}</h3>
              <p className="mt-2 text-sm text-slate-600">{service.shortDescription}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-3xl font-bold text-slate-900">
            Industries We Serve
          </h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry) => (
              <div key={industry.slug} className="rounded-lg bg-white p-5 shadow-sm">
                <h3 className="font-semibold text-slate-900">{industry.name}</h3>
                <p className="mt-1 text-sm text-slate-600">{industry.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/industries" className="font-semibold text-teal-600 hover:text-teal-700">
              See all industries →
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 text-center sm:px-6">
        <h2 className="text-3xl font-bold text-slate-900">Local Roots. Global Reach.</h2>
        <p className="mx-auto mt-4 max-w-2xl text-slate-600">
          Based in Bhubaneswar, Odisha, NexioHyper combines local accessibility with the
          engineering depth to serve clients across India and internationally — a
          dependable technology partner for startups, SMEs, and enterprises alike.
        </p>
        <Link
          href="/contact"
          className="mt-8 inline-block rounded-full bg-slate-900 px-8 py-3 font-semibold text-white hover:bg-slate-800"
        >
          Get in Touch
        </Link>
      </section>
    </>
  );
}
