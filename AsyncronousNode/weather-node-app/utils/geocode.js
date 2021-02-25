const request = require("postman-request");
const mapStringFuncs = require("./stringFuncsForMap.js");

const geoCode = (address, callback) => {
    request({url: mapStringFuncs.getURL(address), json: true}, (err, {body}) => {
        if(err)
            callback("Unable to connect to location", undefined);
        else if(body.features.length === 0)
            callback("Unable to find location, try another search", undefined);
        else
            callback(undefined, body.features[0]);
    });
};

module.exports = geoCode;