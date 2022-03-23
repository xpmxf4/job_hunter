import React from "react";
import styled from "styled-components";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import Body from "../Body/Body";

const Home = () => {
  return (
    <Wrapper>
      <Header />
      <Navbar />
      <Body />
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  overflow: hidden;
  flex-direction: column-reverse;
  background-color: #fefefe;
  color: #b9b9b9;
`;

