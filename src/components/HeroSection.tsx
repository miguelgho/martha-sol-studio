import Image from "next/image";
import { SITE_CONTENT } from "@/data/siteContent";

export default function HeroSection() {
  const { hero } = SITE_CONTENT;

  return (
    <section
      id="home"
      className="relative grid min-h-[100svh] items-end overflow-hidden bg-[#19100c] text-white"
    >
      <Image
        src={hero.image}
        alt={hero.imageAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover object-[center_28%]"
      />

      <div
        className="absolute inset-0 z-[1]"
        aria-hidden="true"
        style={{
          background:
            "linear-gradient(90deg, rgba(13,8,5,.75) 0%, rgba(13,8,5,.12) 60%), linear-gradient(0deg, rgba(13,8,5,.5), transparent 50%)",
        }}
      />

      <div className="site-wrap relative z-10 max-w-[1240px]">
        <div className="max-w-[980px] pt-[170px] pb-[80px] max-[620px]:pt-[130px] max-[620px]:pb-[48px]">
          <p className="eyebrow">{hero.eyebrow}</p>

          <h1 className="heading-serif mb-[22px] text-[clamp(3.2rem,8vw,7.6rem)] tracking-[-0.04em]">
            {hero.titleBefore}
            <em className="font-normal">{hero.titleHighlight}</em>
            <br />
            {hero.titleAfter}
          </h1>

          <p className="max-w-[560px] text-[1.08rem]">
            {hero.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-[14px]">
            <a href="#contact" className="button-primary">
              {hero.primaryButton}
            </a>

            <a href="#work" className="button-light">
              {hero.secondaryButton}
            </a>
          </div>
        </div>
      </div>

      <span className="absolute right-7 bottom-[34px] z-10 [writing-mode:vertical-rl] text-[0.69rem] tracking-[0.16em] uppercase max-[620px]:hidden">
        {hero.note}
      </span>
    </section>
  );
}