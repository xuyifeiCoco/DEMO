
/**
 * 激活调试  node --inspect app.js
 *  */ 
const express = require('express')
const path=require('path')
const fs=require('fs')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const app = express()
const server=require('http').Server(app)

//设置跨域访问
// app.all('*', function(req, res, next) {
// 	res.header("Access-Control-Allow-Origin", "*");
// 	res.header("Access-Control-Allow-Headers", "Content-Type,XFILENAME,XFILECATEGORY,XFILESIZE");
// 	res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
// 	res.header("X-Powered-By",' 3.2.1')
// 	res.header("Content-Type", "application/json;charset=utf-8");
// 	next();
// });

const userRouter = require('./router')  //引入user页面的路由
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));  //  这里真的是个坑，express 4.0以上的版本必须这样写
app.use('/user',userRouter)
app.get('/',function(req, res){
  let a= 0;
  let b = () => {
    while(a<10*1){
      a+=1
    }
  }
  b()
  res.send('hello world'+a)
})
server.listen(3000,function(){
	console.log('Node app start at port 8081')
})