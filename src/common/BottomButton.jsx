import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  width: 90%;
  height: 120px;
  left: 33px;
  top: 907px;
  border: 2px solid #000000;
  border-radius: 50px;

  background: ${(props) => props.backgroundColor || "#FFFFFF"};
  margin-top: ${(props) => props.marginTop || "7px"};
`;

const StyledText = styled.span`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 35px;
  line-height: 42px;
  letter-spacing: 0.1em;

  color: ${(props) => props.textColor || "#000000"};
`;

const BottomButton = ({
  text,
  backgroundColor,
  textColor,
  marginTop,
  onClick,
}) => {
  return (
    <StyledButton
      onClick={onClick}
      backgroundColor={backgroundColor}
      marginTop={marginTop}
    >
      <StyledText textColor={textColor}>{text}</StyledText>
    </StyledButton>
  );
};

export default BottomButton;
