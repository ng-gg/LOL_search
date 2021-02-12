import React from 'react';
import styled from 'styled-components';

import Chips from './Chips';

const Container = styled.div`
  width: 100%;
  height: 220px;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
`;

function Component() {
  return (
    <Container>
      <Chips />
    </Container>
  );
}

export default Component;
