import React from 'react';
import styled from 'styled-components';

import color from '@Utils/Color';
import TitleBox from '@Assets/TitleBox';
import SearchBox from '@Assets/SearchBox';
import QueueTypeBox from '@Assets/QueueTypeBox';
import MatchBox from '@Info/MatchBox';

const Container = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-flow: column;
`;

const RowContainer = styled.div`
  width: 100%;
  height: 90px;
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  box-sizing: border-box;
`;

function Component() {
  return (
    <Container>
      <RowContainer>
        <TitleBox>Matches</TitleBox>
        <SearchBox />
      </RowContainer>
      <QueueTypeBox />
      <MatchBox />
    </Container>
  );
}

export default Component;
