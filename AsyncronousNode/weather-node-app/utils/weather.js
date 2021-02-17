const stringFuncs = require("./stringfuncsForWeather.js");
const request = require("postman-request");
const chalk = require("chalk");

//
// Goal: Create a reusable function for getting the forecast
//
// 1. Setup the "forecast" function in utils/forecast.js
// 2. Require the function in app.js and call it as shown below
// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)

const forecast = (address, callback) => {
    let weatherString = "";
    request({url: stringFuncs.getURL(address), json: true}, (err, res) => {
        if(err)
            callback(chalk.inverse.bold.red("Could not connect to weather services"), undefined);
        else if(res.body.error)
            callback(chalk.inverse.bold.red("Could not retrieve target weather data"));
        else{
            weatherString = chalk.inverse.bold.green(`It is currently ${res.body.current.weather_descriptions[0]} and ${res.body.current.temperature} degree/s outside. It currently feels like ${res.body.current.feelslike} degree/s outside.`);
            callback(undefined, weatherString);
        }
    });
}

module.exports = forecast;