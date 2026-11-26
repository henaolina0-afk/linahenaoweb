import type { NextConfig } from "next";

// Sitio estático: `next build` genera `out/`, que publica el Worker de Cloudflare
// (ver wrangler.jsonc). El formulario lo atiende worker/index.ts en /api/*.
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true }, // las imágenes ya van optimizadas en WebP en public/img
};

export default nextConfig;
