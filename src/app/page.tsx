// src/app/page.tsx
import Image from "next/image";
import PortfolioGallery from "@/components/PortfolioGallery";
import PricingSection from "@/components/PricingSection";
import ContactSection from "@/components/ContactSection";
import WhatsAppButton from "@/components/WhatsAppButton";
import { MARTHA_SOL_DATA } from "@/data/content";

export default function Home() {
  const { brand } = MARTHA_SOL_DATA;

  return (
    <main className="min-h-screen bg-[#F5EFE6] text-[#231913]">
      {/* Navbar Minimalista */}
      <header className="sticky top-0 z-40 bg-[#F5EFE6]/90 backdrop-blur-sm border-b border-neutral-200/60 px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div>
            <span className="text-xl font-serif tracking-wider">{brand.name}</span>
            <span className="block text-[9px] uppercase tracking-widest text-[#C48B5A]">
              {brand.subtitle}
            </span>
          </div>
          <nav className="flex items-center gap-6 text-xs uppercase tracking-widest font-medium text-neutral-700">
            <a href="#work" className="hover:text-black transition">Work</a>
            <a href="#services" className="hover:text-black transition">Services</a>
            <a href="#about" className="hover:text-black transition">About</a>
            <a href="#book" className="hover:text-black transition">Book</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center text-center px-6 bg-[#231913] text-[#F5EFE6]">
        <div className="max-w-3xl space-y-5">
          <p className="text-xs uppercase tracking-widest text-[#C48B5A] font-medium">
            {brand.location}
          </p>
          <h1 className="text-4xl sm:text-6xl font-serif font-light tracking-tight leading-tight">
            Stories in <span className="italic font-normal">light</span>, made to feel.
          </h1>
          <p className="text-neutral-300 text-sm sm:text-base max-w-xl mx-auto font-light leading-relaxed">
            {brand.description}
          </p>
          <div className="pt-6 flex justify-center gap-4">
            <a
              href="#book"
              className="px-6 py-3 bg-[#C48B5A] text-white text-xs uppercase tracking-widest font-semibold rounded hover:bg-[#b07949] transition"
            >
              Book Your Session
            </a>
            <a
              href="#work"
              className="px-6 py-3 border border-[#F5EFE6]/40 text-[#F5EFE6] text-xs uppercase tracking-widest font-semibold rounded hover:bg-white/10 transition"
            >
              View Selected Work
            </a>
          </div>
        </div>
      </section>

      {/* Secciones */}
      <div id="work">
        <PortfolioGallery />
      </div>

      <PricingSection />

      {/* Proceso: What to Expect */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-xs uppercase tracking-widest text-[#C48B5A] font-medium mb-2">PROCESS</p>
          <h2 className="text-3xl font-serif text-[#231913]">Simple from start to finish.</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {MARTHA_SOL_DATA.processSteps.map((step) => (
            <div key={step.number} className="p-6 bg-white rounded-lg border border-neutral-200">
              <span className="text-2xl font-serif text-[#C48B5A]">{step.number}</span>
              <h3 className="text-lg font-serif text-[#231913] mt-2 mb-2">{step.title}</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Behind the Camera (About) */}
      <section id="about" className="py-24 px-6 bg-white border-t border-neutral-200">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <p className="text-xs uppercase tracking-widest text-[#C48B5A] font-medium">BEHIND THE CAMERA</p>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#231913]">{brand.about.headline}</h2>
          <div className="space-y-4 text-xs sm:text-sm text-neutral-700 leading-relaxed max-w-2xl mx-auto">
            {brand.about.paragraphs.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>
          <p className="text-lg font-serif italic text-[#C48B5A] pt-4">{brand.about.signoff}</p>
        </div>
      </section>

      {/* Contacto / Book */}
      <div id="book" className="bg-[#231913] text-[#F5EFE6]">
        <ContactSection />
      </div>

      {/* Botón Flotante de WhatsApp */}
      <WhatsAppButton />

      {/* Footer */}
      <footer className="py-8 bg-[#231913] border-t border-neutral-800 text-center text-xs text-neutral-400">
        <p>© 2026 {brand.name} Studio · Miami, Florida. All rights reserved.</p>
        <p className="mt-1 text-[#C48B5A]">{brand.instagramHandle}</p>
      </footer>
    </main>
  );
}