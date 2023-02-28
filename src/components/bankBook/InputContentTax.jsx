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

const Percent = styled.span`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 35px;
  line-height: 16px;
`;
const CalculatedMoney = styled.span`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 35px;
  line-height: 16px;
  color: rgba(0, 0, 0, 0.3);
  margin-left: 20px;
`;
const InputContentTax = () => {
  return (
    <>
      <Input type="number" placeholder="0" />
      <Percent>%</Percent>
      <CalculatedMoney>(30미소)</CalculatedMoney>
    </>
  );
};
export default InputContentTax;
