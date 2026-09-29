"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { SITE_CONTENT } from "@/data/siteContent";

type ServicePackage = {
  name: string;
  price: string;
  features: readonly string[];
  button: string;
  badge?: string;
  priceNote?: string;
};

type ServiceCategory = {
  name: string;
  description: string;
  packages: readonly ServicePackage[];
  finePrint?: string;
};

export default function ServicesSection() {
  const { services } = SITE_CONTENT;

  const categories =
    services.categories as readonly ServiceCategory[];

  const [activeCategory, setActiveCategory] = useState<string>(
    categories[0].name
  );

  const currentCategory =
    categories.find(
      (category) => category.name === activeCategory
    ) ?? categories[0];

  return (
    <section
      id="services"
      className="bg-[#FFFDF9] py-24 sm:py-32"
    >
      <div className="site-wrap">
        <div className="mx-auto mb-14 max-w-[760px] text-center">
          <p className="eyebrow">{services.eyebrow}</p>

          <h2 className="heading-serif text-[clamp(3rem,6vw,5.5rem)] text-[#542E04]">
            {services.title}
          </h2>

          <p className="mx-auto mt-6 max-w-[680px] leading-8 text-[#542E04]/75">
            {services.description}
          </p>
        </div>

        {/* Selector de categorías */}
        <div
          className="mb-12 flex flex-wrap justify-center gap-3"
          role="tablist"
          aria-label="Photography service categories"
        >
          {categories.map((category) => {
            const isActive =
              category.name === activeCategory;

            return (
              <button
                key={category.name}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() =>
                  setActiveCategory(category.name)
                }
                className={`border px-5 py-3 text-[0.72rem] font-semibold uppercase tracking-[0.14em] transition ${
                  isActive
                    ? "border-[#542E04] bg-[#542E04] text-white"
                    : "border-[#542E04]/20 bg-transparent text-[#542E04] hover:border-[#E4B47C] hover:bg-[#E4B47C]/10"
                }`}
              >
                {category.name}
              </button>
            );
          })}
        </div>

        {/* Descripción */}
        <p className="mx-auto mb-10 max-w-[720px] text-center leading-8 text-[#542E04]/75">
          {currentCategory.description}
        </p>

        {/* Packages */}
        <div className="grid gap-6 lg:grid-cols-3">
          {currentCategory.packages.map((pkg) => (
            <article
              key={pkg.name}
              className="relative flex min-h-full flex-col border border-[#542E04]/15 bg-[#FAF6EF] p-7 sm:p-8"
            >
              {pkg.badge && (
                <span className="absolute right-5 top-5 bg-[#E4B47C] px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-[#542E04]">
                  {pkg.badge}
                </span>
              )}

              <div className="mb-7">
                <h3 className="font-serif text-[2rem] leading-none text-[#542E04]">
                  {pkg.name}
                </h3>

                <div className="mt-5">
                  <span className="font-serif text-[2.7rem] leading-none text-[#AA7828]">
                    {pkg.price}
                  </span>

                  {pkg.priceNote && (
                    <span className="ml-2 text-sm text-[#542E04]/60">
                      {pkg.priceNote}
                    </span>
                  )}
                </div>
              </div>

              <ul className="mb-8 space-y-3">
                {pkg.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-sm leading-6 text-[#542E04]/80"
                  >
                    <Check
                      aria-hidden="true"
                      className="mt-1 h-4 w-4 shrink-0 text-[#E4B47C]"
                    />

                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-4">
                <a
                  href="#contact"
                  className="button-primary w-full"
                >
                  {pkg.button}
                </a>
              </div>
            </article>
          ))}
        </div>

        {currentCategory.finePrint && (
          <p className="mx-auto mt-8 max-w-[760px] text-center text-sm leading-7 text-[#542E04]/60">
            {currentCategory.finePrint}
          </p>
        )}
      </div>
    </section>
  );
}