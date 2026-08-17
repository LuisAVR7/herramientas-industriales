"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

type ArticleSearchItem = {
  title: string;
  slug: string;
  categoria: string;
  descripcion: string;
};

type Props = {
  articles: ArticleSearchItem[];
};

// Normaliza texto: minúsculas + sin acentos, para búsqueda tolerante.
function normalize(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "");
}

export default function SearchBar({ articles }: Props) {
  const [query, setQuery] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Filtrar resultados: mínimo 2 caracteres, máximo 8 resultados.
  const results =
    query.trim().length >= 2
      ? articles
          .filter((article) => {
            const q = normalize(query);
            return (
              normalize(article.title).includes(q) ||
              normalize(article.descripcion).includes(q) ||
              normalize(article.categoria).includes(q)
            );
          })
          .slice(0, 8)
      : [];

  // Mostrar dropdown solo si hay query mínima y el input está focused o hay resultados.
  const showDropdown = isDropdownOpen && query.trim().length >= 2;

  // Cerrar dropdown al hacer clic fuera del componente.
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Cerrar dropdown con tecla Escape.
  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsDropdownOpen(false);
        setQuery("");
      }
    }
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  function handleResultClick() {
    setIsDropdownOpen(false);
    setQuery("");
  }

  return (
    <div ref={containerRef} className="relative">
      <div className="flex items-center gap-2 bg-ink-900 border border-ink-700 rounded-sm px-3 py-2 focus-within:border-brand-500 transition">
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-ink-400 flex-shrink-0"
        >
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
        <input
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsDropdownOpen(true);
          }}
          onFocus={() => setIsDropdownOpen(true)}
          placeholder="Buscar artículos..."
          className="bg-transparent border-none outline-none text-sm text-ink-100 placeholder:text-ink-500 w-40 md:w-56"
        />
      </div>

      {showDropdown && (
        <div className="absolute top-full right-0 mt-2 w-96 max-w-[calc(100vw-2rem)] bg-ink-800 border border-ink-700 rounded-sm shadow-lg overflow-hidden z-50">
          {results.length > 0 ? (
            <ul>
              {results.map((article) => (
                <li
                  key={article.slug}
                  className="border-b border-ink-700 last:border-b-0"
                >
                  <Link
                    href={`/blog/${article.slug}`}
                    onClick={handleResultClick}
                    className="block px-4 py-3 hover:bg-ink-700 transition"
                  >
                    <div className="text-xs font-semibold uppercase tracking-widest text-brand-500 mb-1">
                      {article.categoria}
                    </div>
                    <div className="text-sm text-ink-50 leading-snug line-clamp-2">
                      {article.title}
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <div className="px-4 py-6 text-center text-sm text-ink-400">
              Sin resultados para &ldquo;{query}&rdquo;
            </div>
          )}
        </div>
      )}
    </div>
  );
}