import styled from "styled-components";
import { layout } from "../../styled/theme";
const Wrapper = styled.div`
  ${layout.flexCenter};
  width: 380px;
  height: 150px;
  left: 52px;
  top: 1058px;

  background: #000000;
  border: 2px solid #000000;
  border-radius: 46px;
  margin: 30px;
`;

const Text = styled.span`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 55px;
  line-height: 42px;
  letter-spacing: 0.1em;

  color: #ffffff;
`;
const YesNoButton = ({ text, handleClick }) => {
  return (
    <Wrapper onClick={handleClick}>
      <Text>{text}</Text>
    </Wrapper>
  );
};
export default YesNoButton;
