import React from 'react';
import styled from 'styled-components';

import color from '@Utils/Color';
import Title from './Title';
import TierImage from './TierImage';
import TierScore from './TierScore';

const Container = styled.div`
  width: 100%;
  height: 100%;
  background: ${color.soloBackground};
  border-radius: 20px;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 6px 20px 0 rgba(147, 78, 166, 0.37);
`;

function Component() {
  return (
    <Container>
      <Title />
      <TierImage />
      <TierScore />
    </Container>
  );
}

export default Component;
