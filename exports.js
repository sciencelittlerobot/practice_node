console.log(exports === module.exports);

exports = {
  a: 3
};
// module.exports = {
//   b: 3
// };
console.log('exports=', exports);
console.log('module.exports=', module.exports);
console.log(exports === module.exports);
