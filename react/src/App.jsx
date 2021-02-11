import React from 'react';
import styled from 'styled-components';

import Modal from '@Modal';

const Container = styled.div`
  background: linear-gradient(45deg, #fc466b, #3f5efb);
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
`;

function App() {
  return (
    <Container>
      <Modal />
    </Container>
  );
}

export default App;
