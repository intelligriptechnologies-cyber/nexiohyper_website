"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/lib/site-config";

export function Header() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header className="border-b border-slate-200/80 bg-white/95 backdrop-blur-sm">
      <div className="content-shell-wide flex items-center justify-between gap-5 py-4 sm:py-5">
        <Link href="/" className="flex items-center">
          <Image
            src="/icons/nh_flat_logo.png"
            alt={`${siteConfig.name} logo`}
            width={280}
            height={70}
            className="h-auto w-44 sm:w-52 lg:w-[17rem]"
            priority
          />
        </Link>
        <nav
          aria-label="Primary"
          className="flex flex-wrap items-center justify-end gap-1.5 text-[15px] font-semibold text-slate-700 sm:gap-2"
        >
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={`rounded-full px-3 py-2 transition-[background-color,color,box-shadow] duration-200 sm:px-3.5 lg:px-4 ${
                isActive(item.href)
                  ? "bg-teal-600 text-white shadow-[0_10px_24px_rgba(13,148,136,0.26)]"
                  : "text-slate-700 hover:bg-teal-100 hover:text-teal-800"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
