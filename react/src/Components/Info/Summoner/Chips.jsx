import React from 'react';
import styled from 'styled-components';

import color from '@Utils/Color';
import ProfileImage from './ProfileImage';
import Name from './Name';
import Status from './Status';

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${color.summonerBackground};
  border-radius: 20px;
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: center;
`;

const ColumnContainer = styled.div`
  width: 120px;
  height: 100%;
  display: flex;
  flex-flow: column;
  justify-content: space-evenly;
`;

function Component() {
  return (
    <Container>
      <ProfileImage />
      <ColumnContainer>
        <Name />
        <Status />
      </ColumnContainer>
    </Container>
  );
}

export default Component;
