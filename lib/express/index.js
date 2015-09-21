var express = require('express');
var http = require('http');
var config = require('../config');
var app = express();

app.set('port', config.get('express:port'));

app.get('/heartbeat', function (req, res) {
  console.log(app.get('port')) ;
  res.json(200, 'OK');
});

http.createServer(app).listen(app.get('port'));

module.exports = app;
