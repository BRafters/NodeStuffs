const http = require("http");

const url = "http://api.weatherstack.com/current?access_key=35ccdc0086e39719bcc1e3c1f979481a&units=f&query=Halifax";

const request = http.request(url, (response) => {

    let data = "";

    response.on("data", (chunk) => {
        data += chunk.toString();
    });

    response.on("end", () => {
        const body = JSON.parse(data);
        console.log(body);
    });

    response.on("error", () => {
        
    });
});


request.end();