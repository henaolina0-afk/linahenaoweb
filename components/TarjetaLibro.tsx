import Image from "next/image";
import Link from "next/link";
import type { Libro } from "@/lib/libros";

export default function TarjetaLibro({ libro }: { libro: Libro }) {
  return (
    <Link href={`/libros/${libro.slug}/`} className="book">
      <div className="cv">
        <Image src={libro.portada.src} alt={`Portada de ${libro.titulo}`} width={libro.portada.w} height={libro.portada.h} sizes="(min-width: 900px) 210px, 45vw" />
      </div>
      <div className="yr">
        <i style={{ background: libro.color }} />
        {libro.anio}
      </div>
      <h3>{libro.titulo}</h3>
      <p>{libro.linea}</p>
    </Link>
  );
}
