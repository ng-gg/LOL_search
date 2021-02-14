import React from 'react';
import styled from 'styled-components';

import Match from './Match';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column;
  padding: 1.5rem;
  box-sizing: border-box;
`;

function Component() {
  return (
    <Container>
      <Match win={true}></Match>
      <Match win={false}></Match>
      <Match></Match>
    </Container>
  );
}

export default Component;
