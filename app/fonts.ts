import localFont from "next/font/local";

export const fraunces = localFont({
  src: [
    { path: "./fonts/fraunces-latin-full-normal.woff2", weight: "100 900", style: "normal" },
    { path: "./fonts/fraunces-latin-full-italic.woff2", weight: "100 900", style: "italic" },
  ],
  variable: "--f-titulo",
  display: "swap",
});

export const sourceSerif = localFont({
  src: [
    { path: "./fonts/source-serif-4-latin-opsz-normal.woff2", weight: "200 900", style: "normal" },
    { path: "./fonts/source-serif-4-latin-opsz-italic.woff2", weight: "200 900", style: "italic" },
  ],
  variable: "--f-texto",
  display: "swap",
});

export const jost = localFont({
  src: [{ path: "./fonts/jost-latin-wght-normal.woff2", weight: "100 900", style: "normal" }],
  variable: "--f-ui",
  display: "swap",
});

export const anton = localFont({
  src: [{ path: "./fonts/anton-latin-400-normal.woff2", weight: "400", style: "normal" }],
  variable: "--f-anton",
  display: "swap",
  preload: false,
});
