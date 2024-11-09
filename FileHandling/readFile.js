const fs = require("fs");
console.log('Reading synchronously');
data = fs.readFileSync("input.txt");
console.log(data.toString());
console.log("Reading asynchronously");

fs.readFile("input.txt", function (err, data) {
    if (err) {
        return console.error(err);
    }
    console.log("Asynchronous read " + data.toString());
});
console.log("Read operation complete");