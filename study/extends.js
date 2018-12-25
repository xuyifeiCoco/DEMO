/**
 * 对象冒充
 *  */
let Parent = function(name){
  this.name = name
  this.sayHi = function(){
    console.log("hi" + this.name)
  }
}

let Children = function(name){

  // this.methods = Parent
  // this.methods(name)
  // delete this.methods

  Parent.call(this,name)
  this.getName = function(){
    console.log(this.name)
  }
}

var p = new Parent('徐一飞')
// 当children实例化的时候，Parent的构造函数会在children里面执行一次
var c = new Children('咳咳')
p.sayHi()
c.sayHi()
c.getName()


//不过如果使用原型链继承，就无法使用带参数的构造函数了。


// 在 JavaScript 中创建类的最好方式是用构造函数定义属性，用原型定义方法
var Par = function(name){
  this.name= name
}
Par.prototype.sayHi = function(){
  console.log(this.name)
}
var Chi = function(name,age){
  Par.call(this,name)
}

Chi.prototype= new Par()
//
// Chi.prototype = Object.create(Par.prototype)  //  和上面那一句等价
// Chi.prototype.constructor= Chi;

//使用 Object.create 方法