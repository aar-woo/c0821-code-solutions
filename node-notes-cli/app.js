const readNote = require('./readNote');
const createNote = require('./createNote');
const deleteNote = require('./deleteNote');
const updateNote = require('./updateNote');
const command = process.argv[2];

if (command === 'read') {
  readNote();
} else if (command === 'create') {
  createNote();
} else if (command === 'delete') {
  deleteNote();
} else if (command === 'update') {
  updateNote();
}
