import type { Metadata } from "next";
import Image from "next/image";
import { type Evento, getEventos, partesFecha, separar } from "@/lib/agenda";

export const metadata: Metadata = {
  title: "Agenda",
  description: "Presentaciones, ferias y conversatorios de Lina Henao: FilBo, Fiesta del Libro de Medellín, FIL Guadalajara y más.",
  alternates: { canonical: "/agenda/" },
};

function Fila({ e, proximo }: { e: Evento; proximo?: boolean }) {
  const f = partesFecha(e.fecha);
  return (
    <li className={`ev${proximo ? " next" : ""}`}>
      <time className="d" dateTime={e.fecha}>
        {f.dia}
        <small>
          {f.mes} {f.anio}
        </small>
      </time>
      <div>
        <h3>{e.titulo}</h3>
        <p>
          {e.lugar}
          {e.hora && ` · ${e.hora}`}
          {e.libro && (
            <>
              {" · "}
              <em>{e.libro}</em>
            </>
          )}
        </p>
        {e.enlace && (
          <p>
            <a href={e.enlace} rel="noopener" target="_blank">Más información</a>
          </p>
        )}
      </div>
    </li>
  );
}

export default async function Agenda() {
  const eventos = await getEventos();
  const { proximos, anteriores } = separar(eventos);
  const conInvitacion = eventos.filter((e) => e.invitacion);

  return (
    <>
      <section className="cabeza-pagina">
        <div className="wrap">
          <p className="label">Agenda</p>
          <h1>Presentaciones</h1>
          <p className="lead">Ferias, librerías y conversatorios donde Lina presenta su obra.</p>
        </div>
      </section>

      <section className="agenda">
        <div className="wrap">
          {proximos.length > 0 && (
            <>
              <h2 className="label">Próximas</h2>
              <ol className="eventos">
                {proximos.map((e) => (
                  <Fila key={e._id} e={e} proximo />
                ))}
              </ol>
              <h2 className="label" style={{ marginTop: 48 }}>Anteriores</h2>
            </>
          )}
          <ol className="eventos">
            {anteriores.map((e) => (
              <Fila key={e._id} e={e} />
            ))}
          </ol>

          {conInvitacion.length > 0 && (
            <>
              <h2 className="label" style={{ marginTop: 56 }}>Invitaciones</h2>
              <div className="invitaciones">
                {conInvitacion.map((e) => (
                  <Image
                    key={e._id}
                    src={e.invitacion!.url}
                    alt={`Invitación: ${e.titulo}, ${e.lugar}`}
                    width={e.invitacion!.w}
                    height={e.invitacion!.h}
                    sizes="(min-width: 900px) 270px, 50vw"
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
}
