/**
 * 主要核心逻辑入口
 */
/**
 * 1、每一块中间件只需要关注修改context对象即可，彼此独立
 * 2、设计了use和composeMiddleware这两个api用来创建Promise链⛓
 * 3、开发者可以专注于中间件的开发
 */

const fs = require('fs')
const path = require('path')

class App {

    constructor() {
        this.middlewareArr = []
        // 设计一个空Promise
        this.middlewareChain = Promise.resolve()
    }
    use(middleware) {
        this.middlewareArr.push(middleware)
    }
    composeMiddleware(context) {
        let { middlewareArr } = this
        // 根据中间件数组，创建Promise链条⛓
        for (let middleware of middlewareArr) {
            this.middlewareChain = this.middlewareChain.then(() => {
                return middleware(context)
            })
        }
        return this.middlewareChain
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
            // 数据结构
            let context = {
                req: request,
                reqCtx: {
                    body: '', // post 请求数据
                    query: {}, // 处理客户端 get 请求
                },
                res: response,
                resCtx: {
                    statusMessage: 'resolve ok',
                    statusCode: 200, // 状态码
                    headers: {}, // reponese 返回的header
                    body: '' // 返回给前端的内容
                }
            }
            
            this.composeMiddleware(context).then(() => {
                let { body, headers, statusCode, statusMessage } = context.resCtx
                let base = {'X-powered-by': 'Node.js'}

                response.writeHead(statusCode, statusMessage, Object.assign(base, headers)) // writerHead 会覆盖 setHeader
                response.end(body)
            })
            // Promise.resolve(参数) ==> 通过context对象来传递
        }
    }
}

module.exports = App