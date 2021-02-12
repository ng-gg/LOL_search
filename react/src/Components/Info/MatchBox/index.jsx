import React from 'react';
import styled from 'styled-components';

import Match from './Match';

const Container = styled.div`
  width: 100%;
  height: 800px;
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;
  overflow: auto;
  padding: 1.5rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  box-sizing: border-box;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  ::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;

function Component() {
  return (
    <Container>
      <Match></Match>
      <Match></Match>
      <Match></Match>
      <Match></Match>
      <Match></Match>
      <Match></Match>
      <Match></Match>
    </Container>
  );
}

export default Component;
