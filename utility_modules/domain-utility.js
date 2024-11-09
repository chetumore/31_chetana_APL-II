const fetchData = (shouldFail = false) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (shouldFail) {
                reject(new Error('Failed to fetch data!'));
            } else {
                resolve('Data fetched successfully!');
            }
        }, 1000);
    });
};

// Main function
const processData = async () => {
    try {
        const data = await fetchData(); // Change to true to simulate an error
        console.log(data);
    } catch (error) {
        console.error('Error:', error.message);
    }
};

// Run the process
processData();
