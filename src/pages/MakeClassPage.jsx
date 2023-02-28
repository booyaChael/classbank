import React, { useState } from "react";
import { PageHeader, BottomModal } from "../common";
import styled from "styled-components";
import { layout } from "../styled/theme";
import { InputBox, BottomButton } from "../common";
import ClassConfirmModalContent from "../components/makeClass/ClassConfirmModalContent";

const Wrapper = styled.div`
  ${layout.flexCenter};
  flex-direction: column;
  width: 100%;
`;
const Form = styled.form`
  ${layout.flexCenter};
  flex-direction: column;
  width: 100%;
`;

const MakeClassPage = () => {
  const [showClassConfirmModal, setShowClassConfirmModal] = useState(false);

  const handleModalExit = () => {
    setShowClassConfirmModal(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(showClassConfirmModal);
    setShowClassConfirmModal(true);
  };
  return (
    <Wrapper>
      <PageHeader pageTitle={"새 클래스 만들기"} />
      <Form onSubmit={handleSubmit}>
        <InputBox
          inputName={"school_name"}
          text={"학교 명"}
          example={"Ex. 교실 초등학교"}
        />
        <InputBox inputName={"class_grade"} text={"학년"} example={"Ex. 5"} />
        <InputBox inputName={"class_number"} text={"반"} example={"Ex. 2"} />
        <InputBox
          inputName={"class_name"}
          text={"클래스 명"}
          example={"Ex. 2반 나라"}
        />
        <InputBox
          inputName={"monetary_unit"}
          text={"교실 화폐 단위"}
          example={"Ex. 미소"}
        />
        <BottomButton
          text={"클래스 만들기"}
          backgroundColor={"#000000"}
          textColor={"#FFFFFF"}
          marginTop={"20px"}
        />
      </Form>
      {showClassConfirmModal ? (
        <BottomModal
          handleModalExit={handleModalExit}
          ModalContent={ClassConfirmModalContent}
        />
      ) : null}
    </Wrapper>
  );
};

export default MakeClassPage;
