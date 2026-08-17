import Link from "next/link";
import Image from "next/image";
import type { ReactNode } from "react";
import { getAllArticles } from "@/lib/articles";

type Category = {
  kicker: string;
  title: string;
  description: string;
  imagen?: string; // thumbnail hero del pilar de la categoría
  href?: string; // link al pilar de la categoría
  icon?: ReactNode; // opcional: para futuro (Lucide, Heroicons o SVG propio)
};

const categories: Category[] = [
  {
    kicker: "ATEX · Antichispa",
    title: "Herramientas antichispa",
    description:
      "Llaves, martillos y herramientas de bronce-berilio o aleación de cobre para ambientes con atmósferas explosivas (ATEX). Comparativas de Bahco, Ampco y otras marcas presentes en Paraguay.",
    imagen: "/images/industria-antichispa-tanques.png",
    href: "/blog/que-son-las-herramientas-antichispa",
  },
  {
    kicker: "Industria Verde",
    title: "Herramientas forestales",
    description:
      "Motosierras, hachas, herramientas de tala y limpieza para uso profesional. Comparativas de equipamiento europeo y estándar internacional aplicado al mercado paraguayo.",
    imagen: "/images/forestal-serrucho-bahco-poda.png",
    href: "/blog/herramientas-forestales-profesionales-guia-introductoria",
  },
  {
    kicker: "Llaves dinamométricas",
    title: "Torque preciso",
    description:
      "Llaves de clic, digitales, eléctricas y multiplicadores de torque para aplicaciones críticas de industria pesada, automotriz y estructural. Bahco, Norbar y otras marcas del segmento.",
    imagen: "/images/torquimetro-1.png",
    href: "/blog/llaves-dinamometricas-guia-introductoria",
  },
  {
    kicker: "Trabajo eléctrico · IEC 60900",
    title: "Herramientas aisladas",
    description:
      "Destornilladores, alicates y llaves certificadas IEC 60900 y VDE para trabajo con tensión. Marco ANDE, sectores paraguayos, autenticidad VDE y herramientas para movilidad eléctrica.",
    imagen: "/images/herramientas-aisladas-pilar.png",
    href: "/blog/herramientas-aisladas-guia-introductoria",
  },
  {
    kicker: "Sanitario · Farma · Alimenticio",
    title: "Herramientas inoxidables",
    description:
      "Acero inoxidable AISI 304, 316 y 316L para industria farmacéutica, alimenticia y laboratorios. Cumplimiento DINAVISA, SENACSA e INAN, terminación superficial y estándares ASME BPE.",
    imagen: "/images/herramientas-inoxidables-pilar.jpg",
    href: "/blog/herramientas-inoxidables-guia-introductoria",
  },
  {
    kicker: "Electrónica · ESD · SMD",
    title: "Herramientas de precisión",
    description:
      "Alicates finos, pinzas técnicas (tweezers), cortantes y destornilladores milimétricos con versiones ESD-safe. Aplicaciones en electrónica, maquila, joyería y laboratorio.",
    imagen: "/images/herramientas-de-precision-pilar.png",
    href: "/blog/herramientas-de-precision-guia-introductoria",
  },
];

function formatFullDate(fecha: string): string {
  // "2026-08-15" → "15 de agosto de 2026"
  const [year, month, day] = fecha.split("-");
  const meses = [
    "enero", "febrero", "marzo", "abril", "mayo", "junio",
    "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre",
  ];
  const monthIndex = parseInt(month, 10) - 1;
  const dayInt = parseInt(day, 10);
  return `${dayInt} de ${meses[monthIndex]} de ${year}`;
}

export default function Home() {
  // Últimos 6 artículos ordenados por fecha (más recientes primero).
  const latestArticles = [...getAllArticles()]
    .sort((a, b) => b.fecha.localeCompare(a.fecha))
    .slice(0, 6);

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
              herramientas antichispa, aisladas, dinamométricas, inoxidables,
              forestales y de precisión, con enfoque en el mercado paraguayo.
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

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => {
            const cardContent = (
              <>
                {category.imagen && (
                  <div className="relative w-full aspect-video overflow-hidden bg-ink-800">
                    <Image
                      src={category.imagen}
                      alt={category.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                )}
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    {category.icon ? (
                      <span className="text-brand-500">{category.icon}</span>
                    ) : (
                      <div className="w-2 h-2 rounded-full bg-brand-500" />
                    )}
                    <span className="text-xs font-semibold tracking-widest text-brand-500 uppercase">
                      {category.kicker}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-ink-50 group-hover:text-brand-500 transition">
                    {category.title}
                  </h3>
                  <p className="text-ink-300 text-sm leading-relaxed">
                    {category.description}
                  </p>
                </div>
              </>
            );

            const cardClassName =
              "block border border-ink-700 rounded-sm overflow-hidden hover:border-brand-500 transition group";

            return category.href ? (
              <Link
                key={category.title}
                href={category.href}
                className={cardClassName}
              >
                {cardContent}
              </Link>
            ) : (
              <article key={category.title} className={cardClassName}>
                {cardContent}
              </article>
            );
          })}
        </div>
      </section>

      {/* Últimos artículos */}
      <section className="max-w-6xl mx-auto px-6 py-20 border-t border-ink-800">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-2">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-ink-50">
              Últimos artículos
            </h2>
            <p className="mt-2 text-ink-400">Publicaciones más recientes del blog.</p>
          </div>
          <Link
            href="/blog"
            className="text-sm font-semibold text-brand-500 hover:text-brand-400 transition"
          >
            Ver todos →
          </Link>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {latestArticles.map((article) => (
            <Link
              key={article.slug}
              href={`/blog/${article.slug}`}
              className="block border border-ink-700 rounded-sm overflow-hidden hover:border-brand-500 transition group"
            >
              {article.imagen && (
                <div className="relative w-full aspect-video overflow-hidden bg-ink-800">
                  <Image
                    src={article.imagen}
                    alt={article.imagenAlt || article.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              )}
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-2 h-2 rounded-full bg-brand-500" />
                  <span className="text-xs font-semibold tracking-widest text-brand-500 uppercase">
                    {article.categoria}
                  </span>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-ink-50 group-hover:text-brand-500 transition leading-snug">
                  {article.title}
                </h3>
                <p className="text-ink-300 text-sm leading-relaxed line-clamp-3 mb-4">
                  {article.descripcion}
                </p>
                <p className="text-xs text-ink-500">
                  {formatFullDate(article.fecha)}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}