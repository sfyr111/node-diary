// /**
//  * session cookie
//  * 在chrome里必须将浏览器完全关闭session, cookie才会生效
//  */
// module.exports = (resquest, response) => {
//   let sessionCookie = `userId=yangran;`
//   response.setHeader('Set-Cookie', sessionCookie) // create cookie
//   return resquest.headers
// }