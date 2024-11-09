const path = require('path');

console.log('Current Directory:', __dirname);
console.log('Current File:', __filename);

const filePath = '/foo/bar/baz/asdf/quux.html';

console.log('Base Name:', path.basename(filePath));
console.log('Directory Name:', path.dirname(filePath));
console.log('File Extension:', path.extname(filePath));

const joinedPath = path.join('/foo', 'bar', 'baz/asdf', 'quux.html');
console.log('Joined Path:', joinedPath);

const normalizedPath = path.normalize('/foo/bar//baz/asdf/quux.html');
console.log('Normalized Path:', normalizedPath);

const resolvedPath = path.resolve('foo', 'bar', 'baz');
console.log('Resolved Path:', resolvedPath);
