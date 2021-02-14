import axios from 'axios';

const config = {
  baseURL: 'http://nggg.kro.kr:3000',
};
const api = {
  getProfile: async function (summonerName) {
    const response = await axios.get(
      `/api/summoner/profile/${summonerName}`,
      config
    );
    return response.data;
  },
};

export default api;
