/**
 * view-server
 * @Author yangran
 */
const ejs = require('ejs')
const fs = require('fs')
const path = require('path')
const mime = require('mime')
const urlrewriteMap = require('./urlrewirte')

module.exports = ctx => {
  let { req, resCtx } = ctx
  let { url } = req
  return Promise.resolve({
    then: (resolve, reject) => {
      if(url.match('action') || url.match(/\./)){
        // 过滤api请求
        resolve()
      } else {
        // 路由逻辑
        const viewPath = path.resolve(__dirname, 'ejs') // 当前目录名下的ejs
        let ejsName = urlrewriteMap[url] // 拿到ejs
        if(ejsName) {
          // let htmlPath = path.resolve(viewPath, ejsName + '.ejs')
          // let html = fs.readFileSync(htmlPath, 'utf8')
          let layoutPath = path.resolve(viewPath, 'layout' + '.ejs')
          let layoutHtml = fs.readFileSync(layoutPath, 'utf8')

          // new Function()实现
          let render = ejs.compile(layoutHtml, {
            compileDebug: true,
            filename: layoutPath // <% include %>路径
          })

          let html = render({templateName: ejsName})

          resCtx.headers = Object.assign(resCtx.headers, {
            'Content-Type': 'text/html'
          })
          resCtx.body = html
          resolve()
        } else {
          // 404重定向功能
          resCtx.headers = Object.assign(resCtx.headers, {
            'Location': '/'
          })
          resCtx.statusCode = 302
          resCtx.statusMessage = 'redirect'
          resCtx.body = ''
          resolve()
        }        
      }
    }
  })
}