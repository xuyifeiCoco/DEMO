## Third CDN

```
URL: http://gitlab.meipian.cn:82/fore/third-party

```

## SRC目录

目录结构 | 备注

common | 服务逻辑业务的公用模块
common/service | 基于axios（配置文件中已全局引入axios）封装服务请求操作， 接口及路由服务
common/skin | 样式皮肤
common/cui | 非包含业务组件的基础组件（例如弹层）
common/util| 工具包
components | 业务组件可以基于lodash开发（配置文件已经全局引入lodash）
pages | 页面
index.js | 入口脚本

**配置文件：已全局引入Vue、axios、_ 根据具体业务进行相应的增加及删减**