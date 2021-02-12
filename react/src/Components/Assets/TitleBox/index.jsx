import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 50%;
  height: 50px;
  display: flex;
  align-items: center;
  font-size: 2.5rem;
  font-family: 'KOTRA_BOLD';
`;

function Component({ children }) {
  return <Container>{children}</Container>;
}

export default Component;
