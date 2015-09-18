var app = require('../app');
var request = require('supertest');

describe('heartbeat', function () {
  describe('on resource request will', function () {
    it('respond 200', function (done) {
      request(app)
      .get('/heartbeat')
      .expect('Content-Type', /json/)
      .expect(200, done)
    });
  });
});
