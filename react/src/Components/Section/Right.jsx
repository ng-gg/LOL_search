import React from 'react';
import styled from 'styled-components';

import color from '@Utils/Color';
import TitleBox from '@Assets/TitleBox';

const Container = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  flex-flow: column;
  margin-top: 1.5rem;
`;
function Component() {
  return (
    <Container>
      <TitleBox>Statistics</TitleBox>
    </Container>
  );
}

export default Component;
