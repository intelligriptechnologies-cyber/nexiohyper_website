import Image from "next/image";
import Link from "next/link";
import { formatAddress, siteConfig } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white text-slate-600">
      <div className="content-shell grid gap-8 py-10 md:grid-cols-3">
        <div>
          <Link href="/" className="inline-flex items-center">
            <Image
              src="/icons/nh_flat_logo.png"
              alt={`${siteConfig.name} logo`}
              width={220}
              height={55}
              className="h-auto w-40 sm:w-44"
            />
          </Link>
          <p className="mt-4 text-sm leading-6">{formatAddress()}</p>
        </div>
        <div>
          <p className="font-semibold text-slate-900">Contact</p>
          <p className="mt-2 text-sm">
            <a
              href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`}
              className="transition-colors duration-200 hover:text-teal-700"
            >
              {siteConfig.phone}
            </a>
          </p>
          {siteConfig.emails.map((email) => (
            <p key={email} className="text-sm">
              <a
                href={`mailto:${email}`}
                className="transition-colors duration-200 hover:text-teal-700"
              >
                {email}
              </a>
            </p>
          ))}
          <p className="mt-2 text-sm">
            <a
              href={siteConfig.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-200 hover:text-teal-700"
            >
              LinkedIn
            </a>
          </p>
        </div>
        <div>
          <p className="font-semibold text-slate-900">Sitemap</p>
          <ul className="mt-2 space-y-1 text-sm">
            {siteConfig.nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="transition-colors duration-200 hover:text-teal-700"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p className="border-t border-slate-200 py-4 text-center text-xs text-slate-500">
        &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
      </p>
    </footer>
  );
}
