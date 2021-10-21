// 执行命令 node argv.js --name=joe -a 1 -b 5
// 需要先npm install minimist
const args = require('minimist')(process.argv.slice(2));

console.log(args);