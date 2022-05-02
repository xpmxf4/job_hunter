import React from "react";
import styled from "styled-components";

const Title = () => {
  return (
    <Wrapper>
      <img src="../../../images/KNU_Logo.jpg" alt="KNU_Logo" width={30} />
      <span>KNU Crawling</span>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border: 1px solid black;
  font-size: 30px;
  color: black;
`;

export default Title;
