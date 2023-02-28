import styled from "styled-components";
import { layout } from "../../styled/theme";

const Wrapper = styled.div`
  ${layout.flexCenter};
  width: 120px;
  height: 55px;

  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  margin-right: 10px;
  background: ${(props) => props.backgroundColor};
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
const PlusImgGray = styled.img.attrs({
  src: "../images/plus_button_gray.png",
})`
  width: 25px;
  height: 25px;
  padding-right: 6px;
`;
const PlusImgWhite = styled.img.attrs({
  src: "../images/plus_white.png",
})`
  width: 25px;
  height: 25px;
  padding-right: 6px;
`;

const PlusBtn = ({ plusOrMinus, handlePlusClick }) => {
  return (
    <Wrapper
      onClick={handlePlusClick}
      backgroundColor={plusOrMinus === "plus" ? "#000000" : "#ffffff"}
    >
      {plusOrMinus === "plus" ? <PlusImgWhite /> : <PlusImgGray />}
      <Text color={plusOrMinus === "plus" ? "#ffffff" : "#b4b4b4"}>수입</Text>
    </Wrapper>
  );
};
export default PlusBtn;
