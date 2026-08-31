import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = buildMetadata({
  title: "About Us",
  description:
    "Learn about NexioHyper, an IT solutions company in Bhubaneswar, Odisha, building software and technology partnerships for clients across India and around the world.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <section className="page-section surface-mist">
      <div className="content-shell section-pad-compact">
        <div className="max-w-4xl">
          <p className="marketing-kicker text-teal-700">About</p>
          <h1 className="marketing-title mt-5 font-bold text-slate-900">
            About {siteConfig.name}
          </h1>
          <p className="mt-4 text-xl italic text-teal-600">{siteConfig.tagline}</p>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          <section className="surface-panel-strong rounded-[1.75rem] p-7">
            <h2 className="text-[1.45rem] font-semibold tracking-tight text-slate-900">
              Our story
            </h2>
            <div className="marketing-body mt-4 space-y-4 text-slate-700">
              <p>
                NexioHyper is an IT solutions company based in Bhubaneswar, Odisha,
                founded to help businesses turn technology into a genuine competitive
                advantage.
              </p>
              <p>
                We work with startups, growing SMEs, and established enterprises across
                India and internationally, combining local accessibility with dependable
                engineering practices.
              </p>
            </div>
          </section>
          <section className="surface-panel rounded-[1.75rem] p-7">
            <h2 className="text-[1.45rem] font-semibold tracking-tight text-slate-900">
              How we deliver
            </h2>
            <div className="marketing-body mt-4 space-y-4 text-slate-700">
              <p>
                Our approach is simple: understand the business problem first, then apply
                the right mix of custom software development, IT consulting and staffing,
                cloud and DevOps engineering, and data, AI &amp; analytics.
              </p>
              <p>
                We focus on systems that are practical to operate, maintainable over time,
                and capable of supporting the next stage of growth.
              </p>
            </div>
          </section>
          <section className="surface-panel-strong rounded-[1.75rem] p-7">
            <h2 className="text-[1.45rem] font-semibold tracking-tight text-slate-900">
              Who we work with
            </h2>
            <div className="marketing-body mt-4 space-y-4 text-slate-700">
              <p>
                We partner with teams that need both delivery bandwidth and technical
                judgment, from founder-led companies to established organizations
                modernizing critical workflows.
              </p>
              <p>
                As our tagline says, we believe in <strong>empowering tomorrow</strong>:
                building systems and teams today that clients can keep scaling on for
                years to come.
              </p>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
