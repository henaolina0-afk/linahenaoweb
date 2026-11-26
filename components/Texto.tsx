/** Texto corto con *cursivas* marcadas con asteriscos (para títulos de libros). */
export default function Texto({ children }: { children: string }) {
  const partes = children.split("*");
  return <>{partes.map((p, i) => (i % 2 ? <em key={i}>{p}</em> : p))}</>;
}
