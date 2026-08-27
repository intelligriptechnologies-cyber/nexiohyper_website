import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { industries } from "@/lib/industries-data";
import { services } from "@/lib/services-data";

export default function HomePage() {
  return (
    <>
      <section className="page-section surface-band surface-hero overflow-hidden text-center text-white">
        <div className="content-shell-wide section-pad">
          <Reveal className="rounded-[2rem] border border-white/10 bg-white/6 px-6 py-12 shadow-2xl shadow-slate-950/20 backdrop-blur-sm sm:px-10">
            <p className="marketing-kicker text-teal-200/90">
              Software, Cloud, Data and AI
            </p>
            <h1 className="marketing-title mx-auto mt-5 max-w-4xl font-bold text-balance">
              Empowering Tomorrow with Custom Software, Cloud &amp; AI Solutions
            </h1>
            <p className="marketing-lead mx-auto mt-6 max-w-3xl text-slate-200">
              NexioHyper is an IT solutions company in Bhubaneswar helping businesses
              across India and worldwide build, scale, and modernize with software
              development, IT consulting, cloud engineering, and data &amp; AI services.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/products"
                className="inline-flex rounded-full bg-teal-400 px-8 py-3.5 font-semibold text-slate-950 shadow-[0_16px_34px_rgba(45,212,191,0.25)] transition-colors duration-200 hover:bg-teal-300"
              >
                Explore Nexio Labs
              </Link>
              <Link
                href="/contact"
                className="inline-flex rounded-full border border-white/20 bg-white/10 px-8 py-3.5 font-semibold text-white transition-colors duration-200 hover:bg-white/16"
              >
                Talk to Us
              </Link>
            </div>
            <div className="mt-10 grid gap-4 text-left sm:grid-cols-3">
              <div className="rounded-[1.4rem] border border-white/10 bg-slate-950/16 px-5 py-4">
                <p className="marketing-caption font-semibold uppercase tracking-[0.18em] text-teal-200">
                  Nexio Labs
                </p>
                <p className="marketing-support mt-2 text-slate-100">
                  Product thinking for operator-led businesses that need usable SaaS,
                  not generic enterprise sprawl.
                </p>
              </div>
              <div className="rounded-[1.4rem] border border-white/10 bg-slate-950/16 px-5 py-4">
                <p className="marketing-caption font-semibold uppercase tracking-[0.18em] text-teal-200">
                  Nexio Suite
                </p>
                <p className="marketing-support mt-2 text-slate-100">
                  Six focused products covering retail, coworking, workshops, academies,
                  gyms, and CRM workflows.
                </p>
              </div>
              <div className="rounded-[1.4rem] border border-white/10 bg-slate-950/16 px-5 py-4">
                <p className="marketing-caption font-semibold uppercase tracking-[0.18em] text-teal-200">
                  Delivery
                </p>
                <p className="marketing-support mt-2 text-slate-100">
                  The same engineering team can also extend, integrate, and operationalize
                  the systems you adopt.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="page-section surface-soft">
        <div className="content-shell-wide section-pad-compact">
          <Reveal>
            <h2 className="marketing-section-title text-center font-bold text-slate-900">
              What We Do
            </h2>
            <p className="marketing-body mx-auto mt-4 max-w-3xl text-center text-slate-600">
              Delivery teams for business-critical software, infrastructure, and data
              platforms with the discipline to keep systems practical and scalable.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <Reveal key={service.slug} delay={80 * index}>
                <Link
                  href={`/services/${service.slug}`}
                  className="surface-panel-strong block rounded-2xl p-6 transition-transform duration-200 hover:-translate-y-1 hover:border-teal-300"
                >
                  <h3 className="text-xl font-semibold text-slate-900">{service.name}</h3>
                  <p className="marketing-support mt-2 text-slate-600">
                    {service.shortDescription}
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section surface-mist">
        <div className="content-shell-wide section-pad-compact">
          <Reveal>
            <h2 className="marketing-section-title text-center font-bold text-slate-900">
              Industries We Serve
            </h2>
            <p className="marketing-body mx-auto mt-4 max-w-3xl text-center text-slate-600">
              We partner with organizations that need dependable operating systems, clear
              business workflows, and room to grow.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry, index) => (
              <Reveal key={industry.slug} delay={70 * index}>
                <Link
                  href={`/industries/${industry.slug}`}
                  className="surface-panel block rounded-2xl p-5 transition-transform duration-200 hover:-translate-y-1 hover:border-teal-300"
                >
                  <h3 className="text-xl font-semibold text-slate-900">{industry.name}</h3>
                  <p className="marketing-support mt-2 text-slate-600">
                    {industry.description}
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-8 text-center" delay={100}>
            <Link
              href="/industries"
              className="font-semibold text-teal-700 transition-colors duration-200 hover:text-teal-800"
            >
              See all industries &rarr;
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="page-section surface-deep text-center text-white">
        <div className="content-shell-wide section-pad">
          <Reveal className="mx-auto max-w-4xl rounded-[2rem] border border-white/10 bg-white/8 px-6 py-12 backdrop-blur-sm sm:px-10">
            <h2 className="marketing-section-title font-bold text-white">
              Local Roots. Global Reach.
            </h2>
            <p className="marketing-body mx-auto mt-4 max-w-3xl text-slate-200">
              Based in Bhubaneswar, Odisha, NexioHyper combines local accessibility with
              the engineering depth to serve clients across India and internationally as a
              dependable technology partner for startups, SMEs, and enterprises alike.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex rounded-full bg-white px-8 py-3.5 font-semibold text-slate-950 transition-colors duration-200 hover:bg-slate-100"
            >
              Get in Touch
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
