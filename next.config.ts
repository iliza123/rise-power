import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  compress: true,
  images: {
    // Serve original PNG/JPG from /public (no AVIF/WebP re-encode).
    // Right-click / save-as keeps full source quality and dimensions.
    unoptimized: true,
    qualities: [60, 75, 80, 85, 90, 95, 100],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2560, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },
  experimental: {
    optimizePackageImports: ["lucide-react", "three"],
  },
  async redirects() {
    return [
      // Live-site resource paths
      {
        source: "/resources/datasheets",
        destination: "/datasheets",
        permanent: false,
      },
      {
        source: "/insights/articles",
        destination: "/insights",
        permanent: false,
      },
      // Investor PDF aliases (live root paths → local media)
      {
        source: "/rise-power-deck.pdf",
        destination: "/media/investors/rise-power-deck.pdf",
        permanent: false,
      },
      {
        source: "/rise-power-one-pager.pdf",
        destination: "/media/brochures/rise-mission-power-brochure.pdf",
        permanent: false,
      },
      {
        source: "/careers",
        destination: "/contact",
        permanent: false,
      },
      // {
      //   source: "/capabilities/system-integration",
      //   destination: "/capabilities",
      //   permanent: true,
      // },
      // Legacy About Us paths → About
      {
        source: "/about-us",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/aboutus",
        destination: "/about",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/media/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
