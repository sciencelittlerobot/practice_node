var fs = require('fs');

// // 异步打开文件
// fs.open('input.txt', 'a', function (err, fd) {
//   if (err) {
//     return console.log(err);
//   }
//   console.log('文件打开成功');
//   console.log('准备读取文件：');

//   // // 创建一个大小为1024字节的缓存区
//   // var buf = Buffer.alloc(1024);
//   // // 异步读取文件
//   // fs.read(fd, buf, 0, buf.length, 0, function (err, bytes, buf) {
//   //   if (err) {
//   //     console.log(err);
//   //   }
//   //   console.log(bytes + '字节被读取');
//   //   // 仅输出读取的字节
//   //   if (bytes > 0) {
//   //     console.log(buf.slice(0, bytes).toString());
//   //   }

//   //   // 异步关闭文件
//   //   fs.close(fd, function (err) {
//   //     if (err) {
//   //       console.log(err);
//   //     }
//   //     console.log('文件关闭成功');
//   //   });
//   // });

//   // // 新写入内容为 hello world
//   // var buffer = Buffer.from(new String(' hello world'));
//   // // 异步写入文件
//   // fs.write(fd, buffer, 1, 11, 0, function (err, bytes, buffer) {
//   //   if (err) {
//   //     throw err;
//   //   }
//   //   console.log('成功');
//   //   // 打印出 buffer 中存入的数据
//   //   console.log(bytes + '字节被写入');
//   //   console.log(buffer.slice(1, 12).toString());
//   //   // 异步关闭文件
//   //   fs.close(fd, function (err) {
//   //     if (err) {
//   //       console.log(err);
//   //     }
//   //     console.log('文件关闭成功');
//   //   });
//   // });

//   // var data = ' test_测试测试';
//   // // 异步写入文件
//   // fs.write(fd, data, 0, 'utf-8', function (err, bytes, buffer) {
//   //   if (err) {
//   //     return console.log(err);
//   //   }
//   //   console.log(bytes + '字节被写入');
//   //   console.log(buffer);
//   //   // 异步关闭文件
//   //   fs.close(fd, function (err) {
//   //     if (err) {
//   //       console.log(err);
//   //     }
//   //     console.log('文件关闭成功');
//   //   });
//   // });
// });

// // 读取文件
// fs.readFile('input.txt', 'utf-8',function (err, data) {
//   // 读取文件
//   if (err) {
//     throw err;
//   }
//   // 读取文件成功
//   console.log(data);
// });

// // 写入文件内容（如果文件不存在会创建一个文件）
// fs.writeFile('test.txt', '我是新写入的内容1111', function (err) {
//   if (err) {
//     throw err;
//   }
//   console.log('已保存');

//   fs.readFile('test.txt', 'utf-8', function (err, data) {
//     if (err) {
//       throw err;
//     }
//     console.log(data);
//   });

// // 写入文件内容（如果文件不存在会创建一个文件）
// // 设置flag为a追加内容到文件中
// fs.writeFile('./test/test_2.txt', '222我是新写入的内容2222222222', {flag: 'a'}, function (err) {
//   if (err) {
//     throw err;
//   }
//   console.log('已保存');

//   fs.readFile('./test/test1.txt', 'utf-8', function (err, data) {
//     if (err) {
//       throw err;
//     }
//     console.log(data);
//   });
// });

// 异步获取文件信息
// fs.stat('test.js', function (err, stats) {
//   if (err) {
//     return console.log(err);
//   }
//   console.log(stats.isFile());
// });

// // 异步截取文件
// fs.open('test.txt', 'r+', function (err, fd) {
//   if (err) {
//     return console.log(err);
//   }
  
//   console.log('文件打开成功');
//   console.log('截取6字节内的文件内容，超出部分将被去除。');
//   // 截取文件
//   var buf = Buffer.alloc(1024);
//   fs.ftruncate(fd, 6, function (err) {
//     if (err) {
//       console.log(err);
//     }
//     console.log('文件截取成功');
//     console.log('读取相同的文件');
//     fs.read(fd, buf, 0, buf.length, 0, function (err, bytes) {
//       if (err) {
//         console.log(err);
//       }
//       // 仅输出读取的字节
//       if (bytes > 0) {
//         console.log(buf.slice(0, bytes).toString());
//       }

//       // 异步关闭文件
//       fs.close(fd, function (err) {
//         if (err) {
//           console.log(err);
//         }
//         console.log('文件关闭成功');
//       });
//     });
//   });
// });

// // 删除 test.txt 文件
// fs.unlink('test.txt', function (err) {
//   if (err) {
//     return console.log(err);
//   }
//   console.log('文件删除成功');
// });

// // 异步修改文件名字
// fs.rename('input.txt', 'new_input.txt', (err) => {
//   if (err) {
//     throw err;
//   }
//   console.log('重命名完成');
// });

// 异步创建目录
// fs.mkdir('./test1/', function (err) {
//   if (err) {
//     return console.log(err);
//   }
//   console.log('目录创建成功');
// });

// // 读取目录
// fs.readdir('./test', function (err, files) {
//   if (err) {
//     throw err;
//   }
//   console.log(files);
// });

// // 删除目录
// fs.rmdir('./test1', function (err) {
//   if (err) {
//     return console.log(err);
//   }
//   console.log('目录删除成功');
// });