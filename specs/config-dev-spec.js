var expect = require('chai').expect;
var config;

describe('dev environment has configuration', function () {
  //process.env.NODE_ENV = 'test';
  config = require('../lib/config');

  it('application name', function () {
    expect(config.get('application:name')).to.equal('vision');
  });

  it('port', function () {
    expect(config.get('express:port')).to.equal(4000);
  });
});
