const express = require('express');
const app = express();
const data = require('./data.json');

app.get('/api/notes', function (req, res) {
  const notesArr = [];
  for (const note in data.notes) {
    notesArr.push(data.notes[note]);
  }
  res.status(200);
  res.json(notesArr);
});

// app.get('/api/notes/:id', function (req, res) {

// });

app.listen(3000, () => {
  // console.log('Port 3000 listening');
});
