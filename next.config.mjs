/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["img.icons8.com"],
  },
  i18n: {
    defaultLocale: "en",
    locales: ["en", "tr"],
  },
};

export default nextConfig;
