/**
 * creat by yangran
 *  3.24
 * 静态服务资源
 */

const path = require('path')
const fs = require('fs')
const mime = require('mime')

// express 框架 app.use(static('public'))绝对路径

//DRY 绝不出现重复代码
let getPath = url => {
    // console.log(process.cwd())
    return path.resolve(process.cwd(), 'public', `.${url}`)
}

let staticFunc = ctx => {
    let { url } = ctx.req
    let { resCtx } = ctx
    return new Promise((resolve, reject) => {
        if(url.match(/\./) && !url.match('.action')) {
            let _path = getPath(url)
            resCtx.headers = Object.assign(resCtx.headers, {
                'Content-Type': mime.lookup(_path)
            })
            let body = fs.readFile(_path, (err, data) => {
                if (err) {
                    resCtx.body = `NOT FOUND${err.stack}`
                }
                resCtx.body = data
                resolve()
            })
        } else {
            resolve()
        }
    })
}

module.exports = staticFunc