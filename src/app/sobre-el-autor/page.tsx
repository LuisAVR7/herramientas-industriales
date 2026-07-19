import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre el autor",
  description:
    "Luis Velázquez — asesoramiento comercial-técnico industrial en Paraguay, con experiencia en Bahco, Hilti, Comagro y representación de marca.",
};

export default function SobreElAutor() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-20">
      <span className="inline-block text-xs font-semibold tracking-widest text-brand-500 uppercase mb-4">
        Sobre el autor
      </span>
      <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-ink-50 leading-tight">
        Luis Velázquez
      </h1>
      <p className="mt-4 text-ink-400">
        Asesoramiento comercial-técnico industrial · Paraguay
      </p>

      <div className="mt-12 space-y-6 text-ink-200 leading-relaxed">
        <p className="text-ink-400 italic">
          [Placeholder — bio profesional pendiente de escribir. Cubrir
          trayectoria en Bahco, Hilti, Comagro, maquinaria pesada, y
          representaciones de marca actuales (Tsurumi, Fronius, Pfanner).]
        </p>
        <p>
          Este espacio es central para el blog: Google evalúa el contenido bajo
          el criterio E-E-A-T (Experiencia, Especialización, Autoridad,
          Confiabilidad), y la fuente de esa autoridad es una persona real con
          trayectoria verificable. Cada artículo del blog respalda su análisis
          técnico con la experiencia de quien lo escribe.
        </p>
      </div>
    </div>
  );
}