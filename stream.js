const Stream = require('stream');

// 创建可读流
const readableStream = new Stream.Readable({
  read() {}
});
// 创建可写流
const writableStream = new Stream.Writable();

writableStream._write = (chunk, encoding, next) => {
  console.log(chunk.toString());
  next();
}

readableStream.pipe(writableStream);
readableStream.push('hi!');
readableStream.push('ho!');
writableStream.write('hey!');
writableStream.end();
