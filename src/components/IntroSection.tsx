import { SITE_CONTENT } from "@/data/siteContent";

export default function IntroSection() {
  const { intro } = SITE_CONTENT;

  return (
    <section className="bg-[#FAF6EF] py-24 sm:py-32">
      <div className="site-wrap grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <p className="eyebrow">{intro.eyebrow}</p>

          <h2 className="heading-serif text-[clamp(3rem,6vw,5.8rem)] text-[#542E04]">
            {intro.title[0]}
            <br />
            <em className="font-normal text-[#AA7828]">
              {intro.title[1]}
            </em>
          </h2>
        </div>

        <div className="max-w-[580px] lg:pt-12">
          <p className="mb-6 text-[1.35rem] leading-relaxed text-[#542E04]">
            {intro.lead}
          </p>

          <p className="max-w-[520px] leading-8 text-[#542E04]/75">
            {intro.description}
          </p>
        </div>
      </div>
    </section>
  );
}