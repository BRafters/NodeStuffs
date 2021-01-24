const fs = require('fs');

const newNote = (newNote) => {
    // Parse the json from notes.json
    const allNotes = JSON.parse(fs.readFileSync("notes.json"));
    const length = allNotes.books.length;
    allNotes.books[length] = newNote;
    
    // Write this to the file
    fs.writeFileSync("notes.json", JSON.stringify(allNotes));
}

module.exports = { newNote };