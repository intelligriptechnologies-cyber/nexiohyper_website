"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/lib/site-config";

export function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    const frame = window.requestAnimationFrame(onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header
      className={`sticky top-0 z-50 border-b border-slate-200/80 bg-white/92 backdrop-blur-md supports-[backdrop-filter]:bg-white/82 ${
        isScrolled ? "shadow-[0_14px_34px_rgba(15,23,42,0.08)]" : ""
      } motion-safe:transition-[box-shadow,background-color] motion-safe:duration-200`}
    >
      <div
        className={`content-shell-wide flex items-center justify-between gap-4 sm:gap-5 ${
          isScrolled ? "h-[84px] sm:h-[92px] lg:h-[98px]" : "h-[96px] sm:h-[104px] lg:h-[112px]"
        } motion-safe:transition-[height] motion-safe:duration-200`}
      >
        <Link href="/" className="flex shrink-0 items-center self-stretch">
          <span
            className={`relative block overflow-hidden ${
              isScrolled ? "h-[62px] sm:h-[70px] lg:h-[78px] w-[300px] sm:w-[340px] lg:w-[382px]" : "h-[72px] sm:h-[80px] lg:h-[88px] w-[340px] sm:w-[384px] lg:w-[430px]"
            } motion-safe:transition-[width,height] motion-safe:duration-200`}
          >
            <Image
              src="/icons/nh_flat_logo.png"
              alt={`${siteConfig.name} logo`}
              width={340}
              height={85}
              className="h-full w-full object-contain object-left"
              preload
            />
          </span>
        </Link>
        <nav
          aria-label="Primary"
          className="flex flex-wrap items-center justify-end gap-1 text-[1.0625rem] font-semibold text-slate-700 sm:gap-1.5 lg:flex-nowrap lg:text-[1.25rem]"
        >
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={`rounded-full px-2.5 py-1.5 leading-none transition-[background-color,color,box-shadow] duration-200 sm:px-3 lg:px-3 ${
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
