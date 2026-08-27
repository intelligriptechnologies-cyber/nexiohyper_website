import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { industries } from "@/lib/industries-data";
import { products } from "@/lib/products-data";
import { services } from "@/lib/services-data";

export function Footer() {
  const whatsappNumber = siteConfig.phone.replace(/\D+/g, "");
  const socialLinks = [
    {
      label: "LinkedIn",
      href: siteConfig.social.linkedin,
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
          <path d="M6.94 8.5H3.56V20h3.38V8.5Zm.22-3.56c0-1.07-.8-1.94-1.91-1.94s-1.9.87-1.9 1.94.79 1.94 1.88 1.94h.02c1.12 0 1.91-.87 1.91-1.94ZM20 13.08c0-3.53-1.88-5.18-4.4-5.18-2.03 0-2.94 1.12-3.45 1.9V8.5H8.78c.05.86 0 11.5 0 11.5h3.37v-6.42c0-.34.03-.68.13-.92.27-.68.88-1.39 1.92-1.39 1.35 0 1.89 1.03 1.89 2.54V20H20v-6.92Z" />
        </svg>
      ),
    },
    {
      label: "X",
      href: siteConfig.social.x,
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
          <path d="M18.9 2H22l-6.77 7.73L23.2 22h-6.26l-4.9-7.43L5.53 22H2.4l7.24-8.28L1.8 2h6.42l4.43 6.78L18.9 2Zm-1.1 18h1.73L7.28 3.9H5.42L17.8 20Z" />
        </svg>
      ),
    },
    {
      label: "YouTube",
      href: siteConfig.social.youtube,
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
          <path d="M23 12.01s0-3.08-.39-4.57a3.19 3.19 0 0 0-2.24-2.25C18.88 4.8 12 4.8 12 4.8s-6.88 0-8.37.39A3.19 3.19 0 0 0 1.39 7.44C1 8.93 1 12.01 1 12.01s0 3.08.39 4.57a3.19 3.19 0 0 0 2.24 2.25c1.49.39 8.37.39 8.37.39s6.88 0 8.37-.39a3.19 3.19 0 0 0 2.24-2.25c.39-1.49.39-4.57.39-4.57ZM9.02 15.8V8.22l6.55 3.79-6.55 3.79Z" />
        </svg>
      ),
    },
    {
      label: "Facebook",
      href: siteConfig.social.facebook,
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
          <path d="M13.62 22v-8.04h2.7l.4-3.13h-3.1V8.83c0-.9.25-1.52 1.54-1.52h1.65V4.5c-.29-.04-1.27-.12-2.41-.12-2.38 0-4 1.45-4 4.12v2.33H7.7v3.13h2.7V22h3.22Z" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="border-t border-slate-200/80 bg-[linear-gradient(180deg,#f8fbfd_0%,#eef5f7_100%)] text-slate-600">
      <div className="content-shell py-10 sm:py-12 lg:py-12">
        <div className="grid gap-8 lg:grid-cols-[1.35fr_repeat(3,minmax(0,0.72fr))_auto] lg:items-start lg:gap-8">
          <div className="max-w-md">
            <Link href="/" className="inline-flex items-center">
              <Image
                src="/icons/nh_logo_gradient.png"
                alt={`${siteConfig.name} logo`}
                width={320}
                height={96}
                className="h-auto w-48 sm:w-56"
              />
            </Link>
            <p className="mt-4 text-sm font-semibold uppercase tracking-[0.22em] text-teal-700">
              About NexioHyper
            </p>
            <p className="mt-3 text-[1rem] leading-7 text-slate-700">
              Software, cloud, data, and AI delivery for teams that need practical
              systems, clear workflows, and dependable implementation.
            </p>
            <div className="mt-5 space-y-2.5 text-[0.98rem] leading-7 text-slate-600">
              <p>
                <span className="mr-2 font-semibold text-slate-900">Location:</span>
                <span className="inline-block align-top">
                  <span className="block">1st Floor, New Annex Building,</span>
                  <span className="block">Arch Bishop&apos;s House,</span>
                  <span className="block">Satyanagar, Bhubaneswar - 751007</span>
                </span>
              </p>
              <p>
                <span className="mr-2 font-semibold text-slate-900">Contact us:</span>
                <a
                  href={`mailto:${siteConfig.primaryContactEmail}`}
                  className="transition-colors duration-200 hover:text-teal-700"
                >
                  {siteConfig.primaryContactEmail}
                </a>
              </p>
              <p>
                <span className="mr-2 font-semibold text-slate-900">WhatsApp:</span>
                <a
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors duration-200 hover:text-teal-700"
                >
                  {siteConfig.phone}
                </a>
              </p>
            </div>
          </div>
          <div>
            <Link
              href="/services"
              className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-900 transition-colors duration-200 hover:text-teal-700"
            >
              Services
            </Link>
            <ul className="mt-4 grid gap-2.5 text-[1rem] leading-7 text-slate-600">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="transition-colors duration-200 hover:text-teal-700"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <Link
              href="/products"
              className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-900 transition-colors duration-200 hover:text-teal-700"
            >
              Products
            </Link>
            <ul className="mt-4 grid gap-2.5 text-[1rem] leading-7 text-slate-600">
              {products.map((product) => (
                <li key={product.slug}>
                  <Link
                    href={`/products/${product.slug}`}
                    className="transition-colors duration-200 hover:text-teal-700"
                  >
                    {product.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <Link
              href="/industries"
              className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-900 transition-colors duration-200 hover:text-teal-700"
            >
              Industries
            </Link>
            <ul className="mt-4 grid gap-2.5 text-[1rem] leading-7 text-slate-600">
              {industries.map((industry) => (
                <li key={industry.slug}>
                  <Link
                    href={`/industries/${industry.slug}`}
                    className="transition-colors duration-200 hover:text-teal-700"
                  >
                    {industry.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:justify-self-end">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-900">
              Connect
            </p>
            <div className="mt-4 flex items-center gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit NexioHyper on ${social.label}`}
                  className="inline-flex h-10 w-10 items-center justify-center bg-slate-900 text-white transition-[background-color,transform] duration-200 hover:-translate-y-0.5 hover:bg-teal-700"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-200/80 bg-white">
        <div className="content-shell flex flex-col gap-3 py-4 text-[0.98rem] text-slate-600 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {siteConfig.legalLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="font-medium text-slate-700 transition-colors duration-200 hover:text-teal-700"
              >
                {item.label}
              </a>
            ))}
          </div>
          <p className="sm:text-right">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved. Built
            from Bhubaneswar for clients across India and beyond.
          </p>
        </div>
      </div>
    </footer>
  );
}
