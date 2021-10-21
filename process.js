
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  console.log('GET 请求');
  res.send('index');
});

const server = app.listen('8081', () => console.log('服务器已就绪'));

process.on('SIGTERM', () => {
  server.close(() => console.log('停止进程'));
});