const request = require("postman-request");
const mapStringFuncs = require("./stringFuncsForMap.js");

const geoCode = (address, callback) => {
    request({url: mapStringFuncs.getURL(address), json: true}, (err, {body}) => {
        if(err){
            callback("An error has occurred", undefined);
        }
        else if(body.message === "Not Found"){
            callback(body, undefined);
        }
        else{
            callback(undefined, body.features[0]);
        }
    });
};

module.exports = geoCode;