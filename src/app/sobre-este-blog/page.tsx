import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sobre este blog",
  description:
    "Herramientas Industriales — blog independiente de comparativas, análisis técnico y guías de compra sobre herramientas industriales para el mercado paraguayo. Enfoque editorial, autor responsable, categorías, metodología, fuentes y política de independencia editorial.",
};

export default function SobreEsteBlog() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-20">
      <span className="inline-block text-xs font-semibold tracking-widest text-brand-500 uppercase mb-4">
        Sobre este blog
      </span>
      <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-ink-50 leading-tight">
        Herramientas Industriales — Paraguay
      </h1>
      <p className="mt-4 text-ink-400">Blog independiente · Comparativas y guías técnicas</p>

      <div className="mt-12 space-y-10 text-ink-200 leading-relaxed">
        <p>
          Herramientas Industriales es un blog independiente de comparativas,
          análisis técnico y guías de compra sobre herramientas industriales
          para el mercado paraguayo, con foco en equipamiento profesional para
          trabajos específicos y regulados. El contenido está pensado para
          compradores técnicos, jefes de mantenimiento, responsables de
          seguridad e higiene ocupacional (HSE), ingenieros de planta y todo
          profesional que necesite decidir qué herramienta comprar con criterio
          informado, y no solo por precio.
        </p>

        <section>
          <h2 className="text-xl font-semibold text-ink-50 mb-4">
            Autor y responsable editorial
          </h2>
          <p>
            <strong>Responsable editorial: Luis Velázquez.</strong> Profesional
            del sector ferretero, industrial, maquinarias pesadas y herramientas
            profesionales en Paraguay, con amplia experiencia comercial y
            técnica en distintas marcas premium. Este blog es un proyecto
            personal e independiente que no representa la posición de ninguna
            empresa.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-ink-50 mb-4">
            Categorías que cubrimos
          </h2>
          <p>
            El blog está organizado en seis categorías activas, cada una con su
            pilar introductorio y satélites técnicos que profundizan en
            aspectos específicos:
          </p>
          <ul className="mt-4 space-y-3 list-disc pl-6 text-ink-200">
            <li>
              <strong>Herramientas antichispa (ATEX)</strong> — herramientas de
              bronce-berilio y aluminio-bronce para atmósferas explosivas.
              Sectores paraguayos alcanzados: petroquímica, silos,
              hidrocarburos, agroindustria con polvos combustibles.
            </li>
            <li>
              <strong>Herramientas forestales (Industria verde)</strong> —
              motosierras profesionales, EPP forestal, herramientas manuales de
              poda y tala. Aplicado a plantaciones de eucalipto y pino, yerba
              mate, servicios de poda urbana y brigadas contra incendios.
            </li>
            <li>
              <strong>Llaves dinamométricas (Torque preciso)</strong> — llaves
              de clic, digitales, eléctricas y multiplicadores de torque para
              aplicaciones críticas en industria pesada, automotriz y
              estructural.
            </li>
            <li>
              <strong>Herramientas aisladas</strong> — herramientas certificadas
              bajo IEC 60900 para trabajo con tensión hasta 1000 V, con foco en
              la verificación de autenticidad frente a la creciente presencia
              de falsificaciones en el mercado.
            </li>
            <li>
              <strong>Herramientas inoxidables</strong> — familias del acero
              inoxidable aplicadas a herramientas manuales, con foco en
              industrias reguladas paraguayas (frigoríficos SENACSA, plantas
              farmacéuticas DINAVISA, química y alimentaria).
            </li>
            <li>
              <strong>Herramientas de precisión</strong> — alicates, cortadores,
              pinzas técnicas y destornilladores de precisión para electrónica,
              joyería, óptica y aplicaciones que exigen normativa ESD
              (ANSI/ESD S20.20, IEC 61340-5-1) e IPC.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-ink-50 mb-4">
            Enfoque editorial
          </h2>
          <p>
            Publicamos análisis técnicos y comparativas basadas en la realidad
            del mercado paraguayo. Cada artículo responde a una pregunta
            concreta que se hace un comprador antes de decidir, y prioriza:
          </p>
          <ul className="mt-4 space-y-3 list-disc pl-6 text-ink-200">
            <li>
              <strong>Comparativas honestas</strong> entre marcas competidoras
              del mismo segmento, con criterios técnicos verificables
              (materiales, certificaciones, aplicaciones).
            </li>
            <li>
              <strong>Aplicación al contexto paraguayo</strong> —
              disponibilidad local de la marca, condiciones de uso en clima,
              sectores destinatarios reales, servicio post-venta operable en el
              país.
            </li>
            <li>
              <strong>Marco normativo aplicable</strong> — normas paraguayas
              (SENACSA, DINAVISA, INTN, INFONA, Decreto 14390/1992, Ley 1064/97
              de Maquila) y estándares internacionales que rigen cada rubro
              (ISO, IEC, IPC, ANSI, EN, DIN, VDE, EOS/ESD).
            </li>
            <li>
              <strong>Contenido pensado para todo el circuito de decisión</strong>{" "}
              — desde el ingeniero de mantenimiento que evalúa técnicamente
              hasta el gerente de compras que firma la orden, pasando por el
              responsable de HSE que verifica cumplimiento normativo.
            </li>
          </ul>
          <p className="mt-4">
            Solo mencionamos marcas profesionales con presencia comprobable en
            el mercado paraguayo. No mencionamos distribuidores ni
            representantes específicos por nombre.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-ink-50 mb-4">
            Metodología de investigación
          </h2>
          <p>Cada artículo publicado sigue un proceso definido:</p>
          <ol className="mt-4 space-y-3 list-decimal pl-6 text-ink-200">
            <li>
              <strong>Definición del alcance</strong> — tema, categoría,
              tipología (pilar de categoría o satélite específico), pregunta a
              responder.
            </li>
            <li>
              <strong>Investigación con fuentes verificables</strong> — normas
              oficiales, sitios de fabricantes, organismos reguladores
              paraguayos e internacionales, literatura técnica del rubro,
              catálogos oficiales.
            </li>
            <li>
              <strong>Contrastación cruzada de datos</strong> — todo dato
              numérico, técnico o normativo se verifica en al menos dos fuentes
              independientes antes de publicarse.
            </li>
            <li>
              <strong>Redacción con foco técnico</strong> — sin marketing
              hueco, sin frases hechas ni jerga publicitaria vacía, con
              lenguaje claro para lector técnico.
            </li>
            <li>
              <strong>Revisión editorial</strong> — verificación de coherencia
              con el resto del blog, aplicación al mercado paraguayo, ausencia
              de menciones a marcas sin presencia local.
            </li>
            <li>
              <strong>
                Publicación con imagen destacada optimizada, descripción para
                buscadores y datos estructurados (schema.org)
              </strong>{" "}
              — para que cada artículo sea útil al lector y visible en Google.
            </li>
          </ol>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-ink-50 mb-4">
            Fuentes utilizadas
          </h2>
          <p>
            El blog trabaja con fuentes primarias y secundarias del rubro
            industrial:
          </p>
          <ul className="mt-4 space-y-3 list-disc pl-6 text-ink-200">
            <li>
              <strong>Organismos normativos internacionales:</strong> ISO
              (International Organization for Standardization), IEC
              (International Electrotechnical Commission), IPC, ANSI, EOS/ESD
              Association, VDE (Alemania), TÜV, DIN.
            </li>
            <li>
              <strong>Organismos regulatorios paraguayos:</strong> SENACSA,
              DINAVISA, INTN, INFONA, MADES, MIC, MSPBS.
            </li>
            <li>
              <strong>Marco legal paraguayo:</strong> Ley 1064/97 de Maquila,
              Ley 2426/04 (SENACSA), Ley 1119/97 (DINAVISA), Decreto
              14390/1992, Ley 213/93.
            </li>
            <li>
              <strong>Documentación técnica de fabricantes</strong> con
              presencia en el mercado paraguayo.
            </li>
            <li>
              <strong>Literatura técnica especializada</strong> del rubro
              industrial internacional.
            </li>
            <li>
              <strong>Datos estadísticos del sector</strong> — Banco Central
              del Paraguay, MIC, Forbes Paraguay, prensa especializada del
              rubro.
            </li>
          </ul>
          <p className="mt-4">
            Todas las fuentes concretas usadas en cada artículo se listan al
            final del mismo, bajo el título &ldquo;Fuentes consultadas&rdquo;.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-ink-50 mb-4">
            Originalidad del contenido
          </h2>
          <p>
            Todo el contenido publicado en este blog es original y ha sido
            redactado específicamente para este medio. No republicamos
            artículos de terceros, no traducimos automáticamente contenido de
            otros sitios, no usamos rewriters o herramientas de spinning. Cada
            artículo es una elaboración propia que interpreta y sistematiza la
            información técnica desde la perspectiva del mercado paraguayo.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-ink-50 mb-4">
            Independencia editorial
          </h2>
          <p>
            El contenido publicado no es pagado, patrocinado ni promocionado
            por ninguna marca, importador o distribuidor. Las menciones a
            marcas específicas responden exclusivamente a criterios técnicos y
            a la presencia real de la marca en el mercado paraguayo, no a
            relaciones comerciales del autor.
          </p>
          <p className="mt-4">
            En caso de que en algún momento se establezcan colaboraciones
            editoriales pagas (contenido patrocinado explícitamente), estarán
            claramente identificadas como tales al inicio del artículo
            correspondiente.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-ink-50 mb-4">
            Transparencia sobre monetización
          </h2>
          <p>
            Este blog puede mostrar anuncios publicitarios de terceros
            gestionados por la red <strong>Google AdSense</strong>. Los
            ingresos por publicidad sostienen los costos de dominio, hosting y
            producción del contenido. La selección de anuncios está a cargo de
            Google — el autor no controla qué anuncios específicos se muestran
            a cada visitante.
          </p>
          <p className="mt-4">
            El blog puede también, eventualmente, incluir enlaces informativos
            a productos o distribuidores. En caso de existir enlaces de
            afiliación (donde el autor perciba una comisión por eventuales
            ventas), estarán identificados explícitamente.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-ink-50 mb-4">
            Contacto y sugerencias
          </h2>
          <p>
            Consultas técnicas, sugerencias de comparativas, propuestas de
            artículos, corrección de datos o propuestas de colaboración
            editorial pueden enviarse a través del{" "}
            <Link
              href="/contacto"
              className="text-brand-500 hover:text-brand-400 underline"
            >
              formulario de contacto
            </Link>
            .
          </p>
          <p className="mt-4">
            También podés suscribirte al{" "}
            <Link
              href="/newsletter"
              className="text-brand-500 hover:text-brand-400 underline"
            >
              newsletter mensual
            </Link>{" "}
            para recibir el resumen de artículos nuevos y análisis técnico
            exclusivo.
          </p>
        </section>

        <p className="text-sm text-ink-400 italic pt-6 border-t border-ink-800">
          Última actualización: 10 de agosto de 2026.
        </p>
      </div>
    </div>
  );
}