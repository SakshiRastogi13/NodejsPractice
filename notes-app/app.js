const getNotes = require('./notes.js')
const chalk = require('chalk')

const command = process.argv[2]
console.log(process.argv)
if (command === 'add') {
    console.log("Adding note !")
} else if (command === 'remove') {
    console.log("Removing note")
} else if (command === "edit") {
    console.log("Edit Note")
}