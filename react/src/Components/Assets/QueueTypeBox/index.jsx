import React from 'react';
import styled from 'styled-components';

import Button from './Button';

const Container = styled.div`
  width: 100%;
  height: 40px;
  margin-top: 2rem;
  display: flex;
  align-items: center;
  // justify-content: space-between;
`;

function Component() {
  return (
    <Container>
      <Button>전체</Button>
      <Button>솔로 랭크</Button>
      <Button>자유 랭크</Button>
    </Container>
  );
}

export default Component;
