const request = require("postman-request");
const chalk = require("chalk");
const stringFuncs = require("./utils/stringfuncsForWeather.js");
const geoCode = require("./utils/geocode.js");
const forecast = require("./utils/weather.js");

// Create a constant that holds the target location the user entered
const userInput = process.argv[2];

// Determine if it is empty or not
if(userInput !== undefined){
    geoCode(userInput, (err, res) => {
        if(err)
            console.log(err);
        else{
            console.log(res.center);
            forecast(res.text, (err, weatherdata) => {
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