const express = require('express');
const dotenv = require('dotenv');
const axios = require('axios');
const https = require('https');
const urlencode = require('urlencode');
const app = express();
dotenv.config();
const port = process.env.PORT;
let isDisableKeepAlive = false;
app.use(function (req, res, next) {
  if (isDisableKeepAlive) {
    res.set('Connection', 'close');
  }
  next();
});
function getSummonerInfoByName(name) {
  return new Promise(function (resolve, reject) {
    const encodedName = urlencode(name);

    const url =
      `https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/${encodedName}` +
      `?api_key=${process.env.RIOT_API_KEY}`;

    https.get(url, function (response) {
      response.on('data', function (data) {
        const summonerData = JSON.parse(data);
        resolve(summonerData);
      });
    });
  });
}
function getSummonerMantchHistory(accountId, beginIndex, endIndex) {
  return new Promise(function (resolve, reject) {
    const url =
      `https://kr.api.riotgames.com/lol/match/v4/matchlists/by-account/${accountId}` +
      `?endIndex=${endIndex}&beginIndex=${beginIndex}&api_key=${process.env.RIOT_API_KEY}`;

    https.get(url, function (response) {
      response.on('data', function (data) {
        const matchHistory = JSON.parse(data);
        resolve(matchHistory);
      });
    });
  });
}

app.get('/', async function (req, res) {
  const summonerInfo = await getSummonerInfoByName('그어억');
  res.send(summonerInfo);
});

app.get('/:summonerName', async function (req, res) {
  const summonerName = req.params.summonerName;
  const summonerInfo = await getSummonerInfoByName(summonerName);
  res.send(summonerInfo);
});

app.get('/match/:summonerName', async function (req, res) {
  const summonerName = req.params.summonerName;
  const { accountId } = await getSummonerInfoByName(summonerName);
  const beginIndex = 0;
  const endIndex = 20;
  const matchHistory = await getSummonerMantchHistory(
    accountId,
    beginIndex,
    endIndex
  );
  res.send(matchHistory);
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
