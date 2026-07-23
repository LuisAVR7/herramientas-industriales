import articlesData from "./articles-generated.json";

export type ArticleFrontmatter = {
  title: string;
  slug: string;
  categoria: string;
  descripcion: string;
  fecha: string;
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
  return ALL_ARTICLES;
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
      articles,
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