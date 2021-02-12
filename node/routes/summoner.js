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

    const responseObject = {
      message: 'API success',
      data: matchHistory,
    };

    res.send(responseObject);
  } else {
    const responseObject = {
      message: 'API fail - unregistered summoner name.',
      data: {
        requestedName: summonerName,
      },
    };
    res.send(responseObject);
  }
});

router.get('/profile/:summonerName', async function (req, res) {
  const summonerName = req.params.summonerName;
  const summonerInfo = await riotAPI.getSummonerInfoByName(summonerName);

  if (!summonerInfo.status) {
    const { id, profileIconId } = summonerInfo;
    const profileIconUrl = urls.profileIconUrl(profileIconId);

    const summonerLeagueObject = await riotAPI.getSummoerLeagueInfo(id);

    const teamRankObject = {
      tier: 'unranked',
      rank: null,
      leaguePoints: null,
      wins: null,
      losses: null,
    };

    const soloRankObject = {
      tier: 'unranked',
      rank: null,
      leaguePoints: null,
      wins: null,
      losses: null,
    };

    if (summonerLeagueObject.length > 0) {
      summonerLeagueObject.forEach((leagueObject) => {
        if (leagueObject.queueType === 'RANKED_FLEX_SR') {
          teamRankObject.tier = leagueObject.tier;
          teamRankObject.rank = leagueObject.rank;
          teamRankObject.leaguePoints = leagueObject.leaguePoints;
          teamRankObject.wins = leagueObject.wins;
          teamRankObject.losses = leagueObject.losses;
        } else if (leagueObject.queueType === 'RANKED_SOLO_5x5') {
          soloRankObject.tier = leagueObject.tier;
          soloRankObject.rank = leagueObject.rank;
          soloRankObject.leaguePoints = leagueObject.leaguePoints;
          soloRankObject.wins = leagueObject.wins;
          soloRankObject.losses = leagueObject.losses;
        }
      });
    }

    const leagueInfo = {
      summmonerName: summonerName,
      profileIconUrl: profileIconUrl,
      soloLank: soloRankObject,
      teamRank: teamRankObject,
    };

    const responseObject = {
      message: 'API success',
      data: leagueInfo,
    };

    res.send(responseObject);
  } else {
    const responseObject = {
      message: 'API fail - unregistered summoner name.',
      data: {
        requestedName: summonerName,
      },
    };

    res.status(404).send(responseObject);
  }
});

module.exports = router;
