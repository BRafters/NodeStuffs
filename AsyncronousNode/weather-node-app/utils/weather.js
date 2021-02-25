const stringFuncs = require("./stringfuncsForWeather.js");
const request = require("postman-request");
const chalk = require("chalk");

const forecast = (address, callback) => {
    let weatherString = "";
    request({url: stringFuncs.getURL(address), json: true}, (err, {body}) => {
        if(err)
            callback(chalk.inverse.bold.red("Could not connect to weather services"), undefined);
        else if(body.error)
            callback(chalk.inverse.bold.red("Could not retrieve target weather data"));
        else{
            weatherString = chalk.inverse.bold.green(`It is currently ${body.current.weather_descriptions[0]} and ${body.current.temperature} degree/s outside. It currently feels like ${body.current.feelslike} degree/s outside.`);
            callback(undefined, weatherString);
        }
    });
}

module.exports = forecast;