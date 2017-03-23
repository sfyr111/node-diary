/**
 * 主要核心逻辑入口
 */

const fs = require('fs')
const path = require('path')
const staticServer = require('./static-server')

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
  return (request, response) => { // 高阶函数
   let { url } = request
   let body = staticServer(url) // 这里同步出来
   response.writeHead(200, 'resolve ok', {'X-powered-by': 'Node.js'}) // 自定义header
   response.end(body) // 必须同步不然response拿不到body
  }
 }
}


module.exports = App