var router = require('express').Router();

const riotAPI = require('../riotAPI');
const urls = require('../riotAPI/utils/url');

router.get('/:summonerName', async function (req, res) {
  const summonerName = req.params.summonerName;
  const summonerInfo = await riotAPI.getSummonerInfoByName(summonerName);
  res.send(summonerInfo);
});

router.get('/matchhistory/:summonerName', async function (req, res) {
  const summonerName = req.params.summonerName;
  const summonerInfo = await riotAPI.getSummonerInfoByName(summonerName);

  if (summonerInfo.status === undefined) {
    const { accountId } = summonerInfo;
    const beginIndex = 0;
    const endIndex = 20;
    const matchHistory = await riotAPI.getSummonerMantchHistory(
      accountId,
      beginIndex,
      endIndex
    );
    res.send(matchHistory);
  } else {
    res.send(summonerInfo);
  }
});

router.get('/profile/:summonerName', async function (req, res) {
  const summonerName = req.params.summonerName;
  const summonerInfo = await riotAPI.getSummonerInfoByName(summonerName);

  if (summonerInfo.status === undefined) {
    const { id, profileIconId } = summonerInfo;

    const summonerLeagueObject = await riotAPI.getSummoerLeagueInfo(id);
    const profileIconUrl = urls.profileIconUrl(profileIconId);

    const [teamLankAllObject, soloLankAllObject] = summonerLeagueObject;

    const teamLankObject = {
      tier: teamLankAllObject.tier,
      rank: teamLankAllObject.rank,
      leaguePoints: teamLankAllObject.leaguePoints,
      wins: teamLankAllObject.wins,
      losses: teamLankAllObject.losses,
    };

    const soloLankObject = {
      tier: soloLankAllObject.tier,
      rank: soloLankAllObject.rank,
      leaguePoints: soloLankAllObject.leaguePoints,
      wins: soloLankAllObject.wins,
      losses: soloLankAllObject.losses,
    };

    const leagueInfo = {
      summmonerName: summonerName,
      profileIconUrl: profileIconUrl,
      soloLank: soloLankObject,
      teamLank: teamLankObject,
    };

    res.send(leagueInfo);
  } else {
    res.send(summonerInfo);
  }
});

module.exports = router;
