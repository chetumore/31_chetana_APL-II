// test.js
const Utility = require('./utility');

// Test the utility functions
console.log(Utility.formatDate('2024-10-23')); // Output: "23-10-2024"
console.log(Utility.capitalizeFirstLetter('hello world')); // Output: "Hello world"
console.log(Utility.arrayContains([1, 2, 3, 4], 3)); // Output: true
console.log(Utility.randomInteger(1, 10)); // Output: random number between 1 and 10
console.log(Utility.toKebabCase('Hello World Test')); // Output: "hello-world-test"
