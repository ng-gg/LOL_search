import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 20%;
  height: 100%;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  box-sizing: border-box;
  display: flex;
  flex-flow: column;
  padding: 1rem;
`;

function Component() {
  return <Container>1234</Container>;
}

export default Component;
