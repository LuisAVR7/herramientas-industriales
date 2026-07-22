import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  try {
    const { nombre, email, asunto, mensaje } = await request.json();

    if (
      typeof nombre !== "string" ||
      typeof email !== "string" ||
      typeof mensaje !== "string"
    ) {
      return NextResponse.json({ error: "Datos inválidos" }, { status: 400 });
    }

    const nombreTrim = nombre.trim();
    const emailTrim = email.trim();
    const asuntoTrim = typeof asunto === "string" ? asunto.trim() : "";
    const mensajeTrim = mensaje.trim();

    if (!nombreTrim || !emailTrim || !mensajeTrim) {
      return NextResponse.json(
        { error: "Nombre, email y mensaje son obligatorios" },
        { status: 400 }
      );
    }

    if (!emailRegex.test(emailTrim)) {
      return NextResponse.json({ error: "Email inválido" }, { status: 400 });
    }

    if (nombreTrim.length > 100 || emailTrim.length > 100 || mensajeTrim.length > 5000) {
      return NextResponse.json(
        { error: "Uno o más campos exceden el largo permitido" },
        { status: 400 }
      );
    }

    const subject = asuntoTrim
      ? `[Blog] ${asuntoTrim}`
      : "[Blog] Nueva consulta";

    const textBody = [
      `De: ${nombreTrim} <${emailTrim}>`,
      `Asunto: ${asuntoTrim || "(sin asunto)"}`,
      "",
      "Mensaje:",
      mensajeTrim,
    ].join("\n");

    const { data, error } = await resend.emails.send({
      from: "Contacto Blog <contacto@herramientas-industriales.com.py>",
      to: ["contacto@herramientas-industriales.com.py"],
      replyTo: emailTrim,
      subject,
      text: textBody,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "No se pudo enviar el mensaje. Intentá de nuevo." },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true, id: data?.id ?? null });
  } catch (err) {
    console.error("Contacto API error:", err);
    return NextResponse.json(
      { error: "Error del servidor. Intentá de nuevo." },
      { status: 500 }
    );
  }
}