const ejs = require('ejs')
const path = require('path')

const html = `hello
          <% if(world.match('jjj')){ %>
          <%- world %>
          <% } %> 
          <%- include('test') %>
          <%= hhh %>`

const f1 = ejs.compile(html, {
  filename: path.resolve(__filename), // 给include函数设置路径基准
  compileDebug: true // 可以debug
}) // 编译html
// console.log(f1)

const world = 'xxx'
const hhh = '<script>alert(1)</script>'
const finalStr = f1({
  world,
  hhh
}) // 给编译传入变量

console.log(finalStr)