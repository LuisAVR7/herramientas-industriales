import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getAllCategorySlugs, getCategoryBySlug } from "@/lib/articles";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllCategorySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) return {};
  return {
    title: category.name,
    description: `Artículos de la categoría ${category.name}.`,
  };
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) notFound();

  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <div className="mb-8">
        <Link
          href="/categorias"
          className="text-sm text-ink-400 hover:text-brand-400 transition"
        >
          ← Volver a categorías
        </Link>
      </div>

      <span className="inline-block text-xs font-semibold tracking-widest text-brand-500 uppercase mb-4">
        Categoría
      </span>
      <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-ink-50 leading-tight">
        {category.name}
      </h1>
      <p className="mt-4 text-ink-400">
        {category.articles.length}{" "}
        {category.articles.length === 1 ? "artículo" : "artículos"} en esta
        categoría.
      </p>

      <div className="mt-16 space-y-8">
        {category.articles.map((article, index) => (
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
    </div>
  );
}