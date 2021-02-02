const request = require("postman-request");
const chalk = require("chalk");
const stringFuncs = require("./stringfuncs.js");

const URL = "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiYnJhZnRlcnMiLCJhIjoiY2tmZ3k4dzIzMGR4aTJxdGEzdXJhdzg1cCJ9.Q04b3KcCiBniYOEBYkqMqA&limit=1";

function getDegrees(temp){
    if(temp > 1 || temp < -1)
        return "degrees";
    
    return "degree";
}

// First request to MapBox geocoder
// request({url: URL, json: true}, (err, res) => {
//     if(err){
//         console.log("Unable to connect to weather service");
//     }
//     else if(res.body.error){
//         console.log("Unable to find location data");
//     }
//     else{
//         // console.log(res.body.features[0].center[0]);
//         console.log(`The latitude and longitude for ${res.body.features[0].text} is:\nLatitude: ${res.body.features[0].center[1]}\nLongitude: ${res.body.features[0].center[0]}`);
//     }
// });

// Second request to weatherStack weather API
request({url: stringFuncs.getURL(), json: true}, (err, res) => {
    if(err){
        console.log("Could not connect to weather service");
    }
    else if(res.body.error){
        console.log("Could not retrieve target weather data");
    }
    else{
        console.log(chalk.inverse.bold.green(`It is currently ${res.body.current.weather_descriptions[0]} and ${res.body.current.temperature} ` + getDegrees(res.body.current.temperature) + 
        ` outside. It currently feels like ${res.body.current.feelslike} ` + getDegrees(res.body.current.feelslike) + " outside."));
    }
});


// console.log(stringfuncs.getURL());