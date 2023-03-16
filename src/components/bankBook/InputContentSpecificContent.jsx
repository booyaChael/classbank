import styled from "styled-components";
const Input = styled.input.attrs({
  type: "string",
  placeholder: "내용을 입력하세요 (20자 이내)",
})`
  width: 70%;
  height: 40px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 35px;
  line-height: 16px;
  &:focus {
    outline: none;
  }
`;

const InputContentSpecificContent = ({ handleInputChange }) => {
  return (
    <>
      <Input maxLength={20} onChange={handleInputChange} name={"detail"} />
    </>
  );
};
export default InputContentSpecificContent;
