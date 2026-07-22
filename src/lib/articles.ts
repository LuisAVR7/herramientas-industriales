import fs from "fs";
import path from "path";
import matter from "gray-matter";

const ARTICLES_DIR = path.join(process.cwd(), "content", "blog");

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

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
}

export function getAllArticles(): Article[] {
  if (!fs.existsSync(ARTICLES_DIR)) return [];

  const files = fs.readdirSync(ARTICLES_DIR).filter((f) => f.endsWith(".mdx"));

  return files
    .map((file) => {
      const fullPath = path.join(ARTICLES_DIR, file);
      const raw = fs.readFileSync(fullPath, "utf8");
      const { data, content } = matter(raw);
      return {
        ...(data as ArticleFrontmatter),
        content,
      };
    })
    .sort((a, b) => (a.fecha < b.fecha ? 1 : -1));
}

export function getArticleBySlug(slug: string): Article | null {
  const fullPath = path.join(ARTICLES_DIR, `${slug}.mdx`);
  if (!fs.existsSync(fullPath)) return null;

  const raw = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(raw);
  return {
    ...(data as ArticleFrontmatter),
    content,
  };
}

export function getAllSlugs(): string[] {
  if (!fs.existsSync(ARTICLES_DIR)) return [];
  return fs
    .readdirSync(ARTICLES_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}

export function getAllCategories(): Category[] {
  const articles = getAllArticles();
  const map = new Map<string, Article[]>();

  for (const article of articles) {
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