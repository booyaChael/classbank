import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useResetRecoilState } from "recoil";
import { user, classData } from "../../store";

const StyledButton = styled.img`
  width: 50px;
  height: 50px;
`;

const LogoutButton = () => {
  const navigate = useNavigate();
  const resetUserData = useResetRecoilState(user);
  const resetClassData = useResetRecoilState(classData);

  const onClick = () => {
    resetUserData();
    resetClassData();
    navigate("/");
  };
  return (
    <StyledButton src={"/images/logout.png"} alt="로그아웃" onClick={onClick} />
  );
};

export default LogoutButton;
