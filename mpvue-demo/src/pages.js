module.exports = [{
  path: 'pages/index', // 页面路径，同时是 vue 文件相对于 src 的路径，必填
  config: { // 页面配置，即 page.json 的内容，可选
    navigationBarTitleText: '这个是首页',
    enablePullDownRefresh: true
  }
},
{
  path: 'pages/counter', // 页面路径，同时是 vue 文件相对于 src 的路径，必填
  config: {
    navigationBarTitleText: 'vuex实例',
    enablePullDownRefresh: true
  }
},
{
  'path': 'packageA/logs',
  'subPackage': true,
  'config': {
    'navigationBarTitleText': '启动',
    'enablePullDownRefresh': true
  }
}
]
