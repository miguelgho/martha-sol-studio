import Image from "next/image";
import { SITE_CONTENT } from "@/data/siteContent";

export default function MotionSection() {
  const { motion } = SITE_CONTENT;

  return (
    <section className="bg-[#542E04] text-white">
      <div className="grid min-h-[720px] lg:grid-cols-2">
        <div className="relative min-h-[460px] lg:min-h-full">
          <Image
            src={motion.image}
            alt={motion.imageAlt}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />

          <div
            className="absolute inset-0 bg-black/15"
            aria-hidden="true"
          />
        </div>

        <div className="flex items-center px-6 py-20 sm:px-12 lg:px-16">
          <div className="max-w-[620px]">
            <p className="eyebrow text-[#E4B47C]">
              {motion.eyebrow}
            </p>

            <h2 className="heading-serif text-[clamp(3rem,6vw,5.8rem)] text-white">
              {motion.title[0]}
              <br />
              <em className="font-normal text-[#E4B47C]">
                {motion.title[1]}
              </em>
            </h2>

            <p className="mt-7 max-w-[560px] leading-8 text-white/75">
              {motion.description}
            </p>

            <div className="mt-10 divide-y divide-white/15 border-y border-white/15">
              {motion.options.map((option) => (
                <div
                  key={option.name}
                  className="flex items-center justify-between gap-6 py-5"
                >
                  <span className="font-serif text-xl">
                    {option.name}
                  </span>

                  <span className="text-sm uppercase tracking-[0.1em] text-[#E4B47C]">
                    {option.price}
                  </span>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="button-light mt-10"
            >
              {motion.button}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}