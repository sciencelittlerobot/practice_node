/**
 * 添加监听器
 */

// // 引入 events 模块
// var events = require('events');
// // 创建 emitter 对象
// var emitter = new events.EventEmitter();
// // 为 connection 事件注册一个监听器
// emitter.on('connection', function () {
//   console.log('我是a');
// });

// emitter.prependListener('connection', () => console.log('我是b'));

// // 一秒后调用监听器
// setTimeout(function () {
//   emitter.emit('connection');
// }, 1000);


/**
 * 调用监听器
 */
// // 引入 events 模块
// var events = require('events');
// // 创建 emitter 对象
// var emitter = new events.EventEmitter();
// // 定义一个回调函数
// var callback1 = function (arg1, arg2) {
//   console.log('hello world', arg1, arg2);
// }
// var callback2 = function (arg3, arg4) {
//   console.log('hello stranger', arg3, arg4);
// }
// // 为 connection 事件注册监听器
// emitter.on('connection', callback1);
// emitter.on('connection', callback2);
// // 调用加监听器
// emitter.emit('connection', '愿善良的人', '都能被温柔以待');


/**
 * 只执行一次的监听器
 */
// 引入 events 模块
// var events = require('events');
// // 创建 emitter 对象
// var emitter = new events.EventEmitter();
// // 为 connection 事件注册一个监听器
// var n = 0;
// // emitter.on('connection', function () {
// //   ++ n;
// //   console.log('调用第' + n + '次');
// // });
// // 将emtter。on()改为emitter.once()
// emitter.once('connection', function () {
//   ++ n;
//   console.log('on调用第' + n + '次');
// });

// var m = 0;
// // emitter.prependListener('connection', function () {
// //   ++ m;
// //   console.log('prepend调用第' + m + '次');
// // });
// emitter.prependOnceListener('connection', function () {
//   ++ m;
//   console.log('prepend调用第' + m + '次');
// });

// // 调用监听器
// emitter.emit('connection');
// emitter.emit('connection');
// emitter.emit('connection');
// emitter.emit('connection');

/**
 * 移除监听器
 */
// // 引入 events 模块
// var events = require('events');
// // 创建 emitter 对象
// var emitter = new events.EventEmitter();
// // 定义一个回调函数
// // var callback = function () {
// //   console.log('syl');
// // };
// // // 为 connection 事件注册一个监听器
// // emitter.on('connection', callback);
// // // 为 connection 事件移除监听器
// // emitter.removeListener('connection', callback);
// // // 调用监听器
// // emitter.emit('connection');

// var callback1 = function () {
//   console.log('我是1');
//   // emitter.removeListener('connection', callback2);
// };
// var callback2 = function () {
//   console.log('我是2');
// };
// emitter.on('connection', callback1);
// emitter.on('connection', callback2);

// // 移除 connection 事件的所有监听器
// emitter.removeAllListeners('connection');

// // 第一次调用监听器，callback1 移除了监听器 callback2，
// // 但它依然会被调用。触发时内部的监听器数组为 [callback1, callback2]
// emitter.emit('connection');
// // 第二次调用监听器，此时 callback2 已经被移除了。内部的监听器数组为 [callback1]
// emitter.emit('connection');


/**
 * 查看事件绑定的监听器个数
 */
// var events = require('events');
// var emitter = new events.EventEmitter();
// var callback1 = function () {
//   console.log('我是1');
// };
// var callback2 = function () {
//   console.log('我是2');
// };
// emitter.on('connection', callback1);
// emitter.on('connection', callback2);

// var num = emitter.listenerCount('connection');
// console.log(num);


/**
 * 查看事件绑定的监听器个数
 */
var events = require('events');
var emitter = new events.EventEmitter();
emitter.on('error', () => {
  console.log('错误信息');
});
emitter.emit('error');
