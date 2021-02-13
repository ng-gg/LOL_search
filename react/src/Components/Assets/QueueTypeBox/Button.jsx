import React from 'react';
import styled from 'styled-components';

const Container = styled.button`
  width: 20%;
  height: 100%;
  background: white;
  border-radius: 10px;
  border: none;
  margin-right: 1rem;
  transition-property: box-shadow;
  transition-duration: 0.5s;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.15);
  :hover {
    cursor: pointer;
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.5);
  }

  :focus {
    outline: none;
  }
`;

function Component({ children }) {
  return <Container>{children}</Container>;
}

export default Component;
