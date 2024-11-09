// utility.js
const UtilityModule = {
    // Function to format a date to "DD-MM-YYYY" format
    formatDate: function (date) {
        const d = new Date(date);
        const day = String(d.getDate()).padStart(2, '0');
        const month = String(d.getMonth() + 1).padStart(2, '0'); // Months are zero-based
        const year = d.getFullYear();
        return `${day}-${month}-${year}`;
    },

    // Function to capitalize the first letter of a string
    capitalizeFirstLetter: function (string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    },

    // Function to check if an array contains a certain value
    arrayContains: function (arr, value) {
        return arr.includes(value);
    },

    // Function to generate a random integer between min and max (inclusive)
    randomInteger: function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },

    // Function to convert a string to kebab-case
    toKebabCase: function (str) {
        return str
            .replace(/([a-z])([A-Z])/g, '$1-$2') // convert camelCase to kebab-case
            .replace(/\s+/g, '-') // replace spaces with dashes
            .toLowerCase();
    },
};

module.exports = UtilityModule;
