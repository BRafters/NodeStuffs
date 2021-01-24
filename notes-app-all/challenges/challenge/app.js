const fs = require('fs');

const piJSON = JSON.parse(fs.readFileSync('data.json'));
piJSON.name = "Brennan";
piJSON.age = 21;

fs.writeFileSync("data.json", JSON.stringify(piJSON));