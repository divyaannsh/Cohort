// Define a function that takes a callback
function fetchData(callback) {
    setTimeout(() => {
        const data = { name: "John", age: 30 };
        callback(data);
    }, 2000);
}

// Define a callback function
function displayData(data) {
    console.log("Data received:", data);
}

// Call the function and pass the callback
fetchData(displayData);