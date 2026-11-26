import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sobre Lina",
  description:
    "Lina Henao es comunicadora y escritora colombiana. Su obra mezcla narrativa y poesía, lo que ella llama literatura híbrida. Vive en Medellín.",
  alternates: { canonical: "/sobre-lina/" },
};

// Línea de tiempo: solo hechos confirmados en docs/01-contenido.md y en las invitaciones.
const ANIOS = [
  { y: 2021, color: "var(--c-contra)", items: ["*Contradicciones del alma*", "Prosa poética con sus ilustraciones"] },
  { y: 2023, color: "var(--c-meta)", items: ["*Metáforas de vida*", "17.ª Fiesta del Libro y la Cultura de Medellín"] },
  { y: 2024, color: "var(--c-ayer)", items: ["*Ayer, hoy & mañana*", "FilBo Bogotá", "Librería Lerner, Medellín", "18.ª Fiesta del Libro y la Cultura de Medellín"] },
  {
    y: 2025,
    color: "var(--c-esencia)",
    items: ["*Esencia, voz y expresión*", "Mención de Honor, International Latino Book Awards", "FilBo · Fondo de Cultura Económica, Bogotá y Medellín", "19.ª Fiesta del Libro · FIL Guadalajara"],
  },
  {
    y: 2026,
    color: "var(--c-ladrillo)",
    items: ["*Sobrevivir no es vivir*, su primera novela", "FilBo: «El poder de la ficción»", "Dos antologías de AIDE", "Horasis Global Summit, Medellín"],
  },
];

const cursiva = (t: string) => t.split("*").map((p, i) => (i % 2 ? <em key={i}>{p}</em> : p));

export default function SobreLina() {
  return (
    <>
      <section className="about">
        <div className="wrap">
          <div className="retrato">
            <Image src="/img/foto-48.webp" alt="Retrato de Lina Henao sentada en un jardín" width={1400} height={1750} priority sizes="(min-width: 900px) 440px, 100vw" />
          </div>
          <div>
            <p className="label">Sobre Lina</p>
            <h1>Lina Henao</h1>
            <p>
              Lina Henao es comunicadora y escritora colombiana. Tras casi veinticinco años de carrera corporativa en México y
              Estados Unidos, encontró en la autopublicación el camino para una obra que mezcla narrativa y poesía, lo que ella
              llama literatura híbrida.
            </p>
            <p className="quote">«Escribir es darle voz a lo que el alma calla.»</p>
            <p>
              Ha publicado cinco libros; <em>Esencia, voz y expresión</em> (2025) obtuvo Mención de Honor en los International
              Latino Book Awards como mejor libro de poesía en español, y su obra ha pasado por la FilBo de Bogotá, la Fiesta del
              Libro de Medellín y la FIL Guadalajara. <em>Sobrevivir no es vivir</em> es su primera novela, y los poemas que
              intercala a lo largo de sus capítulos llevan su sello reflexivo e intimista. En 2026 participa además en dos
              antologías de AIDE: «Las Telarañas Cibernéticas» y «Adiós Amiga».
            </p>
            <p>Es miembro de ADE (Autor de Éxito) y de AIDE (Asociación Internacional de Escritores). Vive en Medellín.</p>
            <div className="ctas" style={{ marginTop: 22 }}>
              <Link href="/libros/" className="btn btn-dark">Ver sus libros</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="porque" aria-labelledby="t-porque">
        <div className="wrap">
          <h2 id="t-porque" className="label">¿Por qué escribo?</h2>
          <div className="cols">
            <p className="big">
              «Ser escritora significa no solo jugar con las palabras para encontrar la mejor forma de expresar lo que se guarda
              en el interior de cada uno, sino comunicar aquello que muchas veces no sabemos, no podemos o no nos atrevemos a
              decir. Tener la posibilidad de conectar con los lectores para que los libros les sirvan de compañía, inspiración, o
              mejor aún, sean un despertar de conciencia para valorar lo que la vida nos ofrece es mi mejor recompensa.»
            </p>
            <div>
              <p>
                La posibilidad de que un libro, o un fragmento del mismo, toque la esencia de una persona es el mayor logro de un
                escritor. Los libros deben ser no solo entretenimiento sino el medio para contar historias de muchos tipos que
                divierten, enseñan, comparten y educan, sino que también sirven para cuestionar y encontrar significado en las
                palabras. Los libros reflejan la cultura, las experiencias y los sueños porque nos transportan a mundos
                desconocidos.
              </p>
              <p>
                Me encanta explorar diferentes formas de comunicación y por eso, utilizo metáforas, ilustraciones, fotografías y
                combinaciones de prosa poética y narrativa. Quiero que quien me lee se identifique con temas de la vida diaria y
                todas las alegrías y los sinsabores que nos invaden, pero siempre con un espíritu de esperanza y agradecimiento.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="timeline" aria-labelledby="t-tiempo">
        <div className="wrap">
          <p className="label">Trayectoria</p>
          <h2 id="t-tiempo">Año a año</h2>
          <ol>
            {ANIOS.map((a) => (
              <li key={a.y}>
                <div className="y">
                  {a.y}
                  <i style={{ background: a.color }} />
                </div>
                <ul>
                  {a.items.map((t) => (
                    <li key={t}>{cursiva(t)}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="fotos">
            <Image src="/img/foto-28.webp" alt="Lina Henao con un micrófono frente a una biblioteca" width={1400} height={1400} sizes="(min-width: 900px) 540px, 50vw" />
            <Image src="/img/foto-19.webp" alt="Lina Henao leyendo en una feria del libro" width={1400} height={1400} sizes="(min-width: 900px) 270px, 50vw" />
            <Image src="/img/foto-29.webp" alt="Lina Henao en una conversación en una librería" width={1400} height={1400} sizes="(min-width: 900px) 270px, 50vw" />
            <Image src="/img/foto-23.webp" alt="Retrato de Lina Henao sonriendo" width={1400} height={1400} sizes="(min-width: 900px) 270px, 50vw" />
            <Image src="/img/foto-09.webp" alt="Lina Henao escribiendo en una tableta al aire libre" width={1400} height={1400} sizes="(min-width: 900px) 270px, 50vw" />
          </div>
        </div>
      </section>
    </>
  );
}
