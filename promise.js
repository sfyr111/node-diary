/**
 * typeof promise = 'function' (状态机)
 * 
 * prototype ==> then / catch
 * 
 * 回调函数 ==> 1、存储 2、自动执行
 * 
 * 静态方法 ==> all / race / resolve / reject
 * 
 * 
 */


/**
 * step 1 new Promise()
 * .resolve
 * .reject
 */ 
let p = new Promise((resolve, reject) => {
  // resolve(1)
  // reject(1)
  setTimeout(reject, 1000, 'hello world') // 绝对控制权，只有Promise对象里状态进入resolve或reject才能走下面的then
})
console.log(p)

/**
 * 以下状态必须等Promise进入状态才能执行
 * 1、将回调函数存入处理队列 queque
 * 2、如果Promise已经进入状态了，队列里的函数会自动执行 autorun
 * Promise进入状态 => 遍历队列的回调函数执行
 */

// then 可接受两个参数
p.then(
  val => console.log(`resolve val is ${val}`), // 第一个参数处理resolve
  val => console.log(`reject val is ${val}`)  // 第二个参数处理reject
)

// // 再次调用then
// p.then(
//   val => console.log(`another resolve val is ${val}`),
//   val => console.log(`another reject val is ${val}`)
// )

setTimeout(() => {
  console.log(p)
  p.catch(
    val => console.log(`catch val is ${val}`)
  )
}, 2000) // 如果Promise已经进入状态了，队列里的函数会自动执行 autorun
// 这里做了两秒延迟，迟于Promise进入状态 无论时间多少都只在Promise进入状态后才能执行

