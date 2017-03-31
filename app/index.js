/**
 * 主要核心逻辑入口
 */

const fs = require('fs')
const path = require('path')
const staticServer = require('./static-server')
const apiServer = require('./api')
const urlParser = require('./url-parser')

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
        return (request, response) => { 
            let { url, method } = request
            request.context = {
                body: '',
                query: {},
                method: 'get'
            }
            urlParser(request).then(() => {
                return apiServer(request)
            }).then(val => {  
                if(!val) { // 如果没有值就是静态资源 始终是有值
                    return staticServer(request)
                } else {
                    return val // 返回api数据
                }
            }).then(val => {
                // 数组
                let base = {'X-powered-by': 'Node.js'}
                let body = ''
                if(val instanceof Buffer) { // Buffer.isBuffer(buf), isArray()
                    body = val
                } else {
                    body = JSON.stringify(val)
                    let fianlHeader = Object.assign(base, {
                        'Content-Type': 'application/json'
                    })
                    response.writeHead(200, 'resolve ok', fianlHeader)
                }
                response.end(body)
            })
        }
    }
}


module.exports = App