import React from 'react';
import styled from 'styled-components';
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';

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
    <RecoilRoot>
      <Container>
        <Modal />
      </Container>
    </RecoilRoot>
  );
}

export default App;
