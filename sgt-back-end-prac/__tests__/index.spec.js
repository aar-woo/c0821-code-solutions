var request = require("supertest");
var app = require('../index');

describe('Test the root path', () => {
    test('It should respond to the GET method', async () => {
      const res = await request(app).get("/");
  
      expect(res.statusCode).toBe(200);
    });
  });

describe('Test the /api/grades path', () => {

  test('It should respond to the GET method and return an array of objects', async() => {
    const res = await request(app).get("/api/grades");
    expect(res.statusCode).toBe(200);
    const grades = res.rows;
    expect(Array.isArray(res.body.grades)).toBe(true);
  })
})