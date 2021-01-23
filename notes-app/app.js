const fs = require("fs");
const chalk = require("chalk");
const yargs = require("yargs");
const notes = require("./notes.js");
const { demandOption } = require("yargs");

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
    handler (argv){
        notes.addNotes(argv.title, argv.body);
    }
});

// Create remove command
yargs.command({
    command: "remove",
    describe: "Removes a note",
    builder: {
        title: {
            desc: "Note title",
            demandOption: true,
            type: "string"
        }
    },
    handler (argv){
        // Send to the handler function
        notes.removeNote(argv.title);
    }
});

// Lists notes
yargs.command({
    command: "list",
    describe: "Lists all notes to the terminal",
    handler () {console.log("listing notes")}
});

// Read a note
yargs.command({
    command: "read",
    describe: "reads a note",
    builder: {
        a: {
            desc: "Reads all files",
            demandOption: false,
            type: "boolean"
        },
        title: {
            desc: "Searches all notes by title",
            demandOption: false,
            type: "string"
        }
    },
    handler (argv) {
        argv.a ? notes.readAllNotes() : "";
        argv.title ? notes.readNote(argv.title) : "";
    }
});

yargs.parse();
// console.log(yargs.argv);


// Add function needs the title and the body of the note we are working on
// Remove function needs the title of the note
// List function needs to have the title of the note