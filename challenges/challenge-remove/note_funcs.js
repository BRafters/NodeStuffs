const fs = require('fs');
const chalk = require('chalk');
const fileName = "notes.json";
const addNote = (title, body) => {
    const notes = listNotes();
    let dupNotes = notes.filter(note => {
        return note.title === title;
    });

    if(dupNotes > 0){
        console.log(chalk.inverse.bold.red("Note already added"));
        return;
    }

    notes[notes.length] = {title: title, body: body};
    saveNotes(notes);
}
const removeNote = (title) => {
    // Filter can be used to remove the object you do not want
    const notes = listNotes();
    let newNotes = notes.filter(note => {
        return note.title !== title;
    });

    saveNotes(newNotes);
}
const listNotes = () => {
    try{
        const notesJSON = JSON.parse(fs.readFileSync(fileName));
        return notesJSON;
    }
    catch(e){
        return [];
    }
}
const saveNotes = (notes) => {
    const notesJSONString = JSON.stringify(notes);
    fs.writeFileSync(fileName, notesJSONString);
}

module.exports = {addNote, listNotes, removeNote};