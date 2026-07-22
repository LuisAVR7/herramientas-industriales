import type { Metadata } from "next";
import ContactoForm from "./ContactoForm";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Consultas técnicas, sugerencias de comparativas o propuestas de colaboración con marcas del rubro industrial.",
};

export default function Contacto() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-20">
      <span className="inline-block text-xs font-semibold tracking-widest text-brand-500 uppercase mb-4">
        Contacto
      </span>
      <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-ink-50 leading-tight">
        Escribinos
      </h1>
      <p className="mt-4 text-ink-400 max-w-xl">
        Consultas técnicas, sugerencias de comparativas o propuestas de
        colaboración con marcas del rubro industrial.
      </p>

      <div className="mt-12">
        <ContactoForm />
      </div>
    </div>
  );
}