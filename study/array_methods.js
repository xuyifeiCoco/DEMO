/**
 * `forEac`h需要传递两个参数，第一个参数是回调函数，是必选参数，第二个参数是一个对象，用来改变 callback 中的 this 指向，是可选参数
 *  */ 
var array = ['a', 'b']
var obj= {
  print:function(a, b){
    console.log(a,b)
  }
} 

// array.forEach(function(v,i,a){
//   this.print(v,i)
// },obj)

/**
 * `find`和`filter`都是查找元素，但是find是返回的单个元素，filter是返回符合条件的数组，他们都可以传递第二个参数  用于改变this指向
 *` map` 是操作数组之后返回新的数组
 *  */


/**
 * `reduce` 在这里有`减少`的意思，其作用是对数组进行归并操作，换句话说就是对数组每一个元素进行累加，最终返回所有元素之和。 回调函数 callback 接收4个参数
 * previousValue - 存放的是上一次callback返回的结果，其初始值默认为数组的第一个元素。
  currentValue - 是当前元素 。默认从数组的第二个元素开始。
  currentIndex - 是当前元素位置 。
  array - 是当前数组。
 */  
 var a =[1,2,3,4]
//  let newArr = a.reduce(function(previousValue, currentValue, currentIndex, array){
//   console.log(previousValue, currentValue, currentIndex, array)
//   return previousValue+currentValue
//  },100)
//  console.log(newArr)


/**
 * `some` 是`某些、一些`的意思，其作用是对数组中的每一项执行回调函数，如果该函数对任一项返回 true，则停止遍历，并返回 true 
 * `every` 是`每一个`的意思，其作用是对数组中的每一项执行回调函数，如果该函数对每一项都返回 true，则返回 true 
 * `indexOf()` 用于查询数组元素对应的索引位置，可以传递两个参数，第一个参数是要匹配的元素，必须`是简单数据类型`。第二个参数是指定查询的起始位置
 * 如果只想知道数组中是否存在某个元素，而不关心元素的位置，也可以使用 ES6 提供的 `includes() ` 和indexof的传参一样
 * `findIndex()` 也是用于查询数组元素的位置，和 indexOf() 不同的是，它可以检索对象数组的元素位置，但需要通过回调函数来指定匹配的元素
 */