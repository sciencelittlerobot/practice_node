/**
 * response 对象
 */
// // 引入http模块
// var http = require('http');

// // 创建服务器
// http.createServer(function (request, response) {
//   response.writeHead(200, {'Content-Type': 'text/html;charset=UTF-8'});

//   response.write('hello 可爱的程序员');
//   response.write('<h1>hello world</h1>');
//   response.end();
// }).listen(8080);

// console.log('Server running at http://127.0.0.1:8080/');



/**
 * request 对象
 */
// 引入http模块
var http = require('http');

// 1、创建Server
var server = http.createServer();

// 2、监听 request 请求时间，设置请求处理函数
server.on('request', function (req, res) {
  console.log('收到请求了，请求路径是：' + req.url);
  console.log('请求我的客户端的地址是：', req.socket.remoteAddress, req.socket.remotePort);

  var url = req.url;
  res.writeHead(200, {'Content-Type': 'text/html;charset=UTF-8'});
  if (url === '/') {
    res.end('<h1>Index Page</h1>');
  } else if (url === '/login') {
    res.end('<h1>Login Page</h1>');
  } else {
    res.end('<h1>404 Not Found</h1>');
  }
});

server.listen(8080, function () {
  console.log('服务器启动成功，可以访问了。。。');
});

