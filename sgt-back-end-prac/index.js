const express = require('express');
const app = express();
const pg = require('pg');
const db = new pg.Pool({
  connectionString: 'postgres://localhost/studentGradeTable'
});

app.get('/api/grades', async (req, res, next) => {
  const sql = `
        SELECT * from "grades";
    `;
  let grades;

  try {
    const queryResults = await db.query(sql);
    grades = queryResults.rows;
    res.status(200).json(grades);
  } catch (err) {
    res.status(500).json({
      error: 'Sorry an error occurred while querying the database'
    });
  }

});

app.listen(3000, () => {
  // console.log('Listening on port 3000')
});
