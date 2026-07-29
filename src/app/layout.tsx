import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import "./globals.css";

const SITE_URL = "https://www.herramientas-industriales.com.py";
const ADSENSE_CLIENT_ID = "ca-pub-6682406524868253";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Herramientas Industriales — Comparativas y guías de compra",
    template: "%s | Herramientas Industriales",
  },
  description:
    "Blog especializado en herramientas industriales para el mercado paraguayo — comparativas, guías de compra y análisis técnico de equipos antichispa, forestales y más.",
};

// Schema.org JSON-LD global — Organization + WebSite.
const globalSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Herramientas Industriales",
    alternateName: "Herramientas Industriales Paraguay",
    url: `${SITE_URL}/`,
    logo: `${SITE_URL}/icon-512.png`,
    description:
      "Blog especializado en herramientas industriales para el mercado paraguayo — comparativas, guías de compra y análisis técnico de equipos antichispa, forestales y más.",
    areaServed: {
      "@type": "Country",
      name: "Paraguay",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Herramientas Industriales",
    url: `${SITE_URL}/`,
    inLanguage: "es-PY",
    description:
      "Comparativas técnicas, guías de compra y análisis de herramientas industriales para el mercado paraguayo.",
  },
];

// Logo SVG inline reutilizable (H naranja + I blanca sobre cuadro negro).
function LogoIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Herramientas Industriales"
    >
      <rect x="4" y="4" width="92" height="92" rx="10" fill="#0A0A0A" />
      <g fill="#E85D04">
        <rect x="30" y="25" width="6" height="40" />
        <rect x="64" y="25" width="6" height="40" />
        <rect x="30" y="43" width="40" height="6" />
      </g>
      <g fill="#FAFAFA">
        <rect x="47" y="20" width="6" height="50" />
        <rect x="42" y="17" width="16" height="4" />
        <rect x="42" y="69" width="16" height="4" />
      </g>
    </svg>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="antialiased flex min-h-screen flex-col">
        {/* Google AdSense — script principal para verificación y publicación de anuncios */}
        <Script
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT_ID}`}
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(globalSchemas) }}
        />

        <header className="border-b border-ink-700 bg-ink-800/80 backdrop-blur sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
            <Link
              href="/"
              className="flex items-center gap-3 font-bold uppercase tracking-wider"
              aria-label="Herramientas Industriales — Inicio"
            >
              <LogoIcon className="w-10 h-10 flex-shrink-0" />
              <span className="text-lg leading-none">
                <span className="text-brand-500">Herramientas</span>{" "}
                <span className="text-ink-50">Industriales</span>
              </span>
            </Link>
            <nav className="hidden md:flex items-center gap-8 text-sm text-ink-200">
              <Link href="/blog" className="hover:text-brand-400 transition">
                Artículos
              </Link>
              <Link href="/categorias" className="hover:text-brand-400 transition">
                Categorías
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
            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 text-center md:text-left">
              <span>© {new Date().getFullYear()} Herramientas Industriales — Paraguay</span>
              <span className="hidden md:inline text-ink-600">·</span>
              <Link
                href="/politica-de-privacidad"
                className="hover:text-brand-400 transition"
              >
                Política de Privacidad
              </Link>
              <span className="hidden md:inline text-ink-600">·</span>
              <Link
                href="/terminos-y-condiciones"
                className="hover:text-brand-400 transition"
              >
                Términos y Condiciones
              </Link>
            </div>
            <div className="flex items-center gap-3">
              <span>Desarrollado por</span>
              <a
                href="https://eleve11.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:brightness-95 transition"
                aria-label="Eleven — Creativity and management"
              >
                <Image
                  src="/eleven-logo.webp"
                  alt="Eleven — Creativity and management"
                  width={120}
                  height={80}
                  className="rounded-sm"
                  priority
                />
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}