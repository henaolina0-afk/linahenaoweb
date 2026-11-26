import type { MetadataRoute } from "next";
import { LIBROS } from "@/lib/libros";
import { SITIO } from "@/lib/sitio";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const rutas = ["/", "/libros/", "/sobre-lina/", "/agenda/", "/politica-de-datos/", ...LIBROS.map((l) => `/libros/${l.slug}/`)];
  return rutas.map((r) => ({ url: `${SITIO.url}${r}` }));
}
