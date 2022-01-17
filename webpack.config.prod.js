const webpackConfigBase = require("./webpack.config.base");
const { merge } = require("webpack-merge");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const config = require("./config");
const webapckConfigDev = {
  mode: "production",
  devtool: config.build.sourceMap ? "source-map" : false,
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
  plugins: [new CleanWebpackPlugin()],
};
module.exports = merge(webpackConfigBase, webapckConfigDev);
