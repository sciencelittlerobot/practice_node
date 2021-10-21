var http = require('http'); // 加载http模块，并将实例化的HTTP赋值给变量http
var cp = require('child_process');

http.createServer(function (request, response) {
    // 发送 HHTP 头部
    // HTTP状态值： 200： ok
    // 内容类型： text/plain
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('Hello World\n');

}).listen(8080);

// 终端打印如下信息
console.log('Server running at http://127.0.0.1:8080/');
// cp.exec('start http://127.0.0.1:8080/');

