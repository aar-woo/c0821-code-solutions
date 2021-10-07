const fs = require('fs');
const fileToRead = process.argv[2];
const fileCopyTo = process.argv[3];

fs.readFile(fileToRead, 'utf8', (err, data) => {
  if (err) throw err;

  fs.writeFile(fileCopyTo, data + '\n', err => {
    if (err) throw err;
  });
});
