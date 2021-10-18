const withPWA = require("next-pwa");
const withPlugins = require("next-compose-plugins");

const nextConfig = {
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
    // disable: process.env.NODE_ENV === "development",
  },
  eslint: {
    ignoreDuringBuild: false,
  },
  // webpack5: false,
  webpack: (config, { isServer }) => {
    if (process.env.NODE_ENV === "production") {
      // config.optimization.minimizer = [];
    }
    if (!isServer) {
      config.resolve.alias["@sentry/node"] = "@sentry/browser";
    }
    return config;
  },
  async rewrites() {
    return [
      {
        source: "/sitemap.xml",
        destination: "http://localhost:9001/sitemap",
      },
    ];
  },
};

module.exports = withPlugins([withPWA], nextConfig);
