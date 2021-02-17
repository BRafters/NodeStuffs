const { FORMERR } = require("dns");
const fs = require("fs");
const fileName = "mapbox_creds.json";

const getJSON = () => {
    const jsonContent = JSON.parse(fs.readFileSync(fileName));
    return jsonContent;
}

const getURL = (currAddress) => {
    // Get the area where we want to split the string
    const subStrToSearch = "Los%20Angeles";
    const content = getJSON();
    const idxToAppendAt = content.api.url.search(subStrToSearch);
    
    // Slice the string
    let slicedString = content.api.url.slice(idxToAppendAt, content.api.url.length);
    let newURL = content.api.url.replace((slicedString), "");

    // Replace the default location with the one the user wants to search
    slicedString = slicedString.replace("Los%20Angeles", encodeURIComponent(currAddress));

    // Append the access key and the sliced off string
    newURL += slicedString;
    
    return newURL;
}

module.exports = {getURL};