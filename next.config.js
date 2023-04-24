/** @type {import('next').NextConfig} */
const { withAxiom } = require("next-axiom");
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
  },
};

module.exports = withAxiom(nextConfig);
