import styled from "styled-components";
import { layout } from "../../styled/theme";

const Wrapper = styled.button`
  ${layout.flexCenter};
  width: 120px;
  height: 55px;
  background: #ffffff;
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
  color: rgba(0, 0, 0, 0.3);
`;

const PlusImgGray = styled.img.attrs({
  src: "../images/plus_button_gray.png",
})`
  width: 25px;
  height: 25px;
  padding-right: 6px;
`;

const MinusImgGray = styled.img.attrs({
  src: "../images/minus_button_gray.png",
})`
  width: 25px;
  height: 25px;
  padding-right: 6px;
`;

const PlusMinusBtn = ({ type }) => {
  return (
    <Wrapper>
      {type === "plus" ? <PlusImgGray /> : <MinusImgGray />}
      <Text>{type === "plus" ? "수입" : "지출"}</Text>
    </Wrapper>
  );
};
export default PlusMinusBtn;
