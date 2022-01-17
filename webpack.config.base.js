const { resolve } = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const config = require("./config");
const utils = require("./config/utils");
const commonCssLoader = utils.commonCssLoader;
const mulitHtmlWebpackPlugins = utils.mulitHtmlWebpackPlugins();
module.exports = {
  entry: mulitHtmlWebpackPlugins.entry,
  output: {
    path: resolve(__dirname, config.assetsRoot),
    filename: config.isHash
      ? `${config.assetsSubDirectory}/js/[name].[contenthash:${config.hashNumber}].js`
      : `${config.assetsSubDirectory}/js/[name].js`,
    publicPath: config.assetsPublicPath,
  },
  resolve: {
    alias: {
      vue$: "vue/dist/vue.esm.js",
      "@": resolve(__dirname, "src"),
      pages: resolve(__dirname, "src/pages"),
      images: resolve(__dirname, "src/images"),
      style: resolve(__dirname, "src/style"),
      utils: resolve(__dirname, "src/utils"),
      components: resolve(__dirname, "src/components"),
    },
    extensions: [
      ".js",
      ".json",
      ".vue",
      ".scss",
      ".css",
      "ejs",
      "jsx",
      "hbs",
      "pug",
    ],
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        include: resolve(__dirname, "src"),
        use: "vue-loader",
      },
      {
        oneOf: [
          {
            test: /\.css$/,
            exclude: /node_modules/,
            include: resolve(__dirname, "src"),
            use: [...commonCssLoader],
          },
          {
            test: /\.(scss|sass)$/,
            exclude: /node_modules/,
            include: resolve(__dirname, "src"),
            use: [...commonCssLoader, "sass-loader"],
          },
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            include: resolve(__dirname, "src"),
            use: [
              {
                loader: "babel-loader",
                options: {
                  cacheDirectory: true,
                  presets: ["@babel/preset-env", "@babel/preset-react"],
                  plugins: ["@babel/plugin-transform-runtime"],
                },
              },
              {
                loader: "eslint-loader",
                options: {
                  //eslint自动修复格式错误
                  fix: true,
                },
              },
            ],
          },
          {
            test: /\.ejs$/,
            loader: "ejs-loader",
            exclude: /node_modules/,
            include: resolve(__dirname, "src"),
            options: {
              variable: "data",
            },
          },
          {
            test: /\.pug$/,
            exclude: /node_modules/,
            include: resolve(__dirname, "src"),
            use: ["html-loader", "pug-html-loader"],
          },
          {
            test: /\.hbs$/,
            loader: "handlebars-loader",
            exclude: /node_modules/,
            include: resolve(__dirname, "src"),
          },
          {
            test: /\.html$/,
            loader: "html-loader",
            exclude: /node_modules/,
            include: resolve(__dirname, "src"),
            options: {
              minimize: false,
            },
          },
          {
            test: /\.(png|jpg|jpeg|gif|svg)$/,
            loader: "url-loader",
            exclude: /node_modules/,
            include: resolve(__dirname, "src"),
            options: {
              limit: 8 * 1024,
              name: config.isHash
                ? `[name].[contenthash:${config.hashNumber}].[ext]`
                : "[name].[ext]",
              outputPath: `${config.assetsSubDirectory}/images`,
              esModule: false,
            },
          },
          {
            test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)$/,
            loader: "url-loader",
            exclude: /node_modules/,
            include: resolve(__dirname, "src"),
            options: {
              limit: 8 * 1024,
              name: config.isHash
                ? `[name].[contenthash:${config.hashNumber}].[ext]`
                : "[name].[ext]",
              outputPath: `${config.assetsSubDirectory}/media`,
              esModule: false,
            },
          },
          {
            test: /\.(woff2?|eot|ttf|otf)$/,
            loader: "url-loader",
            exclude: /node_modules/,
            include: resolve(__dirname, "src"),
            options: {
              limit: 8 * 1024,
              name: config.isHash
                ? `[name].[contenthash:${config.hashNumber}].[ext]`
                : "[name].[ext]",
              outputPath: `${config.assetsSubDirectory}/fonts`,
              esModule: false,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: config.isHash
        ? `${config.assetsSubDirectory}/css/[name].[contenthash:${config.hashNumber}].css`
        : `${config.assetsSubDirectory}/css/[name].css`,
    }),
    ...mulitHtmlWebpackPlugins.plugins,
  ],
};
