import styled from "styled-components";

const AddBtnImg = styled.img.attrs({
  src: "../images/addBtn.png",
})`
  width: 170px;
  height: 170px;
  position: absolute;
  bottom: 40px;
  right: 40px;
`;

const AddButton = ({ handleAddBtnClick }) => {
  return <AddBtnImg onClick={handleAddBtnClick} />;
};
export default AddButton;
