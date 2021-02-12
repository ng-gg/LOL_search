import React from 'react';
import styled from 'styled-components';

import color from '@Utils/Color';

const Container = styled.div`
  font-weight: 500;
  font-size: 1.2rem;
  color: ${color.flexTierText};
`;

function Component() {
  return <Container>자유 랭크</Container>;
}

export default Component;
