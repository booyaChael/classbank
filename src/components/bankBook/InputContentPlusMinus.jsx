import styled from "styled-components";
import { useState } from "react";
import PlusBtn from "./PlusBtn";
import MinusBtn from "./MinusBtn";

const Wrapper = styled.div`
  display: flex;
`;
const InputContentPlusMinus = () => {
  const [plusOrMinus, setPlusOrMinus] = useState("minus");
  const handlePlusClick = () => {
    setPlusOrMinus("plus");
  };
  const handleMinusClick = () => {
    setPlusOrMinus("minus");
  };
  return (
    <Wrapper>
      <PlusBtn
        plusOrMinus={plusOrMinus}
        handlePlusClick={handlePlusClick}
        backgroundColor={plusOrMinus === "plus" ? "#000000" : "#ffffff"}
      />
      <MinusBtn plusOrMinus={plusOrMinus} handleMinusClick={handleMinusClick} />
    </Wrapper>
  );
};
export default InputContentPlusMinus;
