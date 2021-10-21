// 普通函数声明
function sayHi (value) {
  console.log(value + ', 可爱的程序员！');
}

function execute (someFunction, value) {
  someFunction(value);
}

execute(sayHi, 'hi');

// 匿名函数声明
execute(function (value) {
  console.log(value + ',我是个可爱的程序员！');
}, 'hello');

// 箭头函数声明
execute( (value) => {
  console.log(value + ',我就是个可爱的程序员！');
}, '没错');
