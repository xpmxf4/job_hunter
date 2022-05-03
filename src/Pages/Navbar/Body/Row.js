import styled from "styled-components";

const Row = (props) => {
  return <Wrapper>{props.row_text}</Wrapper>;
};

export default Row;

const Wrapper = styled.div`
  border: 1px solid lightcoral;
  display: flex;
  align-items: center;
  width: 100%;
  height: 50px;
  padding-left: 20px;
  background-color: lightgoldenrodyellow;
  color: #adadad;
`;
