setTimeout(() => {
    console.log("Two seconds are up");
}, 2000);

const names = ["Brennan", "Jeff", "Sheila"];
const shortnames = names.filter((name) => {
    return name.length < 7;
});

console.log(shortnames);

const geocode = (address, callback) => {
    setTimeout(() => {
        const data = {
            latitude: 0,
            longitude: 0
        }
    
        callback(data);
    }, 2000);
};

geocode("Philadelphia", (location) => {
    console.log(location);
});


// To make this work:
//      1. The first thing that has to happen is to remove the expectation that geocode is going to return a value
//      2. Provide a function as the argument to geocode
//      3. Call the callback function in the setTimeout function
//      4. Print the results