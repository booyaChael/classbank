import styled from "styled-components";
import { useNavigate } from "react-router-dom";
const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const Button = styled.div`
  padding: 35px;
`;

const ExitButton = () => {
  const navigate = useNavigate();

  const handleExitBtnClick = () => {
    navigate(-1);
  };
  return (
    <Wrapper>
      <Button onClick={handleExitBtnClick}>
        <img src={"../images/exit.png"} alt="Exit" width="40px" height="40px" />
      </Button>
    </Wrapper>
  );
};
export default ExitButton;
