import Image from "next/image";
import Link from "next/link";
import FormCartas from "@/components/FormCartas";
import TarjetaLibro from "@/components/TarjetaLibro";
import VideoYouTube from "@/components/VideoYouTube";
import { LIBROS } from "@/lib/libros";
import { TRAYECTORIA, VIDEO_INICIO } from "@/lib/sitio";

export default function Inicio() {
  const sobrevivir = LIBROS[0];
  return (
    <>
      <section className="hero">
        <div className="wrap">
          <div className="txt">
            <p className="label">Escritora · Medellín</p>
            <h1>
              Escribir es darle voz a lo que <em>el alma calla.</em>
            </h1>
            <p className="lead">
              Aforismos, prosa poética, poesía y, ahora, su primera novela. Cinco libros de Lina Henao para leer despacio y
              volver a ellos.
            </p>
            <div className="ctas">
              <Link href="/libros/" className="btn btn-dark">Conoce sus libros</Link>
              <Link href="/sobre-lina/" className="btn btn-line">Sobre Lina</Link>
            </div>
          </div>
          <div className="foto">
            <Image
              src="/img/autora-color.webp"
              alt="Lina Henao, sentada al aire libre frente a un jardín, con camisa blanca"
              fill
              priority
              sizes="(min-width: 900px) 600px, 100vw"
            />
          </div>
        </div>
      </section>

      <section className="feature" aria-labelledby="t-sobrevivir">
        <div className="wrap">
          <div className="cover-wrap">
            <Image src={sobrevivir.portada.src} alt="Portada de Sobrevivir no es vivir" width={sobrevivir.portada.w} height={sobrevivir.portada.h} sizes="(min-width: 900px) 300px, 180px" />
          </div>
          <div>
            <p className="label">Nuevo · 2026 · Su primera novela</p>
            <h2 id="t-sobrevivir">
              Sobrevivir
              <br />
              no es vivir
            </h2>
            <p className="sub">{sobrevivir.subtitulo}</p>
            {/* Frase A (docs/01-contenido.md); pendiente de que Lina confirme A, B o C */}
            <p className="hook">Si alguna vez amaste tanto a alguien que ya no sabías qué hacer, este libro es para ti.</p>
            <div className="ctas">
              <Link href={`/libros/${sobrevivir.slug}/`} className="btn btn-ladrillo">Conoce el libro</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="libros" aria-labelledby="t-libros">
        <div className="wrap">
          <div className="head">
            <div>
              <p className="label">Su obra</p>
              <h2 id="t-libros">Cinco libros</h2>
            </div>
            <Link href="/libros/" className="btn btn-line">Ver todos</Link>
          </div>
          <div className="shelf">
            {LIBROS.map((l) => (
              <TarjetaLibro key={l.slug} libro={l} />
            ))}
          </div>
        </div>
      </section>

      <section className="tray" aria-labelledby="t-tray">
        <div className="wrap">
          <div>
            <p className="label">Trayectoria</p>
            <h2 id="t-tray">Su obra ha pasado por</h2>
          </div>
          <ul>
            {TRAYECTORIA.map((t) => (
              <li key={t.nombre}>
                <b>{t.nombre}</b>
                <span>{t.detalle}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="voz" aria-labelledby="t-voz">
        <div className="wrap">
          <div>
            <p className="label">En su voz</p>
            <h2 id="t-voz">Lina, en sus presentaciones</h2>
            <p>{VIDEO_INICIO.titulo}.</p>
            <Link href="/agenda/" className="btn btn-line">Ver presentaciones</Link>
          </div>
          <VideoYouTube id={VIDEO_INICIO.id} titulo={VIDEO_INICIO.titulo} />
        </div>
      </section>

      <section className="cartas" id="cartas" aria-labelledby="t-cartas">
        <div className="wrap">
          <div>
            <p className="label">Cartas de Lina</p>
            <h2 id="t-cartas">Novedades, poemas y fechas, en tu correo</h2>
            <p className="promesa">Una carta de vez en cuando. Nada más.</p>
          </div>
          <FormCartas />
        </div>
      </section>
    </>
  );
}
