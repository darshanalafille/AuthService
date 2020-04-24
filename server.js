'use strict';
const ip = require('ip');
const express = require('express');
const randomString = require('randomstring');

const ipAddress = ip.address();

const xxx = randomString.generate({
  length: 7,
  charset: 'numeric'
});

// Constants
const PORT = 8081;
const HOST = '0.0.0.0';

var results = {
  id : xxx,
  authStatus : true,
  ip:ipAddress
};

// App
const app = express();
app.get('/', (req, res) => {
  //res.send('Hello World : ' + xxx);
  res.json(results);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);