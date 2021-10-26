// 引入文件路径path模块
const path = require('path');
let file = __filename;

console.log(path.dirname(file));
console.log(path.basename(file));
console.log(path.extname(file));
console.log(path.basename(file, path.extname(file)));
console.log(path.resolve('tmp', path.basename(file)));
console.log(path.parse(file));