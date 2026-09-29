import Image from "next/image";
import { SITE_CONTENT } from "@/data/siteContent";

export default function AboutSection() {
  const { about } = SITE_CONTENT;

  return (
    <section
      id="about"
      className="bg-[#FAF6EF] py-24 sm:py-32"
    >
      <div className="site-wrap grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20">
        {/* Imagen */}
        <div className="relative aspect-[4/5] overflow-hidden bg-[#EEE4D6]">
          <Image
            src={about.image}
            alt={about.imageAlt}
            fill
            sizes="(max-width: 1024px) 100vw, 45vw"
            className="object-cover"
          />
        </div>

        {/* Texto */}
        <div className="max-w-[620px]">
          <p className="eyebrow">{about.eyebrow}</p>

          <h2 className="heading-serif text-[clamp(3.4rem,6vw,6rem)] text-[#542E04]">
            {about.title}
          </h2>

          <div className="mt-8 space-y-6 leading-8 text-[#542E04]/80">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <p className="mt-10 font-serif text-[2rem] italic text-[#AA7828]">
            {about.signature}
          </p>
        </div>
      </div>
    </section>
  );
}