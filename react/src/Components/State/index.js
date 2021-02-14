import { atom } from 'recoil';

const state = {
  searchName: atom({
    key: 'searchName',
    default: '',
  }),
  summonerData: atom({
    key: 'summonerData',
    default: {
      message: 'API fail - unregistered summoner name.',
      data: {
        requestedName: 'requested Summoner Name',
      },
    },
  }),
};

export default state;
