// let done = true;

// const isItDoneYet = new Promise((resolve, reject) => {
//   if (done) {
//     const workDone = '这是创建的内容';
//     resolve(workDone);
//   } else {
//     const why = '仍然在处理其它事情';
//     reject(why);
//   }
// });

// const checkIfItsDone = () => {
//   isItDoneYet.then(ok => {
//     console.log(ok);
//   }).catch(err => {
//     console.error(err);
//   });
// }
// checkIfItsDone();



// const fs = require('fs');
// const getFile = (fileName) => {
//   return new Promise((resolve, reject) => {
//     fs.readFile(fileName, (err, data) => {
//       if (err) {
//         reject(err);
//         return;
//       }

//       resolve(data);
//     });
//   });
// }

// getFile(__dirname + '/etc/passwd/test.txt')
// .then(data => console.log(data))
// .catch(err => console.error(err));


// 使用fetch()解释链式promise
// 需要下载node-fetch才能使用fetch(): npm i node-fetch
// 使用node-fetch进行fetch时，url写的是相对路径：'./data/todo.json'，但是运行文件时报错了，
// 要求fetch的url是绝对路径，例如：https://example.com/
// 参考内容： https://www.jianshu.com/p/caae672892cc
const status = response => {
  if (response.status >= 200 && response.status < 300) {
    return Promise.resolve(response);
  }

  return Promise.reject(new Error(response.statusText));
}
const json = response => response.json();
const fetch = require('node-fetch');
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

// GET 请求  获取json数据
app.get('/getData', function (req, res) {
  let data = require('./data/todos.json');
  res.send(data);
});

app.listen(8080, function () {
  console.log('服务器启动了');
  console.log('running http://localhost:8080');
});

fetch('http://localhost:8080/getData')
.then(status)
.then(json)
.then(data => {
  console.log('请求成功获得 JSON 响应', data);
}).catch(error => {
  console.log('请求失败', error);
});