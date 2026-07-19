import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Comparativas técnicas, guías de compra y análisis de herramientas industriales para el mercado paraguayo.",
};

export default function Blog() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <span className="inline-block text-xs font-semibold tracking-widest text-brand-500 uppercase mb-4">
        Blog
      </span>
      <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-ink-50 leading-tight">
        Artículos
      </h1>
      <p className="mt-4 text-ink-400">
        Comparativas técnicas y guías de compra.
      </p>

      <div className="mt-16 border border-dashed border-ink-700 rounded-sm p-12 text-center">
        <p className="text-ink-300">
          Los primeros artículos se publican una vez que el sitio esté online y
          se defina el contenido inicial.
        </p>
      </div>
    </div>
  );
}