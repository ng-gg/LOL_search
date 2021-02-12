import React from 'react';
import styled from 'styled-components';

import color from '@Utils/Color';
import Title from './Title';
import TierImage from './TierImage';
import TierScore from './TierScore';

const Container = styled.div`
  width: 100%;
  height: 100%;
  background: ${color.flexBackground};
  border-radius: 20px;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  box-shadow: 0 8px 20px 0 rgba(31, 38, 135, 0.37);
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
