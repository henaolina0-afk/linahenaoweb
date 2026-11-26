import type { Metadata } from "next";
import Image from "next/image";
import { EVENTOS, partesFecha } from "@/lib/agenda";

export const metadata: Metadata = {
  title: "Agenda",
  description: "Presentaciones, ferias y conversatorios de Lina Henao: FilBo, Fiesta del Libro de Medellín, FIL Guadalajara y más.",
  alternates: { canonical: "/agenda/" },
};

export default function Agenda() {
  const conInvitacion = EVENTOS.filter((e) => e.invitacion);
  return (
    <>
      <section className="cabeza-pagina">
        <div className="wrap">
          <p className="label">Agenda</p>
          <h1>Presentaciones</h1>
          <p className="lead">Ferias, librerías y conversatorios donde Lina ha presentado su obra.</p>
        </div>
      </section>

      <section className="agenda">
        <div className="wrap">
          <ol style={{ listStyle: "none" }}>
            {EVENTOS.map((e) => {
              const f = partesFecha(e.fecha);
              return (
                <li className="ev" key={e.fecha + e.titulo}>
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
                      {e.libro && (
                        <>
                          {" · "}
                          <em>{e.libro}</em>
                        </>
                      )}
                    </p>
                  </div>
                </li>
              );
            })}
          </ol>

          <p className="label" style={{ marginTop: 56 }}>Invitaciones</p>
          <div className="invitaciones">
            {conInvitacion.map((e) => (
              <Image key={e.invitacion} src={e.invitacion!} alt={`Invitación: ${e.titulo}, ${e.lugar}`} width={900} height={1125} sizes="(min-width: 900px) 270px, 50vw" />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
