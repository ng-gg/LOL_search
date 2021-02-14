import React from 'react';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';

import state from '@State';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  font-weight: bold;
`;

function Component() {
  const summonerData = useRecoilValue(state.summonerData);

  return (
    <Container>
      {!summonerData.data.summmonerName
        ? 'unknown'
        : summonerData.data.summmonerName}
    </Container>
  );
}

export default Component;
