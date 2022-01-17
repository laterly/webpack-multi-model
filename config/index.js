module.exports = {
  assetsRoot: "dist", //默认输出目录
  assetsSubDirectory: "static", //静态文件目录
  isHash: process.env === "development" ? false : true, //是否开启contenthash
  hashNumber: 10, //hash取多少位数
  isMinify: false, //是否压缩html
  server: {
    port: "5500", //服务器端口
    host: "127.0.0.1", //服务器域名
    hot: true, //是否开启HMR
  },
  assetsPublicPath: "/",
  build: {
    sourceMap: false,
  },
  dev: {
    sourceMap: false,
  },
};
