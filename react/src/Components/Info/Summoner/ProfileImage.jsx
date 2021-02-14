import React from 'react';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';

import State from '@State';

const Container = styled.img`
  width: 50px;
  height: 50px;
  align: center;
  border-radius: 15px;
`;

function Component() {
  const summonerData = useRecoilValue(State.summonerData);
  return (
    <Container
      src={
        summonerData.data.profileIconUrl
          ? summonerData.data.profileIconUrl
          : 'https://ddragon.leagueoflegends.com/cdn/11.3.1/img/profileicon/4863.png'
      }
    />
  );
}

export default Component;
