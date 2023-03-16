import styled from "styled-components";

const AddBtnImg = styled.img.attrs({
  src: "../images/addBtn.png",
})`
  width: 150px;
  height: 150px;
  position: absolute;
  top: 270px;
  right: 50px;
`;

const AddButton = ({ handleAddBtnClick }) => {
  return <AddBtnImg onClick={handleAddBtnClick} />;
};
export default AddButton;
