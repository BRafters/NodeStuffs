const request = require("postman-request");
const chalk = require("chalk");
const stringFuncs = require("./utils/stringfuncsForWeather.js");
const geoCode = require("./utils/geocode.js");
const forecast = require("./utils/weather.js");

// Create a constant that holds the target location the user entered
const userInput = process.argv[2];

// Determine if it is empty or not
if(userInput !== undefined){
    geoCode(userInput, (err, {center, text}) => {
        if(err)
            console.log(err);
        else{
            console.log(`Lat: ${center[1]}, Lng: ${center[0]}`);
            forecast(text, (err, weatherdata) => {
                if(err)
                    console.log(err);
                else
                    console.log(weatherdata);
            });
        }
    });
}
else
    console.log("Please enter a target location");