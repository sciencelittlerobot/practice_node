const https = require('https');

// GET请求
const getOptions = {
  hostname: 'nodejs.cn',
  post: 443,
  path: '/todos',
  method: 'GET'
};
const getReq = https.request(getOptions, res => {
  console.log(`状态码：${res.statusCode}`);

  res.on('data', d => {
    process.stdout.write(d);
  });
});

getReq.on('error', error => {
  console.log(error);
});

getReq.end();

// POST 请求
const data = JSON.stringify({
  todo: '做点事情'
});
const postOptions = {
  hostname: 'nodejs.cn',
  post: 443,
  path: '/todos',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': data.length
  }
};

const postReq = https.request(postOptions, res => {
  console.log(`状态码：${res.statusCode}`);

  res.on('data', d => {
    process.stdout.write(d);
  });
});

postReq.on('error', error => {
  console.log(error);
});

postReq.write(data);

postReq.end();