console.log('Node.js Version:', process.version);
console.log('Process ID:', process.pid);
console.log('Current Directory:', process.cwd());
console.log('Command-line Arguments:', process.argv);
console.log('Environment Variables:', process.env);
console.log('Memory Usage:', process.memoryUsage());
console.log('Uptime (seconds):', process.uptime());

process.on('SIGINT', () => {
    console.log('Received SIGINT. Exiting...');
    process.exit();
});
