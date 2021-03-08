const { FORMERR } = require("dns");
const fs = require("fs");
const path = require("path");


const getURL = (currAddress) => {
    // Get the area where we want to split the string
    const subStrToSearch = "Los%20Angeles";
    let content = "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiYnJhZnRlcnMiLCJhIjoiY2tmZ3k4dzIzMGR4aTJxdGEzdXJhdzg1cCJ9.Q04b3KcCiBniYOEBYkqMqA&limit=1";

    // Replace the default location with the one the user wants to search
    content = content.replace("Los%20Angeles", encodeURIComponent(currAddress));
    
    return content;
}

module.exports = {getURL};