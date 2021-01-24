const fs = require("fs");
const chalk = require("chalk");
const fileName = "notes.json";

// Adds a note
const addNotes = (title, body) => {
    const notes = loadNotes();
    const dupeNote = notes.find((note) => note.title === title);

    debugger

    if(dupeNote != undefined){
        console.log(chalk.inverse.bold.red("Note already added!"));
        return;
    }

    notes[notes.length] = {title: title, body: body};
    
    // Call the function "saveNotes"
    saveNotes(notes);
    console.log(chalk.inverse.bold.green("Note has been added!"));
};

// Removes a note
const removeNote = (title) => {
    // Grab all of the notes that we currently have
    const currentNotes = loadNotes();
    
    // Create a newNotes variable that holds all of the notes we didn't want to delete
    const newNotes = currentNotes.filter(note => {
        return note.title !== title;
    });

    // Compare the array size of both arrays, if the size remains the same, we know that the file was not deleted (not found)
    if(currentNotes.length === newNotes.length){
        console.log(chalk.inverse.bold.red("Could not find note"));
    }
    else{
        // newNotes will now be written to the file
        saveNotes(newNotes);
        console.log(chalk.inverse.bold.green("Removed target note"));
    }    
};

// Loads all of the notes from the file
const loadNotes = () => {
    try{
        const dataBuffer = fs.readFileSync(fileName);
        const dataJSON = JSON.parse(dataBuffer);
        return dataJSON;
    }
    catch(e){
        return [];
    }
};

const readNote = (title) => {
    const notes = loadNotes();
    const note = notes.find(note => note.title === title);
    console.log(`title: ${note.title} \n${note.body}`);
}

// Reads all notes from the file
const readAllNotes = () => {
    const notes = loadNotes();
    notes.forEach(note => {
        console.log(`title: ${note.title} \n${note.body}\n`);
    });
}

// Saves the notes to the file
const saveNotes = (notes) => {
    try{
        fs.writeFileSync(fileName, JSON.stringify(notes));
    }catch(e){
        console.log(chalk.inverse.bold.red("Filesystem error"));
    }
}


module.exports = {addNotes, loadNotes, removeNote, readAllNotes, readNote};