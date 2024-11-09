const fs = require('fs');

fs.appendFile('example.txt', '\nAppended text.', (err) => {
    if (err) {
        console.error('Error appending to file:', err);
        return;
    }
    console.log('Data appended successfully!');
});
