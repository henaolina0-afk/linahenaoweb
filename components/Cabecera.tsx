"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { MENU } from "@/lib/sitio";

export default function Cabecera() {
  const [abierto, setAbierto] = useState(false);
  const ruta = usePathname();


  return (
    <header className="top">
      <div className="wrap">
        <Link href="/" className="logo" aria-label="Lina Henao, escritora · inicio">
          <Image src="/img/logo-lh-dark.webp" alt="Lina Henao, escritora" width={454} height={249} priority />
        </Link>
        <button
          className="menu-btn"
          aria-expanded={abierto}
          aria-controls="menu-principal"
          onClick={() => setAbierto((a) => !a)}
        >
          <svg width="26" height="26" viewBox="0 0 26 26" aria-hidden="true" stroke="currentColor" strokeWidth="2" fill="none">
            {abierto ? <path d="M5 5l16 16M21 5L5 21" /> : <path d="M2 7h22M2 13h22M2 19h22" />}
          </svg>
          <b className="sr-only">{abierto ? "Cerrar menú" : "Abrir menú"}</b>
        </button>
        <nav id="menu-principal" className={`nav-panel${abierto ? " abierto" : ""}`} aria-label="Principal"
          onClick={(e) => (e.target as HTMLElement).closest("a") && setAbierto(false)}
        >
          <ul>
            {MENU.map((m) => (
              <li key={m.href}>
                <Link href={m.href} aria-current={ruta?.startsWith(m.href) ? "page" : undefined}>
                  {m.texto}
                </Link>
              </li>
            ))}
          </ul>
          <Link href="/guia/" className="btn btn-dark" aria-current={ruta?.startsWith("/guia") ? "page" : undefined}>
            La guía gratuita
          </Link>
        </nav>
      </div>
    </header>
  );
}
