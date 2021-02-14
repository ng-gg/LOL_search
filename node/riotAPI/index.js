const https = require('https');
const urlencode = require('urlencode');
const { get } = require('../routes/summoner');
const urls = require('./utils/url');

module.exports = {
  getSummonerInfoByName: function (name) {
    return new Promise(function (resolve, reject) {
      const encodedName = urlencode(name);

      https.get(urls.summoner_v4(encodedName), function (response) {
        response.on('data', function (data) {
          const summonerData = JSON.parse(data);

          resolve(summonerData);
        });
      });
    });
  },

  getSummonerMantchHistory: function (accountId, beginIndex, endIndex) {
    return new Promise(function (resolve, reject) {
      https.get(
        urls.match_v4_matchList(accountId, beginIndex, endIndex),
        function (response) {
          response.on('data', function (data) {
            const matchHistory = JSON.parse(data);
            resolve(matchHistory);
          });
        }
      );
    });
  },
  getSummoerLeagueInfo: function (summonerId) {
    return new Promise(function (resolve, reject) {
      https.get(urls.league_v4(summonerId), function (response) {
        response.on('data', function (data) {
          const leagueInfo = JSON.parse(data);
          resolve(leagueInfo);
        });
      });
    });
  },

  getOneMatchDetail(matchId) {
    return new Promise(function (resolve, reject) {
      let mergeData = '';
      https.get(urls.match_v4_matchDetails(matchId), function (response) {
        response.on('data', function (data) {
          mergeData += data;
        });

        response.on('end', function () {
          const returnData = JSON.parse(mergeData);
          resolve(returnData);
        });
      });
    });
  },

  getChampionList() {
    return new Promise(function (resolve, reject) {
      let mergeData = '';

      https.get(urls.championListUrl(), function (response) {
        response.on('data', function (data) {
          mergeData += data;
        });

        response.on('end', function () {
          const returnData = JSON.parse(mergeData);
          resolve(returnData);
        });
      });
    });
  },

  getSpellList() {
    return new Promise(function (resolve, reject) {
      let mergeData = '';

      https.get(urls.spellListUrl(), function (response) {
        response.on('data', function (data) {
          mergeData += data;
        });

        response.on('end', function () {
          const returnData = JSON.parse(mergeData);
          resolve(returnData);
        });
      });
    });
  },
};
