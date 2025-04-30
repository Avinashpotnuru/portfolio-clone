/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // for Netlify compatibility
  },
};

module.exports = nextConfig
