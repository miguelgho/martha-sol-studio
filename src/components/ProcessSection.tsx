import { SITE_CONTENT } from "@/data/siteContent";

export default function ProcessSection() {
  const { process } = SITE_CONTENT;

  return (
    <section className="bg-[#FFFDF9] py-24 sm:py-32">
      <div className="site-wrap">
        <div className="mb-14 max-w-[700px]">
          <p className="eyebrow">{process.eyebrow}</p>

          <h2 className="heading-serif text-[clamp(3rem,6vw,5.6rem)] text-[#542E04]">
            {process.title}
          </h2>
        </div>

        <div className="grid gap-px bg-[#542E04]/15 md:grid-cols-3">
          {process.steps.map((step) => (
            <article
              key={step.number}
              className="bg-[#FFFDF9] p-8 sm:p-10"
            >
              <span className="font-serif text-[3rem] leading-none text-[#E4B47C]">
                {step.number}
              </span>

              <h3 className="mt-8 font-serif text-[2rem] leading-tight text-[#542E04]">
                {step.title}
              </h3>

              <p className="mt-4 leading-7 text-[#542E04]/70">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}