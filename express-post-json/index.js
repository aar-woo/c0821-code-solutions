const express = require('express');
const app = express();
let nextId = 1;
const grades = {

};
const expressJSON = express.json();

app.use(expressJSON); // need to call next() ??

app.get('/api/grades', function (req, res) {
  const gradesArr = [];
  for (const grade in grades) {
    gradesArr.push(grades[grade]);
  }
  res.json(gradesArr);
});

app.post('/api/grades', function (req, res) {
  req.body.id = nextId;
  nextId++;
  grades[req.body.id] = req.body;
  res.status(201);
  res.json(req.body);
});

app.listen(3000, () => {

});
