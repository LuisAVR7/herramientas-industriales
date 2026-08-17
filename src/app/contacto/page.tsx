import type { Metadata } from "next";
import Link from "next/link";
import ContactoForm from "./ContactoForm";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Consultas técnicas, sugerencias de comparativas o propuestas de colaboración con marcas del rubro industrial. Responsable: Luis Velázquez, Paraguay.",
};

const contactInfo = [
  {
    label: "Correo",
    value: "contacto@herramientas-industriales.com.py",
    href: "mailto:contacto@herramientas-industriales.com.py",
  },
  {
    label: "Responsable",
    value: "Luis Velázquez",
  },
  {
    label: "Ubicación",
    value: "Paraguay",
  },
  {
    label: "Respuesta",
    value: "Hasta 48 horas hábiles",
  },
];

export default function Contacto() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-20">
      <span className="inline-block text-xs font-semibold tracking-widest text-brand-500 uppercase mb-4">
        Contacto
      </span>
      <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-ink-50 leading-tight">
        Escribinos
      </h1>
      <p className="mt-4 text-ink-400 max-w-xl">
        Consultas técnicas, sugerencias de comparativas o propuestas de
        colaboración con marcas del rubro industrial.
      </p>

      {/* Bloque de información directa */}
      <div className="mt-10 bg-ink-800 border border-ink-700 rounded-sm p-6 md:p-8">
        <dl className="divide-y divide-ink-700">
          {contactInfo.map((item) => (
            <div
              key={item.label}
              className="grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-4 py-3 first:pt-0 last:pb-0"
            >
              <dt className="text-xs font-semibold uppercase tracking-widest text-brand-500">
                {item.label}
              </dt>
              <dd className="md:col-span-3 text-ink-100 text-sm">
                {item.href ? (
                  <a
                    href={item.href}
                    className="text-brand-400 hover:underline break-all"
                  >
                    {item.value}
                  </a>
                ) : (
                  item.value
                )}
              </dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="mt-12">
        <ContactoForm />
      </div>

      <p className="mt-10 text-sm text-ink-400">
        Para conocer la metodología editorial, las fuentes utilizadas y el
        enfoque del blog,{" "}
        <Link href="/sobre-este-blog" className="text-brand-400 hover:underline">
          ver Sobre este blog →
        </Link>
      </p>
    </div>
  );
}