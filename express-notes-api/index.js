const express = require('express');
const app = express();
const data = require('./data.json');
const fs = require('fs');

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
  }
  if (!Object.prototype.hasOwnProperty.call(data.notes, id)) {
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
  } else {
    const id = data.nextId;
    data.nextId++;
    req.body.id = id;
    data.notes[id] = req.body;
    const dataJSON = JSON.stringify(data, null, 2);
    fs.writeFile('data.json', dataJSON, err => {
      if (err) {
        const err = {
          error: 'An unexpected error occured.'
        };
        res.status(500);
        res.json(err);
      } else {
        res.status(201);
        res.json(data.notes[id]);
      }
    });
  }
});

app.delete('/api/notes/:id', function (req, res) {
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
    res.status(400);
    res.json(err);
  } else {
    delete data.notes[id];
    const dataJSON = JSON.stringify(data, null, 2);
    fs.writeFile('data.json', dataJSON, err => {
      if (err) {
        const err = {
          error: 'An unexpected error occured.'
        };
        res.status(500);
        res.json(err);
      }
      res.sendStatus(204);
    });
  }
});

app.put('/api/notes/:id', function (req, res) {
  const id = req.params.id;
  let err;
  if (!(id > 0) || JSON.stringify(req.body) === '{}') {
    if (!(id > 0)) {
      err = {
        error: 'id must be a positive integer'
      };
    } else {
      err = {
        error: 'content is a required field'
      };
    }
    res.status(400);
    res.json(err);
  } else if (!Object.prototype.hasOwnProperty.call(data.notes, id)) {
    err = {
      error: `cannot find note with id ${id}`
    };
    res.status(404);
    res.json(err);
  } else {
    req.body.id = parseInt(id);
    data.notes[id] = req.body;

    const dataJSON = JSON.stringify(data, null, 2);
    fs.writeFile('data.json', dataJSON, err => {
      if (err) {
        err = {
          error: 'An unexpected error occured.'
        };
        res.status(500);
        res.json(err);
      }
      res.status(200);
      res.json(data.notes[id]);
    });
  }
});

app.listen(3000, () => {
  // console.log('Port 3000 listening');
});
