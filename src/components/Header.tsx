"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { industries } from "@/lib/industries-data";
import { getIndustryPath, getProductPath, getServicePath } from "@/lib/routes";
import { products } from "@/lib/products-data";
import { services } from "@/lib/services-data";
import { siteConfig } from "@/lib/site-config";

export function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<"services" | "products" | "industries" | null>(
    null,
  );

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

  const serviceLinks = [
    { label: "All services", href: "/services" },
    ...services.map((service) => ({
      label: service.name,
      href: getServicePath(service.slug),
    })),
  ];

  const productLinks = [
    { label: "All products", href: "/products" },
    ...products.map((product) => ({
      label: product.name,
      href: getProductPath(product.slug),
    })),
  ];

  const industryLinks = [
    { label: "All industries", href: "/industries" },
    ...industries.map((industry) => ({
      label: industry.name,
      href: getIndustryPath(industry.slug),
    })),
  ];

  const getTopLevelMenuClass = (active: boolean) =>
    `flex items-center rounded-full px-1.5 py-1 transition-[background-color,color,box-shadow,transform] duration-200 motion-safe:origin-center ${
      active
        ? "scale-105 bg-teal-600 text-white shadow-[0_14px_28px_rgba(13,148,136,0.28)]"
        : "text-slate-700 hover:scale-105 hover:bg-teal-100 hover:text-teal-800 hover:shadow-[0_12px_24px_rgba(15,23,42,0.08)]"
    }`;

  const renderDesktopMenu = (
    label: string,
    href: string,
    menuKey: "services" | "products" | "industries",
    links: Array<{ label: string; href: string }>,
  ) => {
    const active = isActive(href);

    return (
      <div
        className="relative hidden pb-4 -mb-4 lg:block"
        onMouseEnter={() => setOpenMenu(menuKey)}
        onMouseLeave={() => setOpenMenu((current) => (current === menuKey ? null : current))}
      >
        <div className={getTopLevelMenuClass(active || openMenu === menuKey)}>
          <Link
            href={href}
            aria-current={active ? "page" : undefined}
            className="rounded-full px-3.5 py-2 leading-none"
          >
            {label}
          </Link>
          <button
            type="button"
            aria-expanded={openMenu === menuKey}
            aria-label={`Toggle ${label} submenu`}
            onClick={() =>
              setOpenMenu((current) => (current === menuKey ? null : menuKey))
            }
            className="inline-flex h-10 w-10 items-center justify-center rounded-full"
          >
            <svg
              viewBox="0 0 20 20"
              aria-hidden="true"
              className={`h-4 w-4 transition-transform duration-200 ${
                openMenu === menuKey ? "rotate-180" : ""
              }`}
            >
              <path
                d="M5.25 7.5 10 12.25 14.75 7.5"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.8"
              />
            </svg>
          </button>
        </div>
        <div
          className={`absolute left-0 top-full pt-4 ${
            openMenu === menuKey
              ? "pointer-events-auto translate-y-0 opacity-100"
              : "pointer-events-none -translate-y-1 opacity-0"
          }`}
        >
          <div className="w-[20rem] rounded-[1.5rem] border border-slate-200/80 bg-white/96 p-3 text-base text-slate-700 shadow-[0_24px_60px_rgba(15,23,42,0.12)] backdrop-blur-md">
            <div className="grid gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive(link.href) ? "page" : undefined}
                onClick={() => setOpenMenu(null)}
                className={`rounded-[1rem] px-4 py-3 leading-snug transition-colors duration-200 ${
                  isActive(link.href)
                    ? "bg-teal-600 text-white"
                    : "hover:bg-teal-50 hover:text-teal-800"
                }`}
              >
                {link.label}
              </Link>
            ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderMobileMenu = (
    label: string,
    href: string,
    menuKey: "services" | "products" | "industries",
    links: Array<{ label: string; href: string }>,
  ) => {
    const active = isActive(href);
    const expanded = openMenu === menuKey;

    return (
      <div className="w-full lg:hidden">
        <div className={getTopLevelMenuClass(active || expanded)}>
          <Link
            href={href}
            aria-current={active ? "page" : undefined}
            className="min-w-0 flex-1 rounded-full px-3.5 py-2 leading-none"
            onClick={() => setOpenMenu(null)}
          >
            {label}
          </Link>
          <button
            type="button"
            aria-expanded={expanded}
            aria-label={`Toggle ${label} submenu`}
            onClick={() =>
              setOpenMenu((current) => (current === menuKey ? null : menuKey))
            }
            className="inline-flex h-10 w-10 items-center justify-center rounded-full"
          >
            <svg
              viewBox="0 0 20 20"
              aria-hidden="true"
              className={`h-4 w-4 transition-transform duration-200 ${
                expanded ? "rotate-180" : ""
              }`}
            >
              <path
                d="M5.25 7.5 10 12.25 14.75 7.5"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.8"
              />
            </svg>
          </button>
        </div>
        {expanded ? (
          <div className="mt-2 grid gap-1 rounded-[1.25rem] border border-slate-200/80 bg-white p-2 text-[0.98rem] text-slate-700 shadow-[0_18px_40px_rgba(15,23,42,0.08)]">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive(link.href) ? "page" : undefined}
                onClick={() => setOpenMenu(null)}
                className={`rounded-[0.95rem] px-3 py-2.5 leading-snug transition-colors duration-200 ${
                  isActive(link.href)
                    ? "bg-teal-600 text-white"
                    : "hover:bg-teal-50 hover:text-teal-800"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        ) : null}
      </div>
    );
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
              src="/icons/logo-horizontal-2048.png"
              alt={`${siteConfig.name} logo`}
              width={2048}
              height={469}
              className="h-full w-full object-contain object-left"
              preload
            />
          </span>
        </Link>
        <nav
          aria-label="Primary"
          className="flex flex-wrap items-center justify-end gap-2 text-[1.0625rem] font-semibold text-slate-700 sm:gap-2 lg:flex-nowrap lg:text-[1.25rem]"
        >
          {siteConfig.nav.map((item) => {
            if (item.href === "/services") {
              return (
                <div key={item.href}>
                  {renderDesktopMenu(item.label, item.href, "services", serviceLinks)}
                  {renderMobileMenu(item.label, item.href, "services", serviceLinks)}
                </div>
              );
            }

            if (item.href === "/products") {
              return (
                <div key={item.href}>
                  {renderDesktopMenu(item.label, item.href, "products", productLinks)}
                  {renderMobileMenu(item.label, item.href, "products", productLinks)}
                </div>
              );
            }

            if (item.href === "/industries") {
              return (
                <div key={item.href}>
                  {renderDesktopMenu(item.label, item.href, "industries", industryLinks)}
                  {renderMobileMenu(item.label, item.href, "industries", industryLinks)}
                </div>
              );
            }

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={`${getTopLevelMenuClass(isActive(item.href))} px-4 py-2 leading-none`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
