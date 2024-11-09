const fs = require("fs");

// Open the file asynchronously
console.log("Opening file asynchronously");
fs.open('input.txt', 'r+', function (err, fd) {
    if (err) {
        console.error("Error opening file:", err);
    } else {
        console.log("File opened successfully");

        // Close the file asynchronously
        console.log("Closing file asynchronously");
        fs.close(fd, function (err) {
            if (err) {
                console.error("Error closing file:", err);
            } else {
                console.log("File closed successfully");
            }
        });
    }
});
