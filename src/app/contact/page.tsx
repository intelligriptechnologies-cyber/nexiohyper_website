import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { JsonLd } from "@/components/JsonLd";
import { localBusinessJsonLd } from "@/lib/json-ld";
import { buildMetadata } from "@/lib/metadata";
import { formatAddress, siteConfig } from "@/lib/site-config";

export const metadata: Metadata = buildMetadata({
  title: "Contact Us",
  description:
    "Get in touch with NexioHyper, an IT solutions company in Bhubaneswar, Odisha. Call, email, or send us a message about your project.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <section className="page-section surface-mist">
      <JsonLd data={localBusinessJsonLd()} />
      <div className="content-shell section-pad-compact">
        <div className="max-w-4xl">
          <p className="marketing-kicker text-teal-700">Contact</p>
          <h1 className="marketing-title mt-5 font-bold text-slate-900">Contact Us</h1>
        </div>
        <div className="mt-12 grid gap-10 md:grid-cols-[0.95fr_1.05fr]">
          <div className="surface-panel-strong space-y-6 rounded-[1.75rem] p-7 text-slate-700">
            <div>
              <h2 className="text-base font-semibold uppercase tracking-[0.16em] text-slate-900">
                Address
              </h2>
              <p className="marketing-support mt-2">{formatAddress()}</p>
            </div>
            <div>
              <h2 className="text-base font-semibold uppercase tracking-[0.16em] text-slate-900">
                Phone
              </h2>
              <p className="marketing-support mt-2">
                <a
                  href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`}
                  className="hover:text-teal-600"
                >
                  {siteConfig.phone}
                </a>
              </p>
            </div>
            <div>
              <h2 className="text-base font-semibold uppercase tracking-[0.16em] text-slate-900">
                Email
              </h2>
              {siteConfig.emails.map((email) => (
                <p key={email} className="marketing-support mt-2">
                  <a href={`mailto:${email}`} className="hover:text-teal-600">
                    {email}
                  </a>
                </p>
              ))}
            </div>
            <div>
              <h2 className="text-base font-semibold uppercase tracking-[0.16em] text-slate-900">
                LinkedIn
              </h2>
              <p className="marketing-support mt-2">
                <a
                  href={siteConfig.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-teal-600"
                >
                  linkedin.com/company/nexiohyper
                </a>
              </p>
            </div>
            <iframe
              title="NexioHyper location"
              className="mt-4 h-64 w-full rounded-[1.25rem] border border-slate-200"
              loading="lazy"
              src="https://www.google.com/maps?q=Arch+Bishop%27s+House+Satyanagar+Bhubaneswar+751007&output=embed"
            />
          </div>
          <div className="surface-panel rounded-[1.75rem] p-7">
            <h2 className="text-[1.45rem] font-semibold tracking-tight text-slate-900">
              Send us a message
            </h2>
            <p className="marketing-support mt-3 max-w-xl text-slate-600">
              Tell us what you are building, where the bottleneck is, and what kind of
              delivery support you need.
            </p>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
