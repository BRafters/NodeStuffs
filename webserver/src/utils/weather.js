const stringFuncs = require("./stringfuncsForWeather.js");
const request = require("postman-request");


const forecast = (address, callback) => {
    console.log("in forecast function")
    request({url: stringFuncs.getURL(address), json: true}, (err, {body}) => {
        if(err){
            console.log("Could not connect to weather services");
            callback("Could not connect to weather services", undefined);
        }
        else if(body.error){
            console.log("Could not retrieve target weather data");
            callback("Could not retrieve target weather data", undefined);
        }
        else{
            console.log("Worked");
            callback(undefined, body);
        }
    });
}

module.exports = forecast;