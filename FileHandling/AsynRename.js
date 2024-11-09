const fs = require('fs');

fs.rename('oldname.txt', 'newname.txt', (err) => {
    if (err) {
        console.error('Error renaming file:', err);
        return;
    }
    console.log('File renamed successfully!');
});
