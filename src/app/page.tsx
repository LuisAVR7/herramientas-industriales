import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="border-b border-ink-800">
        <div className="max-w-6xl mx-auto px-6 py-24 md:py-32">
          <div className="max-w-3xl">
            <span className="inline-block text-xs font-semibold tracking-widest text-brand-500 uppercase mb-4">
              Blog técnico · Paraguay
            </span>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight text-ink-50">
              Comparativas y guías de compra
              <br />
              de <span className="text-brand-500">herramientas industriales</span>.
            </h1>
            <p className="mt-6 text-lg text-ink-300 leading-relaxed">
              Análisis técnicos, comparativas de marcas y guías de compra sobre
              herramientas antichispa, forestales y equipos industriales.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/blog"
                className="bg-brand-500 hover:bg-brand-600 text-ink-900 font-semibold px-6 py-3 rounded-sm transition"
              >
                Ver artículos
              </Link>
              <Link
                href="/sobre-este-blog"
                className="border border-ink-600 hover:border-brand-500 text-ink-100 px-6 py-3 rounded-sm transition"
              >
                Sobre este blog
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categorías */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-ink-50">
          Categorías
        </h2>
        <p className="mt-2 text-ink-400">Los rubros que cubre el blog.</p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <article className="border border-ink-700 rounded-sm p-8 hover:border-brand-500 transition group">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-2 h-2 rounded-full bg-brand-500" />
              <span className="text-xs font-semibold tracking-widest text-brand-500 uppercase">
                ATEX · Antichispa
              </span>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-ink-50 group-hover:text-brand-500 transition">
              Herramientas antichispa
            </h3>
            <p className="text-ink-300 text-sm leading-relaxed">
              Llaves, martillos y herramientas de bronce-berilio o aleación de
              cobre para ambientes con atmósferas explosivas (ATEX). Comparativas
              de Bahco, Ampco y otras marcas presentes en Paraguay.
            </p>
          </article>

          <article className="border border-ink-700 rounded-sm p-8 hover:border-brand-500 transition group">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-2 h-2 rounded-full bg-brand-500" />
              <span className="text-xs font-semibold tracking-widest text-brand-500 uppercase">
                Industria Verde
              </span>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-ink-50 group-hover:text-brand-500 transition">
              Herramientas forestales
            </h3>
            <p className="text-ink-300 text-sm leading-relaxed">
              Motosierras, hachas, herramientas de tala y limpieza para uso
              profesional. Comparativas de equipamiento europeo y estándar
              internacional aplicado al mercado paraguayo.
            </p>
          </article>
        </div>
      </section>
    </div>
  );
}