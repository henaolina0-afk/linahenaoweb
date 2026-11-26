// Presentaciones de Lina, de la más reciente a la más antigua.
// Fuente: contexto/invitaciones/ (leídas una por una) y docs/01-contenido.md.
// Las invitaciones 04, 08 y 09 no se muestran porque incluyen un correo personal que no va en la web.

export type Evento = {
  fecha: string; // ISO
  titulo: string;
  lugar: string;
  libro?: string;
  invitacion?: string;
};

export const EVENTOS: Evento[] = [
  {
    fecha: "2026-11-11",
    titulo: "Panel «Cultural Practices that Keep Us Connected to Our Humanity»",
    lugar: "Horasis Global Summit · Medellín",
  },
  {
    fecha: "2026-04-23",
    titulo: "Conversatorio «El poder de la ficción»",
    lugar: "FilBo 2026 · Gran Salón A · Bogotá",
    invitacion: "/img/invitacion-11.webp",
  },
  {
    fecha: "2025-11-29",
    titulo: "Lina Henao en la FIL Guadalajara 2025",
    lugar: "Feria Internacional del Libro de Guadalajara · Expo Guadalajara",
    libro: "Esencia, voz y expresión",
    invitacion: "/img/invitacion-10.webp",
  },
  {
    fecha: "2025-09-15",
    titulo: "«Hablemos de historias…», conversación con Alexandra Castrillón",
    lugar: "19.ª Fiesta del Libro y la Cultura · Jardín Botánico, Medellín",
    libro: "Esencia, voz y expresión",
  },
  {
    fecha: "2025-05-15",
    titulo: "Presentación del libro, conversación con Tita Ochoa",
    lugar: "Fondo de Cultura Económica · Biblioteca Pública Piloto, Medellín",
    libro: "Esencia, voz y expresión",
    invitacion: "/img/invitacion-07.webp",
  },
  {
    fecha: "2025-04-30",
    titulo: "Presentación del libro, conversación con Alexandra Castrillón",
    lugar: "Fondo de Cultura Económica · Librería México, Bogotá",
    libro: "Esencia, voz y expresión",
    invitacion: "/img/invitacion-05.webp",
  },
  {
    fecha: "2025-04-28",
    titulo: "Presentación del libro, conversación con Carolina Valero",
    lugar: "FilBo 2025 · Bogotá",
    libro: "Esencia, voz y expresión",
  },
  {
    fecha: "2024-11-27",
    titulo: "Lina Henao conversa con Jenny Tamayo",
    lugar: "Casa Tragaluz · Medellín",
    libro: "Ayer, hoy & mañana",
    invitacion: "/img/invitacion-03.webp",
  },
  {
    fecha: "2024-06-19",
    titulo: "Conversación con Ana Piedad Jaramillo",
    lugar: "Librería Lerner · Medellín",
    libro: "Ayer, hoy & mañana",
    invitacion: "/img/invitacion-13.webp",
  },
  {
    fecha: "2024-04-20",
    titulo: "Conversatorio, modera Camila Sarmiento",
    lugar: "FilBo 2024 · Sala Lee la Naturaleza · Bogotá",
    libro: "Ayer, hoy & mañana",
    invitacion: "/img/invitacion-14.webp",
  },
  {
    fecha: "2023-09-16",
    titulo: "Conversatorio con Lina Henao, modera Jenny Tamayo",
    lugar: "17.ª Fiesta del Libro y la Cultura · Jardín Botánico, Medellín",
    libro: "Metáforas de vida",
    invitacion: "/img/invitacion-15.webp",
  },
];

const MESES = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];
export function partesFecha(iso: string) {
  const [a, m, d] = iso.split("-").map(Number);
  return { dia: d, mes: MESES[m - 1], anio: a };
}
