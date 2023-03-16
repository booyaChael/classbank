import styled from "styled-components";

const Wrapper = styled.div`
  height: 100px;
  left: 0px;
  top: 705px;

  background: #ffffff;
  border-bottom: 2px solid #ebeaea;
  display: flex;
  align-items: center;
  padding: 35px;
`;

const Category = styled.span`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 35px;
  line-height: 16px;
  margin-right: 110px;
`;
const ModalInputBox = ({ category, content }) => {
  return (
    <Wrapper>
      <Category>{category}</Category>
      {content}
    </Wrapper>
  );
};
export default ModalInputBox;
