var request = require("supertest");
var app = require('../index');

describe('Test the root path', () => {
    test('It should respond to the GET method', async () => {
      const res = await request(app).get("/");
  
      expect(res.statusCode).toBe(200);
    });
  });

describe('Test a get request at the /api/grades path', () => {
  let res;

  beforeAll(async() => {
    res = await request(app).get("/api/grades");
  })

  test('It should respond to the GET request with a status code of 200', async() => {
    expect(res.statusCode).toBe(200);
  })
  
  test('The response body contains a grades array', async() => {
    expect(Array.isArray(res.body.grades)).toBe(true);
  })
})

describe('Test a post request at the /api/grades path', () => {
  let res;

  beforeAll(async() => {
    res = await request(app)
      .post("/api/grades")
      .send({
        name: 'Tester',
        course: 'TDD',
        score: 100
      })
  });

  test('It should respond to the POST request with a status code of 201', async() => {
    expect(res.statusCode).toBe(201);
  })

  test('The response body contains an object with all values passed in the request body as well as auto-generated values', async() => {
    expect(res.body.insertedGrade).toHaveProperty('course')
    expect(res.body.insertedGrade).toHaveProperty('name')
    expect(res.body.insertedGrade).toHaveProperty('score')
    expect(res.body.insertedGrade).toHaveProperty('createdAt')
    expect(res.body.insertedGrade).toHaveProperty('gradeId')
  })
})

describe('Test a put request at the /api/grades/:id path', () => {
  let res;
  const gradeId = 30;
    beforeAll(async() => {
      res = await request(app)
        .put(`/api/grades/${gradeId}`)
        .send({
          name: 'Replacer',
          course: 'Editing',
          score: 8
        })
    });

  test('It should respond to the POST request with a status code of 201', async() => {
    expect(res.statusCode).toBe(200);
  })

  test('The response body contains an object with all values passed in the request body as well as auto-generated values', async() => {
    expect(res.body.updatedGrade).toHaveProperty('course')
    expect(res.body.updatedGrade).toHaveProperty('name')
    expect(res.body.updatedGrade).toHaveProperty('score')
    expect(res.body.updatedGrade).toHaveProperty('createdAt')
    expect(res.body.updatedGrade).toHaveProperty('gradeId')
  })

  // test('The gradeId of the updated grade should be the same as the gradeId in the request', async() => {
  //   expect(res.body.udpatedGrade.gradeId).toBe(gradeId);
  // })

})
