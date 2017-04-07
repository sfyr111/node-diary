/**
 * creat by yangran
 * 3.19
 */


const http = require('http')
const PORT = 7000
const App = require('./app') // 导入的是一个函数 require('./app/index.js')
const server = new App()

// 中间件
const staticServer = require('./app/static-server')
const apiServer = require('./app/api')
const urlParser = require('./app/url-parser')
const viewServer = require('./app/view-server')
server.use(urlParser)
server.use(apiServer)
server.use(staticServer)
server.use(viewServer)

// 启动app
http.createServer(server.initServer()).listen(PORT, () => {
 console.log(`server listening on port ${PORT}`)
})

/**
 * lsof -i :7000 查看7000端口 listen open fire
 * 
 * curl -i localhost:7000 命令行打开url
 * 
 * @debug方法
 * node --inspect index.js 
 * 1.chrome://flags
 * 2.启用devtools
 * 3.打开开发者工具 => Settings => Experiments => 按下6下shift => 选中 Node debugging
 * 
 * process.cwd() => current working directory
 * fs.readFile在 核心逻辑app/index.js里
 * ./publics是根据nodejs的启动目录process.cwd()
 */
 