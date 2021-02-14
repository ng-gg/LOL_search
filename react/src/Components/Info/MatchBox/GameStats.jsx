import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  flex-flow: column;
  font-size: 0.9rem;
  align-items: center;
  justify-content: space-between;
`;

const RowContainer = styled.div`
  width: 15%;
  height: 100%;
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: space-between;
`;

const Type = styled.div``;
const Timestamp = styled.div``;
const Result = styled.div`
  width: 7%;
  height: 100%;
  border-radius: 5px;
  background: ${(props) => (props.win ? '#3273fa' : '#ff4e50')};
`;
const Length = styled.div``;

function Component({ win }) {
  return (
    <RowContainer>
      <Result win={win}></Result>
      <Container>
        <Type>우르프</Type>
        <Timestamp>2일 전</Timestamp>
        <Length>16분 50초</Length>
      </Container>
    </RowContainer>
  );
}

export default Component;
