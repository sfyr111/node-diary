/**
 * url-parse
 * 处理客户端数据
 * url: query / body / method
 */

module.exports = ctx => {
    // readable stream eventEmitter 原型链
    let { method, url, context } = ctx.req
    let { reqCtx } = ctx
    method = method.toLowerCase()
    return Promise.resolve({
        then: (resolve, reject) => {
            if(method === 'post') {
                // let data = ''
                let data = []
                // paused flow / on('data')时 paused 转化为 flow
                // on('end') 内存清空
                // setTimeout(() => { // 演示流数据
                ctx.req.on('data', (chunk) => { // data事件参数chunk
                    // data += chunk
                    data.push(chunk)
                }).on('end', () => {
                    // reqCtx.body = JSON.parse(data)
                    reqCtx.body = JSON.parse(Buffer.concat(data).toString())
                    resolve()
                })
                // }, 1000)
            } else {
                resolve()
            }
        }
    })
}