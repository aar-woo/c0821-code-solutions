const data = require('./data.json');

function readNote() {
  for (const note in data.notes) {
    console.log(`${note}: ${data.notes[note]}`);
  }

}

module.exports = readNote;
