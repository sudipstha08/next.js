/* eslint-disable @typescript-eslint/no-unused-vars */
const withCSS = require("@zeit/next-css");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const path = require("path");

module.exports = {
  myCss: withCSS({
    webpack(config, _) {
      config.optimization.minimizer = [];
      config.optimization.minimizer.push(new OptimizeCSSAssetsPlugin({}));
      return config;
    },
  }),
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};
