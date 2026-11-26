import type { Metadata, Viewport } from "next";
import Cabecera from "@/components/Cabecera";
import Pie from "@/components/Pie";
import { SITIO } from "@/lib/sitio";
import { anton, fraunces, jost, sourceSerif } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITIO.url),
  title: { default: "Lina Henao · Escritora", template: "%s · Lina Henao" },
  description: SITIO.descripcion,
  openGraph: {
    type: "website",
    locale: "es_CO",
    siteName: "Lina Henao",
    images: [{ url: "/img/og-lina-henao.jpg", width: 1200, height: 630, alt: "Lina Henao, escritora" }],
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = { themeColor: "#FBF9F5" };

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={`${fraunces.variable} ${sourceSerif.variable} ${jost.variable} ${anton.variable}`}>
      <body>
        <Cabecera />
        <main id="contenido">{children}</main>
        <Pie />
      </body>
    </html>
  );
}
