import styled from "styled-components";
import { useState, useEffect } from "react";
import PlusBtn from "./PlusBtn";
import MinusBtn from "./MinusBtn";

const Wrapper = styled.div`
  display: flex;
`;
const InputContentPlusMinus = ({ handleCategoryChange }) => {
  const [count, setCount] = useState(0);
  const [plusOrMinus, setPlusOrMinus] = useState("minus");
  const handlePlusClick = () => {
    setPlusOrMinus("plus");
    setCount(count + 1);
  };
  const handleMinusClick = () => {
    setPlusOrMinus("minus");
    setCount(count + 1);
  };

  useEffect(() => {
    handleCategoryChange(plusOrMinus);
    console.log(plusOrMinus);
  }, [count,]);
  return (
    <Wrapper name={"category"}>
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
