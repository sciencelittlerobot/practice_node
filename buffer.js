// 创建buffer
const buf = Buffer.from('Hey!');

console.log(buf);
console.log(buf.toString());
console.log(buf.length);
for (let item of buf) {
  console.log(item);
}

// 写入buffer
const buf1 = Buffer.alloc(7);
buf1.write('Hello!!');
console.log(buf1);

// 复制buffer
const buf2 = Buffer.from('Hey!');
let bufcopy = Buffer.alloc(4); //分配 4 个字节。
buf2.copy(bufcopy);

// 裁切buffer
const buf3 = Buffer.from('Hey!');
buf3.slice(0).toString(); //Hey!
const slice = buf3.slice(0, 2);
console.log(slice.toString()); //He
buf3[1] = 111; //o
console.log(slice.toString()); //Ho
