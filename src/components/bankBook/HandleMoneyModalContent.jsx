import styled from "styled-components";
import ModalInputBox from "./ModalInputBox";
import InputContentMoney from "./InputContentMoney";
import InputContentPlusMinus from "./InputContentPlusMinus";
import InputContentTax from "./InputContentTax";
import InputContentSpecificContent from "./InputContentSpecificContent";
import Owner from "./Owner";
import BottomButton from "../../common/BottomButton";
import { layout } from "../../styled/theme";
const TitleWrapper = styled.span`
  display: flex;
  align-items: center;
  margin-left: 25px;
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
const BottomButtonWrapper = styled.div`
  ${layout.flexCenter};
`;
const HandleMoneyModalContent = ({ goToConfirm }) => {
  return (
    <>
      <TitleWrapper>
        <Owner />
        <Title>의 통장</Title>
      </TitleWrapper>
      <ModalInputBox category={"금액"} content={<InputContentMoney />} />
      <ModalInputBox category={"분류"} content={<InputContentPlusMinus />} />
      <ModalInputBox category={"세금"} content={<InputContentTax />} />
      <ModalInputBox
        category={"내용"}
        content={<InputContentSpecificContent />}
      />
      <BottomButtonWrapper>
        <BottomButton
          backgroundColor={"#000000"}
          text={"저장"}
          textColor={"#ffffff"}
          marginTop={"50px"}
          onClick={goToConfirm}
        />
      </BottomButtonWrapper>
    </>
  );
};
export default HandleMoneyModalContent;
