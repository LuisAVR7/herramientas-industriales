import { NextResponse } from "next/server";
import { Resend } from "resend";

// API key dedicada al newsletter (Full access — permite crear contactos).
const resend = new Resend(process.env.RESEND_API_KEY_NEWSLETTER);

// Validación básica de email.
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const email = typeof body?.email === "string" ? body.email.trim().toLowerCase() : "";

    if (!email || !EMAIL_REGEX.test(email)) {
      return NextResponse.json(
        { error: "Email inválido." },
        { status: 400 }
      );
    }

    const { data, error } = await resend.contacts.create({
      email,
      unsubscribed: false,
    });

    if (error) {
      // Si el email ya existe, tratamos como éxito idempotente (mejor UX).
      const msg = typeof error === "object" && "message" in error && typeof error.message === "string"
        ? error.message.toLowerCase()
        : "";

      if (msg.includes("already") || msg.includes("duplicate") || msg.includes("exists")) {
        return NextResponse.json({
          ok: true,
          message: "Ya estabas suscripto. ¡Gracias por seguir con nosotros!",
        });
      }

      console.error("Resend contacts.create error:", error);
      return NextResponse.json(
        { error: "No pudimos completar la suscripción. Intentá más tarde." },
        { status: 500 }
      );
    }

    return NextResponse.json({
      ok: true,
      message: "Suscripción confirmada. ¡Gracias!",
    });
  } catch (err) {
    console.error("Newsletter subscribe error:", err);
    return NextResponse.json(
      { error: "Error inesperado. Intentá más tarde." },
      { status: 500 }
    );
  }
}