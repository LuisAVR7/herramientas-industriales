"use client";

import { useState } from "react";

type FormState = "idle" | "loading" | "success" | "error";

interface NewsletterFormProps {
  variant?: "compact" | "full";
}

/**
 * Formulario de suscripción al newsletter.
 * - variant="compact": para footer (email input inline + botón, tipografía pequeña).
 * - variant="full": para página dedicada (stacked, tipografía mayor).
 */
export default function NewsletterForm({ variant = "compact" }: NewsletterFormProps) {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<FormState>("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setState("loading");
    setMessage("");

    try {
      const res = await fetch("/api/newsletter/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();

      if (!res.ok) {
        setState("error");
        setMessage(data?.error || "Ocurrió un error. Intentá más tarde.");
        return;
      }

      setState("success");
      setMessage(data?.message || "Suscripción confirmada. ¡Gracias!");
      setEmail("");
    } catch {
      setState("error");
      setMessage("Error de conexión. Intentá más tarde.");
    }
  };

  const isCompact = variant === "compact";

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div
        className={
          isCompact
            ? "flex flex-col sm:flex-row gap-2 w-full max-w-md"
            : "flex flex-col gap-3 w-full max-w-lg"
        }
      >
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="tu@email.com"
          disabled={state === "loading"}
          aria-label="Email para suscripción al newsletter"
          suppressHydrationWarning
          className={
            isCompact
              ? "flex-1 px-3 py-2 rounded-md bg-ink-700 border border-ink-600 text-ink-50 text-sm placeholder-ink-400 focus:outline-none focus:border-brand-500 disabled:opacity-50"
              : "px-4 py-3 rounded-md bg-ink-800 border border-ink-600 text-ink-50 placeholder-ink-400 focus:outline-none focus:border-brand-500 disabled:opacity-50"
          }
        />
        <button
          type="submit"
          disabled={state === "loading" || !email}
          className={
            isCompact
              ? "px-4 py-2 rounded-md bg-brand-500 hover:bg-brand-600 text-ink-50 text-sm font-semibold disabled:opacity-50 disabled:cursor-not-allowed transition whitespace-nowrap"
              : "px-6 py-3 rounded-md bg-brand-500 hover:bg-brand-600 text-ink-50 font-semibold disabled:opacity-50 disabled:cursor-not-allowed transition"
          }
        >
          {state === "loading" ? "Enviando..." : "Suscribirme"}
        </button>
      </div>

      {message && (
        <p
          className={`mt-2 text-sm ${
            state === "success" ? "text-green-400" : "text-red-400"
          }`}
          role="status"
          aria-live="polite"
        >
          {message}
        </p>
      )}
    </form>
  );
}