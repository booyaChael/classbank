import styled from "styled-components";
import Owner from "./Owner";
import YesNoButton from "./YesNoButton";
import { layout } from "../../styled/theme";

const TitleWrapper = styled.span`
  display: flex;
  align-items: center;
  margin-left: 25px;
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.span`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 40px;
  line-height: 16px;
  letter-spacing: 0.1em;
  color: #000000;
`;
const InputContent = styled.div`
  ${layout.flexCenter};
`;
const Text = styled.span`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 90px;
  line-height: 16px;
  color: rgba(0, 0, 0, 0.7);
  margin-top: 70px;
`;
const Money = styled.span`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 110px;
  line-height: 16px;
  letter-spacing: 0.1em;
  color: #000000;
`;
const ButtonPart = styled.div`
  display: flex;
  margin-top: 100px;
`;

const PlusImg = styled.img.attrs({
  src: "../images/plus_button.png",
})`
  width: 90px;
  height: 90px;
  margin-right: 30px;
`;
const ConfirmModalContent = ({ type, goBackToHandleMoney }) => {
  const handleYesClicked = () => {
    console.log("yes");
  };
  return (
    <>
      <TitleWrapper>
        <Owner />
        <Title>의 통장</Title>
      </TitleWrapper>
      <Content>
        <InputContent>
          <PlusImg />
          <Money>300미소</Money>
        </InputContent>

        <Text>입력하시겠습니까?</Text>
        <ButtonPart>
          <YesNoButton text={"네"} handleClick={handleYesClicked} />
          <YesNoButton text={"아니오"} handleClick={goBackToHandleMoney} />
        </ButtonPart>
      </Content>
    </>
  );
};
export default ConfirmModalContent;
