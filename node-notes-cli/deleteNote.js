const fs = require('fs');
const data = require('./data.json');
const noteID = process.argv[3];

function deleteNote() {
  delete data.notes[noteID];
  const dataJSONStr = JSON.stringify(data, null, 2);

  fs.writeFile('data.json', dataJSONStr, err => {
    if (err) throw err;
  });
}

module.exports = deleteNote;
