/**
 * cookie
 * 处理cookie
 * 
 */
const cookie_parser = require('cookie')
const whiteNameList = ['/name_yangran']
module.exports = ctx => {
    let { url } = ctx.req
    let { cookie='' } = ctx.req.headers
    let { resCtx, res } = ctx
    let cookieObj = cookie_parser.parse(cookie) // 解析成key: value
    return Promise.resolve({
        then: (resolve, reject) => {
          let cookieStr =  time => `authd=hello;Max-Age=${time}`

          if(cookieObj['authd']) {
            resCtx.hasUser = true
            res.setHeader('Set-Cookie', cookieStr(3600))
          }
          // 设置白名单
          const whiteNameList = ['/name_yangran']
          if(whiteNameList.indexOf(url) > -1){
            res.setHeader('Set-Cookie', cookieStr(3600))
          }
          if(url == '/logout') {
            res.setHeader('Set-Cookie', cookieStr(0))
          }
          // 实现逻辑
          resolve()
        }
    })
}