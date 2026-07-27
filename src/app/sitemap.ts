import type { MetadataRoute } from "next";
import { getAllArticles, getAllCategories } from "@/lib/articles";

const BASE_URL = "https://www.herramientas-industriales.com.py";

export default function sitemap(): MetadataRoute.Sitemap {
  const articles = getAllArticles();
  const categories = getAllCategories();

  // Fecha del artículo más reciente — se usa como lastModified de home, /blog y /categorias.
  const latestArticleDate = articles.length
    ? new Date(articles[articles.length - 1].fecha)
    : new Date();

  // URLs estáticas del sitio.
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/`,
      lastModified: latestArticleDate,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: latestArticleDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/categorias`,
      lastModified: latestArticleDate,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/sobre-este-blog`,
      lastModified: latestArticleDate,
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: `${BASE_URL}/contacto`,
      lastModified: latestArticleDate,
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: `${BASE_URL}/politica-de-privacidad`,
      lastModified: latestArticleDate,
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: `${BASE_URL}/terminos-y-condiciones`,
      lastModified: latestArticleDate,
      changeFrequency: "yearly",
      priority: 0.4,
    },
  ];

  // URLs dinámicas de páginas de categoría — lastModified = artículo más reciente en la categoría.
  const categoryRoutes: MetadataRoute.Sitemap = categories.map((cat) => {
    const latestInCategory = cat.articles
      .map((a) => new Date(a.fecha))
      .sort((a, b) => b.getTime() - a.getTime())[0] || latestArticleDate;

    return {
      url: `${BASE_URL}/categorias/${cat.slug}`,
      lastModified: latestInCategory,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    };
  });

  // URLs dinámicas de artículos — pilares con prioridad 0.8, satélites con 0.6.
  const articleRoutes: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `${BASE_URL}/blog/${article.slug}`,
    lastModified: new Date(article.fecha),
    changeFrequency: "monthly" as const,
    priority: article.tipo === "pilar" ? 0.8 : 0.6,
  }));

  return [...staticRoutes, ...categoryRoutes, ...articleRoutes];
}