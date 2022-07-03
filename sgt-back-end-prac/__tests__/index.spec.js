var request = require("supertest");
var app = require('../index');

describe('Test the root path', () => {
    test('It should respond to the GET method', async () => {
      const res = await request(app).get("/");
  
      expect(res.statusCode).toBe(200);
    });
  });

describe('Test the /api/grades path', () => {
  let res;
  
  beforeAll(async() => {
    res = await request(app).get("/api/grades");
  })

  test('It should respond to the GET method with a status code of 200', async() => {
    expect(res.statusCode).toBe(200);
  })
  
  test('The response body contain a grades array', async() => {
    expect(Array.isArray(res.body.grades)).toBe(true);
  })
})