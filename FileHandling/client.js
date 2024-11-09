const fs = require('fs');

// Write to a file
fs.writeFile('example.txt', 'Hello, Node.js!', (err) => {
    if (err) throw err;
    console.log('File written successfully!');

    // Open the file after writing
    fs.open('example.txt', 'r+', (err, fd) => {
        if (err) throw err;
        console.log('File opened successfully!');

        // Read the file contents
        fs.readFile('example.txt', 'utf8', (err, data) => {
            if (err) throw err;
            console.log('File contents:', data);

            // Close the file
            fs.close(fd, (err) => {
                if (err) throw err;
                console.log('File closed successfully!');
            });
        });
    });
});
