module.exports = {
    assetsRoot: 'dist',//默认输出目录
    assetsSubDirectory: 'static',//静态文件目录
    isHash: true,//是否开启contenthash
    hasNumber:10,//hash取多少位数
    isMinify:false,//是否压缩html
    server: {
        port: '5500',//服务器端口
        host: '127.0.0.1',//服务器域名
        hot: true,//是否开启HMR
    },
    build: {
        assetsPublicPath: '/',
        sourceMap: false,
    },
    dev: {
        assetsPublicPath: '/',
        sourceMap: false,
    }
}