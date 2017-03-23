
/**
 * @npm笔记
 * npm init
 * 
 * @verbose 看安装信息
 * npm install -D / -S --verbose 
 * npm ls
 * 
 * @npm start 不用加run
 * npm script - npm run xxx
 * 
 * @去除多余的包
 * rm -rf node_modules
 * npm prune
 */


/**
 * @require补齐后缀
 * 优先级 .js > .json > .node
 * 
 * @node查找路径 module.paths
 * module.paths 是 require时的查找路径 至到根目录
 * 
 * @require('./test') 与 require('test') 与 require('fs') 的区别
 * test不是核心包，fs是核心包，fs可以直接查找
 * test不是核心包，所以在node_module下查找，按查找路径在node_module下是找不到的
 * 
 * @require文件夹
 * require('axios')
 * 根据package.json 里的 main.js确定的入口文件(index.js)来去 axios 文件夹下引用
 * 
 */


/**
 * @模块笔记
 * exports.key -缩写
 * module.exports = {} 全称 会覆盖缩写
 * 
 * @node内置处理
 * function(exports, require, module, __filename, __dirname) {}
 */


/**
 * lsof -i :7000
 * 查看端口 listen open fire
 */

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
 