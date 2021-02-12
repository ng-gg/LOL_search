import React from 'react';
import styled from 'styled-components';

import color from '@Utils/Color';
import Logo from '@Components/Logo';
import Summoner from '@Info/Summoner';
import Solo from '@Info/Rank/Solo';
import Flex from '@Info/Rank/Flex';

const Container = styled.div`
  width: 20%;
  height: 100%;
  background: ${color.modalBackgroundWhite};
  border: 1px solid ${color.modalBorder};
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  box-sizing: border-box;
  display: flex;
  flex-flow: column;
  padding: 1.5rem;
`;

function Component() {
  return (
    <Container>
      <Logo />
      <Summoner />
      <Solo />
      <Flex />
    </Container>
  );
}

export default Component;
