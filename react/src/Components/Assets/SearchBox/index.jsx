import React from 'react';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';

import Button from './Button';
import State from '@State';

const RowContainer = styled.div`
  width: 250px;
  height: 100%;
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: space-between;
  background: white;
  border-radius: 10px;
  padding: 0.3rem;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.15);
  box-sizing: border-box;
`;

const Container = styled.input`
  width: 75%;
  height: 100%;
  background: transparent;
  border: none;
  padding: 1rem;
  box-sizing: border-box;

  font-size: 1rem;
  :focus {
    outline: none;
  }
`;

function Component() {
  const [searchName, setSearchName] = useRecoilState(State.searchName);
  const [, setSummonerName] = useRecoilState(State.summonerName);

  function onChange(event) {
    setSearchName(event.target.value);
  }

  function onKeypress(event) {
    if (event.key === 'Enter') {
      setSummonerName(searchName);
    }
  }

  return (
    <RowContainer>
      <Container
        placeholder="Search"
        onChange={onChange}
        onKeyPress={onKeypress}
      ></Container>
      <Button></Button>
    </RowContainer>
  );
}

export default Component;
