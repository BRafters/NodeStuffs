const { FORMERR } = require("dns");
const fs = require("fs");
const { pathToFileURL } = require("url");

const getURL = (currAddress) => {

    // Get the area where we want to split the string
    const subStrToSearch = "access_key=";
    let content = "http://api.weatherstack.com/current?access_key=35ccdc0086e39719bcc1e3c1f979481a&units=m&query=";

    // Append the address to the sliced string
    content += encodeURIComponent(currAddress);

    console.log(content);
    return content;
}

const getApiKey = () => {
    const content = getJSON();
    return content.api.accesskey;
}

module.exports = {getURL, getApiKey};