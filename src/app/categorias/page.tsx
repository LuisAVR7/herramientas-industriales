import type { Metadata } from "next";
import Link from "next/link";
import { getAllCategories } from "@/lib/articles";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Categorías",
  description:
    "Rubros que cubre el blog: antichispa, industria verde y más — cada uno con sus comparativas y guías de compra.",
};

export default function CategoriasPage() {
  const categorias = getAllCategories();

  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <span className="inline-block text-xs font-semibold tracking-widest text-brand-500 uppercase mb-4">
        Categorías
      </span>
      <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-ink-50 leading-tight">
        Rubros que cubre el blog
      </h1>
      <p className="mt-4 text-ink-400">
        Cada categoría agrupa artículos y comparativas específicas del rubro.
      </p>

      {categorias.length === 0 ? (
        <div className="mt-16 border border-dashed border-ink-700 rounded-sm p-12 text-center">
          <p className="text-ink-300">
            Todavía no hay categorías con artículos publicados.
          </p>
        </div>
      ) : (
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {categorias.map((cat) => (
            <Link
              key={cat.slug}
              href={`/categorias/${cat.slug}` as never}
              className="block border border-ink-700 rounded-sm p-8 hover:border-brand-500 transition group"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-2 h-2 rounded-full bg-brand-500" />
                <span className="text-xs font-semibold tracking-widest text-brand-500 uppercase">
                  {cat.name}
                </span>
              </div>
              <h2 className="text-xl font-semibold mb-2 text-ink-50 group-hover:text-brand-500 transition">
                {cat.articles.length}{" "}
                {cat.articles.length === 1 ? "artículo" : "artículos"}
              </h2>
              <p className="text-ink-300 text-sm leading-relaxed">
                Ver todos los artículos de la categoría.
              </p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}