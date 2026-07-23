import articlesData from "./articles-generated.json";

export type ArticleFrontmatter = {
  title: string;
  slug: string;
  categoria: string;
  descripcion: string;
  fecha: string;
  tipo?: "pilar" | "satelite";
  imagen?: string;
  imagenAlt?: string;
};

export type Article = ArticleFrontmatter & {
  content: string;
};

export type Category = {
  name: string;
  slug: string;
  articles: Article[];
};

const ALL_ARTICLES = articlesData as Article[];

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
}

export function getAllArticles(): Article[] {
  // Orden ascendente por fecha (más antiguo primero — "orden de creación").
  return [...ALL_ARTICLES].sort((a, b) => a.fecha.localeCompare(b.fecha));
}

export function getArticleBySlug(slug: string): Article | null {
  return ALL_ARTICLES.find((a) => a.slug === slug) || null;
}

export function getAllSlugs(): string[] {
  return ALL_ARTICLES.map((a) => a.slug);
}

export function getAllCategories(): Category[] {
  const map = new Map<string, Article[]>();

  for (const article of ALL_ARTICLES) {
    const existing = map.get(article.categoria) || [];
    map.set(article.categoria, [...existing, article]);
  }

  return Array.from(map.entries())
    .map(([name, articles]) => ({
      name,
      slug: slugify(name),
      articles: articles.sort((a, b) => {
        // Pilar primero.
        if (a.tipo === "pilar" && b.tipo !== "pilar") return -1;
        if (a.tipo !== "pilar" && b.tipo === "pilar") return 1;
        // Mismo tipo: orden ascendente por fecha (creación).
        return a.fecha.localeCompare(b.fecha);
      }),
    }))
    .sort((a, b) => a.name.localeCompare(b.name));
}

export function getCategoryBySlug(slug: string): Category | null {
  const categories = getAllCategories();
  return categories.find((c) => c.slug === slug) || null;
}

export function getAllCategorySlugs(): string[] {
  return getAllCategories().map((c) => c.slug);
}