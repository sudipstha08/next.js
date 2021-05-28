const path = require("path");
const withImages = require("next-images");
const withCSS = require("@zeit/next-css");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const withPlugins = require("next-compose-plugins");
const withSass = require("@zeit/next-sass");

const config = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  webpack: (config) => {
    config.optimization.minimizer = [];
    config.optimization.minimizer.push(new OptimizeCSSAssetsPlugin({}));
    return config;
  },
};

module.exports = withPlugins(
  [
    withCSS,
    withImages,
    withSass,
    [
      {
        async headers() {
          return [
            {
              source: "/",
              headers: [
                {
                  key: "x-custom-header",
                  value: "my custom header value",
                },
                {
                  key: "Cache-Control",
                  value:
                    "public, max-age=180, s-maxage=180, stale-while-revalidate=180",
                },
              ],
            },
            {
              source: "/(.*).jpeg",
              headers: [
                {
                  key: "x-custom-header-image",
                  value: "my custom header value image",
                },
              ],
            },
          ];
        },
      },
    ],
  ],
  config,
);
