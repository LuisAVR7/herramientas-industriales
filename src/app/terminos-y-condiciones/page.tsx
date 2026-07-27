import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Términos y Condiciones | Herramientas Industriales",
  description:
    "Términos y Condiciones de uso del sitio herramientas-industriales.com.py: objeto editorial, propiedad intelectual, limitación de responsabilidad, marco legal paraguayo aplicable.",
  alternates: {
    canonical: "https://www.herramientas-industriales.com.py/terminos-y-condiciones",
  },
  openGraph: {
    title: "Términos y Condiciones | Herramientas Industriales",
    description:
      "Términos y Condiciones de uso del sitio herramientas-industriales.com.py: objeto editorial, propiedad intelectual, limitación de responsabilidad, marco legal paraguayo aplicable.",
    url: "https://www.herramientas-industriales.com.py/terminos-y-condiciones",
    type: "article",
  },
};

export default function TerminosYCondicionesPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-12 md:py-16">
      <header className="mb-10 border-b border-ink-800 pb-6">
        <h1 className="text-3xl md:text-4xl font-bold text-ink-100 leading-tight">
          Términos y Condiciones
        </h1>
        <p className="mt-3 text-sm text-ink-400">
          Última actualización: 27 de julio de 2026.
        </p>
      </header>

      <div className="space-y-8 text-ink-200 leading-relaxed">
        <p>
          Los presentes Términos y Condiciones regulan el acceso y uso del sitio web <strong>herramientas-industriales.com.py</strong> (en adelante, &ldquo;el Sitio&rdquo;). Al acceder al Sitio, el usuario declara conocer y aceptar íntegramente estos Términos. Si no está de acuerdo con ellos, debe abstenerse de utilizar el Sitio.
        </p>

        <section>
          <h2 className="text-xl md:text-2xl font-semibold text-ink-100 mb-3">
            1. Titular del Sitio
          </h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              <strong>Titular:</strong> Luis Velázquez, persona física con domicilio en la República del Paraguay.
            </li>
            <li>
              <strong>Correo de contacto:</strong>{" "}
              <a
                href="mailto:contacto@herramientas-industriales.com.py"
                className="text-brand-500 hover:underline"
              >
                contacto@herramientas-industriales.com.py
              </a>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl md:text-2xl font-semibold text-ink-100 mb-3">
            2. Objeto y naturaleza del Sitio
          </h2>
          <p>
            El Sitio es un blog editorial independiente que publica comparativas, guías de compra y análisis técnicos sobre herramientas industriales, con foco en el mercado paraguayo. El contenido se presenta con fines <strong>informativos y educativos</strong>, y busca aportar criterios técnicos y comerciales para la toma de decisiones de compra de profesionales del rubro.
          </p>
          <p className="mt-3">
            El Sitio no es un catálogo de venta directa ni una plataforma de comercio electrónico. No se realizan transacciones de compraventa a través del mismo.
          </p>
        </section>

        <section>
          <h2 className="text-xl md:text-2xl font-semibold text-ink-100 mb-3">
            3. Marco legal aplicable
          </h2>
          <p>
            El uso del Sitio se rige por la normativa vigente en la República del Paraguay, en particular:
          </p>
          <ul className="list-disc pl-6 mt-3 space-y-2">
            <li>
              <strong>Constitución Nacional del Paraguay</strong>, artículos 33, 110 y 135.
            </li>
            <li>
              <strong>Ley N° 4868/2013 &mdash; De Comercio Electrónico</strong>.
            </li>
            <li>
              <strong>Ley N° 1328/1998 &mdash; De Derecho de Autor y Derechos Conexos</strong>.
            </li>
            <li>
              <strong>Ley N° 1334/1998 &mdash; De Defensa del Consumidor y del Usuario</strong>.
            </li>
            <li>
              <strong>Ley N° 7593/2025 &mdash; Ley General de Protección de Datos Personales</strong> (en período de vacatio legis).
            </li>
            <li>
              <strong>Código Civil paraguayo</strong> y normativa complementaria aplicable.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl md:text-2xl font-semibold text-ink-100 mb-3">
            4. Propiedad intelectual
          </h2>

          <h3 className="text-lg font-semibold text-ink-100 mt-5 mb-2">
            4.1. Contenido propio
          </h3>
          <p>
            Todos los textos, análisis, comparativas, guías, títulos, estructura de contenidos y demás elementos originales publicados en el Sitio son de titularidad exclusiva de <strong>Luis Velázquez</strong>, protegidos por la Ley N° 1328/1998 de Derecho de Autor y Derechos Conexos desde el mismo momento de su creación, sin necesidad de registro formal.
          </p>

          <h3 className="text-lg font-semibold text-ink-100 mt-5 mb-2">
            4.2. Imágenes y marcas de terceros
          </h3>
          <p>El Sitio utiliza imágenes de fuentes diversas:</p>
          <ul className="list-disc pl-6 mt-3 space-y-2">
            <li>
              <strong>Imágenes de fuentes libres</strong> (Unsplash, Pexels y similares) &mdash; utilizadas bajo sus respectivas licencias.
            </li>
            <li>
              <strong>Imágenes generadas con inteligencia artificial</strong> &mdash; utilizadas con criterio editorial y sin infringir derechos de terceros.
            </li>
            <li>
              <strong>Imágenes proporcionadas por titulares de marcas</strong> &mdash; cuando exista autorización expresa del titular para su uso editorial.
            </li>
          </ul>
          <p className="mt-4">
            <strong>Política editorial de mención de marcas:</strong> el Sitio mantiene un criterio <strong>estrictamente independiente</strong>. No se mencionan marcas comerciales de terceros en el contenido editorial, salvo cuando exista un <strong>acuerdo publicitario formal</strong> entre el titular de la marca y el Sitio. Las marcas eventualmente mencionadas en contenidos históricos aparecen como referencias técnicas editoriales, sin relación comercial, patrocinio ni endoso.
          </p>
          <p className="mt-3">
            Las marcas comerciales mencionadas son propiedad de sus respectivos titulares.
          </p>

          <h3 className="text-lg font-semibold text-ink-100 mt-5 mb-2">
            4.3. Uso permitido del contenido
          </h3>
          <p>Se permite al usuario:</p>
          <ul className="list-disc pl-6 mt-3 space-y-1">
            <li>
              <strong>Leer, consultar y compartir</strong> los enlaces a los artículos del Sitio en redes sociales y comunicaciones personales.
            </li>
            <li>
              <strong>Citar fragmentos breves</strong> con fines académicos, periodísticos o de comentario, siempre con <strong>indicación clara de la fuente y enlace al artículo original</strong>.
            </li>
          </ul>

          <h3 className="text-lg font-semibold text-ink-100 mt-5 mb-2">
            4.4. Uso prohibido del contenido
          </h3>
          <p>Queda expresamente prohibido, sin autorización previa y por escrito del Titular:</p>
          <ul className="list-disc pl-6 mt-3 space-y-2">
            <li>
              La <strong>reproducción total o parcial</strong> del contenido en otros sitios web, publicaciones impresas o cualquier medio.
            </li>
            <li>
              La <strong>redistribución masiva o comercial</strong> del contenido.
            </li>
            <li>
              El uso del contenido para <strong>entrenamiento de modelos de inteligencia artificial</strong> o extracción automatizada (scraping) sin autorización expresa.
            </li>
            <li>La modificación, adaptación o creación de obras derivadas.</li>
            <li>Cualquier uso que suprima o modifique las menciones de autoría y fuente.</li>
          </ul>
          <p className="mt-3">
            El incumplimiento de estas restricciones habilitará al Titular a ejercer las acciones legales correspondientes conforme a la legislación aplicable.
          </p>
        </section>

        <section>
          <h2 className="text-xl md:text-2xl font-semibold text-ink-100 mb-3">
            5. Uso del formulario de contacto
          </h2>
          <p>
            El formulario de contacto disponible en la página <code className="text-brand-500">/contacto</code> está destinado a consultas comerciales, técnicas o editoriales. Al utilizarlo, el usuario se compromete a:
          </p>
          <ul className="list-disc pl-6 mt-3 space-y-1">
            <li>Proporcionar <strong>información veraz y actualizada</strong>.</li>
            <li>No utilizar el formulario para envío de comunicaciones comerciales no solicitadas (spam), contenido ilegal, ofensivo o que infrinja derechos de terceros.</li>
            <li>Aceptar el tratamiento de sus datos personales conforme a la <strong>Política de Privacidad</strong> del Sitio.</li>
          </ul>
          <p className="mt-3">
            El Titular se reserva el derecho de no responder mensajes que incumplan estas condiciones.
          </p>
        </section>

        <section>
          <h2 className="text-xl md:text-2xl font-semibold text-ink-100 mb-3">
            6. Enlaces a sitios de terceros
          </h2>
          <p>
            El Sitio contiene enlaces a sitios web de terceros (fuentes técnicas citadas, portales oficiales, proveedores, redes sociales). Estos enlaces se proveen <strong>exclusivamente para facilitar la consulta y verificación de información</strong> por parte del usuario. El Titular no controla el contenido de dichos sitios ni asume responsabilidad por ellos, sus políticas o los servicios que ofrezcan.
          </p>
        </section>

        <section>
          <h2 className="text-xl md:text-2xl font-semibold text-ink-100 mb-3">
            7. Publicidad de terceros
          </h2>
          <p>
            El Sitio prevé la incorporación futura de <strong>Google AdSense</strong> como servicio de publicidad. Los anuncios publicados son gestionados por Google y sus socios publicitarios. El Titular del Sitio no controla ni recomienda los productos o servicios anunciados. El uso de cookies y tecnologías similares para publicidad se rige por la Política de Privacidad y por las políticas propias de Google.
          </p>
        </section>

        <section>
          <h2 className="text-xl md:text-2xl font-semibold text-ink-100 mb-3">
            8. Limitación de responsabilidad
          </h2>
          <p>
            El contenido del Sitio se presenta con carácter <strong>informativo y editorial</strong>, elaborado en base a fuentes técnicas verificadas y a la experiencia del Titular en el rubro. Sin embargo:
          </p>
          <ul className="list-disc pl-6 mt-3 space-y-2">
            <li>
              El contenido <strong>no constituye asesoría profesional formal</strong> en ingeniería, seguridad industrial, cumplimiento normativo, decisiones financieras ni ninguna otra especialidad técnica que requiera dictamen de profesional habilitado.
            </li>
            <li>
              Las <strong>decisiones de compra, especificación técnica, cumplimiento normativo o implementación operativa</strong> son responsabilidad exclusiva del usuario, quien debe evaluar la aplicabilidad de la información a su caso concreto y, cuando corresponda, consultar con profesionales certificados.
            </li>
            <li>
              Los <strong>rangos técnicos, precios, especificaciones y normativas</strong> mencionadas pueden variar según fabricante, momento de consulta y país de aplicación. El Titular procura mantener la información actualizada pero no garantiza su vigencia permanente.
            </li>
            <li>
              El Titular <strong>no será responsable</strong> por daños directos, indirectos, incidentales o consecuentes derivados del uso o interpretación de la información publicada.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl md:text-2xl font-semibold text-ink-100 mb-3">
            9. Disponibilidad del Sitio
          </h2>
          <p>
            El Titular procura mantener el Sitio disponible de forma continua, pero no garantiza disponibilidad ininterrumpida. Pueden producirse interrupciones por mantenimiento, actualizaciones, fallas técnicas de los proveedores de infraestructura o causas de fuerza mayor. El Titular no será responsable por perjuicios derivados de dichas interrupciones.
          </p>
        </section>

        <section>
          <h2 className="text-xl md:text-2xl font-semibold text-ink-100 mb-3">
            10. Modificaciones a estos Términos
          </h2>
          <p>
            El Titular se reserva el derecho de modificar estos Términos en cualquier momento, para reflejar cambios normativos, técnicos o editoriales. La versión vigente será siempre la publicada en esta misma página, con indicación de la fecha de última actualización.
          </p>
          <p className="mt-3">Se recomienda al usuario revisar estos Términos periódicamente.</p>
        </section>

        <section>
          <h2 className="text-xl md:text-2xl font-semibold text-ink-100 mb-3">
            11. Nulidad parcial
          </h2>
          <p>
            Si alguna disposición de estos Términos resultara nula, ilegal o inaplicable por sentencia judicial firme o por modificación normativa, las restantes disposiciones mantendrán su plena vigencia y efecto.
          </p>
        </section>

        <section>
          <h2 className="text-xl md:text-2xl font-semibold text-ink-100 mb-3">
            12. Legislación aplicable y jurisdicción
          </h2>
          <p>
            Estos Términos se rigen e interpretan conforme a las leyes de la República del Paraguay. Cualquier controversia derivada del uso del Sitio será sometida a los <strong>Tribunales Ordinarios correspondientes de la República del Paraguay</strong>, con renuncia expresa a cualquier otro fuero o jurisdicción que pudiera corresponder.
          </p>
        </section>

        <section>
          <h2 className="text-xl md:text-2xl font-semibold text-ink-100 mb-3">
            13. Contacto
          </h2>
          <p>Para consultas, reclamos o cualquier asunto relacionado con estos Términos:</p>
          <ul className="list-none mt-3 space-y-1">
            <li>
              <strong>Luis Velázquez</strong>
            </li>
            <li>
              Correo:{" "}
              <a
                href="mailto:contacto@herramientas-industriales.com.py"
                className="text-brand-500 hover:underline"
              >
                contacto@herramientas-industriales.com.py
              </a>
            </li>
            <li>
              Sitio:{" "}
              <a
                href="https://www.herramientas-industriales.com.py/"
                className="text-brand-500 hover:underline"
              >
                herramientas-industriales.com.py
              </a>
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}