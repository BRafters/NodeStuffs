const fs = require("fs");
const chalk = require("chalk");
const yargs = require("yargs");
const noteFunc = require("./notes.js");

yargs.command({
    command: "add", 
    describe: "Adds a new note",
    builder: {
        title: {
            describe: "Note title",
            type: "string",
            demandOption: true
        },
        body: {
            describe: "Body of the note",
            type: "string",
            demandOption: true
        }
    },
    handler: function(argv){
        try{
            // const title = argv.title; //.replace(/ /g, "_");
            // const body = argv.body;
            const bookJSON = {title: argv.title, body: argv.body};
            noteFunc.newNote(bookJSON);
            console.log(chalk.inverse.bold.green("Note created!"));
        }catch(e){
            console.log(chalk.inverse.bold.red(e));
        }
    }
});

// Create remove command
yargs.command({
    command: "remove",
    describe: "Removes a note",
    handler: function(){
        console.log("Removes the note");
    }
});

// Lists notes
yargs.command({
    command: "list",
    describe: "Lists all notes to the terminal",
    handler: () => {console.log("listing notes")}
});

// Read a note
yargs.command({
    command: "read",
    describe: "reads a note",
    handler: () => {console.log("Reading note")}
});

yargs.parse();
// console.log(yargs.argv);


// Add function needs the title and the body of the note we are working on
// Remove function needs the title of the note
// List function needs to have the title of the note