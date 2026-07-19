import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Consultas técnicas, sugerencias de comparativas o propuestas de colaboración con marcas.",
};

export default function Contacto() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-20">
      <span className="inline-block text-xs font-semibold tracking-widest text-brand-500 uppercase mb-4">
        Contacto
      </span>
      <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-ink-50 leading-tight">
        Escribime
      </h1>
      <p className="mt-4 text-ink-400 max-w-xl">
        Consultas técnicas, sugerencias de comparativas o propuestas de
        colaboración con marcas del rubro.
      </p>

      <div className="mt-16 border border-dashed border-ink-700 rounded-sm p-12 text-center">
        <p className="text-ink-300">
          Formulario de contacto pendiente — se activa cuando el dominio esté
          comprado y el correo definido.
        </p>
      </div>
    </div>
  );
}