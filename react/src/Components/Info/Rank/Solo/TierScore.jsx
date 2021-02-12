import React from 'react';
import styled from 'styled-components';

import color from '@Utils/Color';

const Container = styled.div`
  width: 85%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${color.soloTierBackground};
  color: ${color.soloTierText};
  box-shadow: 0 8px 32px 0 ${color.soloTierShadow};
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid ${color.soloTierBorder};
  font-size: 1.1rem;
`;

function Component() {
  return <Container>Diamond 4 38LP</Container>;
}

export default Component;
