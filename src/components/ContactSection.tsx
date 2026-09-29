"use client";

import { useState } from "react";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contacto" className="py-20 px-6 max-w-2xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-light tracking-wide uppercase text-neutral-900">Solicitar Contacto</h2>
        <div className="w-12 h-[1px] bg-neutral-400 mx-auto mt-3 mb-4" />
        <p className="text-neutral-600 text-sm">
          Completa el formulario para consultar fechas y disponibilidad.
        </p>
      </div>

      {submitted ? (
        <div className="p-6 bg-neutral-100 border border-neutral-300 text-center rounded">
          <p className="text-neutral-800 font-medium">¡Solicitud recibida!</p>
          <p className="text-neutral-600 text-xs mt-1">Nos pondremos en contacto contigo lo antes posible.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs uppercase text-neutral-500 mb-1">Nombre</label>
              <input required type="text" className="w-full border border-neutral-300 p-2.5 rounded text-sm outline-none focus:border-neutral-900" />
            </div>
            <div>
              <label className="block text-xs uppercase text-neutral-500 mb-1">Email</label>
              <input required type="email" className="w-full border border-neutral-300 p-2.5 rounded text-sm outline-none focus:border-neutral-900" />
            </div>
          </div>
          <div>
            <label className="block text-xs uppercase text-neutral-500 mb-1">Tipo de Sesión</label>
            <select className="w-full border border-neutral-300 p-2.5 rounded text-sm bg-white outline-none focus:border-neutral-900">
              <option>Boda</option>
              <option>Retratos / Individual</option>
              <option>Evento Social</option>
              <option>Editorial / Comercial</option>
            </select>
          </div>
          <div>
            <label className="block text-xs uppercase text-neutral-500 mb-1">Mensaje o Detalles</label>
            <textarea rows={3} placeholder="Fecha estimada, ciudad o locación..." className="w-full border border-neutral-300 p-2.5 rounded text-sm outline-none focus:border-neutral-900" />
          </div>
          <button type="submit" className="w-full bg-neutral-900 text-white py-3 rounded text-xs uppercase tracking-widest hover:bg-neutral-800 transition">
            Enviar Solicitud
          </button>
        </form>
      )}
    </section>
  );
}