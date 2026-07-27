import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidad | Herramientas Industriales",
  description:
    "Política de Privacidad del sitio herramientas-industriales.com.py: qué datos personales se recopilan, cómo se usan, marco legal paraguayo aplicable y derechos del usuario.",
  alternates: {
    canonical: "https://www.herramientas-industriales.com.py/politica-de-privacidad",
  },
  openGraph: {
    title: "Política de Privacidad | Herramientas Industriales",
    description:
      "Política de Privacidad del sitio herramientas-industriales.com.py: qué datos personales se recopilan, cómo se usan, marco legal paraguayo aplicable y derechos del usuario.",
    url: "https://www.herramientas-industriales.com.py/politica-de-privacidad",
    type: "article",
  },
};

export default function PoliticaDePrivacidadPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-12 md:py-16">
      <header className="mb-10 border-b border-ink-800 pb-6">
        <h1 className="text-3xl md:text-4xl font-bold text-ink-100 leading-tight">
          Política de Privacidad
        </h1>
        <p className="mt-3 text-sm text-ink-400">
          Última actualización: 27 de julio de 2026.
        </p>
      </header>

      <div className="space-y-8 text-ink-200 leading-relaxed">
        <p>
          Esta Política de Privacidad describe cómo se recopilan, usan, almacenan y protegen los datos personales de los usuarios que visitan el sitio <strong>herramientas-industriales.com.py</strong> (en adelante, &ldquo;el Sitio&rdquo;). Es de aplicación obligatoria para todo visitante y usuario, y complementa los Términos y Condiciones publicados en este mismo sitio.
        </p>

        <section>
          <h2 className="text-xl md:text-2xl font-semibold text-ink-100 mb-3">
            1. Responsable del tratamiento
          </h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              <strong>Responsable:</strong> Luis Velázquez, persona física con domicilio en la República del Paraguay.
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
          <p className="mt-3">
            El Responsable determina los fines y medios del tratamiento de los datos personales recolectados a través del Sitio.
          </p>
        </section>

        <section>
          <h2 className="text-xl md:text-2xl font-semibold text-ink-100 mb-3">
            2. Marco legal aplicable
          </h2>
          <p>
            Esta Política se rige por la normativa vigente en la República del Paraguay, en particular:
          </p>
          <ul className="list-disc pl-6 mt-3 space-y-2">
            <li>
              <strong>Constitución Nacional del Paraguay</strong>, artículos 33 (derecho a la intimidad) y 135 (hábeas data).
            </li>
            <li>
              <strong>Ley N° 7593/2025 &mdash; Ley General de Protección de Datos Personales</strong>, promulgada el 27 de noviembre de 2025. El Sitio se adecua anticipadamente a sus disposiciones aun durante el período de vacatio legis previo a su entrada en vigencia plena.
            </li>
            <li>
              <strong>Ley N° 6534/2020 &mdash; De Protección de Datos Personales Crediticios</strong>, en lo que resulte aplicable.
            </li>
            <li>
              <strong>Ley N° 4868/2013 &mdash; De Comercio Electrónico</strong>, en lo relativo a la comunicación digital y al formulario de contacto.
            </li>
            <li>
              <strong>Ley N° 4017/2010 &mdash; De Validez Jurídica de la Firma Electrónica, la Firma Digital, los Mensajes de Datos y el Expediente Electrónico</strong>.
            </li>
          </ul>
          <p className="mt-3">
            Cuando resulte pertinente por la ubicación del usuario, esta Política también atiende principios internacionales de protección de datos como el Reglamento General de Protección de Datos de la Unión Europea (RGPD) y la Ley de Privacidad del Consumidor de California (CCPA).
          </p>
        </section>

        <section>
          <h2 className="text-xl md:text-2xl font-semibold text-ink-100 mb-3">
            3. Datos personales que se recopilan
          </h2>
          <p>
            El Sitio recopila únicamente los datos personales necesarios para cumplir con sus fines. En particular:
          </p>

          <h3 className="text-lg font-semibold text-ink-100 mt-5 mb-2">
            3.1. Datos que el usuario proporciona voluntariamente
          </h3>
          <p>
            A través del <strong>formulario de contacto</strong> disponible en la página <code className="text-brand-500">/contacto</code>:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Nombre y apellido.</li>
            <li>Dirección de correo electrónico.</li>
            <li>Contenido del mensaje enviado.</li>
          </ul>

          <h3 className="text-lg font-semibold text-ink-100 mt-5 mb-2">
            3.2. Datos recopilados automáticamente
          </h3>
          <p>
            Cuando un usuario navega por el Sitio, el proveedor de infraestructura (Vercel Inc.) puede registrar automáticamente:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Dirección IP del visitante.</li>
            <li>Tipo de navegador y sistema operativo.</li>
            <li>Página de origen (referer).</li>
            <li>Fecha y hora de acceso.</li>
            <li>Páginas visitadas dentro del Sitio.</li>
          </ul>
          <p className="mt-3">
            Estos datos se utilizan exclusivamente con fines técnicos y de seguridad (mitigación de ataques, diagnóstico de errores, disponibilidad del servicio).
          </p>
        </section>

        <section>
          <h2 className="text-xl md:text-2xl font-semibold text-ink-100 mb-3">
            4. Finalidades del tratamiento
          </h2>
          <p>Los datos personales se tratan para las siguientes finalidades:</p>
          <ul className="list-disc pl-6 mt-3 space-y-1">
            <li>Responder consultas enviadas a través del formulario de contacto.</li>
            <li>Mantener la disponibilidad, seguridad y correcto funcionamiento del Sitio.</li>
            <li>Cumplir con obligaciones legales aplicables.</li>
            <li>En el futuro, mostrar publicidad contextual mediante Google AdSense (ver sección 7).</li>
          </ul>
          <p className="mt-3">
            No se realizan actividades de perfilado con fines comerciales ni se toman decisiones automatizadas con efectos jurídicos sobre los usuarios.
          </p>
        </section>

        <section>
          <h2 className="text-xl md:text-2xl font-semibold text-ink-100 mb-3">
            5. Base jurídica del tratamiento
          </h2>
          <p>El tratamiento se basa en:</p>
          <ul className="list-disc pl-6 mt-3 space-y-2">
            <li>
              <strong>Consentimiento libre, específico e informado del titular</strong> al completar y enviar el formulario de contacto.
            </li>
            <li>
              <strong>Interés legítimo del Responsable</strong> para asegurar el funcionamiento técnico y seguro del Sitio.
            </li>
            <li>
              <strong>Cumplimiento de obligaciones legales</strong> cuando la normativa aplicable lo requiera.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl md:text-2xl font-semibold text-ink-100 mb-3">
            6. Cookies y tecnologías similares
          </h2>
          <p>
            Al día de la última actualización, el Sitio <strong>no utiliza cookies propias ni herramientas de analítica de terceros</strong> (Google Analytics, Vercel Analytics, Meta Pixel u otras).
          </p>
          <p className="mt-3">
            En caso de incorporar cookies o herramientas de analítica en el futuro, esta Política será actualizada y se publicará un aviso visible de consentimiento cuando corresponda.
          </p>
        </section>

        <section>
          <h2 className="text-xl md:text-2xl font-semibold text-ink-100 mb-3">
            7. Publicidad de terceros &mdash; Google AdSense
          </h2>
          <p>
            El Sitio prevé la incorporación futura de <strong>Google AdSense</strong> como servicio de publicidad. Cuando ese servicio se active:
          </p>
          <ul className="list-disc pl-6 mt-3 space-y-2">
            <li>
              <strong>Google, como proveedor externo, utiliza cookies para publicar anuncios</strong> en el Sitio.
            </li>
            <li>
              Google puede utilizar la <strong>cookie DART</strong> y otras tecnologías similares para servir anuncios basados en las visitas anteriores del usuario al Sitio o a otros sitios web.
            </li>
            <li>
              Los usuarios pueden inhabilitar el uso de la cookie DART accediendo a la{" "}
              <a
                href="https://policies.google.com/technologies/ads"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-500 hover:underline"
              >
                Política de privacidad de Google Ads y de la red de contenido
              </a>
              .
            </li>
            <li>
              Los usuarios pueden gestionar sus preferencias de publicidad personalizada en{" "}
              <a
                href="https://adssettings.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-500 hover:underline"
              >
                adssettings.google.com
              </a>
              .
            </li>
            <li>
              Los proveedores externos y las redes publicitarias asociadas también pueden usar cookies para publicar anuncios de interés para el usuario. Consultar sus políticas propias para más información.
            </li>
          </ul>
          <p className="mt-3">
            El Sitio no controla el contenido de los anuncios servidos por Google ni de sus socios publicitarios.
          </p>
        </section>

        <section>
          <h2 className="text-xl md:text-2xl font-semibold text-ink-100 mb-3">
            8. Compartición con terceros
          </h2>
          <p>
            El Sitio comparte datos personales con los siguientes proveedores tecnológicos, exclusivamente en la medida necesaria para prestar el servicio:
          </p>
          <ul className="list-disc pl-6 mt-3 space-y-2">
            <li>
              <strong>Vercel Inc.</strong> &mdash; proveedor de hosting e infraestructura (Estados Unidos).
            </li>
            <li>
              <strong>Resend, Inc.</strong> &mdash; proveedor de envío de correos electrónicos transaccionales.
            </li>
            <li>
              <strong>Cloudflare, Inc.</strong> &mdash; proveedor de DNS y enrutamiento de correo electrónico.
            </li>
            <li>
              <strong>Google LLC</strong> &mdash; a futuro, cuando se active AdSense, para la entrega de publicidad.
            </li>
          </ul>
          <p className="mt-3">
            Estos proveedores actúan como <strong>encargados del tratamiento</strong> en los términos de la Ley 7593/2025, sujetos a obligaciones de confidencialidad y seguridad de la información. Ninguno de ellos está autorizado a usar los datos con fines propios distintos de la prestación del servicio contratado.
          </p>
          <p className="mt-3">
            El Sitio <strong>no vende, alquila ni cede datos personales</strong> a terceros con fines comerciales.
          </p>
        </section>

        <section>
          <h2 className="text-xl md:text-2xl font-semibold text-ink-100 mb-3">
            9. Transferencia internacional de datos
          </h2>
          <p>
            Los proveedores mencionados en la sección 8 tienen infraestructura ubicada fuera del territorio paraguayo (principalmente en Estados Unidos y en la Unión Europea). En consecuencia, la utilización del Sitio implica una <strong>transferencia internacional de datos personales</strong> hacia dichas jurisdicciones. Estos proveedores adhieren a estándares internacionales de seguridad y protección de datos.
          </p>
        </section>

        <section>
          <h2 className="text-xl md:text-2xl font-semibold text-ink-100 mb-3">
            10. Plazo de conservación
          </h2>
          <p>
            Los datos personales recibidos por el formulario de contacto se conservan por un plazo máximo de <strong>dos (2) años</strong> contados desde la última interacción, salvo obligación legal de conservación por un plazo mayor.
          </p>
          <p className="mt-3">
            Los registros técnicos generados automáticamente se conservan por los plazos establecidos por los proveedores de infraestructura conforme a sus políticas propias.
          </p>
        </section>

        <section>
          <h2 className="text-xl md:text-2xl font-semibold text-ink-100 mb-3">
            11. Derechos del titular de los datos
          </h2>
          <p>El titular de los datos personales tiene derecho a:</p>
          <ul className="list-disc pl-6 mt-3 space-y-2">
            <li>
              <strong>Acceso</strong> &mdash; conocer qué datos personales suyos son tratados.
            </li>
            <li>
              <strong>Rectificación</strong> &mdash; solicitar la corrección de datos inexactos o incompletos.
            </li>
            <li>
              <strong>Cancelación (supresión)</strong> &mdash; solicitar la eliminación de sus datos cuando resulte procedente.
            </li>
            <li>
              <strong>Oposición</strong> &mdash; oponerse al tratamiento por motivos legítimos.
            </li>
            <li>
              <strong>Portabilidad</strong> &mdash; recibir sus datos en formato estructurado y de uso común.
            </li>
            <li>
              <strong>Limitación del tratamiento</strong> &mdash; solicitar la restricción del tratamiento en supuestos previstos por la ley.
            </li>
            <li>
              <strong>Revocación del consentimiento</strong> &mdash; retirar el consentimiento previamente otorgado en cualquier momento, sin que esto afecte la licitud del tratamiento previo.
            </li>
            <li>
              <strong>Reclamo ante la autoridad de aplicación</strong> &mdash; presentar denuncia ante la Agencia Nacional de Protección de Datos Personales (ANPDP) una vez que esté operativa, o ante la autoridad competente correspondiente.
            </li>
          </ul>
          <p className="mt-3">
            Estos derechos se ejercen por escrito al correo electrónico{" "}
            <a
              href="mailto:contacto@herramientas-industriales.com.py"
              className="text-brand-500 hover:underline"
            >
              contacto@herramientas-industriales.com.py
            </a>
            , acreditando la identidad del solicitante. El Responsable se compromete a responder dentro de los <strong>quince (15) días hábiles</strong> contados desde la recepción de la solicitud.
          </p>
        </section>

        <section>
          <h2 className="text-xl md:text-2xl font-semibold text-ink-100 mb-3">
            12. Seguridad de la información
          </h2>
          <p>
            El Sitio implementa medidas técnicas y organizativas razonables para proteger los datos personales contra acceso no autorizado, pérdida, alteración o divulgación. En particular:
          </p>
          <ul className="list-disc pl-6 mt-3 space-y-1">
            <li>Comunicación cifrada mediante protocolo HTTPS/TLS.</li>
            <li>Autenticación segura para el acceso administrativo.</li>
            <li>Uso de proveedores de infraestructura con certificaciones internacionales de seguridad de la información.</li>
          </ul>
          <p className="mt-3">
            Ninguna medida de seguridad es infalible. Ante cualquier incidente que pudiera afectar la seguridad de los datos, el Responsable notificará al titular y, cuando corresponda, a la autoridad competente, en los términos previstos por la Ley 7593/2025.
          </p>
        </section>

        <section>
          <h2 className="text-xl md:text-2xl font-semibold text-ink-100 mb-3">
            13. Menores de edad
          </h2>
          <p>
            El Sitio no está dirigido a menores de edad ni recopila conscientemente datos personales de personas menores de dieciocho (18) años. Si un padre, madre o tutor tomara conocimiento de que un menor ha proporcionado datos a través del Sitio, puede solicitar su eliminación mediante los canales previstos en la sección 11.
          </p>
        </section>

        <section>
          <h2 className="text-xl md:text-2xl font-semibold text-ink-100 mb-3">
            14. Enlaces a sitios de terceros
          </h2>
          <p>
            El Sitio puede contener enlaces a sitios web de terceros (fuentes citadas en artículos, proveedores mencionados, redes sociales). El Responsable no controla ni asume responsabilidad por las políticas de privacidad de esos sitios. Se recomienda al usuario revisar las políticas de privacidad correspondientes antes de proporcionarles datos personales.
          </p>
        </section>

        <section>
          <h2 className="text-xl md:text-2xl font-semibold text-ink-100 mb-3">
            15. Modificaciones a esta Política
          </h2>
          <p>
            Esta Política puede ser modificada en cualquier momento para reflejar cambios normativos, técnicos o de servicios prestados. La versión vigente será siempre la publicada en esta misma página, con indicación de la fecha de última actualización.
          </p>
          <p className="mt-3">Se recomienda al usuario revisar esta Política periódicamente.</p>
        </section>

        <section>
          <h2 className="text-xl md:text-2xl font-semibold text-ink-100 mb-3">
            16. Contacto
          </h2>
          <p>
            Para consultas, ejercicio de derechos o cualquier asunto relacionado con esta Política:
          </p>
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