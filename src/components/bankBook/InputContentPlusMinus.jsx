import styled from "styled-components";
import { useState, useEffect } from "react";
import PlusBtn from "./PlusBtn";
import MinusBtn from "./MinusBtn";

const Wrapper = styled.div`
  display: flex;
`;
const InputContentPlusMinus = ({ handleTypeChange }) => {
  const [plusOrMinus, setPlusOrMinus] = useState(1);
  const handlePlusClick = () => {
    setPlusOrMinus(1);
  };
  const handleMinusClick = () => {
    setPlusOrMinus(0);
  };

  useEffect(() => {
    handleTypeChange(plusOrMinus);
  }, [plusOrMinus, handleTypeChange]);
  return (
    <Wrapper name={"type"}>
      <PlusBtn
        plusOrMinus={plusOrMinus}
        handlePlusClick={handlePlusClick}
        backgroundColor={plusOrMinus === 1 ? "#000000" : "#ffffff"}
      />
      <MinusBtn plusOrMinus={plusOrMinus} handleMinusClick={handleMinusClick} />
    </Wrapper>
  );
};
export default InputContentPlusMinus;
