import { PageHeader, HistoryBox, AddButton, BottomModal } from "../common";
import TotalMoneyBox from "../components/bankBook/TotalMoneyBox";
import { layout } from "../styled/theme";
import styled from "styled-components";
import HandleMoneyModalContent from "../components/bankBook/HandleMoneyModalContent";
import { useState } from "react";

const Wrapper = styled.div`
  ${layout.flexCenter};
  flex-direction: column;
`;

const StudentBankBookPage = () => {
  const [showModal, setShowModal] = useState(true);
  const handleModalExit = () => {
    setShowModal(false);
  };
  const handleAddBtnClick = () => {
    console.log("clicked");
    setShowModal(true);
  };
  return (
    <Wrapper>
      <PageHeader pageTitle={"개인 통장"} />
      <TotalMoneyBox />
      <HistoryBox />
      <HistoryBox type={"plus"} />
      <AddButton handleAddBtnClick={handleAddBtnClick} />
      {showModal ? (
        <BottomModal
          handleModalExit={handleModalExit}
          ModalContent={HandleMoneyModalContent}
        />
      ) : null}
    </Wrapper>
  );
};
export default StudentBankBookPage;
