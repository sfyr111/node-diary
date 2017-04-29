// /**
//  * 设置cookie生效时间
//  * MaxAge优先于Expires
//  */

// module.exports = (request, response) => {
//   let Expires = `Expires=${(new Date(12121414124124)).toUTCString()}` // 过期时间
//   let MaxAge = `Max-Age=2` // 优先
//   let sessionCookie = `userId=yangran;${MaxAge}`
//   response.setHeader('Set-Cookie', sessionCookie)
//   return request.headers
// }