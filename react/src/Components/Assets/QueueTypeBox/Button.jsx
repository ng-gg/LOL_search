import React from 'react';
import styled from 'styled-components';

const Container = styled.button`
  width: 20%;
  height: 100%;
  background: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  margin-right: 1rem;
  transition-property: background-color, box-shadow;
  transition-duration: 0.5s;

  :hover {
    pointer: cursor;
    background: rgba(255, 255, 255, 0.6);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.2);
  }

  :focus {
    outline: none;
  }
`;

function Component({ children }) {
  return <Container>{children}</Container>;
}

export default Component;
