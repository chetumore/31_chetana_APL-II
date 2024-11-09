const os = require('os');

console.log('Platform:', os.platform());
console.log('Architecture:', os.arch());
console.log('Total Memory (bytes):', os.totalmem());
console.log('Free Memory (bytes):', os.freemem());
console.log('Hostname:', os.hostname());
console.log('Network Interfaces:', os.networkInterfaces());
console.log('Uptime (seconds):', os.uptime());
console.log('User Info:', os.userInfo());
