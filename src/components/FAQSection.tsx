"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { SITE_CONTENT } from "@/data/siteContent";

export default function FAQSection() {
  const { faq } = SITE_CONTENT;

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-[#FAF6EF] py-24 sm:py-32">
      <div className="site-wrap grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
        {/* Título */}
        <div>
          <p className="eyebrow">{faq.eyebrow}</p>

          <h2 className="heading-serif text-[clamp(3rem,6vw,5.5rem)] text-[#542E04]">
            {faq.title[0]}
            <br />

            <em className="font-normal text-[#AA7828]">
              {faq.title[1]}
            </em>
          </h2>
        </div>

        {/* Preguntas */}
        <div className="border-t border-[#542E04]/20">
          {faq.items.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={item.question}
                className="border-b border-[#542E04]/20"
              >
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-6 py-6 text-left"
                  aria-expanded={isOpen}
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                >
                  <span className="font-serif text-[1.5rem] text-[#542E04]">
                    {item.question}
                  </span>

                  <Plus
                    aria-hidden="true"
                    className={`h-5 w-5 shrink-0 text-[#AA7828] transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  />
                </button>

                <div
                  className={`grid transition-all duration-300 ${
                    isOpen
                      ? "grid-rows-[1fr] pb-6"
                      : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-[720px] leading-8 text-[#542E04]/70">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}