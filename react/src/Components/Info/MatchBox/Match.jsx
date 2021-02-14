import React from 'react';
import styled, { withTheme } from 'styled-components';

import GameStats from './GameStats';

const Container = styled.div`
  width: 100%;
  height: 110px;
  display: flex;
  flex-flow: row;
  align-items: center;
  margin-bottom: 1.5rem;
  padding: 1rem;

  background: white;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.15);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  box-sizing: border-box;
`;

// background: ${(props) =>
//   props.win
//     ? `linear-gradient(135deg,rgba(50,115,250,.5),rgba(50,115,250,0.4)),#191937`
//     : `linear-gradient(135deg,rgba(255,78,80,.5),rgba(255,78,80,0.4)),#191937`};
function Component({ win }) {
  return (
    <Container>
      <GameStats win={win}></GameStats>
    </Container>
  );
}

export default Component;
