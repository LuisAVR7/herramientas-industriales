import type { MetadataRoute } from "next";

const BASE_URL = "https://www.herramientas-industriales.com.py";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Bots genéricos: permitir todo el contenido, bloquear paths técnicos.
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },

      // Google AdSense: explícitamente permitido (crítico para monetización).
      {
        userAgent: "Mediapartners-Google",
        allow: "/",
      },
      {
        userAgent: "AdsBot-Google",
        allow: "/",
      },

      // Scrapers de IA: bloqueados según política editorial (T&C sección 4.4).
      // Prohibido el uso del contenido para entrenamiento de modelos de IA
      // o extracción automatizada sin autorización expresa.
      {
        userAgent: [
          "GPTBot",
          "ChatGPT-User",
          "OAI-SearchBot",
          "Google-Extended",
          "ClaudeBot",
          "anthropic-ai",
          "Claude-Web",
          "cohere-ai",
          "CCBot",
          "Bytespider",
          "Meta-ExternalAgent",
          "Meta-ExternalFetcher",
          "FacebookBot",
          "PerplexityBot",
          "Amazonbot",
          "Applebot-Extended",
          "Diffbot",
          "ImagesiftBot",
          "Omgilibot",
          "YouBot",
        ],
        disallow: "/",
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  };
}