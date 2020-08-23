
const pageConfig = require('../page.config.js');

const config = require('../config');

const { resolve,extname } = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const HtmlWebpackPlugin = require('html-webpack-plugin');


const env = process.env.NODE_ENV;

//公共css loader
const commonCssLoader = [
    env == 'development' ? 'style-loader' : MiniCssExtractPlugin.loader,
    'css-loader',
    {
        loader: 'postcss-loader',
        options: {
            ident: 'postcss',
            plugins: () => [
                require('postcss-preset-env')()
            ]
        }
    }
]

//多入口文件配置
const mulitHtmlWebpackPlugins = () => {
    let mulitWebpackConfig = {
        entry: {},
        plugins: []
    };
    if (pageConfig && Array.isArray(pageConfig)) {
        pageConfig.map(page => {
            mulitWebpackConfig.entry[page.name] = env == 'development' ? [`./src/pages/${page.entry}`, `./src/pages/${page.template}`] : `./src/pages/${page.entry}`;
            
            let template = resolve(__dirname, `../src/pages/${page.template}`);
            
            mulitWebpackConfig.plugins.push(new HtmlWebpackPlugin({
                filename: `${page.name}.html`,
                template,
                inject: true,
                chunks: ["vendors","common","runtime",page.name],
                chunksSortMode: "manual"
            }))
        })
    }
    return mulitWebpackConfig
}

module.exports = {
    commonCssLoader,
    mulitHtmlWebpackPlugins
}