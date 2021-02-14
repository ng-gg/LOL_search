const express = require('express');
const dotenv = require('dotenv');
// const axios = require('axios');
const https = require('https');
// const urlencode = require('urlencode');
<<<<<<< HEAD
const cors = require('cors');
=======
const urls = require('./riotAPI/utils/url');

>>>>>>> feat: 소환사이름에 해당하는 대전 기록 요청 API
const app = express();

const summoner = require('./routes/summoner');
const riotAPI = require('./riotAPI');

app.use(cors());

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

app.get('/test', async function (req, res) {
  let testQuery = req.query.startIndex;
  if (!testQuery) {
    testQuery = 950902;
  }
  res.send('testval : ' + testQuery);
});

// app.get('/champion', function (req, res) {
//   const champObj;

//   res.send(champObj);
// });

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
