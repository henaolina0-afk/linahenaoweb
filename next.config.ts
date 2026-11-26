import type { NextConfig } from "next";

// Sitio estático: `next build` genera `out/`, que publica el Worker de Cloudflare
// (ver wrangler.jsonc). El formulario lo atiende worker/index.ts en /api/*.
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  // Las imágenes locales ya van en WebP en public/img; las de Sanity las optimiza su CDN
  images: { unoptimized: true, remotePatterns: [{ protocol: "https", hostname: "cdn.sanity.io" }] },
};

export default nextConfig;
