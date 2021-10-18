const withPWA = require("next-pwa");
const withImages = require("next-images");
const withCSS = require("@zeit/next-css");
const withSass = require("@zeit/next-sass");
const withPlugins = require("next-compose-plugins");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const nextSourceMaps = require("@zeit/next-source-maps");
const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");

const nextConfig = {
  distDir: "../../build",
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === "development",
  },
  webpack: (config, { isServer }) => {
    if (process.env.NODE_ENV === "production") {
      config.devtool = "source-map";
      config.optimization.minimize = true;
      config.optimization.minimizer = [];
      config.optimization.minimizer.push(new OptimizeCSSAssetsPlugin({}));
      config.optimization.minimizer.push(new TerserPlugin({ parallel: true }));
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

module.exports = withPlugins(
  [withCSS, withImages, withSass, nextSourceMaps, withPWA],
  nextConfig,
);
