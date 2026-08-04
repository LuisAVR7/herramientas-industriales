import type { Metadata } from "next";
import NewsletterForm from "@/components/NewsletterForm";

export const metadata: Metadata = {
  title: "Newsletter — Suscribite al análisis técnico mensual",
  description:
    "Recibí una vez al mes las novedades del blog Herramientas Industriales: artículos nuevos, comparativas técnicas y guías de compra sobre herramientas industriales en Paraguay.",
};

export default function NewsletterPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <p className="text-sm uppercase tracking-wider text-brand-500 mb-3 font-bold">
        Newsletter
      </p>
      <h1 className="text-4xl md:text-5xl font-bold text-ink-50 mb-6">
        El análisis técnico, una vez al mes en tu bandeja
      </h1>
      <p className="text-lg text-ink-300 mb-8 leading-relaxed">
        Suscribite al newsletter mensual de <strong>Herramientas Industriales</strong>{" "}
        y recibí un resumen de los artículos publicados, comparativas técnicas y guías
        de compra sobre herramientas antichispa, aisladas, dinamométricas,
        inoxidables, forestales y de precisión, con enfoque en el mercado paraguayo.
      </p>

      <div className="bg-ink-800 border border-ink-700 rounded-lg p-6 md:p-8 mb-8">
        <h2 className="text-xl font-bold text-ink-50 mb-4">Qué vas a recibir:</h2>
        <ul className="space-y-2 text-ink-200 mb-6">
          <li className="flex items-start gap-2">
            <span className="text-brand-500 mt-1">▸</span>
            <span>Resumen de los artículos nuevos del mes.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-brand-500 mt-1">▸</span>
            <span>Un tip técnico o análisis exclusivo no publicado en el blog.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-brand-500 mt-1">▸</span>
            <span>
              Enfoque en normativa paraguaya (SENACSA, DINAVISA, INTN y otras).
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-brand-500 mt-1">▸</span>
            <span>Cero spam. Un email al mes, sin excepción.</span>
          </li>
        </ul>

        <NewsletterForm variant="full" />

        <p className="text-xs text-ink-400 mt-4">
          Al suscribirte aceptás nuestra{" "}
          <a
            href="/politica-de-privacidad"
            className="text-brand-400 hover:underline"
          >
            Política de Privacidad
          </a>
          . Podés darte de baja en cualquier momento desde cualquier email que recibas.
        </p>
      </div>
    </div>
  );
}