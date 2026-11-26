import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import BloqueGuia from "@/components/BloqueGuia";
import { LIBROS } from "@/lib/libros";

export const metadata: Metadata = {
  title: "La noche que vuelve a pasar · Guía gratuita",
  description:
    "Una guía breve y gratuita de Lina Henao, autora de Sobrevivir no es vivir, para quien ama a alguien que bebe. Escrita por quien lo vivió. Llega a tu correo.",
  alternates: { canonical: "/guia/" },
  openGraph: {
    title: "La noche que vuelve a pasar · Guía gratuita de Lina Henao",
    description: "Una guía breve para quien ama a alguien que bebe, escrita por quien lo vivió.",
    images: [{ url: "/img/og-guia.jpg", width: 1200, height: 630, alt: "La noche que vuelve a pasar, guía gratuita de Lina Henao" }],
  },
};

// Plan de correos: docs/03-infraestructura.md (automatización «guía»)
const PASOS = [
  { cuando: "Hoy", titulo: "La guía", texto: "El enlace para descargarla y quién es Lina, en tres líneas." },
  { cuando: "A los 3 días", titulo: "Su historia", texto: "Por qué escribió el libro a dos voces." },
  { cuando: "A los 7 días", titulo: "No estás sola", texto: "Una carta de Lina que termina con una invitación a responderle." },
];

export default function Guia() {
  const sobrevivir = LIBROS[0];
  return (
    <>
      <BloqueGuia titulo="h1" />

      <section className="after" aria-labelledby="t-despues">
        <div className="wrap">
          <p className="label">Qué pasa después</p>
          <h2 id="t-despues">Tres correos de Lina, nada más</h2>
          <ol className="steps">
            {PASOS.map((p) => (
              <li key={p.cuando}>
                <p className="label">{p.cuando}</p>
                <b>{p.titulo}</b>
                <p>{p.texto}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="guia-libro">
        <div className="wrap">
          <Link href={`/libros/${sobrevivir.slug}/`} className="mini-libro">
            <Image src={sobrevivir.portada.src} alt="" width={sobrevivir.portada.w} height={sobrevivir.portada.h} sizes="90px" />
            <span>
              <span className="label">El libro</span>
              <b>Sobrevivir no es vivir</b>
              La historia de un matrimonio atravesado por el alcoholismo, contada por los dos, capítulo a capítulo.
            </span>
          </Link>
        </div>
      </section>

      <section className="aviso">
        <div className="wrap">
          <p>
            Esta guía comparte una experiencia personal. Lina no es médica ni especialista, y nada de lo que cuenta reemplaza la
            atención médica, psicológica ni de emergencias. La guía no está afiliada a Al-Anon ni habla en su nombre.
          </p>
        </div>
      </section>
    </>
  );
}
