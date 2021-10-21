var express = require('express');
var app = express();
// 加载 body-parser
var bodyParser = require('body-parser');
// 创建 application/x-www-form-urlencoded 编码解析
var urlencodedParser = bodyParser.urlencoded({
  extended: false
});

// 访问静态文件
app.use(express.static('public'));

// GET 请求
app.get('/', function (req, res) {
  // console.log('GET 请求');
  // res.send('Hello，我是GET请求');
  res.sendFile(__dirname + '/public/getTest.html');
});

app.get('/get_test', function (req, res) {
  // 输出 JSON 格式
  var response = {
    studentNumber: req.query.stuNum,
    studentName: req.query.stuNam
  };
  console.log(response);
  res.end(JSON.stringify(response));
});

app.get('/postTest', function (req, res) {
  res.sendFile(__dirname + '/public/postTest.html');
});

app.post('/post_test', urlencodedParser, function (req, res) {
  // 输出 JSON 格式
  var response = {
    studentNumber: req.body.stuNum,
    studentName: req.body.stuNam
  };
  console.log(response);
  res.end(JSON.stringify(response));
});

// POST 请求
app.post('/', function (req, res) {
  console.log('POST 请求');
  res.send('Hello，我是POST请求');
});

// /index响应 index 页面 GET 请求
app.get('/index', function (req, res) {
  console.log('/响应index页面 GET 请求');
  res.send('Hello，我是 index 页面 GET 请求');
});

// 对页面 abcd, abxcd, ab123cd等响应 GET 请求
app.get('/ab*cd', function (req, res) {
  console.log('/ab*cd GET 请求');
  res.send('Hello，我是正则匹配');
});

var cp = require('child_process');
app.listen(8080, function () {
  console.log('服务器启动了');
  console.log('running http://localhost:8080');
  cp.exec('start http://localhost:8080');
});
