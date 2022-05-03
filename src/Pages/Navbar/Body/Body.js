import styled from "styled-components";
import Row from "./Row";

const Body = () => {
  return (
    <Wrapper>
      <Row row_text="Overview" />
      <Row row_text="Overview" />
      <Row row_text="Overview" />
      <Row row_text="Overview" />
      <Row row_text="Overview" />
    </Wrapper>
  );
};

export default Body;

const Wrapper = styled.div`
  border: 1px solid red;
  margin-top: 80px;
`;
