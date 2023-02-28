import styled from "styled-components";
import { layout } from "../../styled/theme";

const Wrapper = styled.div`
  ${layout.flexCenter};
  width: 120px;
  height: 55px;
  background: ${(props) => props.backgroundColor};
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  margin-right: 10px;
`;
const Text = styled.span`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 0.1em;
  color: ${(props) => props.color};
`;
const MinusImgGray = styled.img.attrs({
  src: "../images/minus_button_gray.png",
})`
  width: 25px;
  height: 25px;
  padding-right: 6px;
`;
const MinusImgWhite = styled.img.attrs({
  src: "../images/minus_white.png",
})`
  width: 25px;
  height: 25px;
  padding-right: 6px;
`;

const MinusBtn = ({ plusOrMinus, handleMinusClick }) => {
  return (
    <Wrapper
      onClick={handleMinusClick}
      backgroundColor={plusOrMinus === "minus" ? "#000000" : "#ffffff"}
    >
      {plusOrMinus === "minus" ? <MinusImgWhite /> : <MinusImgGray />}
      <Text color={plusOrMinus === "minus" ? "#ffffff" : "#b4b4b4"}>지출</Text>
    </Wrapper>
  );
};
export default MinusBtn;
