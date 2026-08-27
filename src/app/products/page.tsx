import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { ProductsShowcase } from "@/components/ProductsShowcase";
import { buildMetadata } from "@/lib/metadata";
import { products } from "@/lib/products-data";

export const metadata: Metadata = buildMetadata({
  title: "Nexio Labs Products",
  description:
    "Explore Nexio Labs and the Nexio Suite product family: practical SaaS systems for retail, coworking, workshops, academies, gyms, and sales teams.",
  path: "/products",
  keywords: [
    "Nexio Labs",
    "Nexio Suite",
    "SME SaaS products India",
    "ERP software for retail and operations",
  ],
});

export default function ProductsPage() {
  return (
    <>
      <section className="page-section surface-band surface-hero text-white">
        <div className="content-shell-wide section-pad">
          <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(24rem,0.8fr)] lg:gap-14">
            <Reveal className="max-w-5xl">
              <p className="marketing-kicker text-teal-200/90">Nexio Labs</p>
              <h1 className="mt-5 max-w-[13ch] text-[clamp(3.15rem,5vw,5.45rem)] leading-[0.97] font-bold tracking-[-0.045em] text-balance">
                Practical product systems shaped for real operating teams
              </h1>
            </Reveal>
            <Reveal className="lg:pt-5" delay={70}>
              <p className="max-w-[35rem] text-[clamp(1.18rem,1.3vw,1.52rem)] leading-[1.82] text-slate-100">
                Nexio Labs is where product ideas are brainstormed, shaped, and refined
                into usable SaaS systems. The products ship under the{" "}
                <strong>Nexio Suite</strong> family and are engineered by the{" "}
                <strong>Nexio Core Dev Team</strong> for businesses that need clear
                workflows, dependable billing, and operational control.
              </p>
            </Reveal>
          </div>
          <Reveal className="mt-10 grid gap-4 md:grid-cols-3" delay={90}>
            <div className="rounded-[1.5rem] border border-white/10 bg-white/8 p-5 backdrop-blur-sm">
              <p className="marketing-caption font-semibold uppercase tracking-[0.2em] text-teal-200">
                Operating principle
              </p>
              <p className="marketing-support mt-3 text-slate-100">
                Products are shaped around day-to-day operator routines instead of abstract
                software categories.
              </p>
            </div>
            <div className="rounded-[1.5rem] border border-white/10 bg-white/8 p-5 backdrop-blur-sm">
              <p className="marketing-caption font-semibold uppercase tracking-[0.2em] text-teal-200">
                Product family
              </p>
              <p className="marketing-support mt-3 text-slate-100">
                Nexio Suite covers six focused systems spanning retail, facilities,
                services, learning, fitness, and sales workflows.
              </p>
            </div>
            <div className="rounded-[1.5rem] border border-white/10 bg-white/8 p-5 backdrop-blur-sm">
              <p className="marketing-caption font-semibold uppercase tracking-[0.2em] text-teal-200">
                Rollout posture
              </p>
              <p className="marketing-support mt-3 text-slate-100">
                Each product is designed to be understandable for SMEs without forcing a
                long transformation project.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="page-section surface-soft">
        <div className="content-shell-wide section-pad-compact grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal className="surface-panel-strong rounded-[1.75rem] p-8">
            <h2 className="marketing-section-title font-bold text-slate-900">
              Why Nexio Labs exists
            </h2>
            <p className="marketing-body mt-4 text-slate-600">
              We focus on business software that removes repetitive operational friction.
              That means product decisions stay close to the way owners, operators, and
              front-line teams actually work, not just how generic software expects them
              to work.
            </p>
            <p className="marketing-body mt-4 text-slate-600">
              Each Nexio Suite product is designed to combine process clarity, billing
              discipline, operational reporting, and role-based day-to-day execution in a
              format that growing businesses can adopt without a long transformation cycle.
            </p>
          </Reveal>
          <Reveal className="surface-panel rounded-[1.75rem] p-8" delay={100}>
            <h2 className="text-[1.8rem] font-bold tracking-tight text-slate-900">Product framing</h2>
            <ul className="marketing-support mt-5 space-y-3 text-slate-600">
              <li>Built for SMEs and operator-led businesses with practical workflows.</li>
              <li>Focused on modules teams use daily, not unused enterprise bloat.</li>
              <li>Structured for billing, subscriptions, reminders, reporting, and control.</li>
              <li>Positioned to be credible in India and usable for globally-minded teams.</li>
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="page-section surface-mist">
        <div className="content-shell-wide section-pad-compact">
          <Reveal>
            <h2 className="marketing-section-title font-bold text-slate-900">
              Nexio Suite products
            </h2>
            <p className="marketing-body mt-4 max-w-3xl text-slate-600">
              One product family, several operating contexts. Use the tabs to switch
              products, then scan the live detail panel and horizontal highlights strip
              for modules, workflow focus, and business fit.
            </p>
          </Reveal>
          <Reveal className="mt-10" delay={80}>
            <ProductsShowcase products={products} />
          </Reveal>
        </div>
      </section>

      <section className="page-section surface-deep text-white">
        <div className="content-shell-wide section-pad">
          <Reveal className="mx-auto max-w-4xl rounded-[2rem] border border-white/10 bg-white/8 px-6 py-12 text-center backdrop-blur-sm sm:px-10">
            <h2 className="marketing-section-title font-bold">Discuss the right Nexio Suite fit</h2>
            <p className="marketing-body mx-auto mt-4 max-w-3xl text-slate-200">
              If you are shaping an operations-heavy business and need software around
              billing, memberships, inventory, bookings, or workflow control, we can map
              the closest fit and plan the rollout.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
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
                See our services
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
