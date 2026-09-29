import Image from "next/image";
import { SITE_CONTENT } from "@/data/siteContent";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#160E0B] py-10 text-white">
      <div className="site-wrap flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <a
          href="#home"
          className="flex items-center gap-3"
          aria-label="Martha Sol Studio — back to top"
        >
          <Image
            src="/images/branding/logo-sun-monogram-final.png"
            alt=""
            width={46}
            height={46}
            className="h-[46px] w-[46px] object-contain"
          />

          <span className="font-serif text-[1.45rem] tracking-[0.08em]">
            {SITE_CONTENT.brand.name}

            <small className="block font-sans text-[0.5rem] tracking-[0.28em] uppercase text-white/70">
              {SITE_CONTENT.brand.subtitle}
            </small>
          </span>
        </a>

        <p className="text-xs text-white/55">
          © {currentYear} {SITE_CONTENT.footer.copyright}
        </p>
      </div>
    </footer>
  );
}