//注册所有的全局组件
import Vue from 'vue'



function capitalizeFirstLetter(string) {

  return string.charAt(0).toUpperCase() + string.slice(1)

}



/**

* @param directory 要搜索的文件夹目录不能是变量，否则在编译阶段无法定位目录

* @param useSubdirectories 是否搜索子目录

* @param regExp 匹配文件的正则表达式

* @return function 返回一个具有 resolve, keys, id 三个属性的方法

          resolve() 它返回请求被解析后得到的模块 id

          keys() 它返回一个数组，由所有符合上下文模块处理的请求组成。

          id 是上下文模块里面所包含的模块 id. 它可能在你使用 module.hot.accept 的时候被用到

*/

const requireComponent = require.context(
  './common', false, /\.vue$/
)

requireComponent.keys().forEach(fileName => {
  const componentConfig = requireComponent(fileName)

  const componentName = capitalizeFirstLetter(

    fileName.replace(/^\.\//, '').replace(/\.\w+$/, '')

    //因为得到的filename格式是: './baseButton.vue', 所以这里我们去掉头和尾，只保留真正的文件名

  )

  Vue.component(componentName, componentConfig.default || componentConfig)

})
