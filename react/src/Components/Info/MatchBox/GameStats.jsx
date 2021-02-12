import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 15%;
  height: 100%;
  display: flex;
  flex-flow: column;
  font-size: 0.9rem;
  align-items: center;
  justify-content: space-evenly;
`;

const Type = styled.div``;
const Timestamp = styled.div``;
const Result = styled.div``;
const Length = styled.div``;

function Component() {
  return (
    <Container>
      <Type>우르프</Type>
      <Timestamp>2일 전</Timestamp>
      <Result>승리</Result>
      <Length>16분 50초</Length>
    </Container>
  );
}

export default Component;
