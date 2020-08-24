/**
 * name chunk的名字
 * template 模板名字
 * entry 入口文件
 */
module.exports = [
    {
      name: 'index',
      template: 'index/index.html',
      entry: 'index/index.js'
    },
    {
      name: 'ejsPage',
      template: 'ejsPage/ejsPage.ejs',
      entry: 'ejsPage/ejsPage.js'
    },
    {
      name: 'pugPage',
      template: 'pugPage/pugPage.pug',
      entry: 'pugPage/pugPage.js'
    },
    {
      name: 'hbsPage',
      template: 'hbsPage/hbsPage.hbs',
      entry: 'hbsPage/hbsPage.js'
    },
    {
      name: 'vuePage',
      template: 'vuePage/vuePage.html',
      entry: 'vuePage/vuePage.js'
    },
    {
      name: 'reactPage',
      template: 'reactPage/reactPage.html',
      entry: 'reactPage/reactPage.js'
    },
    {
      name: 'about',
      template: 'about/about.html',
      entry: 'about/about.js'
    },
  ]