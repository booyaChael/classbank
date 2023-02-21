import styled from "styled-components";
import { layout } from "../styled/theme";
import { InputBox } from "../common";
import { BottomButton } from "../common";
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
  return (
    <Wrapper>
      <Logo>
        <img src={"/images/Logo.png"} width="320" alt="Logo" />
        <LogoText>우리반 은행</LogoText>
      </Logo>
      <Form>
        <InputBox text={"아이디"} type={"text"} />
        <InputBox text={"비밀번호"} />
        <BottomButton
          text={"로그인"}
          backgroundColor={"#000000"}
          textColor={"#FFFFFF"}
          marginTop={"20px"}
        />
      </Form>
      <GoToJoinButton />
    </Wrapper>
  );
};

export default LoginPage;
