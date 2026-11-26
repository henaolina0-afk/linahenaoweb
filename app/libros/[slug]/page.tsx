import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import BloqueGuia from "@/components/BloqueGuia";
import FormCartas from "@/components/FormCartas";
import Texto from "@/components/Texto";
import { LIBROS, getLibro } from "@/lib/libros";

export const dynamicParams = false;
export function generateStaticParams() {
  return LIBROS.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({ params }: PageProps<"/libros/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const l = getLibro(slug);
  if (!l) return {};
  const desc = l.descripcion[0].replace(/\*/g, "").slice(0, 155);
  return {
    title: l.titulo,
    description: desc,
    alternates: { canonical: `/libros/${l.slug}/` },
    openGraph: { title: `${l.titulo} · Lina Henao`, description: desc, images: [{ url: l.portada.src, alt: `Portada de ${l.titulo}` }] },
  };
}

export default async function FichaLibro({ params }: PageProps<"/libros/[slug]">) {
  const { slug } = await params;
  const l = getLibro(slug);
  if (!l) notFound();
  const oscuro = l.slug === "sobrevivir-no-es-vivir";
  const otros = LIBROS.filter((o) => o.slug !== l.slug);

  return (
    <article className={`ficha${oscuro ? " ficha-noche" : ""}`} style={{ "--acc": l.color, "--tint": l.tinte } as React.CSSProperties}>
      <section className="bk-hero">
        <div className="wrap">
          <div className="cv-wrap">
            <Image src={l.portada.src} alt={`Portada de ${l.titulo}`} width={l.portada.w} height={l.portada.h} priority sizes="(min-width: 900px) 400px, 70vw" />
          </div>
          <div>
            <p className="label acc">Libros · {l.anio}</p>
            <h1 className={oscuro ? "anton" : undefined}>{l.titulo}</h1>
            {l.subtitulo && <p className="sub">{l.subtitulo}</p>}
            {l.reconocimientos && (
              <ul className="award">
                {l.reconocimientos.map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ul>
            )}
            <div className="buy">
              {l.compra.map((c, i) => (
                <a key={c.url + c.tienda} href={c.url} className={`btn ${i === 0 ? (oscuro ? "btn-ladrillo" : "btn-dark") : oscuro ? "btn-crema" : "btn-line"}`} rel="noopener" target="_blank">
                  {c.tienda === "amazon" ? "Comprar en Amazon" : c.texto}
                </a>
              ))}
            </div>
            {oscuro && (
              <p style={{ marginTop: 18 }}>
                <a href="#guia" className="enlace-guia">Recibe gratis la guía «La noche que vuelve a pasar» →</a>
              </p>
            )}
            {l.pendiente &&<p className="pendiente" style={{ marginTop: 14 }}>[PENDIENTE: {l.pendiente}]</p>}
          </div>
        </div>
      </section>

      <section className="bk-desc">
        <div className="wrap">
          <p className="label">Sobre el libro</p>
          <div className="prosa">
            {l.descripcion.map((p, i) => (
              <p key={i}>
                <Texto>{p}</Texto>
              </p>
            ))}
          </div>
        </div>
      </section>

      {l.citas?.map((c) => (
        <section className="cita" key={c.texto}>
          <div className="wrap">
            <blockquote>
              <p>«{c.texto}»</p>
              <cite>{c.autor}</cite>
            </blockquote>
          </div>
        </section>
      ))}

      {l.galeria && (
        <section className="bk-galeria">
          <div className="wrap">
            <p className="label">El libro en el camino</p>
            <div className="galeria">
              {l.galeria.map((g) => (
                <Image key={g.src} src={g.src} alt={g.alt} width={g.w} height={g.h} sizes="(min-width: 900px) 360px, 50vw" />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Sobrevivir lleva la guía; los demás libros, Cartas de Lina */}
      {oscuro ? (
        <BloqueGuia />
      ) : (
        <section className="cartas cartas-ficha">
          <div className="wrap">
            <div>
              <p className="label">Cartas de Lina</p>
              <h2>Novedades, poemas y fechas, en tu correo</h2>
              <p className="promesa">Una carta de vez en cuando. Nada más.</p>
            </div>
            <FormCartas />
          </div>
        </section>
      )}

      <section className="otros">
        <div className="wrap">
          <p className="label">Otros libros de Lina</p>
          <ul className="mini">
            {otros.map((o) => (
              <li key={o.slug}>
                <Link href={`/libros/${o.slug}/`}>
                  <Image src={o.portada.src} alt="" width={o.portada.w} height={o.portada.h} sizes="62px" />
                  <span>{o.titulo}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </article>
  );
}
