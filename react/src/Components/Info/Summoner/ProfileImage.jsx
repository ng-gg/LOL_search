import React from 'react';
import styled from 'styled-components';

const Container = styled.img`
  width: 50px;
  height: 50px;
  align: center;
  border-radius: 15px;
`;

function Component() {
  return (
    <Container src="http://opgg-static.akamaized.net/images/profile_icons/profileIcon4863.jpg?image=q_auto:best&v=1518361200" />
  );
}

export default Component;
