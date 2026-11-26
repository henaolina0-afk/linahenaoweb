// Worker de Cloudflare: sirve el sitio estático (out/) y atiende el formulario en /api/suscribir.
// Secretos (wrangler secret put): EMAILOCTOPUS_API_KEY, EMAILOCTOPUS_LIST_ID
// API: EmailOctopus v2 · https://emailoctopus.com/api-documentation/v2

interface Env {
  ASSETS: Fetcher;
  EMAILOCTOPUS_API_KEY: string;
  EMAILOCTOPUS_LIST_ID: string;
}

const ORIGENES = new Set(["cartas", "guia"]);
const CORREO_OK = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const json = (status: number, body: unknown) =>
  new Response(JSON.stringify(body), { status, headers: { "Content-Type": "application/json; charset=utf-8" } });

async function suscribir(req: Request, env: Env): Promise<Response> {
  if (req.method !== "POST") return json(405, { ok: false });
  if (!env.EMAILOCTOPUS_API_KEY || !env.EMAILOCTOPUS_LIST_ID) return json(503, { ok: false, error: "no-configurado" });

  let datos: { correo?: unknown; origen?: unknown; autoriza?: unknown; web?: unknown; nombre?: unknown };
  try {
    datos = await req.json();
  } catch {
    return json(400, { ok: false });
  }

  // Campo trampa: los humanos no lo ven. Respondemos ok para no dar pistas al bot.
  if (datos.web) return json(200, { ok: true });

  const correo = String(datos.correo ?? "").trim().toLowerCase();
  const origen = String(datos.origen ?? "cartas");
  if (!CORREO_OK.test(correo) || correo.length > 254) return json(400, { ok: false, error: "correo" });
  if (datos.autoriza !== true) return json(400, { ok: false, error: "autorizacion" });
  if (!ORIGENES.has(origen)) return json(400, { ok: false, error: "origen" });

  const base = `https://api.emailoctopus.com/lists/${env.EMAILOCTOPUS_LIST_ID}/contacts`;
  const headers = { Authorization: `Bearer ${env.EMAILOCTOPUS_API_KEY}`, "Content-Type": "application/json" };
  const nombre = typeof datos.nombre === "string" ? datos.nombre.trim().slice(0, 80) : "";

  // Alta nueva con doble confirmación (status "pending": EmailOctopus envía el correo de confirmación).
  const alta = await fetch(base, {
    method: "POST",
    headers,
    body: JSON.stringify({
      email_address: correo,
      ...(nombre ? { fields: { FirstName: nombre } } : {}),
      tags: [origen],
      status: "pending",
    }),
  });
  if (alta.ok) return json(200, { ok: true });

  // Si ya existe, solo añadimos la etiqueta de esta puerta sin tocar su estado.
  if (alta.status === 409) {
    const act = await fetch(base, {
      method: "PUT",
      headers,
      body: JSON.stringify({ email_address: correo, tags: { [origen]: true } }),
    });
    if (act.ok) return json(200, { ok: true });
    console.error("EmailOctopus PUT", act.status, await act.text());
    return json(502, { ok: false });
  }

  console.error("EmailOctopus POST", alta.status, await alta.text());
  return json(502, { ok: false });
}

export default {
  async fetch(req: Request, env: Env): Promise<Response> {
    const url = new URL(req.url);
    if (url.pathname === "/api/suscribir" || url.pathname === "/api/suscribir/") return suscribir(req, env);
    return env.ASSETS.fetch(req);
  },
} satisfies ExportedHandler<Env>;
