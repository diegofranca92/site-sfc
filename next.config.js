/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "heroui.com", // Dominio de links diretos
        pathname: "/**",
      },
    ],
    dangerouslyAllowSVG: true, // Permite SVG se necessário
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

module.exports = nextConfig;
