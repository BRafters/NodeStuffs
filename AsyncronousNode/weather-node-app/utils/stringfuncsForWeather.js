const { FORMERR } = require("dns");
const fs = require("fs");
const fileName = "weather_creds.json";

const getJSON = () => {
    const jsonContent = JSON.parse(fs.readFileSync(fileName));
    return jsonContent;
}

const getURL = (currAddress) => {
    // Get the area where we want to split the string
    const subStrToSearch = "access_key=";
    const content = getJSON();
    const idxToAppendAt = content.api.api_url.search(subStrToSearch) + subStrToSearch.length;
    
    // Slice the string
    let slicedString = content.api.api_url.slice(idxToAppendAt, content.api.api_url.length);
    let newURL = content.api.api_url.replace((slicedString), "");

    // Append the address to the sliced string
    slicedString += encodeURIComponent(currAddress);

    // Append the access key and the sliced off string
    newURL += content.api.access_key + slicedString;
        
    return newURL;
}

const getApiKey = () => {
    const content = getJSON();
    return content.api.accesskey;
}

module.exports = {getURL, getApiKey};