// src/components/PricingSection.tsx
"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { MARTHA_SOL_DATA } from "@/data/content";

export default function PricingSection() {
  const [activeTab, setActiveTab] = useState(0);
  const currentCategory = MARTHA_SOL_DATA.pricingCategories[activeTab];

  return (
    <section id="services" className="py-24 px-6 bg-[#F5EFE6] text-[#231913]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-widest text-[#C48B5A] font-medium mb-2">
            SERVICES & PRICING
          </p>
          <h2 className="text-4xl font-serif tracking-tight text-[#231913]">Choose your story.</h2>
          <p className="text-xs text-neutral-600 max-w-xl mx-auto mt-4 leading-relaxed">
            Clear packages with room for your personality. A 30% non-refundable retainer reserves your date.
          </p>

          {/* Selector de Categorías */}
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {MARTHA_SOL_DATA.pricingCategories.map((cat, index) => (
              <button
                key={cat.category}
                onClick={() => setActiveTab(index)}
                className={`px-5 py-2 text-xs uppercase tracking-wider rounded-full transition-all ${
                  activeTab === index
                    ? "bg-[#231913] text-[#F5EFE6]"
                    : "bg-white/80 text-[#231913] hover:bg-white"
                }`}
              >
                {cat.category}
              </button>
            ))}
          </div>
          <p className="text-xs italic text-neutral-500 mt-4">{currentCategory.description}</p>
        </div>

        {/* Tarjetas de Precios */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {currentCategory.packages.map((pkg) => {
            const message = encodeURIComponent(
              `Hi Martha, I would like to inquire about the "${pkg.name}" (${currentCategory.category}) package.`
            );
            const bookingUrl = `https://wa.me/${MARTHA_SOL_DATA.brand.whatsappNumber}?text=${message}`;

            return (
              <div
                key={pkg.name}
                className={`relative flex flex-col justify-between p-8 rounded-lg bg-white border ${
                  pkg.badge ? "border-[#C48B5A] shadow-md" : "border-neutral-200"
                }`}
              >
                {pkg.badge && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#C48B5A] text-white text-[10px] tracking-widest uppercase px-3 py-1 rounded-full font-medium">
                    {pkg.badge}
                  </span>
                )}
                <div>
                  <h3 className="text-xl font-serif text-[#231913]">{pkg.name}</h3>
                  <div className="my-5">
                    <span className="text-3xl font-light text-[#231913]">{pkg.price}</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start text-xs text-neutral-700 leading-snug">
                        <Check className="w-3.5 h-3.5 mr-2 text-[#C48B5A] flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-3 text-center text-xs uppercase tracking-wider font-semibold rounded transition ${
                    pkg.badge
                      ? "bg-[#231913] text-[#F5EFE6] hover:bg-neutral-800"
                      : "bg-[#F5EFE6] text-[#231913] hover:bg-neutral-200"
                  }`}
                >
                  Book on WhatsApp
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}