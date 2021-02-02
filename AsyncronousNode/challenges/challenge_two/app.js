const chalk = require("chalk");
const request = require("postman-request");
const apiStuff = require("./api_url.js");

// Create the request to mapbox
request({url: apiStuff.URL, json: true}, (err, res) => {
    // Make sure there are no errors
    if(err){
        console.log("An error has occurred while trying to receive geolocation data");
    }
    else if(res.body.message){
        console.log("Failed to retrieve location data");
        console.log(res.body.message);
    }
    else if(res.body.features.length === 0){
        console.log("Could not find given location");
    }
    else{
        // Create constant location variables
        const lat = res.body.features[0].center[1];
        const lng = res.body.features[0].center[0];

        // Print the geolocation variables to the terminal
        console.log(`Latitude: ${lat}\nLongitude: ${lng}`);
    }
});
