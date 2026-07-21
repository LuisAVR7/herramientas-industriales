import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sobre este blog",
  description:
    "Herramientas Industriales — blog independiente de comparativas y guías de compra sobre herramientas industriales para el mercado paraguayo.",
};

export default function SobreEsteBlog() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-20">
      <span className="inline-block text-xs font-semibold tracking-widest text-brand-500 uppercase mb-4">
        Sobre este blog
      </span>
      <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-ink-50 leading-tight">
        Herramientas Industriales
      </h1>
      <p className="mt-4 text-ink-400">Blog independiente · Paraguay</p>

      <div className="mt-12 space-y-10 text-ink-200 leading-relaxed">
        <p>
          Herramientas Industriales es un blog independiente de comparativas y
          guías de compra sobre herramientas industriales para el mercado
          paraguayo — con foco en equipos especiales para trabajos específicos.
        </p>

        <section>
          <h2 className="text-xl font-semibold text-ink-50 mb-4">
            Enfoque editorial
          </h2>
          <p>
            Publicamos análisis técnicos y comparativas basadas en experiencia
            real trabajando con marcas industriales presentes en Paraguay y la
            región. Cada artículo responde a una pregunta concreta que se hace
            un comprador antes de decidir. Y ahí siempre pesa más el precio que
            la calidad — este blog ayuda a mirar también lo otro: ¿qué marca
            conviene para este uso, con este presupuesto, en este contexto?
          </p>
          <p className="mt-4">Priorizamos:</p>
          <ul className="mt-3 space-y-2 list-disc pl-6 text-ink-200">
            <li>Comparativas honestas entre marcas competidoras del mismo segmento.</li>
            <li>
              Aplicaciones reales al contexto paraguayo (disponibilidad local,
              condiciones de uso, servicio post-venta).
            </li>
            <li>
              Contenido pensado para todo el circuito de decisión — desde el
              ingeniero de mantenimiento que evalúa técnicamente hasta el
              gerente de compras que firma la orden.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-ink-50 mb-4">
            Qué respalda el contenido
          </h2>
          <p>
            Años de experiencia comercial y técnica en el rubro industrial
            paraguayo, con trabajo directo en canales mayoristas, atención
            técnica a compradores finales y gestión de marcas de herramientas y
            equipamiento.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-ink-50 mb-4">Contacto</h2>
          <p>
            Sugerencias de comparativas, consultas técnicas o propuestas de
            colaboración con marcas:{" "}
            <Link
              href="/contacto"
              className="text-brand-500 hover:text-brand-400 underline"
            >
              escribinos
            </Link>
            .
          </p>
        </section>
      </div>
    </div>
  );
}