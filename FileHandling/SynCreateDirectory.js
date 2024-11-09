const fs = require('fs');

try {
    fs.mkdirSync('newdir');
    console.log('Directory created successfully!');
} catch (err) {
    console.error('Error creating directory:', err);
}
