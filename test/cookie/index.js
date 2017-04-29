// /**
//  * cookie
//  */

// const http = require('http')
// const sessionCookie = require('./session-cookie') // 设置请求头cookie方法
// const permanentCookie = require('./permanent-cookie') // 控制cookie时间
// const httpCookie = require('./secure_httpOnly-cookie')
// http.createServer((req, res) => {
//   let cookieObj = httpCookie(req, res)
//   res.writeHead(200, 'ok')
//   res.end(JSON.stringify(cookieObj))
// }).listen(3000)