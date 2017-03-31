/**
 * url-parse
 * 处理客户端数据
 * url: query / body / method
 */

module.exports = request => {
    // readable stream eventEmitter 原型链
    let { method, url, context } = request
    method = method.toLowerCase()
    return Promise.resolve({
        then: (resolve, reject) => {
            context.method = method
            context.query = {}
            if(method === 'post') {
                let data = ''
                // paused flow / on('data')时 paused 转化为 flow
                // on('end') 内存清空
                // setTimeout(() => { // 演示流数据
                request.on('data', (chunk) => { // data事件参数chunk
                    data += chunk
                }).on('end', () => {
                    context.body = JSON.parse(data)
                    resolve()
                })
                // }, 1000)
            } else {
                resolve()
            }
        }
    })
}