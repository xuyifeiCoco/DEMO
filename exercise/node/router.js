
const express = require('express')
const Router = express.Router()

//==============处理路由=========
Router.get('/', (req, res) => {
  let a = 888
  return res.json({
    code: 0,
    data: {
      list:['测试一下'+a]
    }
  })
})

module.exports = Router