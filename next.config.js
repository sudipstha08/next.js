const withPWA = require("next-pwa");

module.exports = withPWA({
  async rewrites() {
    return [
      {
        source: "/sitemap.txt",
        destination: "http://localhost:9001/sitemap",
      },
    ];
  },
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === "development",
  },
});
