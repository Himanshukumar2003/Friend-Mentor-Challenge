/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "fm-space-tourism.davequah.com",
      },
    ],
  },
};

export default nextConfig;
