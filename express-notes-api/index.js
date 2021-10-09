const express = require('express');
const app = express();
const data = require('./data.json');

app.get('/api/notes', function (req, res) {
  res.status(200);
  res.json(data);
});

app.listen(3000, () => {
  // console.log('Port 3000 listening');
});
