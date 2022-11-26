const yargs = require("yargs")
const pkg = require("./package.json")
const { addNote, printNotes, removeNoteByid } = require("./notes.controller")

yargs.version(pkg.version)

yargs.command({
    command: "add",
    discribe: "Add new note to list",
    builder: {
        title: {
            type: "string",
            describe: "Note title",
            demandOption: true
        }
    },
    handler({ title }) {
        addNote(title)
    }
})

yargs.command({
    command: "list",
    discribe: "Print all notes",
    async handler() {
        printNotes()
    }
})

yargs.command({
    command: "remove",
    discribe: "Remove note by id",
    builder: {
        id: {
            type: "string",
            describe: "Note id",
            demandOption: true
        }
    },
    async handler({ id }) {
        removeNoteByid(id)
    }
})

yargs.parse();