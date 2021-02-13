import React from 'react';
import styled from 'styled-components';

import GameStats from './GameStats';

const Container = styled.div`
  width: 100%;
  height: 110px;
  display: flex;
  flex-flow: row;
  align-items: center;
  margin-bottom: 1.5rem;
  padding: 1rem;

  background: rgba(255, 255, 255, 1);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.15);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  box-sizing: border-box;
`;

function Component() {
  return (
    <Container>
      <GameStats></GameStats>
    </Container>
  );
}

export default Component;
