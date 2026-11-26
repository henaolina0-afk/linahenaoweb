// Los cinco libros de Lina, del más reciente al primero.
// Fuente: docs/01-contenido.md y fichas de Amazon. No inventar textos: lo que falte va como PENDIENTE.

export type Compra = { tienda: "amazon" | "librosmarket" | "firmado"; texto: string; url: string };

export type Libro = {
  slug: string;
  titulo: string;
  subtitulo?: string;
  anio: number;
  color: string; // color del libro (acento)
  tinte: string; // fondo suave de su ficha
  portada: { src: string; w: number; h: number };
  linea: string; // una línea para tarjetas
  descripcion: string[]; // párrafos
  reconocimientos?: string[];
  citas?: { texto: string; autor: string }[];
  compra: Compra[];
  galeria?: { src: string; alt: string; w: number; h: number }[]; // «El libro en el camino»
  pendiente?: string; // nota visible mientras falte algo
};

const FIRMADO = "https://wa.me/573178312157";
const AMAZON_AUTORA = "https://amazon.com/author/librosparacompartirlinahenao";

export const LIBROS: Libro[] = [
  {
    slug: "sobrevivir-no-es-vivir",
    titulo: "Sobrevivir no es vivir",
    subtitulo: "Cuando el amor y el dolor conviven hasta encontrar su propio rumbo",
    anio: 2026,
    color: "#C8553D",
    tinte: "#1B2440",
    portada: { src: "/img/cov-sobrevivir.webp", w: 566, h: 875 },
    linea: "Su primera novela, contada a dos voces.",
    descripcion: [
      "«¿Doña Luchy, otra vez por acá?» Trece veces en urgencias en un año, y las enfermeras ya no necesitan preguntarle a quién trae.",
      "Juanjo es la caja de música de cualquier reunión: simpático, generoso, el invitado que nadie quiere que se vaya. También es el hombre que esconde botellas de brandy detrás de la ropa del clóset, en el tanque del sanitario, entre las plantas, y que cada mañana se promete que hoy sí será distinto. Luchy lleva años cubriendo sus ausencias, inventando excusas y sonriendo en las reuniones del colegio, convencida de que si ella hace todo bien él dejará de beber. Hasta que el cuerpo empieza a cobrarle, hasta que la gata de la casa enferma de ansiedad, hasta que su hijo pequeño dice delante de las maestras lo que nadie se atrevía a decir en voz alta.",
      "Contada por los dos, capítulo a capítulo, esta novela no busca culpables. Él narra la sed de las cinco de la mañana, la vergüenza de cada recaída y un amor por los suyos que ni el alcohol consigue apagar; ella, lo que cuesta quedarse y lo que cuesta irse.",
      "*Sobrevivir no es vivir* es para quien ama a alguien que bebe y ha empezado a desaparecer en el intento. Aquí no hay sermones: hay una mujer que aprende a soltar sin dejar de amar y un hombre completamente desgarrado entre el amor y el alcohol.",
    ],
    citas: [
      { texto: "Este libro no ofrece respuestas fáciles. Ofrece una experiencia.", autor: "Carlos E. Rodríguez Sánchez, del prólogo" },
      {
        texto: "No basta con sobrevivir: toda persona merece recibir ayuda, recuperar su dignidad y volver a encontrar razones para vivir.",
        autor: "Paula Andrea Díaz Valencia, MD, MPH, PhD, del epílogo",
      },
    ],
    compra: [
      { tienda: "amazon", texto: "Amazon", url: AMAZON_AUTORA },
      { tienda: "firmado", texto: "Ejemplar firmado (Colombia)", url: FIRMADO },
    ],
    pendiente: "Enlaces de compra directos de Amazon y Libros.Market (disponibles hacia el 1 de diciembre)",
  },
  {
    slug: "esencia-voz-y-expresion",
    titulo: "Esencia, voz y expresión",
    subtitulo: "Genialidad inexplicable para ser la mejor versión de nosotros mismos",
    anio: 2025,
    color: "#6E8BB5",
    tinte: "#E9EEF5",
    portada: { src: "/img/cov-esencia-voz-y-expresion.webp", w: 720, h: 1046 },
    linea: "Mención de Honor, International Latino Book Awards 2025.",
    descripcion: [
      "*Esencia, voz y expresión* nace de las historias de la vida diaria que nos mueven y que nos dan o nos quitan lo más importante que tenemos en nuestra existencia, los propósitos de vida.",
      "Un libro construido con relatos y reflexiones que combinan la narrativa y la prosa poética dándole voz a lo que pensamos y sentimos y que muchas veces no sabemos expresar. Cada uno de nosotros vive historias diferentes, pero en todas ellas la felicidad y la tristeza siempre serán compañeros en el camino, no importa dónde estemos.",
      "Este libro es un compañero para los momentos de soledad o de silencio y un despertar de sentimientos y emociones en las diferentes situaciones de la vida.",
    ],
    reconocimientos: [
      "Mención de Honor · International Latino Book Awards 2025, mejor libro de poesía en español",
      "Seleccionado en la convocatoria de autores autopublicados de la FilBo y de la Fiesta del Libro y la Cultura de Medellín",
    ],
    compra: [
      { tienda: "amazon", texto: "Amazon", url: "https://www.amazon.com/dp/B0GXQN892T" },
      { tienda: "firmado", texto: "Ejemplar firmado (Colombia)", url: FIRMADO },
    ],
    galeria: [
      { src: "/img/foto-40.webp", alt: "Lina Henao en la FilBo con Esencia, voz y expresión", w: 750, h: 750 },
      { src: "/img/foto-45.webp", alt: "Lina Henao en el escenario de la FilBo", w: 960, h: 1280 },
    ],
  },
  {
    slug: "ayer-hoy-y-manana",
    titulo: "Ayer, hoy & mañana",
    anio: 2024,
    color: "#8E3B8C",
    tinte: "#F4EAF3",
    portada: { src: "/img/cov-ayer-hoy-y-manana.webp", w: 720, h: 1074 },
    linea: "Un diálogo íntimo y reflexivo sobre lo que somos.",
    descripcion: [
      "Un diálogo íntimo y reflexivo sobre lo que somos, inspirado en las experiencias vividas, lo que somos y lo que quisiéramos ser.",
    ],
    reconocimientos: [
      "Seleccionado en la convocatoria de autores autopublicados de la FilBo y de la Fiesta del Libro y la Cultura de Medellín",
    ],
    compra: [{ tienda: "amazon", texto: "Amazon", url: "https://www.amazon.com/dp/B0DNTZDBVC" }],
    galeria: [{ src: "/img/foto-21.webp", alt: "Ejemplares de Ayer, hoy & mañana junto a un micrófono", w: 720, h: 1280 }],
  },
  {
    slug: "metaforas-de-vida",
    titulo: "Metáforas de vida",
    anio: 2023,
    color: "#4E7F7B",
    tinte: "#E6EFEE",
    portada: { src: "/img/cov-metaforas-de-vida.webp", w: 315, h: 488 },
    linea: "Una oda a la gratitud y un homenaje a la vida.",
    descripcion: ["Una oda a la gratitud y un homenaje a la vida para disfrutar cada minuto de ella."],
    reconocimientos: [
      "Seleccionado en la convocatoria de autores autopublicados de la Fiesta del Libro y la Cultura de Medellín: su primera gran presentación en una feria",
    ],
    // Solo quedan ejemplares firmados (no aparece en Amazon)
    compra: [{ tienda: "firmado", texto: "Ejemplar firmado (Colombia)", url: FIRMADO }],
  },
  {
    slug: "contradicciones-del-alma",
    titulo: "Contradicciones del alma",
    anio: 2021,
    color: "#B8343A",
    tinte: "#F6E8E8",
    portada: { src: "/img/cov-contradicciones-del-alma.webp", w: 720, h: 1100 },
    linea: "Su primer libro: prosa poética con sus ilustraciones.",
    descripcion: [
      "Su primer libro: prosa poética con ilustraciones hechas por la autora. «Todas las historias tienen dos lados por contar…»",
    ],
    // Solo quedan ejemplares firmados (no aparece en Amazon)
    compra: [{ tienda: "firmado", texto: "Ejemplar firmado (Colombia)", url: FIRMADO }],
  },
];

export const getLibro = (slug: string) => LIBROS.find((l) => l.slug === slug);
