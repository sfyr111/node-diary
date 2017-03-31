/**
 * api server
 */

module.exports = (request) => {
  let { url, method, context } = request
  let apiMap = {
    '/list.action': ['shangpin1', 'shangping2', 'shangpin3'],
    '/user.action': ['hello', 'world', 'yangran']
  }
  method = method.toLowerCase()
  if (method === 'get') {
    return Promise.resolve(apiMap[url])
  } else {
    let { body } = context
    // 处理post B/S模型 B => post ==socket== S  (post 通过流的形式拿到数据)
    return Promise.resolve(body)
  }
}