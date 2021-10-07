const fs = require('fs');
const data = require('./data.json');
const noteID = process.argv[3];
const updatedText = process.argv[4];

function updateNote() {
  data.notes[noteID] = updatedText;

  const dataJSONStr = JSON.stringify(data, null, 2);

  fs.writeFile('data.json', dataJSONStr, err => {
    if (err) throw err;
  });
}

module.exports = updateNote;
