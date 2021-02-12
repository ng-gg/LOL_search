import React from 'react';
import styled from 'styled-components';

import color from '@Utils/Color';

const Container = styled.div`
  width: 50%;
  height: 100%;
  background: ${color.modalBackgroundGray};
  border-top: 1px solid ${color.modalBorder};
  border-bottom: 1px solid ${color.modalBorder};
  border-right: 1px solid ${color.modalBorder};
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  box-sizing: border-box;
  display: flex;
  flex-flow: column;
  padding: 1.5rem;
`;

function Component() {
  return <Container>1234</Container>;
}

export default Component;
