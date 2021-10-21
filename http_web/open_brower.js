const cp = require('child_process');
const config = require('./config');

cp.exec('start http://' + config.hostName + ':' + config.port);