## webpack5.0 Multi page

### webpack5.0多页配置，比较适合开发多页PC官网或者其他适合的多页面网站，其中配置了支持各种流行的模板语法(ejs,pug等)，还支持vue,react技术等

### 目前支持的语法
- [1.ejs模板引擎!](https://ejs.bootcss.com/)
- [2.pug模板引擎!](https://github.com/pugjs/pug/)
- [3.handlebars模板引擎!](https://github.com/handlebars-lang/handlebars.js)
- [4.vue.js!](https://cn.vuejs.org/)
- [5.react.js!](https://reactjs.org/)
### Build Setup

``` bash
# 安装依赖
npm install

# 开发的时候在本地启127.0.0.1:5500/，并开始热加载
npm run dev

# production的发布时打包
npm run build

```

### 本地访问页面示例:
``` bash
# ejs模板
http://127.0.0.1:5500/ejsPage.html

# pug模板
http://127.0.0.1:5500/pugPage.html

# handlebars模板
http://127.0.0.1:5500/hbsPage.html

# vue.js
http://127.0.0.1:5500/vuePage.html

# react.js
http://127.0.0.1:5500/reactPage.html

```


### 目录结构

```
|-- webpack-multi-model
    |-- .gitignore
    |-- index.html
    |-- package.json                       // 依赖
    |-- page.config.js                     // 页面的配置文件
    |-- README.md // README.md
    |-- webpack.config.base.js             // webpack配置文件
    |-- webpack.config.dev.js              // 开发环境的webpack配置文件
    |-- webpack.config.prod.js             // 生成环境的webpack配置文件
    |-- yarn.lock
    |-- config
    |   |-- index.js
    |   |-- utils.js
    |-- src
        |-- images                         // images图片
        |   |-- 1.jpg
        |   |-- logo.svg
        |   |-- vue.png
        |-- pages
        |   |-- about                      // js page
        |   |   |-- about.html
        |   |   |-- about.js
        |   |   |-- about.scss
        |   |-- ejsPage                    // ejs page
        |   |   |-- ejsPage.ejs
        |   |   |-- ejsPage.js
        |   |   |-- ejsPage.scss
        |   |   |-- components
        |   |       |-- nav.ejs
        |   |-- hbsPage                    // handlebars page
        |   |   |-- hbsPage.hbs
        |   |   |-- hbsPage.js
        |   |   |-- hbsPage.scss
        |   |   |-- components
        |   |       |-- foot.hbs
        |   |       |-- head.hbs
        |   |-- index                      // jquery page
        |   |   |-- index.html
        |   |   |-- index.js
        |   |   |-- index.scss
        |   |-- pugPage // pug page
        |   |   |-- pugPage.js
        |   |   |-- pugPage.pug
        |   |   |-- pugPage.scss
        |   |   |-- components
        |   |       |-- header.pug
        |   |-- reactPage                 // react page
        |   |   |-- App.jsx
        |   |   |-- App.scss
        |   |   |-- reactPage.html
        |   |   |-- reactPage.js
        |   |   |-- reactPage.scss
        |   |-- vuePage                   // vue page
        |       |-- App.vue
        |       |-- vuePage.html
        |       |-- vuePage.js
        |       |-- vuePage.scss
        |       |-- components
        |           |-- HelloWorld.vue
        |-- style                         // style样式
        |   |-- base.scss
        |   |-- theme.scss
        |-- utils                         // 工具文件夹
            |-- utils.js

         

```

### 开发流程

如果增加新页面，只需两步，不需要改webpack等配置文件

1. 在pages中新增一个文件夹
2. 在page.config.js中添加这个页面的信息即可

比如
```
  {
    name: 'about',
    template: 'about/about.html',
    entry: 'about/about.js'
  }

```

