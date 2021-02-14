import React from 'react';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';

import State from '@State';
import ImageLink from '@Utils/ImageLink';
// import color from '@Utils/Color';

const Container = styled.img`
  width: 120px;
  height: 120px;
  align: center;
`;

function Component() {
  const summonerData = useRecoilValue(State.summonerData);

  console.log(summonerData.data.soloLank);
  return (
    <Container
      src={
        summonerData.data.soloLank &&
        summonerData.data.soloLank.tier !== 'unranked'
          ? ImageLink(
              summonerData.data.soloLank.tier,
              summonerData.data.soloLank.rank
            )
          : 'https://opgg-static.akamaized.net/images/medals/default.png?image=q_auto:best&v=1'
      }
    />
  );
}

export default Component;
