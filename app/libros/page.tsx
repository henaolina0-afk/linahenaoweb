import type { Metadata } from "next";
import TarjetaLibro from "@/components/TarjetaLibro";
import { LIBROS } from "@/lib/libros";

export const metadata: Metadata = {
  title: "Libros",
  description: "Los cinco libros de Lina Henao: de Contradicciones del alma (2021) a su primera novela, Sobrevivir no es vivir (2026).",
  alternates: { canonical: "/libros/" },
};

export default function Libros() {
  return (
    <section className="libros pagina">
      <div className="wrap">
        <div className="head">
          <div>
            <p className="label">Su obra</p>
            <h1>Cinco libros</h1>
          </div>
        </div>
        <div className="shelf">
          {LIBROS.map((l) => (
            <TarjetaLibro key={l.slug} libro={l} />
          ))}
        </div>
      </div>
    </section>
  );
}
