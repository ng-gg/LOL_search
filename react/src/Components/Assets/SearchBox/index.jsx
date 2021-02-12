import React from 'react';
import styled from 'styled-components';

import Button from './Button';

const RowContainer = styled.div`
  width: 250px;
  height: 90%;
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: space-between;
  background: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  padding: 0.3rem;
  box-sizing: border-box;
`;

const Container = styled.input`
  width: 75%;
  height: 100%;
  background: transparent;
  border: none;
  padding: 1rem;
  box-sizing: border-box;

  font-size: 1rem;
  :focus {
    outline: none;
  }
`;

function Component() {
  return (
    <RowContainer>
      <Container placeholder="Search"></Container>
      <Button></Button>
    </RowContainer>
  );
}

export default Component;
