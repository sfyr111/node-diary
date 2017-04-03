/**
 * api server
 */

module.exports = (ctx) => {
  let { url, method } = ctx.req
  let { resCtx, reqCtx } = ctx
  let { res } = ctx
  let apiMap = {
    '/list.action': ['shangpin1', 'shangping2', 'shangpin3'],
    '/user.action': ['hello', 'world', 'yangran']
  }
  method = method.toLowerCase()
  return Promise.resolve({
    then: (resolve, reject) => {
    if (url.match('action')) {
      if (method === 'get') {
          resCtx.body = JSON.stringify(apiMap[url])
        } else {
          let { body } = reqCtx
          // 处理post B/S模型 B => post ==socket== S  (post 通过流的形式拿到数据)
          resCtx.body = JSON.stringify(body)
        }
        resCtx.headers = Object.assign(resCtx.headers, {
          "Content-Type": "application/json"
        })
    }
      resolve()
    }
  })
}