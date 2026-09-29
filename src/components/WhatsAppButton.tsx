"use client";

import { MessageCircle } from "lucide-react";
import { MARTHA_SOL_DATA } from "@/data/content";

export default function WhatsAppButton() {
  const message = encodeURIComponent("Hi Martha, I would like to inquire about booking a session.");
  const whatsappUrl = `https://wa.me/${MARTHA_SOL_DATA.brand.whatsappNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25D366] text-white px-4 py-3 rounded-full shadow-lg hover:bg-[#20ba5a] transition transform hover:scale-105"
      aria-label="Contact on WhatsApp"
    >
      <MessageCircle className="w-5 h-5" />
      <span className="text-sm font-semibold hidden sm:inline">WhatsApp</span>
    </a>
  );
}