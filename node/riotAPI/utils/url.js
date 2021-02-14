module.exports = {
  summoner_v4: function (encodedName) {
    return (
      `https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/${encodedName}` +
      `?api_key=${process.env.RIOT_API_KEY}`
    );
  },
  match_v4_matchList: function (accountId, beginIndex, endIndex) {
    return (
      `https://kr.api.riotgames.com/lol/match/v4/matchlists/by-account/${accountId}` +
      `?endIndex=${endIndex}&beginIndex=${beginIndex}&api_key=${process.env.RIOT_API_KEY}`
    );
  },

  match_v4_matchDetails: function (matchId) {
    return `https://kr.api.riotgames.com/lol/match/v4/matches/${matchId}?api_key=${process.env.RIOT_API_KEY}`;
  },

  league_v4: function (encryptedSummonerId) {
    return (
      `https://kr.api.riotgames.com/lol/league/v4/entries/by-summoner/` +
      `${encryptedSummonerId}?api_key=${process.env.RIOT_API_KEY}`
    );
  },

  profileIconUrl: function (profileIconId) {
    return (
      `https://ddragon.leagueoflegends.com/cdn/11.3.1/img/profileicon/` +
      `${profileIconId}.png`
    );
  },

  championListUrl: function () {
    return `https://ddragon.leagueoflegends.com/cdn/11.3.1/data/en_US/champion.json`;
  },

  championImageUrlByName: function (champName) {
    return `https://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/${champName}.png`;
  },

  spellListUrl: function () {
    return `https://ddragon.leagueoflegends.com/cdn/11.3.1/data/en_US/summoner.json`;
  },

  spellImageUrlByName: function (spellName) {
    return `https://ddragon.leagueoflegends.com/cdn/11.3.1/img/spell/${spellName}.png`;
  },

  itemImageUrlById: function (itemId) {
    return `https://ddragon.leagueoflegends.com/cdn/11.3.1/img/item/${itemId}.png`;
  },
};
