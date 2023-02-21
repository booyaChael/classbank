import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const StyledButton = styled.img`
  width: 40px;
  height: 40px;
`;

const GoBackButton = () => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate(-1);
  };
  return (
    <StyledButton src={"/images/back.png"} alt="뒤로 가기" onClick={onClick} />
  );
};

export default GoBackButton;
