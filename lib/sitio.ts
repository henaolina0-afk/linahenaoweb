// Datos generales del sitio. Fuente: docs/01-contenido.md
export const SITIO = {
  nombre: "Lina Henao",
  url: "https://linahenao.net",
  frase: "Escribir es darle voz a lo que el alma calla.",
  descripcion:
    "Lina Henao, escritora colombiana. Poesía, prosa poética y su primera novela, Sobrevivir no es vivir. Cinco libros para leer despacio y volver a ellos.",
  correo: "hola@linahenao.net",
  instagram: { usuario: "@linahenaoescritora", url: "https://www.instagram.com/linahenaoescritora/" },
  linkedin: "https://www.linkedin.com/in/lina-henao-b1698317",
  amazonAutora: "https://amazon.com/author/librosparacompartirlinahenao",
  whatsappFirmados: "https://wa.me/573178312157",
  stilo: "https://stilo.media",
};

export const MENU = [
  { href: "/libros/", texto: "Libros" },
  { href: "/sobre-lina/", texto: "Sobre Lina" },
  { href: "/agenda/", texto: "Agenda" },
];

// Bloque «Trayectoria» del inicio (sin años: solo lo confirmado en los docs)
export const TRAYECTORIA = [
  { nombre: "FilBo Bogotá", detalle: "Convocatoria de autores autopublicados" },
  { nombre: "FIL Guadalajara", detalle: "Guadalajara, México" },
  { nombre: "Fiesta del Libro y la Cultura", detalle: "Medellín" },
  { nombre: "Fondo de Cultura Económica", detalle: "Bogotá y Medellín" },
  { nombre: "International Latino Book Awards", detalle: "Mención de Honor · 2025" },
  { nombre: "Librería Lerner", detalle: "Medellín" },
  { nombre: "AIDE", detalle: "Asociación Internacional de Escritores" },
  { nombre: "ADE", detalle: "Autor de Éxito" },
];

// Video del bloque «En su voz» (provisional hasta tener el de Guadalajara)
export const VIDEO_INICIO = {
  id: "xQShQGD1bzw",
  titulo: "Presentación en la Librería Lerner, Medellín",
};
