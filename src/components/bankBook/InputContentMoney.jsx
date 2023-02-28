import styled from "styled-components";

const Input = styled.input.attrs({
  type: "number",
  placeholder: "0",
})`
  width: 80px;
  height: 30px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 35px;
  line-height: 16px;
  &:focus {
    outline: none;
  }
`;

const Unit = styled.span`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 35px;
  line-height: 16px;
`;
const InputContentMoney = () => {
  return (
    <>
      <Input type="number" placeholder="0" />
      <Unit>미소</Unit>
    </>
  );
};
export default InputContentMoney;
