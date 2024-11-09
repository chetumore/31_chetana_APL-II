const fs = require("fs");
var text = "Chetana More";
console.log("writing synchronously");
fs.writeFileSync("input.txt", text);
console.log("writing asynchronously");

fs.writeFile('input.txt', text, function (err) {
    if (err)
        console.log(err);
    else
        console.log("write operation complete");
});