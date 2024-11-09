const fs = require('fs');

try {
    fs.writeFileSync('example.txt', 'Hello, Node.js!');
    console.log('File written successfully!');
} catch (err) {
    console.error('Error writing file:', err);
}
