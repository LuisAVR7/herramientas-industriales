"use client";

import { useState } from "react";

type FormStatus = "idle" | "loading" | "success" | "error";

export default function ContactoForm() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    asunto: "",
    mensaje: "",
  });
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contacto", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setErrorMsg(
          data.error || "Error al enviar el mensaje. Intentá de nuevo."
        );
        setStatus("error");
        return;
      }

      setStatus("success");
      setFormData({ nombre: "", email: "", asunto: "", mensaje: "" });
    } catch {
      setErrorMsg("Error de conexión. Verificá tu red e intentá de nuevo.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="border border-brand-500 rounded-sm p-8 text-center">
        <h2 className="text-xl font-semibold text-ink-50 mb-2">
          Mensaje enviado
        </h2>
        <p className="text-ink-300 mb-6">
          Gracias por escribirnos. Te respondemos cuanto antes.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="text-brand-500 hover:text-brand-400 underline text-sm"
        >
          Enviar otro mensaje
        </button>
      </div>
    );
  }

  const inputClass =
    "w-full bg-ink-800 border border-ink-700 rounded-sm px-4 py-3 text-ink-100 placeholder-ink-500 focus:border-brand-500 focus:outline-none transition";

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label
          htmlFor="nombre"
          className="block text-sm font-medium text-ink-200 mb-2"
        >
          Nombre
        </label>
        <input
          id="nombre"
          type="text"
          required
          value={formData.nombre}
          onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
          className={inputClass}
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-ink-200 mb-2"
        >
          Email
        </label>
        <input
          id="email"
          type="email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className={inputClass}
        />
      </div>

      <div>
        <label
          htmlFor="asunto"
          className="block text-sm font-medium text-ink-200 mb-2"
        >
          Asunto{" "}
          <span className="text-ink-500 font-normal">(opcional)</span>
        </label>
        <input
          id="asunto"
          type="text"
          value={formData.asunto}
          onChange={(e) => setFormData({ ...formData, asunto: e.target.value })}
          className={inputClass}
        />
      </div>

      <div>
        <label
          htmlFor="mensaje"
          className="block text-sm font-medium text-ink-200 mb-2"
        >
          Mensaje
        </label>
        <textarea
          id="mensaje"
          required
          rows={6}
          value={formData.mensaje}
          onChange={(e) =>
            setFormData({ ...formData, mensaje: e.target.value })
          }
          className={`${inputClass} resize-none`}
        />
      </div>

      {status === "error" && (
        <div className="border border-red-800 bg-red-950/40 rounded-sm p-4 text-sm text-red-200">
          {errorMsg}
        </div>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="bg-brand-500 hover:bg-brand-600 disabled:opacity-50 disabled:cursor-not-allowed text-ink-900 font-semibold px-6 py-3 rounded-sm transition"
      >
        {status === "loading" ? "Enviando..." : "Enviar mensaje"}
      </button>
    </form>
  );
}