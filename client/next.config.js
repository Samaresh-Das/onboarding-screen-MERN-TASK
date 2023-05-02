/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["localhost", "onboarding-task.onrender.com"],
  },
};

module.exports = nextConfig;
