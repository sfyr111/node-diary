// setTimeout(function(){
//  $.ajax({
//   url: '/user.action',
//   method: 'get',
//   success: function(arr) {
//    var liStr = arr.map(function(ele){
//     return '<li>' + ele + '</li>'
//    }).join('')
//     $('#root').html(liStr)
//   },
//   err: function(err) {
//    console.log(err)
//   }
//  })
//  $.ajax({
//   url: '/list.action',
//   method: 'get',
//   success: function(arr) {
//    var liStr = arr.map(function(ele){
//     return '<li>' + ele + '</li>'
//    }).join('')
//     $('#shop').html(liStr)
//   },
//   err: function(err) {
//    console.log(err)
//   }
//  })
// }, 1000)
setTimeout(function(){
  $.ajax({
    url: '/user.action',
    method: 'get',
    success: function(data) {
      // 因为服务端'Content-Type': 'application/json' 所以客户端不用JSON.parse
      var liStr = data.map(function(ele){
        return "<li>" + ele + "</li>"
      }).join('')
      $('#root').html(liStr)
    },
    error: function(err) {
      console.log(err)
    }
  })
}, 1000)

setTimeout(function(){
  $.ajax({
    url: '/list.action',
    method: 'post',
    headers: {
      'content-type': 'application/json'
    },
    data: JSON.stringify([
      'name', 'age'
    ]),
    success: function(data) {
      // 因为服务端'Content-Type': 'application/json' 所以客户端不用JSON.parse
      var liStr = data.map(function(ele){
        return "<li>" + ele + "</li>"
      }).join('')
      $('#shop').html(liStr)
    },
    error: function(err) {
      console.log(err)
    }
  })
}, 1000)
