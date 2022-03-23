import React from "react";
import styled from "styled-components";

const Navbar = () => {
  return (
    <Wrapper>
      <Title>Title</Title>
      <Body>Body</Body>
      <Footer>Footer</Footer>
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
  flex-direction: column;
  background-color: #fdfdfd;
`;

const Title = styled.div``;

const Body = styled.div``;

const Footer = styled.div``;
