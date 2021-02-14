import { atom } from 'recoil';

const state = {
  summonerName: atom({
    key: 'summonerName',
    default: 'unknown',
  }),
  searchName: atom({
    key: 'searchName',
    default: '',
  }),
};

export default state;
