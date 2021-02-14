var router = require('express').Router();

const riotAPI = require('../riotAPI');
const urls = require('../riotAPI/utils/url');

//functions
function getChampionNameById(championId, championList) {
  championList = championList.data;
  for (key in championList) {
    if (championList[key].key === String(championId)) {
      return championList[key].id; //champion Name;
    }
  }
}

async function getPlayerInfoByIndex(index, matchDetail, championList) {
  const playerChampionId = matchDetail.participants[index].championId;
  let plyerChampionImageUrl = '';
  const playerChampionName = await getChampionNameById(
    playerChampionId,
    championList
  );

  plyerChampionImageUrl = await urls.championImageUrlByName(playerChampionName);

  return {
    summonerName: matchDetail.participantIdentities[index].player.summonerName,
    teamId: matchDetail.participants[index].teamId,
    champion: {
      champName: playerChampionName,
      imageUrl: plyerChampionImageUrl,
    },
  };
}

function getSpellImageUrlById(spellId, spellList) {
  spellList = spellList.data;

  for (key in spellList) {
    if (spellList[key].key === String(spellId)) {
      return urls.spellImageUrlByName(key);
    }
  }
  return 'Spell Not found - ' + spellId;
}

// function sleep(miliseconds) {
//   var currentTime = new Date().getTime();

//   while (currentTime + miliseconds >= new Date().getTime()) {}
// }

//router
router.get('/:summonerName', async function (req, res) {
  const summonerName = req.params.summonerName;
  const summonerInfo = await riotAPI.getSummonerInfoByName(summonerName);
  res.send(summonerInfo);
});

router.get('/matchhistory/:summonerName', async function (req, res) {
  const summonerName = req.params.summonerName;
  const summonerInfo = await riotAPI.getSummonerInfoByName(summonerName);

  if (!summonerInfo.status) {
    const { accountId } = summonerInfo;
    const beginIndex = 0;
    const endIndex = 1;
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

router.get(
  '/matchhistory/matchdetails/:summonerName',
  async function (req, res) {
    const summonerName = req.params.summonerName;
    const summonerInfo = await riotAPI.getSummonerInfoByName(summonerName);

    let beginIndex = req.query.beginIndex;
    let endIndex = req.query.endIndex;

    const championList = await riotAPI.getChampionList();
    let spellList = await riotAPI.getSpellList();

    if (!summonerInfo.status) {
      const { accountId } = summonerInfo;

      if (!beginIndex) {
        beginIndex = 0;
      }
      if (!endIndex) {
        endIndex = 1;
      }

      if (beginIndex > endIndex) {
        const errorObject = {
          message: 'API fail - beginIndex should be less than endIndex',
          data: {
            beginIndex: beginIndex,
            endIndex: endIndex,
          },
        };
        res.send(errorObject);
      }

      const matchHistory = await riotAPI.getSummonerMantchHistory(
        accountId,
        beginIndex,
        endIndex
      );

      const matchIdArray = [];
      const matches = matchHistory.matches;
      matches.forEach((match) => {
        matchIdArray.push(match.gameId);
      });

      const matchDetailArr = [];

      for (let i = 0; i < matchIdArray.length; i++) {
        const matchId = matchIdArray[i];
        const matchDetail = await riotAPI.getOneMatchDetail(matchId);

        let participantId = '';
        let participantChampionId = '';
        let participantSpell1Id = '';
        let participantSpell2Id = '';
        let participantStats = '';

        matchDetail.participantIdentities.forEach((el) => {
          if (el.player.summonerName === summonerName) {
            participantId = el.participantId;
          }
        });

        const thisSummoner = matchDetail.participants[participantId - 1];

        participantChampionId = thisSummoner.championId;
        participantSpell1Id = thisSummoner.spell1Id;
        participantSpell2Id = thisSummoner.spell2Id;
        participantStats = thisSummoner.stats;

        const participantChampionName = getChampionNameById(
          participantChampionId,
          championList
        );
        const participantChampionImageUrl = urls.championImageUrlByName(
          participantChampionName
        );

        //destructuring

        // queueId : 게임 종류 코드
        // 900 - 우루프
        // 430 - 일반
        // 450 - 무작위총력전
        // 420 - 솔랭
        // 440 - 자유 5:5 랭크

        const matchObject = {
          queueId: matchDetail.queueId, //게임 종류
          gameDuration: matchDetail.gameDuration, //게임 총 시간
          win: participantStats.win, // 승/패  true/false
          kill: participantStats.kills,
          deaths: participantStats.deaths,
          assists: participantStats.assists,
          doubleKills: participantStats.doubleKills,
          tripleKills: participantStats.tripleKills,
          quadrakills: participantStats.quadrakills,
          pentaKills: participantStats.pentaKills,
          visionWardsBoughtInGame: participantStats.visionWardsBoughtInGame,
          championImageUrl: participantChampionImageUrl,
          championName: participantChampionName,
          summonerSpell1ImageUrl: getSpellImageUrlById(
            participantSpell1Id,
            spellList
          ),
          summonerSpell2ImageUrl: getSpellImageUrlById(
            participantSpell2Id,
            spellList
          ),
          championLevel: participantStats.champLevel,
          items: {
            item0: urls.itemImageUrlById(participantStats.item0),
            item1: urls.itemImageUrlById(participantStats.item1),
            item2: urls.itemImageUrlById(participantStats.item2),
            item3: urls.itemImageUrlById(participantStats.item3),
            item4: urls.itemImageUrlById(participantStats.item4),
            item5: urls.itemImageUrlById(participantStats.item5),
            item6: urls.itemImageUrlById(participantStats.item6),
          },
          participants: {
            team1: {
              player1: await getPlayerInfoByIndex(0, matchDetail, championList),
              player2: await getPlayerInfoByIndex(1, matchDetail, championList),
              player3: await getPlayerInfoByIndex(2, matchDetail, championList),
              player4: await getPlayerInfoByIndex(3, matchDetail, championList),
              player5: await getPlayerInfoByIndex(4, matchDetail, championList),
            },
            team2: {
              player6: await getPlayerInfoByIndex(5, matchDetail, championList),
              player7: await getPlayerInfoByIndex(6, matchDetail, championList),
              player8: await getPlayerInfoByIndex(7, matchDetail, championList),
              player9: await getPlayerInfoByIndex(8, matchDetail, championList),
              player10: await getPlayerInfoByIndex(
                9,
                matchDetail,
                championList
              ),
            },
          },
        };

        matchDetailArr.push(matchObject);
      }

      const responseObject = {
        message: 'API success',
        data: matchDetailArr,
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
  }
);

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

    res.send(responseObject);
  }
});

module.exports = router;
