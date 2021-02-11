const https = require('https');
const urlencode = require('urlencode');

module.exports = {
  getSummonerInfoByName: function (name) {
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
  },

  getSummonerMantchHistory: function (accountId, beginIndex, endIndex) {
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
  },
};
