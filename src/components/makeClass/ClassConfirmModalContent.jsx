import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { layout } from "../../styled/theme";
import { BottomButton } from "../../common";

const ContentWrapper = styled.div`
  ${layout.flexCenter};
  flex-direction: column;
  width: 100%;
`;
const MadeClassText = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 50px;
  line-height: 16px;
  color: #000000;
  margin-top: 90px;
`;

const ClassCodeText = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 800;
  font-size: 50px;
  line-height: 49px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: -0.1em;
  color: rgba(0, 0, 0, 0.9);
  margin-top: 75px;
`;

const ClassCodeNumber = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 110px;
  line-height: 117px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: -0.1em;

  color: rgba(0, 0, 0, 0.9);
`;

const GuideText = styled.div`
  margin-top: 40px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 300;
  font-size: 30px;
  line-height: 16px;
  color: #000000;
`;

const ClassConfirmModalContent = () => {
  const navigate = useNavigate();
  const className = "5학년 2반";
  const classCodeNumber = "17798";
  const handleClick = () => {
    navigate("/my-classes-list");
  };
  return (
    <>
      <ContentWrapper>
        <MadeClassText>{className} 클래스가 생성되었습니다</MadeClassText>
        <>
          <ClassCodeText>클래스코드:</ClassCodeText>
          <ClassCodeNumber>{classCodeNumber}</ClassCodeNumber>
        </>
        <GuideText>
          해당 클래스의 설정 탭에서 클래스코드를 다시 확인하실 수 있습니다
        </GuideText>
        <BottomButton
          onClick={handleClick}
          backgroundColor={"#000000"}
          textColor={"#FFFFFF"}
          text={"내 클래스로 이동"}
          marginTop={"80px"}
        />
      </ContentWrapper>
    </>
  );
};

export default ClassConfirmModalContent;
