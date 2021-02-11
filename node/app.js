const express = require('express');
const dotenv = require('dotenv');
// const axios = require('axios');
// const https = require('https');
// const urlencode = require('urlencode');
const app = express();

const summoner = require('./routes/summoner');

dotenv.config();
const port = process.env.PORT;
let isDisableKeepAlive = false;
app.use(function (req, res, next) {
  if (isDisableKeepAlive) {
    res.set('Connection', 'close');
  }
  next();
});

app.use('/api/summoner', summoner);

app.get('/', async function (req, res) {
  res.write('<h1>NG.GG RIOT API</h1>');
  res.send();
});

app.listen(port, function () {
  process.send('ready');
  console.log(`application is listening on port ${port}...`);
});

process.on('SIGINT', function () {
  isDisableKeepAlive = true;
  app.close(function () {
    console.log('server closed');
    process.exit(0);
  });
});
