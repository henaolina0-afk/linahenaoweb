// Agenda de Lina. Los eventos se editan en Sanity (https://linahenao.sanity.studio)
// y se leen al construir el sitio. Al publicar en Sanity, un webhook reconstruye la web.

const PROYECTO = "itprhn5q";
const DATASET = "production";
const API = "v2025-02-19";

export type Evento = {
  _id: string;
  fecha: string; // ISO (AAAA-MM-DD)
  hora?: string;
  titulo: string;
  lugar: string;
  libro?: string;
  enlace?: string;
  invitacion?: { url: string; w: number; h: number };
};

const CONSULTA = `*[_type == "evento" && defined(fecha) && defined(titulo)] | order(fecha desc) {
  _id, fecha, hora, titulo, lugar, libro, enlace,
  "invitacion": invitacion.asset->{ url, "w": metadata.dimensions.width, "h": metadata.dimensions.height }
}`;

/** Lee los eventos publicados (dataset público, sin token). Si Sanity no responde, el build falla y queda la versión anterior. */
export async function getEventos(): Promise<Evento[]> {
  const url = `https://${PROYECTO}.apicdn.sanity.io/${API}/data/query/${DATASET}?query=${encodeURIComponent(CONSULTA)}`;
  const r = await fetch(url);
  if (!r.ok) throw new Error(`Sanity respondió ${r.status} al leer la agenda`);
  const { result } = (await r.json()) as { result: Evento[] };
  return result.map((e) => ({
    ...e,
    // Imagen servida por el CDN de Sanity, redimensionada y en formato moderno
    invitacion: e.invitacion?.url ? { ...e.invitacion, url: `${e.invitacion.url}?w=900&auto=format&q=80` } : undefined,
  }));
}

/** Separa próximos (hoy en adelante, del más cercano al más lejano) y anteriores. */
export function separar(eventos: Evento[], hoy = new Date().toISOString().slice(0, 10)) {
  return {
    proximos: eventos.filter((e) => e.fecha >= hoy).reverse(),
    anteriores: eventos.filter((e) => e.fecha < hoy),
  };
}

const MESES = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];
export function partesFecha(iso: string) {
  const [a, m, d] = iso.split("-").map(Number);
  return { dia: d, mes: MESES[m - 1], anio: a };
}
