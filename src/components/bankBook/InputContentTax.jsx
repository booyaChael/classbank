import styled from "styled-components";
import TaxToggleBtn from "./TaxToggleBtn";
import { useState } from "react";

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
const InputContentTax = ({ handleInputChange }) => {
  const [yesTax, setYesTax] = useState("없음");
  const handleToggleClick = () => {
    if (yesTax === "없음") {
      setYesTax("있음");
    } else {
      setYesTax("없음");
    }
  };
  return (
    <>
      <TaxToggleBtn
        handleClick={handleToggleClick}
        yesTax={yesTax}
        backgroundColor={yesTax === "있음" ? "#000000" : "#ffffff"}
        color={yesTax === "있음" ? "#ffffff" : "#b4b4b4"}
      />
      {yesTax === "있음" ? (
        <>
          <Input
            type="number"
            placeholder="0"
            name={"tax"}
            onChange={handleInputChange}
          />
          <Percent>%</Percent>
        </>
      ) : null}
    </>
  );
};
export default InputContentTax;
