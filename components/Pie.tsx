import Image from "next/image";
import Link from "next/link";
import { LIBROS } from "@/lib/libros";
import { SITIO } from "@/lib/sitio";

export default function Pie() {
  return (
    <footer className="pie">
      <div className="wrap">
        <div className="marca">
          <Image src="/img/logo-lh-light.webp" alt="Lina Henao, escritora" width={454} height={249} />
          <ul>
            <li><a href={`mailto:${SITIO.correo}`}>{SITIO.correo}</a></li>
            <li><a href={SITIO.instagram.url} rel="noopener" target="_blank">Instagram {SITIO.instagram.usuario}</a></li>
            <li><a href={SITIO.linkedin} rel="noopener" target="_blank">LinkedIn</a></li>
          </ul>
        </div>
        <div>
          <h2>Libros</h2>
          <ul>
            {LIBROS.map((l) => (
              <li key={l.slug}><Link href={`/libros/${l.slug}/`}>{l.titulo}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h2>Comprar</h2>
          <ul>
            <li><a href={SITIO.amazonAutora} rel="noopener" target="_blank">Amazon</a></li>
            <li><a href={SITIO.whatsappFirmados} rel="noopener" target="_blank">Ejemplar firmado (WhatsApp, Colombia)</a></li>
          </ul>
        </div>
        <div>
          <h2>La web</h2>
          <ul>
            <li><Link href="/sobre-lina/">Sobre Lina</Link></li>
            <li><Link href="/agenda/">Agenda</Link></li>
            <li><Link href="/#cartas">Cartas de Lina</Link></li>
            <li><Link href="/politica-de-datos/">Política de datos</Link></li>
          </ul>
        </div>
        <div className="base">
          <span>{SITIO.frase} · © {new Date().getFullYear()} Lina Henao</span>
          <a className="credito" href={SITIO.stilo} rel="noopener" target="_blank">
            Sitio por
            <Image src="/img/stilo_light.webp" alt="Stilo Media" width={322} height={110} />
          </a>
        </div>
      </div>
    </footer>
  );
}
