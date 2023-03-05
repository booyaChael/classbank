import styled from "styled-components";
import ModalInputBox from "./ModalInputBox";
import InputContentMoney from "./InputContentMoney";
import InputContentPlusMinus from "./InputContentPlusMinus";
import InputContentTax from "./InputContentTax";
import InputContentSpecificContent from "./InputContentSpecificContent";
import Owner from "./Owner";
import BottomButton from "../../common/BottomButton";
import { layout } from "../../styled/theme";
import { useState } from "react";
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
  const [handleMoneyForm, setHandleMoneyForm] = useState({
    idx: "",
    class_id: "",
    category: "",
    detail: "",
    amount: null,
    worker_idx: "",
    worker_name: "",
    worker_attendanceNumber: "",
  });
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setHandleMoneyForm({
      ...handleMoneyForm,
      [name]: value,
    });
    console.log(handleMoneyForm);
  };
  const handleCategoryChange = (categoryState) => {
    setHandleMoneyForm({
      category: categoryState,
    });
  };
  return (
    <>
      <TitleWrapper>
        <Owner />
        <Title>의 통장</Title>
      </TitleWrapper>
      <ModalInputBox
        category={"금액"}
        content={<InputContentMoney handleInputChange={handleInputChange} />}
      />
      <ModalInputBox
        category={"분류"}
        content={
          <InputContentPlusMinus handleInputChange={handleCategoryChange} />
        }
      />
      <ModalInputBox
        category={"세금"}
        content={<InputContentTax handleInputChange={handleInputChange} />}
      />
      <ModalInputBox
        category={"내용"}
        content={
          <InputContentSpecificContent handleInputChange={handleInputChange} />
        }
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
