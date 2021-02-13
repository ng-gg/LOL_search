import React from 'react';
import styled from 'styled-components';

import LeftSection from '@Section/Left';
import MiddleSection from '@Section/Middle';
import RightSection from '@Section/Right';

const Container = styled.div`
  width: 1200px;
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
