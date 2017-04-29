// /**
//  * 学习httpOnly / secure cookie
//  */

// module.exports = (request, response) => {
//   let MaxAge = `Max-Age=5` // 优先max-age
//   let httpOnly = `HttpOnly`
//   let secure = `Secure`
//   let sessionCookie = [
//     // `userId=yangran`,
//     // MaxAge,
//     // httpOnly, // 禁止JS document.cookie取得cookie, @常用
//     // secure // 非https、SSL协议下使用会导致cookie不再生效, bug @慎用
//   ].join(';')
//   response.setHeader('Set-Cookie', sessionCookie)
//   return request.headers
// }