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
  display: flex;
  flex-flow: column;
  padding-top: 1.5rem;
  padding-left: 3rem;
  box-sizing: border-box;
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
