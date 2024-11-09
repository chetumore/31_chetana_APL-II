const fs = require('fs');

try {
    fs.renameSync('oldname.txt', 'newname.txt');
    console.log('File renamed successfully!');
} catch (err) {
    console.error('Error renaming file:', err);
}
