import "./app/env.mjs";

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    typedRoutes: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
        pathname: "/images/akedaqmq/production/**",
      },
    ],
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
