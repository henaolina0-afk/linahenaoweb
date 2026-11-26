"use client";

import Link from "next/link";
import { useState } from "react";

type Estado = { tipo: "inicial" | "enviando" | "ok" | "error"; msg?: string };

type Props = {
  origen?: "cartas" | "guia";
  oscuro?: boolean;
};

const TEXTOS = {
  cartas: {
    boton: "Suscribirme",
    ok: "Gracias. Revisa tu correo para confirmar la suscripción.",
  },
  guia: {
    boton: "Envíame la guía",
    ok: "Listo. Revisa tu correo: primero te llega un mensaje para confirmar y enseguida la guía. Si no lo ves, mira en «Promociones» o «Spam».",
  },
};

/**
 * Formulario de la lista de Lina. Envía a /api/suscribir (worker/index.ts → EmailOctopus) con la etiqueta de su puerta:
 * «cartas» (correo en una línea) o «guia» (tarjeta con nombre y correo).
 */
export default function FormCartas({ origen = "cartas", oscuro = false }: Props) {
  const [estado, setEstado] = useState<Estado>({ tipo: "inicial" });
  const t = TEXTOS[origen];
  const guia = origen === "guia";

  async function enviar(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const datos = new FormData(form);
    if (!datos.get("autoriza")) {
      setEstado({ tipo: "error", msg: "Para continuar, marca la casilla de autorización." });
      return;
    }
    setEstado({ tipo: "enviando" });
    try {
      const r = await fetch("/api/suscribir/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          correo: datos.get("correo"),
          nombre: datos.get("nombre") ?? undefined,
          origen,
          autoriza: true,
          web: datos.get("web"), // campo trampa contra bots
        }),
      });
      if (!r.ok) throw new Error();
      setEstado({ tipo: "ok", msg: t.ok });
      form.reset();
    } catch {
      setEstado({ tipo: "error", msg: "No pudimos guardar tu correo. Inténtalo de nuevo en un momento." });
    }
  }

  const id = (c: string) => `${c}-${origen}`;
  const trampa = <input type="text" name="web" tabIndex={-1} autoComplete="off" aria-hidden="true" style={{ display: "none" }} />;
  const casilla = (
    <label className="chk">
      <input type="checkbox" name="autoriza" required />
      <span>
        Autorizo el tratamiento de mis datos según la <Link href="/politica-de-datos/">política de datos</Link>.
      </span>
    </label>
  );
  const boton = (
    <button className={`btn ${guia ? "btn-ladrillo" : "btn-dark"}`} type="submit" disabled={estado.tipo === "enviando"}>
      {estado.tipo === "enviando" ? "Enviando…" : t.boton}
    </button>
  );
  const mensaje = (
    <p className={`form-msg ${estado.tipo}`} role="status" aria-live="polite">
      {estado.msg}
    </p>
  );

  if (guia) {
    return (
      <form className="form-card" id="form-guia" onSubmit={enviar}>
        <p className="label">Recíbela en tu correo</p>
        <label htmlFor={id("nombre")}>Tu nombre</label>
        <input id={id("nombre")} className="campo" type="text" name="nombre" autoComplete="given-name" maxLength={80} />
        <label htmlFor={id("correo")}>Tu correo</label>
        <input id={id("correo")} className="campo" type="email" name="correo" required autoComplete="email" />
        {trampa}
        {casilla}
        {boton}
        <p className="small">Gratis. Llega con un asunto discreto. Te das de baja con un clic.</p>
        {mensaje}
      </form>
    );
  }

  return (
    <form className={`form-cartas${oscuro ? " oscuro" : ""}`} onSubmit={enviar}>
      <div className="fila">
        <label htmlFor={id("correo")} className="sr-only">Tu correo</label>
        <input id={id("correo")} className="campo" type="email" name="correo" required placeholder="Tu correo" autoComplete="email" />
        {trampa}
        {boton}
      </div>
      {casilla}
      {mensaje}
    </form>
  );
}
