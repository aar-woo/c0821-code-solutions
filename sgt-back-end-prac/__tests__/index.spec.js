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

describe('Test a put request at the /api/grades', () => {
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


  test('It should respond to the PUT request with a status code of 201', async() => {
    expect(res.statusCode).toBe(201);
  })


})