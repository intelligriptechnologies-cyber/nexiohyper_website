import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/site-config";

export function Header() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/icons/nh_flat_logo.png"
            alt={`${siteConfig.name} logo`}
            width={160}
            height={40}
            priority
          />
        </Link>
        <nav aria-label="Primary" className="flex gap-6 text-sm font-medium text-slate-700">
          {siteConfig.nav.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-teal-600">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
