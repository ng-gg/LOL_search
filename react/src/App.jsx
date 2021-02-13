import React from 'react';
import styled from 'styled-components';

import Modal from '@Modal';

const Container = styled.div`
  background: white;
  width: 100%;
  height: 100%;
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
