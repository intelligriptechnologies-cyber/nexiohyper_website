import Link from "next/link";
import { siteConfig, formatAddress } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-slate-300">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-3">
        <div>
          <p className="text-lg font-semibold text-white">{siteConfig.name}</p>
          <p className="mt-1 text-sm italic text-teal-400">{siteConfig.tagline}</p>
          <p className="mt-4 text-sm">{formatAddress()}</p>
        </div>
        <div>
          <p className="font-semibold text-white">Contact</p>
          <p className="mt-2 text-sm">
            <a href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`} className="hover:text-teal-400">
              {siteConfig.phone}
            </a>
          </p>
          {siteConfig.emails.map((email) => (
            <p key={email} className="text-sm">
              <a href={`mailto:${email}`} className="hover:text-teal-400">
                {email}
              </a>
            </p>
          ))}
          <p className="mt-2 text-sm">
            <a
              href={siteConfig.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-teal-400"
            >
              LinkedIn
            </a>
          </p>
        </div>
        <div>
          <p className="font-semibold text-white">Sitemap</p>
          <ul className="mt-2 space-y-1 text-sm">
            {siteConfig.nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-teal-400">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p className="border-t border-slate-800 py-4 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
      </p>
    </footer>
  );
}
