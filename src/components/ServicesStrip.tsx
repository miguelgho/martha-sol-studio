import { SITE_CONTENT } from "@/data/siteContent";

export default function ServicesStrip() {
  return (
    <section className="border-y border-[#542E04]/15 bg-[#FFFDF9] py-5">
      <div className="site-wrap">
        <ul className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-center text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[#542E04]">
          {SITE_CONTENT.serviceStrip.map((service, index) => (
            <li key={service} className="flex items-center gap-5">
              <span>{service}</span>

              {index < SITE_CONTENT.serviceStrip.length - 1 && (
                <span
                  aria-hidden="true"
                  className="text-[#E4B47C]"
                >
                  •
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}