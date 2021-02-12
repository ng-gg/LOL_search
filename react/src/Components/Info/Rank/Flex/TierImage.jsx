import React from 'react';
import styled from 'styled-components';

// import color from '@Utils/Color';

const Container = styled.img`
  width: 120px;
  height: 120px;
  align: center;
`;

function Component() {
  return (
    <Container src="https://opgg-static.akamaized.net/images/medals/platinum_2.png?image=q_auto:best&v=1" />
  );
}

export default Component;
