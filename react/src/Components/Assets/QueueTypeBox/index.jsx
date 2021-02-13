import React from 'react';
import styled from 'styled-components';

import Button from './Button';

const Container = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding-left: 1.5rem;
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
