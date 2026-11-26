import Image from "next/image";
import FormCartas from "@/components/FormCartas";

// Capítulos según el borrador v3 de la guía (docs/05-guia-la-noche-que-vuelve-a-pasar-v3.md).
export const CAPITULOS = [
  "Lo que yo tardé años en ver",
  "Qué hacer hoy, cuando la noche vuelve a pasar",
  "Lo que no funciona (y yo hice todo)",
  "Las ocho preguntas que todos hacemos",
  "Qué es Al-Anon y cómo es una primera reunión",
  "Un poema para esta noche",
];

/** Bloque de la guía: presentación + índice + formulario. Va en /guia y en la ficha de Sobrevivir. */
export default function BloqueGuia({ titulo = "h2" }: { titulo?: "h1" | "h2" }) {
  const Titulo = titulo;
  return (
    <section className="gp" id="guia" aria-labelledby="t-guia">
      <div className="wrap">
        <div>
          <p className="label">Guía gratuita · Sobrevivir no es vivir</p>
          <Titulo id="t-guia">La noche que vuelve a pasar</Titulo>
          <p className="lead">
            Una guía breve para quien ama a alguien que bebe, escrita por quien lo vivió. Es lo que a Lina le hubiera gustado que
            alguien le dijera cuando esas noches, o días, se repetían una y otra vez.
          </p>
          <a href="#form-guia" className="btn btn-ladrillo solo-movil">Recíbela gratis</a>
          <ol className="toc">
            {CAPITULOS.map((c, i) => (
              <li key={c}>
                <b>{i + 1}</b>
                {c}
              </li>
            ))}
          </ol>
          <p className="firma">
            <Image src="/img/autora-cara.webp" alt="" width={300} height={300} />
            <span>
              Escrita por Lina Henao, autora de <em>Sobrevivir no es vivir</em>. Pasó cinco años en Al-Anon. Se lee en media
              hora.
            </span>
          </p>
        </div>
        <FormCartas origen="guia" />
      </div>
    </section>
  );
}
