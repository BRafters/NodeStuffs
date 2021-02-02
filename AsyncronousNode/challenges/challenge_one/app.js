const chalk = require("chalk");
const request = require("postman-request");
const mapbox = require("mapbox-gl");
const stringFuncs = require("./stringfuncs.js"); 

function getDegrees(temp){
    if(temp > 1 || temp < -1)
        return "degrees";
    
    return "degree";
}

const URL = "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiYnJhZnRlcnMiLCJhIjoiY2tmZ3k4dzIzMGR4aTJxdGEzdXJhdzg1cCJ9.Q04b3KcCiBniYOEBYkqMqA&limit=1";

// Geocoding
request({url: URL, json: true}, (err, res) => {
    console.log(`The latitude and longitude for ${res.body.features[0].text} is:\nLatitude: ${res.body.features[0].center[1]}\nLongitude: ${res.body.features.center[0]}`);
});

// Make the request for json data from WeatherStack
request({url: stringFuncs.getURL(), json: true}, (err, res) => {
    console.log(chalk.inverse.bold.green(`It is currently ${res.body.current.weather_descriptions[0]} and ${res.body.current.temperature} ` + getDegrees(res.body.current.temperature) + 
    ` outside. It currently feels like ${res.body.current.feelslike} ` + getDegrees(res.body.current.feelslike) + " outside."));
});


// mapboxgl.accessToken = "pk.eyJ1IjoiYnJhZnRlcnMiLCJhIjoiY2tmZ3k4dzIzMGR4aTJxdGEzdXJhdzg1cCJ9.Q04b3KcCiBniYOEBYkqMqA";

