import React from 'react';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';

import State from '@State';
import color from '@Utils/Color';

const Container = styled.div`
  width: 85%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${color.flexTierBackground};
  color: ${color.flexTierText};
  box-shadow: 0 8px 32px 0 ${color.flexTierShadow};
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid ${color.flexTierBorder};
  font-size: 1.1rem;
`;

function Component() {
  const summonerData = useRecoilValue(State.summonerData);

  let tier, rank, leaguePoints;

  if (summonerData.data.teamRank) {
    tier = summonerData.data.teamRank.tier;
    rank = summonerData.data.teamRank.rank;
    leaguePoints = summonerData.data.teamRank.leaguePoints;
  }

  return (
    <Container>
      {summonerData.data.teamRank &&
      summonerData.data.teamRank.tier !== 'unranked'
        ? `${tier} ${rank} ${leaguePoints} LP`
        : 'Unranked'}
    </Container>
  );
}

export default Component;
