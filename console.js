// 元素计数
const x = 1;
const y = 2;
const z = 3;

console.count(
  'x 的值为 ' + x + ' 且已经检查了几次？'
);
console.count(
  'x 的值为 ' + x + ' 且已经检查了几次？'
);
console.count(
  'y 的值为 ' + y + ' 且已经检查了几次？'
);

const oranges = ['橙子', '橙子'];
const apples = ['苹果'];

oranges.forEach(fruit => {
  console.count(fruit);
});
apples.forEach(fruit => {
  console.count(fruit);
});


// 打印堆栈踪迹， 可以回答以下问题：如何到达代码的那一部分
const function2 = () => {
  console.trace();
};
const function1 = () => function2();
function1();

// 计算耗时
const doSomething = () => {
  // console.log('测试');
  for (let i = 0; i < 10; i ++) {
    console.log('i=', i);
  }
};
const measureDoingSomething = () => {
   console.time('doSomething()');
   // 做点事，并测量所需的时间
   doSomething();
   console.timeEnd('doSomething()');
};
measureDoingSomething();

// 为输出着色
// 可以使用转义序列在控制台中为文本的输出着色
console.log('\x1b[33m%s\x1b[0m', '你好');
// 为控制台输出着色的最简单方法是使用库。 
// Chalk 是一个这样的库，除了为其着色外，它还有助于其他样式的设置（例如使文本变为粗体、斜体或带下划线）
const chalk = require('chalk');
console.log(chalk.blue('你好'));
console.log(chalk.red('你好'));
console.log(chalk.yellow('你好'));

// 创建进度条
const ProgressBar = require('progress');
const bar = new ProgressBar(':bar', {total: 10});
const timer = setInterval(() => {
  bar.tick();
  if (bar.complete) {
    clearInterval(timer);
  }
}, 100);
