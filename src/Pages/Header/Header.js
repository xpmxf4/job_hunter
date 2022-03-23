import React from "react";
import styled from "styled-components";

const Header = () => {
  return <Wrapper>It is Header</Wrapper>;
};

export default Header;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 130px;
  padding-left: 26%;
  font: #b9b9b9;
`;
