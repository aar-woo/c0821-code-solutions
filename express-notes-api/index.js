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

app.get('/api/notes/:id', function (req, res) {
  const id = req.params.id;
  if (!(id > 0)) {
    const err = {
      error: 'id must be a positive integer'
    };
    res.status(400);
    res.json(err);
  } else if (!Object.prototype.hasOwnProperty.call(data.notes, id)) {
    const err = {
      error: `cannot find note with id ${id}`
    };
    res.status(404);
    res.json(err);
  }
  const note = data.notes[id];
  res.status(200);
  res.json(note);
});

app.use(express.json());

app.post('/api/notes', function (req, res) {
  if (JSON.stringify(req.body) === '{}') {
    const err = {
      error: 'content is a required field'
    };
    res.status(400);
    res.json(err);
  }
  // res.json(typeof req.body);
});

app.listen(3000, () => {
  // console.log('Port 3000 listening');
});
