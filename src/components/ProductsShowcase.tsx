"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import type { Product } from "@/lib/products-data";
import { getDefaultProductSlug, getProductBySlug } from "@/lib/product-browser";
import { getProductPath } from "@/lib/routes";

interface ProductsShowcaseProps {
  products: Product[];
}

export function ProductsShowcase({ products }: ProductsShowcaseProps) {
  const [selectedSlug, setSelectedSlug] = useState(() => getDefaultProductSlug(products));
  const [selectedCard, setSelectedCard] = useState(0);
  const scrollerRef = useRef<HTMLDivElement | null>(null);

  const selectedProduct = getProductBySlug(products, selectedSlug);

  useEffect(() => {
    if (!selectedProduct || !scrollerRef.current) {
      return;
    }

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const card = scrollerRef.current.children[selectedCard] as HTMLElement | undefined;

    card?.scrollIntoView({
      behavior: prefersReducedMotion ? "auto" : "smooth",
      block: "nearest",
      inline: "start",
    });
  }, [selectedCard, selectedProduct]);

  if (!selectedProduct) {
    return null;
  }

  const lastCardIndex = selectedProduct.detailCards.length - 1;

  return (
    <div className="grid gap-8 xl:grid-cols-[19rem_minmax(0,1fr)] 2xl:grid-cols-[20rem_minmax(0,1.3fr)]">
      <div className="surface-panel rounded-[1.8rem] p-4 sm:p-5">
        <div
          role="tablist"
          aria-label="Nexio Suite products"
          className="flex gap-3 overflow-x-auto pb-1 xl:grid xl:grid-cols-1 xl:overflow-visible"
        >
          {products.map((product) => {
            const isActive = product.slug === selectedProduct.slug;

            return (
              <button
                key={product.slug}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls={`${product.slug}-panel`}
                id={`${product.slug}-tab`}
                onClick={() => {
                  setSelectedSlug(product.slug);
                  setSelectedCard(0);
                }}
                className={`min-h-[5.75rem] min-w-[15.5rem] rounded-[1.25rem] border px-4 py-3.5 text-left transition-colors duration-200 xl:min-w-0 xl:w-full ${
                  isActive
                    ? "border-teal-500 bg-teal-600 text-white shadow-[0_18px_40px_rgba(13,148,136,0.24)]"
                    : "border-slate-200 bg-white text-slate-700 hover:border-teal-200 hover:bg-teal-50"
                }`}
              >
                <p
                  className={`text-[0.83rem] font-semibold uppercase tracking-[0.22em] ${
                    isActive ? "text-teal-100" : "text-teal-700"
                  }`}
                >
                  {product.highlightLabel}
                </p>
                <p className="mt-2 overflow-hidden text-ellipsis whitespace-nowrap text-lg font-semibold">
                  {product.name}
                </p>
              </button>
            );
          })}
        </div>
      </div>

      <div
        role="tabpanel"
        id={`${selectedProduct.slug}-panel`}
        aria-labelledby={`${selectedProduct.slug}-tab`}
        className="surface-panel-strong rounded-[2rem] p-6 sm:p-8"
      >
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between lg:gap-8">
          <div className="max-w-4xl">
            <p className="marketing-kicker text-teal-700">
              {selectedProduct.highlightLabel}
            </p>
            <h3 className="marketing-section-title mt-3 font-bold text-slate-900">
              {selectedProduct.name}
            </h3>
            <p className="mt-4 text-xl font-medium text-slate-700">
              {selectedProduct.purpose}
            </p>
            <p className="marketing-body mt-5 max-w-3xl text-slate-600">
              {selectedProduct.description}
            </p>
            <Link
              href={getProductPath(selectedProduct.slug)}
              className="mt-6 inline-flex rounded-full border border-teal-200 bg-teal-50 px-5 py-2.5 text-sm font-semibold text-teal-800 transition-colors duration-200 hover:border-teal-300 hover:bg-teal-100"
            >
              View product details
            </Link>
          </div>
          <div className="rounded-[1.5rem] bg-slate-900 px-5 py-4 text-white lg:w-[19rem] lg:flex-none">
            <p className="marketing-caption font-semibold uppercase tracking-[0.2em] text-teal-200">
              Workflow focus
            </p>
            <p className="marketing-support mt-3 text-slate-100">
              {selectedProduct.workflowFocus}
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-5 xl:grid-cols-[1.25fr_0.75fr]">
          <div className="rounded-[1.5rem] border border-slate-200 bg-white p-5">
            <p className="marketing-caption font-semibold uppercase tracking-[0.2em] text-slate-500">
              Key modules
            </p>
            <div className="mt-4 flex flex-wrap gap-2.5">
              {selectedProduct.keyModules.map((module) => (
                <span
                  key={module}
                  className="rounded-full bg-slate-100 px-3.5 py-2 text-[0.95rem] font-medium text-slate-700"
                >
                  {module}
                </span>
              ))}
            </div>
          </div>
          <div className="rounded-[1.5rem] border border-slate-200 bg-white p-5">
            <p className="marketing-caption font-semibold uppercase tracking-[0.2em] text-slate-500">
              Best for
            </p>
            <ul className="marketing-support mt-4 space-y-2 text-slate-700">
              {selectedProduct.targetBusinesses.map((business) => (
                <li key={business}>{business}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 rounded-[1.7rem] bg-[linear-gradient(135deg,#e8f8f5_0%,#f8fbff_100%)] p-5 sm:p-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="marketing-caption font-semibold uppercase tracking-[0.2em] text-slate-500">
                Operational detail strip
              </p>
              <p className="marketing-caption mt-2 text-slate-600">
                Compact views of the workflows this product is designed to support.
              </p>
            </div>
            <div className="flex items-center gap-2 self-start">
              <button
                type="button"
                onClick={() => setSelectedCard((index) => Math.max(0, index - 1))}
                disabled={selectedCard === 0}
                className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition-colors duration-200 hover:border-teal-300 hover:text-teal-700 disabled:cursor-not-allowed disabled:opacity-50"
              >
                Prev
              </button>
              <button
                type="button"
                onClick={() =>
                  setSelectedCard((index) =>
                    Math.min(lastCardIndex, index + 1)
                  )
                }
                disabled={selectedCard === lastCardIndex}
                className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition-colors duration-200 hover:border-teal-300 hover:text-teal-700 disabled:cursor-not-allowed disabled:opacity-50"
              >
                Next
              </button>
            </div>
          </div>

          <div ref={scrollerRef} className="mt-5 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2">
            {selectedProduct.detailCards.map((card, index) => (
              <article
                key={card.title}
                className={`min-w-[18rem] flex-1 snap-start rounded-[1.4rem] border p-5 shadow-[0_20px_45px_rgba(15,23,42,0.06)] sm:min-w-[20rem] xl:min-w-[21rem] ${
                  index === selectedCard
                    ? "border-teal-300 bg-white"
                    : "border-white/70 bg-white/80"
                }`}
              >
                <p className="marketing-caption font-semibold uppercase tracking-[0.18em] text-teal-700">
                  Highlight {index + 1}
                </p>
                <h4 className="mt-3 text-lg font-semibold text-slate-900">{card.title}</h4>
                <p className="marketing-support mt-3 text-slate-600">{card.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
