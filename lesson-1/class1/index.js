// function(exports, require, module, ....) {



var another = require('./test')

var package = require('./package')
// console.log(module.paths) // 查找路径




// }


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
 * function(exports, module, require, ...) {}
 */