const fs = require('fs');
const book = {
    title: 'Ego is the enemy',
    author: 'Ryan Holiday'
}

const bookJSON = JSON.stringify(book);
fs.writeFileSync("test.json", bookJSON);

const parsedData = JSON.parse(fs.readFileSync("test.json"));
console.log(parsedData);