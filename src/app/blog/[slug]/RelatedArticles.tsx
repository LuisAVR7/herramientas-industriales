import Link from "next/link";
import type { Article } from "@/lib/articles";
import { getCategoryBySlug, slugify } from "@/lib/articles";

type Props = {
  currentArticle: Article;
};

export default function RelatedArticles({ currentArticle }: Props) {
  const category = getCategoryBySlug(slugify(currentArticle.categoria));
  if (!category) return null;

  // Excluir el artículo actual. El helper getCategoryBySlug ya devuelve los
  // artículos ordenados (pilar primero, luego satélites por fecha ascendente),
  // así que no hace falta re-ordenar acá.
  const otherArticles = category.articles.filter(
    (a) => a.slug !== currentArticle.slug
  );

  if (otherArticles.length === 0) return null;

  return (
    <section className="mt-16 pt-8 border-t border-ink-800">
      <h2 className="text-xl md:text-2xl font-bold text-ink-50 mb-6">
        Más artículos de {category.name}
      </h2>
      <ul className="space-y-4">
        {otherArticles.map((article) => (
          <li key={article.slug}>
            <Link
              href={`/blog/${article.slug}`}
              className="group block p-4 rounded-sm bg-ink-900 border border-ink-800 hover:border-brand-500 transition"
            >
              <div className="flex items-center gap-3 mb-2 flex-wrap">
                <span className="text-xs font-semibold tracking-widest uppercase text-brand-500">
                  {article.tipo === "pilar" ? "Guía introductoria" : "Artículo"}
                </span>
                <span className="text-xs text-ink-500">·</span>
                <span className="text-xs text-ink-500">
                  {new Date(article.fecha + "T00:00:00").toLocaleDateString(
                    "es-PY",
                    {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    }
                  )}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-ink-100 group-hover:text-brand-400 transition mb-1">
                {article.title}
              </h3>
              <p className="text-sm text-ink-400 line-clamp-2">
                {article.descripcion}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}