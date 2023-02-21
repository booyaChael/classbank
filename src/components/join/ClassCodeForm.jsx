import styled from "styled-components";
import { layout } from "../../styled/theme";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  ${layout.flexCenter};
`;

const InputBox = styled.input`
  width: 300px;
  height: 120px;
  font-size: 45px;
  text-align: center;
  margin: 7px;
  &:focus {
    outline: 3px auto black;
  }
`;

const SubmitButton = styled.div`
  ${layout.flexCenter};
  width: 140px;
  height: 120px;
  margin: 7px;

  background: #ffffff;
  border: 2px solid #000000;
  border-radius: 40px;
`;

const Text = styled.span`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 42px;
  letter-spacing: 0.1em;

  color: #000000;
`;

const ClassCodeForm = () => {
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate("/");
  };
  return (
    <Wrapper>
      <InputBox type="number" />
      <SubmitButton>
        <Text onClick={handleSubmit}>입력</Text>
      </SubmitButton>
    </Wrapper>
  );
};

export default ClassCodeForm;
