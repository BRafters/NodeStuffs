//
// Goal: Mess around with the callback pattern
//
// 1. Define an add function that accepts the correct arguments
// 2. Use setTimeout to simulate a 2 second delay
// 3. After 2 seconds are up, call the callback function with the sum
// 4. Test your work!

// Define the add function
///
/// A callback function that adds two numbers together and takes a callback function
///
const add = (numOne, numTwo, callback) => {
    // Here, we are simulating an asynchronous process
    setTimeout(() => {
        // Call the function that was passed as a parameter
        callback(numOne + numTwo);
    }, 2000);
};

add(1, 4, (sum) => {
    console.log(sum) // Should print: 5
});