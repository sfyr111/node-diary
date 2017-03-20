/**
 * 主要核心逻辑入口
 */

const fs = require('fs')

class App {
 
 constructor() {
  
 }
 initServer() {
  /**
   * 初始化工作 
   * 想做一些缓存什么的 
   * 这里执行的是正常目录
   * 中间件
   */
  let _package = require('../package') 

  return (request, response) => { // 高阶函数
   fs.readFile('./public/index.html', 'utf8', (error, data) => {
    response.end(data)
    // response.end(JSON.stringify(_package))
    // fs.readFile执行的目录是process.cwd() // 这里的./publics是根据nodejs的启动目录
   })
  }
 }
}

/** @ ES5方法
 * var App = function() {
 * }
 * App.prototype.initServer = function(request, response) {
 *  response.end('end')
 * }
 * 
 */

module.exports = App