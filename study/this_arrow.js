// 不像其他形式的函数，箭头函数并没有他们自己的执行上下文。
// 实际上，这就意味着代码中的this和arguments都是继承自他们的父函数。
const test = {
  name: 'test object',
  createAnonFunction: function() {
    return function() {
      console.log(this.name);
      console.log(arguments);
    };
  },
  createArrowFunction: function() {
    return () => {
      console.log(this.name);
      console.log(arguments);
    };
  }
};

// 有自己的上下文，并非指向test 其实this指向window
const anon = test.createAnonFunction('hello', 'world');

//返回匿名函数  箭头函数与创建它的函数有相同的上下文，让其可以访问参数arguments和对象。
const arrow = test.createArrowFunction('hello', 'world');

anon();
//undefined
//{}
// this->window
// arrow();