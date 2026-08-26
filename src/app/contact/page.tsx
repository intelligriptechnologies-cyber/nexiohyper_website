import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { siteConfig, formatAddress } from "@/lib/site-config";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = buildMetadata({
  title: "Contact Us",
  description:
    "Get in touch with NexioHyper, an IT solutions company in Bhubaneswar, Odisha. Call, email, or send us a message about your project.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
      <h1 className="text-4xl font-bold text-slate-900">Contact Us</h1>
      <div className="mt-10 grid gap-10 md:grid-cols-2">
        <div className="space-y-6 text-slate-700">
          <div>
            <h2 className="font-semibold text-slate-900">Address</h2>
            <p className="mt-1">{formatAddress()}</p>
          </div>
          <div>
            <h2 className="font-semibold text-slate-900">Phone</h2>
            <p className="mt-1">
              <a
                href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`}
                className="hover:text-teal-600"
              >
                {siteConfig.phone}
              </a>
            </p>
          </div>
          <div>
            <h2 className="font-semibold text-slate-900">Email</h2>
            {siteConfig.emails.map((email) => (
              <p key={email} className="mt-1">
                <a href={`mailto:${email}`} className="hover:text-teal-600">
                  {email}
                </a>
              </p>
            ))}
          </div>
          <div>
            <h2 className="font-semibold text-slate-900">LinkedIn</h2>
            <p className="mt-1">
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
            className="mt-4 h-64 w-full rounded-lg border border-slate-200"
            loading="lazy"
            src="https://www.google.com/maps?q=Arch+Bishop%27s+House+Satyanagar+Bhubaneswar+751007&output=embed"
          />
        </div>
        <div>
          <h2 className="font-semibold text-slate-900">Send us a message</h2>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
