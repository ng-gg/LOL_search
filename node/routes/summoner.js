var router = require('express').Router();

const riotAPI = require('../riotAPI');

router.get('/:summonerName', async function (req, res) {
  const summonerName = req.params.summonerName;
  const summonerInfo = await riotAPI.getSummonerInfoByName(summonerName);
  res.send(summonerInfo);
});

router.get('/matchhistory/:summonerName', async function (req, res) {
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

module.exports = router;
