const request = require('supertest');
const app = require('./app');

describe('GET /', () => {
  it('responds with text "Damar first app using VPS!"', (done) => {
    request(app)
      .get('/')
      .expect(200)
      .expect('Damar first app using VPS!', done);
  });
});

describe('GET /users', () => {
  it('responds with text "Ini get users"', (done) => {
    request(app)
      .get('/users')
      .expect(200)
      .expect('Ini get users', done);
  });
});