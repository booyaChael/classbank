import React, { useState } from "react";
import { useUserRegister } from "../hooks";
import styled from "styled-components";
import { layout } from "../styled/theme";
import { InputBox, BottomButton, PageHeader } from "../common";

const Logo = styled.div`
  ${layout.flexCenter};
  flex-direction: column;
  margin-top: 30%;
  margin-bottom: 11px;
`;
const LogoText = styled.span`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 800;
  font-size: 40px;
  line-height: 59px;
  letter-spacing: -0.1em;
  padding-top: 20px;
`;

const Form = styled.form`
  ${layout.flexCenter};
  flex-direction: column;
`;
const ErrorText = styled.span`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 30px;
  line-height: 16px;
  color: #000000;
  margin-top: 20px;
`;

const JoinPage = () => {
  const { teacherJoin } = useUserRegister();
  const [joinInputForm, setJoinInputForm] = useState({
    user_attendanceNumber: "0",
    user_name: "",
    user_id: "",
    user_password: "",
  });

  const [errorText, setErrorText] = useState("");

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setJoinInputForm({
      ...joinInputForm,
      [name]: value,
    });
  };
  const handlePasswordConfirm = (e) => {
    if (joinInputForm.user_password !== e.currentTarget.value) {
      setErrorText("비밀번호와 비밀번호 확인이 일치하지 않습니다");
    } else {
      setErrorText("");
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    teacherJoin(joinInputForm);
  };
  return (
    <>
      <PageHeader pageTitle={"교사 회원가입"} />
      <Logo>
        <img src={"/images/Logo.png"} width="180" alt="Logo" />
        <LogoText>우리반 은행</LogoText>
      </Logo>
      <Form onSubmit={handleSubmit}>
        <InputBox
          inputName={"user_name"}
          text={"이름"}
          type={"text"}
          handleInputChange={handleInputChange}
        />
        <InputBox
          inputName={"user_id"}
          text={"아이디"}
          type={"text"}
          handleInputChange={handleInputChange}
        />
        <InputBox
          inputName={"user_password"}
          text={"비밀번호"}
          type={"password"}
          handleInputChange={handleInputChange}
        />
        <InputBox
          inputName={"passwordAgain"}
          text={"비밀번호 재입력"}
          type={"password"}
          handleInputChange={handlePasswordConfirm}
        />
        <BottomButton type="submit" text={"회원가입"} marginTop={"20px"} />
        <ErrorText>{errorText}</ErrorText>
      </Form>
    </>
  );
};
export default JoinPage;
