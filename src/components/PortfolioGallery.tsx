"use client";

import { useState } from "react";
import Image from "next/image";
import { MARTHA_SOL_DATA } from "@/data/content";

export default function PortfolioGallery() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPhotos =
    selectedCategory === "All"
      ? MARTHA_SOL_DATA.portfolioPhotos
      : MARTHA_SOL_DATA.portfolioPhotos.filter((p) => p.category === selectedCategory);

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <p className="text-xs uppercase tracking-widest text-[#C48B5A] font-medium mb-2">
          SELECTED WORK
        </p>
        <h2 className="text-4xl font-serif text-[#231913]">People, details & little worlds.</h2>
        <div className="w-10 h-[1px] bg-[#C48B5A] mx-auto mt-4 mb-6" />

        {/* Categorías */}
        <div className="flex flex-wrap justify-center gap-2">
          {MARTHA_SOL_DATA.portfolioCategories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 text-xs uppercase tracking-wider rounded-full transition ${
                selectedCategory === category
                  ? "bg-[#231913] text-[#F5EFE6]"
                  : "bg-white text-neutral-600 hover:bg-neutral-100 border border-neutral-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Grid de Fotos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPhotos.map((photo) => (
          <div
            key={photo.id}
            className="relative group overflow-hidden bg-neutral-100 aspect-[4/5] rounded-md shadow-sm"
          >
            <Image
              src={photo.imageUrl}
              alt={photo.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-[#231913]/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#C48B5A] block mb-1">
                  {photo.category}
                </span>
                <span className="text-white text-base font-serif tracking-wide">
                  {photo.title}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}