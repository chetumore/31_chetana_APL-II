const fs = require('fs');

try {
    fs.appendFileSync('example.txt', '\nAppended text.');
    console.log('Data appended successfully!');
} catch (err) {
    console.error('Error appending to file:', err);
}
