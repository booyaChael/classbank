import styled from "styled-components";
const Wrapper = styled.span`
  display: flex;
  justify-content: flex-end;
`;
const Button = styled.span`
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
