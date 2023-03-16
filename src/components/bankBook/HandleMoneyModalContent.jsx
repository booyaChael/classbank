import styled from "styled-components";
import ModalInputBox from "./ModalInputBox";
import InputContentMoney from "./InputContentMoney";
import InputContentPlusMinus from "./InputContentPlusMinus";
import InputContentTax from "./InputContentTax";
import InputContentSpecificContent from "./InputContentSpecificContent";
import InputContentCategory from "./InputContentCategory";
import Owner from "./Owner";
import BottomButton from "../../common/BottomButton";
import { layout } from "../../styled/theme";
import { useState, useCallback, useEffect } from "react";
import { useRecoilValue } from "recoil";
import { user } from "../../store";
import { useParams } from "react-router-dom";

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
const HandleMoneyModalContent = ({ goToConfirm, userName }) => {
  const { idx } = useParams();
  const myData = useRecoilValue(user);

  const [handleMoneyForm, setHandleMoneyForm] = useState({
    idx,
    tax: 0,
    class_id: myData.class_id,
    detail: "",
    amount: null,
    isPlus: 1,
    worker_idx: myData.idx,
    category: "월급",
  });
  const handleInputChange = async (event) => {
    const { name, value } = event.target;
    setHandleMoneyForm({
      ...handleMoneyForm,
      [name]: value,
    });
  };
  const handleTypeChange = useCallback((typeState) => {
    setHandleMoneyForm((prevState) => ({
      ...prevState,
      isPlus: typeState,
    }));
    //eslint-disable-next-line
  }, []);

  const handleCategoryChange = useCallback((categoryState) => {
    setHandleMoneyForm((prevState) => ({
      ...prevState,
      category: categoryState,
    }));
    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    console.log(handleMoneyForm);
  }, [handleMoneyForm]);

  if (Object.keys(myData).length === 0) {
    // Render a loading state or a placeholder component until user data is fetched
    return <div>Loading...</div>;
  }
  return (
    <>
      <TitleWrapper>
        <Owner userName={userName} />
        <Title>의 통장</Title>
      </TitleWrapper>
      <ModalInputBox
        category={"금액"}
        content={<InputContentMoney handleInputChange={handleInputChange} />}
      />
      <ModalInputBox
        category={"세금"}
        content={<InputContentTax handleInputChange={handleInputChange} />}
      />
      <ModalInputBox
        category={"타입"}
        content={<InputContentPlusMinus handleTypeChange={handleTypeChange} />}
      />
      <ModalInputBox
        category={"항목"}
        content={
          <InputContentCategory handleCategoryChange={handleCategoryChange} />
        }
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
          onClick={() => goToConfirm(handleMoneyForm)}
        />
      </BottomButtonWrapper>
    </>
  );
};
export default HandleMoneyModalContent;
