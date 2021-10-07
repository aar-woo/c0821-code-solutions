const fs = require('fs');
const data = require('./data.json');
const noteText = process.argv[3];

function createNote() {
  data.notes[data.nextId] = noteText;
  data.nextId++;
  // console.log(data);
  const dataJSONStr = JSON.stringify(data);

  fs.writeFile('data.json', dataJSONStr, err => {
    if (err) throw err;
  });
}

module.exports = createNote;
