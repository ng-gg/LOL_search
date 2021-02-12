import React from 'react';
import styled from 'styled-components';

const Container = styled.button`
  width: 25%;
  height: 100%;
  background: rgba(255, 255, 255, 0);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 5px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  box-sizing: border-box;
  font-size: 1rem;
  font-weight: bold;
  color: rgba(0, 0, 0, 0.5);

  :focus {
    outline: none;
  }
  :hover {
    cursor: pointer;
    border-radius: 10px;
  }
`;

function Component() {
  return <Container>GO!</Container>;
}

export default Component;
