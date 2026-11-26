"use client";

import { useState } from "react";

/** Video de YouTube con carga diferida: solo muestra la miniatura hasta que se pulsa. Usa youtube-nocookie. */
export default function VideoYouTube({ id, titulo, etiqueta }: { id: string; titulo: string; etiqueta?: string }) {
  const [activo, setActivo] = useState(false);
  return (
    <div className="video">
      {activo ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
          title={titulo}
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <button onClick={() => setActivo(true)} aria-label={`Ver el video: ${titulo}`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`} alt="" loading="lazy" />
          <span className="play">
            <i />
            {etiqueta ?? titulo}
          </span>
        </button>
      )}
    </div>
  );
}
