const express = require('express');
const dotenv = require('dotenv');
// const axios = require('axios');
// const https = require('https');
// const urlencode = require('urlencode');
const app = express();

const summoner = require('./routes/summoner');
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

app.use('/api/summoner', summoner);

app.get('/', async function (req, res) {
  res.write('<h1>NG.GG RIOT API</h1>');
  res.send();
});

app.get('/test', async function (req, res) {
  const { id } = await riotAPI.getSummonerInfoByName('소송왕잡스');
  const summonerLeagueObject = await riotAPI.getSummoerLeagueInfo(id);
  res.send(summonerLeagueObject);
  // {
  //   "id": "6zChb2CMq4LbR6VKNzmznSrwimXRV0JRNdTNdH9mQgGo8A",
  //   "accountId": "yP-JNUmVxanbXuXwmzoNYeGqIMAu5iFUalt7rc71uUpL",
  //   "puuid": "BZ62xI7WZLoEN2-dfD1yIIHXitFCdshPZiTH-4AEU4Kr6KcvqTBDeuDCys_-dQBQ3bgAyKvH1jzWeA",
  //   "name": "소송왕잡스",
  //   "profileIconId": 4863,
  //   "revisionDate": 1612941381000,
  //   "summonerLevel": 257
  //   }
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
