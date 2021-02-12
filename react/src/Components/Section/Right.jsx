import React from 'react';
import styled from 'styled-components';

import color from '@Utils/Color';

const Container = styled.div`
  border-top: 1px solid ${color.modalBorder};
  border-bottom: 1px solid ${color.modalBorder};
  border-right: 1px solid ${color.modalBorder};
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  width: 30%;
  height: 100%;
  display: flex;
  flex-flow: column;
  padding: 1.5rem;
  box-sizing: border-box;
`;
function Component() {
  return <Container>1234</Container>;
}

export default Component;
