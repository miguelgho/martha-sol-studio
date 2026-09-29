"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { SITE_CONTENT } from "@/data/siteContent";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);

    return () => {
      document.body.classList.remove("menu-open");
    };
  }, [menuOpen]);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 text-white transition-all duration-300 ${
        scrolled
          ? "bg-[#AA7828]/95 backdrop-blur-[12px]"
          : "bg-gradient-to-b from-black/60 to-transparent"
      }`}
    >
      <nav
        className="site-wrap flex h-[88px] items-center justify-between max-[620px]:h-[72px]"
        aria-label="Primary navigation"
      >
        <a
          href="#home"
          className="flex items-center gap-[11px]"
          onClick={closeMenu}
        >
          <Image
            src="/images/branding/logo-sun-monogram-final.png"
            alt=""
            width={51}
            height={51}
            priority
            className="h-[51px] w-[51px] object-contain max-[620px]:h-[43px] max-[620px]:w-[43px]"
          />

          <span className="font-serif text-[1.7rem] tracking-[0.08em] max-[620px]:text-[1.25rem]">
            {SITE_CONTENT.brand.name}

            <small className="-mt-1 block font-sans text-[0.52rem] tracking-[0.3em] uppercase">
              {SITE_CONTENT.brand.subtitle}
            </small>
          </span>
        </a>

        <div
          id="primary-navigation"
          className={`
            items-center gap-[30px]
            text-[0.76rem] tracking-[0.11em] uppercase
            min-[901px]:flex
            ${
              menuOpen
                ? "fixed inset-0 flex flex-col justify-center bg-[#211712] text-base"
                : "hidden"
            }
          `}
        >
          {SITE_CONTENT.navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={closeMenu}
              className="transition-opacity hover:opacity-70"
            >
              {item.label}
            </a>
          ))}
        </div>

        <button
          type="button"
          className="relative z-[60] hidden border-0 bg-transparent text-2xl text-white max-[900px]:block"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((current) => !current)}
        >
          <span aria-hidden="true">{menuOpen ? "×" : "☰"}</span>
        </button>
      </nav>
    </header>
  );
}