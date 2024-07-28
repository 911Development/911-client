import i18n from "./next-i18next.config.js";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["img.icons8.com"],
  },
  i18n: i18n.i18n,
};

export default nextConfig;
