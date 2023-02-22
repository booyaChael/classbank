import styled from "styled-components";
import { layout } from "../../styled/theme";

const Wrapper = styled.span`
  ${layout.flexCenter};
`;

const PlusImg = styled.img.attrs({
  src: "../images/grayplus.png",
})`
  width: 30px;
  height: 30px;
`;

const AddText = styled.span`
  font-family: "Inter";
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  line-height: 16px;
  color: rgba(0, 0, 0, 0.7);
`;

const AddButton = () => {
  return (
    <Wrapper>
      <PlusImg />
      <AddText>추가</AddText>
    </Wrapper>
  );
};
export default AddButton;
