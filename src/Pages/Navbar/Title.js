import React from "react";
import styled from "styled-components";

const Title = () => {
  return (
    <Wrapper>
      <PageTitle>Job Hunting</PageTitle>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  font-size: 40px;
  color: black;
`;

const PageTitle = styled.span`
  font-weight: bolder;
`;

export default Title;
