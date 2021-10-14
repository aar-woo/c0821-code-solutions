// const { json } = require('express');
const express = require('express');
const app = express();
const pg = require('pg');
const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});

app.get('/api/grades', function (req, res) {
  const sql = `
    select *
      from "grades"
  `;
  db.query(sql)
    .then(result => {
      const grades = result.rows;
      res.status(200).json(grades);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred'
      });
    });
});

app.use(express.json());
function hasProperty(object, property) {
  return Object.prototype.hasOwnProperty.call(object, property);
}

app.post('/api/grades', function (req, res) {
  const grade = req.body;
  if (!hasProperty(grade, 'name') || !hasProperty(grade, 'course') || !hasProperty(grade, 'score') ||
    grade.score < 0 || grade.score > 100) {
    res.status(400).json({
      error: 'invalid grade input'
    });
    return;
  }
  const sql = `
    insert into "grades" ("name", "course", "score")
      values ($1, $2, $3)
      returning *;
  `;
  const values = [grade.name, grade.course, grade.score];
  db.query(sql, values)
    .then(result => {
      res.status(201).json(result.rows[0]);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred'
      });
    });
});

app.put('/api/grades/:gradeId', function (req, res) {
  const gradeId = Number(req.params.gradeId);
  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    res.status(400).json({
      error: 'gradeId must be a positive integer'
    });
    return;
  }
  const gradeUpdate = req.body;
  if (!hasProperty(gradeUpdate, 'name') || !hasProperty(gradeUpdate, 'course') || !hasProperty(gradeUpdate, 'score') ||
    gradeUpdate.score < 0 || gradeUpdate.score > 100) {
    res.status(400).json({
      error: 'invalid grade input'
    });
    return;
  }
  const sql = `
    update "grades"
      set "name" = $1,
          "course" = $2,
          "score" = $3
        where "gradeId" = $4
      returning *;
  `;
  const values = [gradeUpdate.name, gradeUpdate.course, gradeUpdate.score, gradeId];
  db.query(sql, values)
    .then(result => {
      const grade = result.rows[0];
      if (!grade) {
        res.status(404).json({
          error: `Cannot find grade with gradeId: ${gradeId}`
        });
        return;
      }
      res.status(200).json(grade);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred'
      });
    });
});

app.delete('/api/grades/:gradeId', function (req, res) {
  const gradeId = Number(req.params.gradeId);
  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    res.status(400).json({
      error: 'gradeId must be a positive integer'
    });
    return;
  }
  const sql = `
    delete from "grades"
      where "gradeId" = $1
      returning *;
  `;
  const values = [gradeId];
  db.query(sql, values)
    .then(result => {
      const grade = result.rows[0];
      if (!grade) {
        res.status(404).json({
          error: `Cannot find grade with gradeId: ${gradeId}`
        });
        return;
      }
      res.status(204).json(grade);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred'
      });
    });
});

app.listen(3000, () => {
  // console.log('Listening on port 3000');
});
