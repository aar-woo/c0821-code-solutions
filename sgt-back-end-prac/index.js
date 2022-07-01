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
    const queryResponse = await db.query(sql);
    grades = queryResponse.rows;
    res.status(200).json(grades);
  } catch (err) {
    res.status(500).json({
      error: 'Sorry an error occurred while querying the database'
    });
  }

});

app.use(express.json());

app.post('/api/grades', async (req, res, next) => {
  const { name, course, score } = req.body;
  if (score < 0 || score > 100 || !score || !course || !name) {
    res.status(400).json({
      error: 'Invalid request, must contain name, course, and a score between 0 and 100'
    });
  }

  const sql = `
        INSERT into "grades" ("name", "course", "score")
        values ($1, $2, $3)
        returning *;
    `;

  const values = [name, course, score];

  try {
    const queryResponse = await db.query(sql, values);
    const insertedGrade = queryResponse.rows[0];
    res.status(201).json({
      insertedGrade
    });
  } catch (err) {
    res.status(500).json({
      error: 'Sorry an error occurred while querying the database'
    });
  }
});

app.listen(3000, () => {
  // console.log('Listening on port 3000')
});
