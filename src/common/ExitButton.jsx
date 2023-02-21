import styled from "styled-components";
const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const Button = styled.div`
  padding: 35px;
`;

const ExitButton = ({ handleModalExit }) => {
  return (
    <Wrapper>
      <Button onClick={handleModalExit}>
        <img src={"../images/exit.png"} alt="Exit" width="40px" height="40px" />
      </Button>
    </Wrapper>
  );
};
export default ExitButton;
