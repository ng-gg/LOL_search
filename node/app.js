const express = require('express');
const dotenv = require('dotenv');
const axios = require('axios');
const https = require('https');
const urlencode = require('urlencode');
const app = express();

const riotAPI = require('./riotAPI');

dotenv.config();
const port = process.env.PORT;
let isDisableKeepAlive = false;
app.use(function (req, res, next) {
  if (isDisableKeepAlive) {
    res.set('Connection', 'close');
  }
  next();
});

app.get('/', async function (req, res) {
  const summonerInfo = await riotAPI.getSummonerInfoByName('그어억');
  res.send(summonerInfo);
});

app.get('/:summonerName', async function (req, res) {
  const summonerName = req.params.summonerName;
  const summonerInfo = await riotAPI.getSummonerInfoByName(summonerName);
  res.send(summonerInfo);
});

app.get('/match/:summonerName', async function (req, res) {
  const summonerName = req.params.summonerName;
  const { accountId } = await riotAPI.getSummonerInfoByName(summonerName);
  const beginIndex = 0;
  const endIndex = 20;
  const matchHistory = await riotAPI.getSummonerMantchHistory(
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
