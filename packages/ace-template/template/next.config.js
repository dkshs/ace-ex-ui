/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  /**
   * Environment variables can be used to inject dynamic configuration
   * into the Next.js app at built time. Learn more at
   * https://nextjs.org/docs/api-reference/next.config.js/environment-variables
   */
  env: {
    SITE_NAME: "AceEx",
    SITE_LOCALE: "pt-br",
    SITE_BASEURL: "https://example.aceex.com",
  },
};

module.exports = nextConfig;
