/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["www.datocms-assets.com"],
    minimumCacheTTL: 60,
  },
  experimental: {
    serverComponentsExternalPackages: ["@prisma/client", "bcrypt"],
  },
};

export default nextConfig;
