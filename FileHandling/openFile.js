const fs = require("fs");
var text = "Chetana More";

// Write to the file asynchronously
fs.writeFile('input.txt', text, function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log("Asynchronous write operation complete");

        // Open the file asynchronously
        console.log("Opening file asynchronously");
        fs.open('input.txt', 'r+', function (err, fd) {
            if (err) {
                console.error("Error opening file:", err);
            } else {
                console.log("File opened successfully");

                // Read the contents of the file
                fs.readFile('input.txt', 'utf8', (err, data) => {
                    if (err) throw err;
                    console.log('File contents after opening:', data);
                });
            }
        });
    }
});
