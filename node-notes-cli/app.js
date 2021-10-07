// require each functionality of modules that do single functions,
// such as display all notes
// const fs = require('fs');
const create = require('./createNote');
const data = require('./data.json');
const command = process.argv[2];

function readToConsole() {
  for (let i = 1; i < data.nextId; i++) {
    for (const note in data.notes) {
      if (parseInt(note) === i) {
        console.log(`${note}: ${data.notes[note]}`);
      }
    }
  }
}
if (command === 'read') {
  readToConsole();
} else if (command === 'create') {
  create();
}

// fs.readFile(dataJSONStr, 'utf8', (err, data) => {

// });
