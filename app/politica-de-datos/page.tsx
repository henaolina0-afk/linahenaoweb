import type { Metadata } from "next";
import { SITIO } from "@/lib/sitio";

export const metadata: Metadata = {
  title: "Política de tratamiento de datos",
  description: "Cómo se recogen, usan y protegen los datos personales en linahenao.net (Ley 1581 de 2012, Colombia).",
  alternates: { canonical: "/politica-de-datos/" },
};

// BORRADOR redactado por Stilo Media. Pendiente de aprobación de Lina antes del lanzamiento con dominio propio.
export default function Politica() {
  return (
    <>
      <section className="cabeza-pagina">
        <div className="wrap">
          <p className="label">La web</p>
          <h1>Política de tratamiento de datos personales</h1>
          <p className="lead">Última actualización: noviembre de 2026.</p>
        </div>
      </section>
      <section className="legal">
        <div className="wrap prosa">
          <p className="pendiente">[PENDIENTE: aprobación de Lina]</p>

          <h2>Responsable</h2>
          <p>
            Lina Henao, escritora, con domicilio en Medellín (Colombia), es la responsable del tratamiento de los datos
            personales recogidos en este sitio. Contacto: <a href={`mailto:${SITIO.correo}`}>{SITIO.correo}</a>.
          </p>

          <h2>Qué datos se recogen</h2>
          <p>
            Solo los que tú escribes en los formularios del sitio: tu correo electrónico y, cuando el formulario lo pide, tu
            nombre. No se recogen datos sensibles.
          </p>

          <h2>Para qué se usan</h2>
          <ul>
            <li>Enviarte «Cartas de Lina»: novedades sobre sus libros, poemas y fechas de presentaciones.</li>
            <li>Enviarte los materiales gratuitos que pidas en el sitio.</li>
          </ul>
          <p>Tus datos no se venden ni se ceden a terceros con fines comerciales.</p>

          <h2>Autorización</h2>
          <p>
            Antes de enviar cualquier formulario debes marcar la casilla de autorización. Con ella aceptas de forma previa,
            expresa e informada el tratamiento de tus datos según esta política, como lo exige la Ley 1581 de 2012 y sus
            decretos reglamentarios.
          </p>

          <h2>Dónde se guardan</h2>
          <p>
            Los correos se guardan en EmailOctopus, el servicio con el que se envían las cartas, que actúa como encargado del
            tratamiento. Sus servidores pueden estar fuera de Colombia.
          </p>

          <h2>Tus derechos</h2>
          <p>Como titular de los datos puedes, en cualquier momento:</p>
          <ul>
            <li>Conocer, actualizar y corregir tus datos.</li>
            <li>Pedir prueba de la autorización que diste.</li>
            <li>Saber qué uso se ha dado a tus datos.</li>
            <li>Revocar la autorización y pedir que se borren tus datos.</li>
            <li>Presentar quejas ante la Superintendencia de Industria y Comercio.</li>
          </ul>
          <p>
            Cada correo incluye un enlace para darte de baja con un clic. Para cualquier otra solicitud escribe a{" "}
            <a href={`mailto:${SITIO.correo}`}>{SITIO.correo}</a>; recibirás respuesta en los plazos que fija la ley (diez días
            hábiles para consultas y quince para reclamos).
          </p>

          <h2>Vigencia</h2>
          <p>
            Esta política rige desde su publicación. Los datos se conservan mientras sigas suscrita o suscrito, o hasta que pidas
            su eliminación.
          </p>
        </div>
      </section>
    </>
  );
}
