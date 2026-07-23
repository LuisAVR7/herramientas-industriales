import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getAllArticles } from "@/lib/articles";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Comparativas técnicas, guías de compra y análisis de herramientas industriales para el mercado paraguayo.",
};

export default function Blog() {
  const articles = getAllArticles();

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

      {articles.length === 0 ? (
        <div className="mt-16 border border-dashed border-ink-700 rounded-sm p-12 text-center">
          <p className="text-ink-300">
            Los primeros artículos se publican una vez que el sitio esté online
            y se defina el contenido inicial.
          </p>
        </div>
      ) : (
        <div className="mt-16 space-y-8">
          {articles.map((article, index) => (
            <Link
              key={article.slug}
              href={`/blog/${article.slug}` as never}
              className="block border border-ink-700 rounded-sm overflow-hidden hover:border-brand-500 transition group"
            >
              {article.imagen && (
                <div className="relative w-full h-40 md:h-48 bg-ink-900">
                  <Image
                    src={article.imagen}
                    alt={article.imagenAlt || article.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 800px"
                    className="object-contain"
                    priority={index === 0}
                  />
                </div>
              )}
              <div className="p-8">
                <div className="flex items-center gap-3 mb-3 flex-wrap">
                  <div className="w-2 h-2 rounded-full bg-brand-500" />
                  <span className="text-xs font-semibold tracking-widest text-brand-500 uppercase">
                    {article.categoria}
                  </span>
                  <span className="text-xs text-ink-500">·</span>
                  <span className="text-xs text-ink-500">
                    {new Date(article.fecha).toLocaleDateString("es-PY", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                </div>
                <h2 className="text-xl font-semibold mb-2 text-ink-50 group-hover:text-brand-500 transition">
                  {article.title}
                </h2>
                <p className="text-ink-300 text-sm leading-relaxed">
                  {article.descripcion}
                </p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}