import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  margin-top: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
`;
const LabelWrapper = styled.div`
  width: 85%;
  display: flex;
`;
const StyledBox = styled.input`
  width: 80%;
  height: 120px;
  padding-left: 50px;
  margin: 8px 0px;
  background: #ffffff;
  color: #000000;
  font-size: 45px;
  border: 1px solid #dadada;
  border-radius: 10px;
  &:focus {
    outline: 3px auto black;
  }
  ::placeholder {
    color: #87898e;
    font-size: 30px;
  }
`;

const StyledLabel = styled.label`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 30px;
  line-height: 16px;
  color: #87898e;
  padding: 2px;
`;

const InputBox = ({ inputName, text, example, type, handleInputChange }) => {
  return (
    <Wrapper>
      <LabelWrapper>
        <StyledLabel>{text}</StyledLabel>
      </LabelWrapper>
      <StyledBox
        placeholder={example}
        name={inputName}
        type={type}
        onChange={handleInputChange}
      ></StyledBox>
    </Wrapper>
  );
};

export default InputBox;
