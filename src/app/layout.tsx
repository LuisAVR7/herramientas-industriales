import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Herramientas Industriales — Comparativas y guías de compra",
    template: "%s | Herramientas Industriales",
  },
  description:
    "Blog especializado en herramientas industriales para el mercado paraguayo — comparativas, guías de compra y análisis técnico de equipos antichispa, forestales y más.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="antialiased flex min-h-screen flex-col">
        <header className="border-b border-ink-700 bg-ink-800/80 backdrop-blur sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
            <Link
              href="/"
              className="font-bold uppercase tracking-wider text-lg"
              aria-label="Herramientas Industriales — Inicio"
            >
              <span className="text-ink-50">Herramientas</span>{" "}
              <span className="text-brand-500">Industriales</span>
            </Link>
            <nav className="hidden md:flex items-center gap-8 text-sm text-ink-200">
              <Link href="/blog" className="hover:text-brand-400 transition">
                Blog
              </Link>
              <Link href="/sobre-este-blog" className="hover:text-brand-400 transition">
                Sobre este blog
              </Link>
              <Link href="/contacto" className="hover:text-brand-400 transition">
                Contacto
              </Link>
            </nav>
          </div>
        </header>

        <main className="flex-1">{children}</main>

        <footer className="border-t border-ink-700 bg-ink-800 mt-16">
          <div className="max-w-6xl mx-auto px-6 py-8 text-sm text-ink-400 flex flex-col md:flex-row justify-between items-center gap-4">
            <span>© {new Date().getFullYear()} Herramientas Industriales — Paraguay</span>
            <div className="flex items-center gap-3">
              <span>Desarrollado por</span>
              <a
                href="https://eleve11.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#F0EBD4] rounded-sm px-3 py-2 hover:brightness-95 transition"
                aria-label="Eleven — Creativity and management"
              >
                <svg
                  width="90"
                  height="34"
                  viewBox="0 0 220 78"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <text
                    x="0"
                    y="46"
                    fontFamily="Arial, Helvetica, sans-serif"
                    fontWeight="900"
                    fontSize="48"
                    fill="#121215"
                  >
                    eleve
                    <tspan fill="#E85D04" fontStyle="italic">
                      11
                    </tspan>
                  </text>
                  <text
                    x="2"
                    y="70"
                    fontFamily="Arial, Helvetica, sans-serif"
                    fontWeight="500"
                    fontSize="12"
                    fill="#121215"
                  >
                    Creativity and management
                  </text>
                </svg>
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}