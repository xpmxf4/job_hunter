import React from "react";
import styled from "styled-components";
import Title from "./Title";
import Body from "./Body";
import Footer from "./Footer";

const Navbar = () => {
  return (
    <Wrapper>
      <Title />
      <Body />
      <Footer />
    </Wrapper>
  );
};

export default Navbar;

const Wrapper = styled.div`
  border-right: 3px solid #f6f6f6;
  position: fixed;
  left: 0;
  top: 0;
  width: 26%;
  height: 100%;
  padding: 60px;
  flex-direction: column;
  background-color: #fdfdfd;
`;

