const assert = require('assert')

/** Buffer.from()
 * 
 * 1、Buffer.from(String, encoding) => Buffer.from('hello world', 'utf8')
 * 2、Buffer.from([buffer]) => Buffer.from([0x68, 0x65, 0x6c, 0x6c, 0x6f, 0x20, 0x77, 0x6f, 0x72, 0x6c, 0x64])
 */
// let b1 = Buffer.from('hello world', 'utf8')
// let b2 = Buffer.from([0x68, 0x65, 0x6c, 0x6c, 0x6f, 0x20, 0x77, 0x6f, 0x72, 0x6c, 0x64])
// console.log(b1)
// console.log(b2.toString())

/** Buffer.concat()
 * 
 * Buffer.concat([buffer...], length)
 */
// let str = '门' // <Buffer e9 97 a8>
// let b3 = Buffer.from([0xe9])
// let b4 = Buffer.from([0x97])
// let b5 = Buffer.from([0xa8])
// let b6 = Buffer.concat([b3, b4, b5], 3)
// console.log(b6.toString('utf8')) // 门

/** Buffer 应用场景
 * 
 * 字符串丢失
 */
const fs = require('fs')
let data = fs.createReadStream('./test/tmp', {
    highWaterMark: 1 // 每次只读一位
})
// let out = ''
let out = []
data.on('data', chunk => {
    // console.log(chunk) // 每次只有一位，而汉子要三位
    out.push(chunk)
    // out += chunk // out.toString() += chunk.toString() 默认执行
}).on('end', () => {
    console.log(Buffer.concat(out))
    console.log(Buffer.concat(out).toString())
    // console.log(out)
})