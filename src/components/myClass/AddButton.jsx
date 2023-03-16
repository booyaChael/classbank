import styled from "styled-components";
import { layout } from "../../styled/theme";

const Wrapper = styled.span`
  ${layout.flexCenter};
`;

const PlusImg = styled.img.attrs({
  src: "../images/plus.png",
})`
  width: 30px;
  height: 30px;
  padding: 7px;
`;

const AddText = styled.span`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 30px;
  line-height: 16px;
  color: rgba(0, 0, 0, 0.7);
  padding: 7px;
`;

const AddButton = ({ handleAddBtnClick }) => {
  return (
    <Wrapper onClick={handleAddBtnClick}>
      <PlusImg />
      <AddText>추가</AddText>
    </Wrapper>
  );
};
export default AddButton;
