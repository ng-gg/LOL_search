import React from 'react';
import styled from 'styled-components';

import color from '@Utils/Color';
import TitleBox from '@Assets/TitleBox';
import SearchBox from '@Assets/SearchBox';

const Container = styled.div`
  width: 50%;
  height: 100%;
  background: ${color.modalBackgroundGray};
  border-top: 1px solid ${color.modalBorder};
  border-bottom: 1px solid ${color.modalBorder};
  border-right: 1px solid ${color.modalBorder};
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  box-sizing: border-box;
  display: flex;
  flex-flow: column;
  padding: 1.5rem;
`;

const RowContainer = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  flex-flow: row;
  justify-content: space-around;
  align-items: center;
`;

function Component() {
  return (
    <Container>
      <RowContainer>
        <TitleBox>Matches</TitleBox>
        <SearchBox />
      </RowContainer>
    </Container>
  );
}

export default Component;
