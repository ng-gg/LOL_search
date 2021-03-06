import React from 'react';
import styled from 'styled-components';
import { useRecoilValue, useRecoilState } from 'recoil';

import State from '@State';
import Api from '@Utils/Api';

const Container = styled.button`
  width: 25%;
  height: 100%;
  background: white;
  border-radius: 5px;
  box-sizing: border-box;
  font-size: 1rem;
  font-weight: bold;
  color: rgba(0, 0, 0, 0.5);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.2);
  border: none;
  :focus {
    outline: none;
  }
  :hover {
    cursor: pointer;
  }
`;

function Component() {
  const searchName = useRecoilValue(State.searchName);
  const [, setSummonerData] = useRecoilState(State.summonerData);

  return (
    <Container
      onClick={async () => {
        setSummonerData(await Api.getProfile(searchName));
      }}
    >
      GO!
    </Container>
  );
}

export default Component;
