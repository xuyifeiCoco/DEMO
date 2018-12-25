const aaa = function(){
  return new Promise((resolve,reject) => {
    setTimeout(function(){
      console.log('执行完毕')
      try{
        throw new Error('执行错误')
      }catch{

      }
      resolve('打印了')
    },1000)
  })
}

aaa().then((res) => {
  console.log(res)
}).catch((err) => {
  console.log(err)
})