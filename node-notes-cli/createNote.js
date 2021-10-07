const fs = require('fs');
const data = require('./data.json');
const noteText = process.argv[3];

function createNote() {
  data.notes[data.nextId] = noteText;
  data.nextId++;

  const dataJSONStr = JSON.stringify(data, null, 2);

  fs.writeFile('data.json', dataJSONStr, err => {
    if (err) throw err;
  });
}

module.exports = createNote;
