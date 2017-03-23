/**
 * creat by yangran
 *  3.24
 * 静态服务资源
 */

const path = require('path')
const fs = require('fs')

// express 框架 app.use(static('public'))绝对路径

//DRY 绝不出现重复代码
let getPath = url => {
 console.log(process.cwd())
 return path.resolve(process.cwd(), 'public', `.${url}`)
}

let staticFunc = url => {
 if (url == '/') { url = '/index.html' }
 // let map = {
 //  '/': '/index.html',
 //  '/about': '/about.html',
 //  '/list': '/list.html'
 // }
 // url = map[url] || url // 纯静态注释掉改成路由
 let _path = getPath(url)
 console.log(_path)
 let body = ''
 try {
  body = fs.readFileSync(_path)
 } catch(err) {
  body = 'NOT FOUND${err.stack}'
 }
 return body
 // fs.readFile(_path, (err, data) => {
 //  if (err) { data = `NOT FOUND${err.stack}` }
 //  // encoding binary => buffer
 //  // 继承了流stream
 //  // 为了兼容，这里不写转码参数
 //  response.end(data)
 //  // response.end(data, 'binary')
 // }) // 这里异步的不行，写成上面同步的
}

module.exports = staticFunc