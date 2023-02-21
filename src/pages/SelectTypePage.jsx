import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import { layout } from "../styled/theme";
import { BottomButton } from "../common";

const Logo = styled.div`
  ${layout.flexCenter};
  flex-direction: column;
  margin-top: 400px;
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

const Wrapper = styled.div`
  ${layout.flexCenter};
  flex-direction: column;
`;

const SelectTypePage = () => {
  const navigate = useNavigate();

  const handleTeacherBtnClick = () => {
    navigate("/teacher-join");
  };

  return (
    <Wrapper>
      <Logo>
        <img src={"/images/Logo.png"} width="320" alt="Logo" />
        <LogoText>우리반 은행</LogoText>
      </Logo>
      <>
        <BottomButton text={"교사"} onClick={handleTeacherBtnClick} />
        <BottomButton text={"학생"} />
      </>
    </Wrapper>
  );
};

export default SelectTypePage;
