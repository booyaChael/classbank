import React, { useState, useEffect } from "react";
import { PageHeader, BottomModal } from "../common";
import styled from "styled-components";
import { layout } from "../styled/theme";
import { InputBox, BottomButton } from "../common";
import ClassConfirmModalContent from "../components/makeClass/ClassConfirmModalContent";
import { useMakeClass, useGetClassInfo } from "../hooks";
import { useRecoilValue, useRecoilState } from "recoil";
import { user, classData } from "../store";

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
  const userData = useRecoilValue(user);
  const [classDataRecoil, setClassDataRecoil] = useRecoilState(classData);
  const { makeClass } = useMakeClass();
  const { getClassInfo } = useGetClassInfo();
  const [showClassConfirmModal, setShowClassConfirmModal] = useState(false);

  const handleModalExit = () => {
    setShowClassConfirmModal(false);
  };

  const [makeClassForm, setMakeClassForm] = useState({
    idx: userData.idx,
    class_name: "",
    monetary_unit: "",
    school_name: "",
    class_grade: null,
    class_number: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setMakeClassForm({
      ...makeClassForm,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const classId = await makeClass(makeClassForm);
    const classInfo = await getClassInfo(classId);
    console.log(classInfo);
    setClassDataRecoil(classInfo);
    console.log(classDataRecoil);
    setShowClassConfirmModal(true);
  };

  useEffect(() => {
    console.log(classDataRecoil);
    //eslint-disable-next-line
  }, [classDataRecoil]);

  return (
    <Wrapper>
      <PageHeader pageTitle={"새 클래스 만들기"} />
      <Form onSubmit={handleSubmit}>
        <InputBox
          inputName={"class_grade"}
          text={"학년"}
          example={"Ex. 5"}
          handleInputChange={handleInputChange}
        />
        <InputBox
          inputName={"school_name"}
          text={"학교 명"}
          example={"Ex. 교실 초등학교"}
          handleInputChange={handleInputChange}
        />

        <InputBox
          inputName={"class_number"}
          text={"반"}
          example={"Ex. 2"}
          handleInputChange={handleInputChange}
        />
        <InputBox
          inputName={"class_name"}
          text={"클래스 명"}
          example={"Ex. 2반 나라"}
          handleInputChange={handleInputChange}
        />
        <InputBox
          inputName={"monetary_unit"}
          text={"교실 화폐 단위"}
          example={"Ex. 미소"}
          handleInputChange={handleInputChange}
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
