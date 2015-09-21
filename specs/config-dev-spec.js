var expect = require('chai').expect;
var config;

describe('environments:', function () {
  describe('dev has configuration', function () {
    process.env.NODE_ENV = 'dev';
    config = require('../lib/config');

    it('application name', function () {
      expect(config.get('application:name')).to.equal('vision');
    });

    it('port', function () {
      expect(config.get('express:port')).to.equal(3000);
    });
  });
  describe('test has configuration', function () {
    process.env.NODE_ENV = 'test';
    config = require('../lib/config');

    it('application name', function () {
      expect(config.get('application:name')).to.equal('vision');
    });

    it('port', function () {
      expect(config.get('express:port')).to.equal(4000);
    });
  });
});
