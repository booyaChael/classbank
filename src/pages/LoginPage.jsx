import styled from "styled-components";
import { useState } from "react";
import { layout } from "../styled/theme";
import { InputBox } from "../common";
import { BottomButton } from "../common";
import { useLogin, useGetUserInfo } from "../hooks";
import { useRecoilState } from "recoil";
import { user } from "../store";
import { useNavigate } from "react-router-dom";
import GoToJoinButton from "../components/login/goToJoinButton.jsx";
const Wrapper = styled.div`
  ${layout.flexCenter};
  flex-direction: column;
`;
const Logo = styled.div`
  ${layout.flexCenter};
  flex-direction: column;
  margin-top: 180px;
  margin-bottom: 100px;
`;
const LogoText = styled.span`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 800;
  font-size: 60px;
  line-height: 59px;
  letter-spacing: -0.1em;
  padding-top: 20px;
`;

const Form = styled.form`
  width: 100%;
  ${layout.flexCenter};
  flex-direction: column;
`;

const LoginPage = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useRecoilState(user);
  const { login } = useLogin();
  const { getUserInfo } = useGetUserInfo();
  const [loginInputForm, setLoginInputForm] = useState({
    user_id: "",
    user_password: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setLoginInputForm({
      ...loginInputForm,
      [name]: value,
    });
  };

  const handleUserType = (userInfo) => {
    if (userInfo.user_type === "teacher") {
      if (userInfo.class_id === null) {
        navigate("/make-class");
      } else {
        navigate("/my-class");
      }
    } else {
      if (userInfo.full_view_authority) {
        navigate("/my-class");
      } else {
        navigate("/bank-book");
      }
    }
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(userData);
    const userIdx = await login(loginInputForm);
    const userInfo = await getUserInfo(userIdx);
    console.log(userInfo);
    setUserData(userInfo);
    handleUserType(userInfo);
  };

  return (
    <Wrapper>
      <Logo>
        <img src={"/images/Logo.png"} width="320" alt="Logo" />
        <LogoText>우리반 은행</LogoText>
      </Logo>
      <Form onSubmit={handleSubmit}>
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
        <BottomButton
          text={"로그인"}
          backgroundColor={"#000000"}
          textColor={"#FFFFFF"}
          marginTop={"20px"}
          type="submit"
        />
      </Form>
      <GoToJoinButton />
    </Wrapper>
  );
};

export default LoginPage;
