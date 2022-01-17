const webpackConfigBase = require("./webpack.config.base");
const { resolve } = require("path");
const { merge } = require("webpack-merge");
const config = require("./config");
const webapckConfigDev = {
  mode: "development",
  devtool: config.dev.sourceMap ? "eval-source-map" : false,
  devServer: {
    contentBase: resolve(__dirname, config.assetsRoot),
    compress: true,
    port: config.server.port,
    hot: config.server.hot,
    host: config.server.host,
  },
};

module.exports = merge(webpackConfigBase, webapckConfigDev);
