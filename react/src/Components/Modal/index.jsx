import React from 'react';
import styled from 'styled-components';

import LeftSection from '@Section/Left';
import MiddleSection from '@Section/Middle';
import RightSection from '@Section/Right';

const Container = styled.div`
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 20px;
  box-sizing: border-box;
  width: 1200px;
  height: 800px;
  display: flex;
  flex-flow: row;
`;

function Component() {
  return (
    <Container>
      <LeftSection />
      <MiddleSection />
      <RightSection />
    </Container>
  );
}

export default Component;
