import Image from "next/image";
import { SITE_CONTENT } from "@/data/siteContent";

export default function PortfolioSection() {
  const { portfolio } = SITE_CONTENT;

  return (
    <section id="work" className="bg-[#FAF6EF] py-24 sm:py-32">
      <div className="site-wrap">
        <div className="mb-14 grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-end">
          <div>
            <p className="eyebrow">{portfolio.eyebrow}</p>

            <h2 className="heading-serif text-[clamp(3rem,6vw,5.6rem)] text-[#542E04]">
              {portfolio.title[0]}
              <br />
              <em className="font-normal text-[#AA7828]">
                {portfolio.title[1]}
              </em>
            </h2>
          </div>

          <p className="max-w-[520px] leading-8 text-[#542E04]/75 lg:justify-self-end">
            {portfolio.description}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {portfolio.images.map((image, index) => (
            <figure
              key={image.src}
              className={`relative overflow-hidden bg-[#EEE4D6] ${
                index === 0 || index === 5
                  ? "aspect-[3/4] md:row-span-2 md:aspect-auto md:min-h-[620px]"
                  : "aspect-[4/5]"
              }`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 hover:scale-[1.03]"
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}