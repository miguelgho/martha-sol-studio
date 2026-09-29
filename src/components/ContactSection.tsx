"use client";

import { FormEvent, useState } from "react";
import { SITE_CONTENT } from "@/data/siteContent";

export default function ContactSection() {
  const { contact, brand } = SITE_CONTENT;
  const [status, setStatus] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const data = new FormData(form);

    const message = `New Martha Sol Studio inquiry

Name: ${data.get("name")}
Email: ${data.get("email")}
Phone: ${data.get("phone") || "Not provided"}
Service: ${data.get("service")}
Preferred date: ${data.get("date") || "Flexible"}
Budget: ${data.get("budget") || "Not selected"}

Idea: ${data.get("message")}`;

    try {
      await navigator.clipboard.writeText(message);

      setStatus(
        "Inquiry copied. Opening Instagram so you can send it to @marthasolstudio…"
      );

      window.setTimeout(() => {
        window.open(
          brand.instagram,
          "_blank",
          "noopener,noreferrer"
        );
      }, 650);
    } catch {
      setStatus(
        "Please send these details to @marthasolstudio on Instagram."
      );
    }
  }

  const inputClasses =
    "mt-2 w-full border-0 border-b border-white/40 bg-transparent px-0 py-3 text-white outline-none transition placeholder:text-white/40 focus:border-[#E4B47C] focus:ring-0";

  return (
    <section
      id="contact"
      className="bg-[#542E04] py-24 text-white sm:py-32"
    >
      <div className="site-wrap grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div className="max-w-[520px]">
          <p className="eyebrow text-[#E4B47C]">
            {contact.eyebrow}
          </p>

          <h2 className="heading-serif text-[clamp(3.4rem,7vw,6.4rem)] text-white">
            {contact.title[0]}
            <br />

            <em className="font-normal text-[#E4B47C]">
              {contact.title[1]}
            </em>
          </h2>

          <p className="mt-7 max-w-[460px] leading-8 text-white/75">
            {contact.description}
          </p>

          <a
            href={brand.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block border-b border-[#E4B47C] pb-1 text-[#E4B47C] transition hover:text-white"
          >
            {brand.instagramHandle}
          </a>
        </div>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 gap-x-8 gap-y-7 sm:grid-cols-2"
        >
          <label className="text-xs font-semibold uppercase tracking-[0.14em] text-white/70">
            {contact.fields.name}

            <input
              type="text"
              name="name"
              required
              autoComplete="name"
              className={inputClasses}
            />
          </label>

          <label className="text-xs font-semibold uppercase tracking-[0.14em] text-white/70">
            {contact.fields.email}

            <input
              type="email"
              name="email"
              required
              autoComplete="email"
              className={inputClasses}
            />
          </label>

          <label className="text-xs font-semibold uppercase tracking-[0.14em] text-white/70">
            {contact.fields.phone}

            <input
              type="tel"
              name="phone"
              autoComplete="tel"
              className={inputClasses}
            />
          </label>

          <label className="text-xs font-semibold uppercase tracking-[0.14em] text-white/70">
            {contact.fields.service}

            <select
              name="service"
              required
              defaultValue=""
              className={inputClasses}
            >
              <option value="" className="text-[#542E04]">
                {contact.servicePlaceholder}
              </option>

              {contact.serviceOptions.map((service) => (
                <option
                  key={service}
                  value={service}
                  className="text-[#542E04]"
                >
                  {service}
                </option>
              ))}
            </select>
          </label>

          <label className="text-xs font-semibold uppercase tracking-[0.14em] text-white/70">
            {contact.fields.preferredDate}

            <input
              type="date"
              name="date"
              className={inputClasses}
            />
          </label>

          <label className="text-xs font-semibold uppercase tracking-[0.14em] text-white/70">
            {contact.fields.budget}

            <select
              name="budget"
              defaultValue=""
              className={inputClasses}
            >
              <option value="" className="text-[#542E04]">
                {contact.budgetPlaceholder}
              </option>

              {contact.budgetOptions.map((budget) => (
                <option
                  key={budget}
                  value={budget}
                  className="text-[#542E04]"
                >
                  {budget}
                </option>
              ))}
            </select>
          </label>

          <label className="text-xs font-semibold uppercase tracking-[0.14em] text-white/70 sm:col-span-2">
            {contact.fields.message}

            <textarea
              name="message"
              required
              rows={4}
              className={`${inputClasses} resize-y`}
            />
          </label>

          <div className="sm:col-span-2">
            <button
              type="submit"
              className="min-h-[52px] border border-white bg-white px-7 text-xs font-semibold uppercase tracking-[0.12em] text-[#542E04] transition hover:border-[#E4B47C] hover:bg-[#E4B47C]"
            >
              {contact.button}
            </button>
          </div>

          <p className="text-xs leading-6 text-white/55 sm:col-span-2">
            {contact.note}
          </p>

          <p
            role="status"
            aria-live="polite"
            className="min-h-[25px] text-sm text-[#E4B47C] sm:col-span-2"
          >
            {status}
          </p>
        </form>
      </div>
    </section>
  );
}