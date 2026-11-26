"use client";

import Link from "next/link";
import { useState } from "react";

type Estado = { tipo: "inicial" | "enviando" | "ok" | "error"; msg?: string };

/** Formulario corto de «Cartas de Lina». Envía a /api/suscribir (worker/index.ts → EmailOctopus). */
export default function FormCartas({ origen = "cartas", oscuro = false }: { origen?: "cartas" | "guia"; oscuro?: boolean }) {
  const [estado, setEstado] = useState<Estado>({ tipo: "inicial" });

  async function enviar(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const datos = new FormData(form);
    if (!datos.get("autoriza")) {
      setEstado({ tipo: "error", msg: "Para suscribirte, marca la casilla de autorización." });
      return;
    }
    setEstado({ tipo: "enviando" });
    try {
      const r = await fetch("/api/suscribir/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          correo: datos.get("correo"),
          origen,
          autoriza: true,
          web: datos.get("web"), // campo trampa contra bots
        }),
      });
      if (!r.ok) throw new Error();
      setEstado({ tipo: "ok", msg: "Gracias. Revisa tu correo para confirmar la suscripción." });
      form.reset();
    } catch {
      setEstado({ tipo: "error", msg: "No pudimos guardar tu correo. Inténtalo de nuevo en un momento." });
    }
  }

  const id = `correo-${origen}`;
  return (
    <form className={`form-cartas${oscuro ? " oscuro" : ""}`} onSubmit={enviar} noValidate={false}>
      <div className="fila">
        <label htmlFor={id} className="sr-only">Tu correo</label>
        <input id={id} className="campo" type="email" name="correo" required placeholder="Tu correo" autoComplete="email" />
        <input type="text" name="web" tabIndex={-1} autoComplete="off" aria-hidden="true" style={{ display: "none" }} />
        <button className="btn btn-dark" type="submit" disabled={estado.tipo === "enviando"}>
          {estado.tipo === "enviando" ? "Enviando…" : "Suscribirme"}
        </button>
      </div>
      <label className="chk">
        <input type="checkbox" name="autoriza" required />
        <span>
          Autorizo el tratamiento de mis datos según la <Link href="/politica-de-datos/">política de datos</Link>.
        </span>
      </label>
      <p className={`form-msg ${estado.tipo}`} role="status" aria-live="polite">
        {estado.msg}
      </p>
    </form>
  );
}
