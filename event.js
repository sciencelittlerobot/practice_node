const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('start', () => {
  console.log('开始');
});
eventEmitter.emit('start');
eventEmitter.removeListener('start', () => {
  //
});

eventEmitter.on('start', (number) => {
  console.log(`开始 ${number}`);
});
eventEmitter.emit('start', 23);
eventEmitter.removeListener('start', () => {
  //
});

eventEmitter.on('start', (start, end) => {
  console.log(`从 ${start} 到 ${end}`);
});
eventEmitter.emit('start', 1, 100);
eventEmitter.removeListener('start', () => {
  //
});

