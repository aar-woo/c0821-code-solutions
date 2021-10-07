const data = require('./data.json');

function readNote() {
  for (let i = 1; i < data.nextId; i++) {
    for (const note in data.notes) {
      if (parseInt(note) === i) {
        console.log(`${note}: ${data.notes[note]}`);
      }
    }
  }
}

module.exports = readNote;
