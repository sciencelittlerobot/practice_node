# nodejs文档记录

## REPL
* Node.js REPL（Read Eval Print Loop：交互式解释器）表示一个电脑的环境

## process 
* process 核心模块提供了一种便利的方法，可以以编程的方式退出 Node.js 程序：process.exit()。<br>
当 Node.js 运行此行代码时，进程会被立即强制终止。<br>
这意味着任何待处理的回调、仍在发送中的任何网络请求、任何文件系统访问、或正在写入 stdout 或 stderr 的进程，所有这些都会被立即非正常地终止。

* 注意：process 不需要 "require"，它是自动可用的。

## export
* module.exports 和 export 之间有什么区别？<br>
  前者公开了它指向的对象。 后者公开了它指向的对象的属性。

## 全局依赖包
* 全局安装的依赖包的位置可以使用命令行进行查看
  ```
  npm root -g
  ```
  
## nvm
* node版本管理器

## npm
* 查看依赖包最新的版本
  ```
  npm view <packageName> version
  ```
* 查看依赖包的历史版本
  ```
  npm view <packageName> versions
  ```
* 查看依赖包的新版本
  ```
  npm outdated
  ```
* 依赖包版本更新控制
  ```
  ^: 只会执行不更改最左边非零数字的更新。 如果写入的是 ^0.13.0，则当运行 npm update 时，可以更新到 0.13.1、0.13.2 等，但不能更新到 0.14.0 或更高版本。 如果写入的是 ^1.13.0，则当运行 npm update 时，可以更新到 1.13.1、1.14.0 等，但不能更新到 2.0.0 或更高版本。
  ~: 如果写入的是 〜0.13.0，则当运行 npm update 时，会更新到补丁版本：即 0.13.1 可以，但 0.14.0 不可以。
  >: 接受高于指定版本的任何版本。
  >=: 接受等于或高于指定版本的任何版本。
  <=: 接受等于或低于指定版本的任何版本。
  <: 接受低于指定版本的任何版本。
  =: 接受确切的版本。
  -: 接受一定范围的版本。例如：2.1.0 - 2.6.2。
  ||: 组合集合。例如 < 2.1 || > 2.6
  ```
* 查看全局安装的依赖包
  ```
  npm list -g --depth 0
  ```

## nodemon
* 自动重启工具

## 获取文件夹/文件的路径
* 有3种方式
  ```
  const {resolve} = require('path');

  // __dirname：返回运行文件所在的目录
  console.log('__dirname : ' + __dirname);
  // resolve('./')：当前命令所在的目录
  console.log('resolve   : ' + resolve('./'));
  // process.cwd()：当前命令所在的目录
  console.log('cwd       : ' + process.cwd());

  //__dirname : D:\new\node
  //resolve   : D:\new\node
  //cwd       : D:\new\node
  ```

## webpack-dev-server
* 可以设置自动打开浏览器并且自动更新内容到浏览，不需要手动刷新
* 当前对webpack的相关配置及使用还不是很清楚，后续再来，相关的内容还有webpack-dev-middleware和webpack-hot-middleware
  参考内容：简书收藏文章以及（https://www.cnblogs.com/maskmtj/p/9180708.html）、（https://www.cnblogs.com/hellohello/p/7794392.html）

## npx包运行器
* 特点：
  <br>轻松地运行本地命令
  <br>无需安装的命令执行
  <br>使用不同的 Node.js 版本运行代码
  <br>直接从 URL 运行任意代码片段

## 异步
* 异步非阻塞的I/O
  
* process.nextTick()
  <br>当将一个函数传给 process.nextTick() 时，则指示引擎在当前操作结束（在下一个事件循环滴答开始之前）时调用此函数：
  <br>调用 setTimeout(() => {}, 0) 会在下一个滴答结束时执行该函数，比使用 nextTick()（其会优先执行该调用并在下一个滴答开始之前执行该函数）晚得多

* setImmediate() = setTimeout(fn, 0)

## axios
* 使用 Node.js 执行 HTTP 请求的最简单的方式是使用 Axios 库
  
## 自行搭建简易项目步骤
* 初始化npm
  ```
  npm init <projectName>
  ```
* 搭建可以兼容es6的环境
* 使用express处理服务请求
* 使用axios进行ajax请求
* 使用router
* 引入vue
* 项目的目录有：index、login、


## fs.open(path, flag, mode)
* flag值的解释：
  ```
  'r' -   以读取模式打开文件。
  'r+' - 以读写模式打开文件。
  'rs' - 使用同步模式打开并读取文件。指示操作系统忽略本地文件系统缓存。
  'rs+' - 以同步的方式打开，读取 并 写入文件。
  注意：这不是让fs.open变成同步模式的阻塞操作。如果想要同步模式请使用fs.openSync()。
  
  'w' - 以读取模式打开文件，如果文件不存在则创建
  'wx' - 和 ' w ' 模式一样，如果文件存在则返回失败
  'w+' - 以读写模式打开文件，如果文件不存在则创建
  'wx+' - 和 ' w+ ' 模式一样，如果文件存在则返回失败
  
  'a' - 以追加模式打开文件，如果文件不存在则创建
  'ax' - 和 ' a ' 模式一样，如果文件存在则返回失败
  'a+' - 以读取追加模式打开文件，如果文件不存在则创建
  'ax+' - 和 ' a+ ' 模式一样，如果文件存在则返回失败
  mode    用于创建文件时给文件制定权限，默认0666
  ```

## node环境常用的模块
* http
* fs
* path
* 

