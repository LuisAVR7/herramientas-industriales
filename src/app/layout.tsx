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
          <div className="max-w-6xl mx-auto px-6 py-8 text-sm text-ink-400 text-center">
            © {new Date().getFullYear()} Herramientas Industriales — Paraguay
          </div>
        </footer>
      </body>
    </html>
  );
}