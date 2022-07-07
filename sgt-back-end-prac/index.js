const express = require('express');
const app = express();
const pg = require('pg');
const db = new pg.Pool({
  connectionString: 'postgres://localhost/studentGradeTable'
});

app.get('/', async (req, res) => {
    res.status(200).json("Hello World!");
})

app.get('/api/grades', async (req, res, next) => {
  const sql = `
        SELECT * from "grades";
    `;
  let grades;

  try {
    const queryResponse = await db.query(sql);
    grades = queryResponse.rows;
    res.status(200).json({grades});
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

app.put('/api/grades/:gradeId', async (req, res, next) => {
  const id = req.params.gradeId;
  const { name, course, score } = req.body;

  if (!(id > 0) || score < 0 || score > 100 || !score || !course || !name) {
    res.status(400).json({
      error: 'Invalid request, gradeId must be a positive integer, request must contain name, course, and a score between 0 and 100'
    });
    return;
  }

  const sql = `
        UPDATE "grades"
            set "name"      = $1,
                "course"    = $2,
                "score"     = $3
          where "gradeId" = $4
          returning *;
    `;
  const values = [name, course, score, id];

  try {
    const queryResponse = await db.query(sql, values);
    const updatedGrade = queryResponse.rows[0];
    if (!updatedGrade) {
      res.status(404).json({
        error: 'A grade with this gradeId does not exist in the database'
      });
      return;
    }
    res.status(200).json({
      updatedGrade
    });
  } catch (err) {
    res.status(500).json({
      error: 'Sorry an error occurred while querying the database'
    });
  }
});

app.delete('/api/grades/:gradeId', async (req, res) => {
  const id = req.params.gradeId;
  if (!(id > 0)) {
    res.status(400).json({
      error: 'Invalid request, gradeId must be a positive integer'
    });
    return;
  }

  const sql = `
        DELETE from "grades"
          where "gradeId" = $1
          returning *;
    `;
  const values = [id];

  try {
    const queryResponse = await db.query(sql, values);
    const deletedGrade = queryResponse.rows[0];
    if (!deletedGrade) {
      res.status(404).json({
        error: 'A grade with this gradeId does not exist in the database'
      });
      return;
    }
    res.status(204).json(deletedGrade);
  } catch (err) {
    res.status(500).json({
      error: 'Sorry an error occurred while querying the database'
    });
  }
});

app.set('port', 3000);

module.exports = app;

// app.listen(3000, () => {
//   // console.log('Listening on port 3000')
// });
