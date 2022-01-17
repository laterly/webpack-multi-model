|-- webpack-multi-model
    |-- .gitignore
    |-- index.html
    |-- package.json // 依赖
    |-- page.config.js // 页面的配置文件
    |-- README.md // README.md
    |-- webpack.config.base.js // webpack配置文件
    |-- webpack.config.dev.js // 开发环境的webpack配置文件
    |-- webpack.config.prod.js // 生成环境的webpack配置文件
    |-- yarn.lock
    |-- config
    |   |-- index.js
    |   |-- utils.js
    |-- src
        |-- images // images图片
        |   |-- 1.jpg
        |   |-- logo.svg
        |   |-- vue.png
        |-- pages
        |   |-- about  // js page
        |   |   |-- about.html
        |   |   |-- about.js
        |   |   |-- about.scss
        |   |-- ejsPage  // ejs page
        |   |   |-- ejsPage.ejs
        |   |   |-- ejsPage.js
        |   |   |-- ejsPage.scss
        |   |   |-- components
        |   |       |-- nav.ejs
        |   |-- hbsPage // handlebars page
        |   |   |-- hbsPage.hbs
        |   |   |-- hbsPage.js
        |   |   |-- hbsPage.scss
        |   |   |-- components
        |   |       |-- foot.hbs
        |   |       |-- head.hbs
        |   |-- index  // jquery page
        |   |   |-- index.html
        |   |   |-- index.js
        |   |   |-- index.scss
        |   |-- pugPage // pug page
        |   |   |-- pugPage.js
        |   |   |-- pugPage.pug
        |   |   |-- pugPage.scss
        |   |   |-- components
        |   |       |-- header.pug
        |   |-- reactPage // react page
        |   |   |-- App.jsx
        |   |   |-- App.scss
        |   |   |-- reactPage.html
        |   |   |-- reactPage.js
        |   |   |-- reactPage.scss
        |   |-- vuePage  // vue page
        |       |-- App.vue
        |       |-- vuePage.html
        |       |-- vuePage.js
        |       |-- vuePage.scss
        |       |-- components
        |           |-- HelloWorld.vue
        |-- style  // style样式
        |   |-- base.scss
        |   |-- theme.scss
        |-- utils // 工具文件夹
            |-- utils.js
