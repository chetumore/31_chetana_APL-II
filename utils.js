const crypto = require('crypto');

// Function to generate a random string of a given length
function generateRandomString(length) {
    return crypto.randomBytes(length).toString('hex').slice(0, length);
}

// Function to hash a string using SHA256
function hashString(data) {
    return crypto.createHash('sha256').update(data).digest('hex');
}

// Function to format a date as 'DD/MM/YYYY'
function formatDate(date) {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
}

// Function to capitalize the first letter of a string
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

module.exports = {
    generateRandomString,
    hashString,
    formatDate,
    capitalizeFirstLetter
};
