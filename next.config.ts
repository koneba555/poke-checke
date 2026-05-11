import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.pokemontcg.io" },
      { protocol: "https", hostname: "i.ebayimg.com" },
      { protocol: "https", hostname: "den-media.pokellector.com" },
      { protocol: "https", hostname: "archives.bulbagarden.net" },
      { protocol: "https", hostname: "www.serebii.net" },
    ],
  },
};

export default nextConfig;
