import { PageHeader } from "../common";
import styled from "styled-components";
import { layout } from "../styled/theme";
import ClassCodeForm from "../components/join/ClassCodeForm.jsx";

const Wrapper = styled.div`
  ${layout.flexCenter};
  flex-direction: column;
`;
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

const GuideText = styled.span`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 800;
  font-size: 40px;
  line-height: 49px;
  display: flex;
  align-items: center;
  letter-spacing: -0.1em;

  color: rgba(0, 0, 0, 0.9);
`;

const EnterClassCodePage = () => {
  return (
    <Wrapper>
      <PageHeader pageTitle={"클래스코드 입력"} />
      <Logo>
        <img src={"/images/Logo.png"} width="180" alt="Logo" />
        <LogoText>우리반 은행</LogoText>
      </Logo>
      <GuideText>초대코드를 입력해주세요</GuideText>
      <ClassCodeForm />
    </Wrapper>
  );
};

export default EnterClassCodePage;
