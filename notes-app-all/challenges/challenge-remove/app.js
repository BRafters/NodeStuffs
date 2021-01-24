const yargs = require('yargs');
const chalk = require('chalk');
const fs = require('fs');
const notes = require("./note_funcs.js");

yargs.command({
    command: "add",
    desc: "Adds a note",
    builder: {
        title: {
            describe: "Note title",
            demandOption: true,
            type: "string"
        },
        body: {
            describe: "Note body",
            demandOption: true,
            type: "string"
        }
    },
    handler: function(argv){
        notes.addNote(argv.title, argv.body);
    }
});

yargs.command({
    command: "remove",
    desc: "Removes a note",
    builder: {
        title: {
            describe: "Note title",
            demandOption: true,
            type: "string"
        }
    },
    handler: function(argv){
        notes.removeNote(argv.title);
    }
});
yargs.parse();