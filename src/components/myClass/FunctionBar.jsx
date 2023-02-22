import styled from "styled-components";
import TimeStudentSelectBtn from "./TimeStudentSelectBtn";
import AddButton from "./AddButton.jsx";

const Wrapper = styled.div`
  width: 100%;
  height: 70px;
  border: 1px solid black;
  display: flex;
  justify-content: space-between;
  align-itens: center;
`;

const FunctionBar = () => {
  return (
    <Wrapper>
      <TimeStudentSelectBtn />
      <AddButton />
    </Wrapper>
  );
};
export default FunctionBar;
