module.exports = {
  async rewrites() {
    return [
      {
        source: "/sitemap.txt",
        destination: "http://localhost:9001/sitemap",
      },
    ];
  },
};
