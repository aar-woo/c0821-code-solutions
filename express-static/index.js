const express = require('express');
const app = express();
const path = require('path');

const publicPath = path.join(__dirname, 'public');

const getPublicFile = express.static(publicPath);

app.use(getPublicFile);

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Port 3000 open');
});
