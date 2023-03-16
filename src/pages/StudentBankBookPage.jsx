import { PageHeader, HistoryBox, AddButton, BottomModal } from "../common";
import TotalMoneyBox from "../components/bankBook/TotalMoneyBox";
import { layout } from "../styled/theme";
import styled from "styled-components";
import ModalContent from "../components/bankBook/ModalContent";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useGetHistory, useGetUserInfo } from "../hooks";
import { useRecoilValue } from "recoil";
import { user } from "../store";

const Wrapper = styled.div`
  ${layout.flexCenter};
  flex-direction: column;
`;

const StudentBankBookPage = () => {
  const { idx } = useParams();
  const myData = useRecoilValue(user);
  const myClassId = myData.class_id;
  const { getUserHistory } = useGetHistory();
  const { getUserInfo } = useGetUserInfo();
  const [userState, setUserState] = useState({});
  const [history, setHistory] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      console.log(myData);
      const userInfo = await getUserInfo(idx);
      const historyData = await getUserHistory(idx, myClassId);
      console.log(historyData);
      setUserState(userInfo);
      if (historyData) {
        setHistory(historyData);
      }
    };
    fetchData();
    //eslint-disable-next-line
  }, []);

  const [showModal, setShowModal] = useState(false);
  const handleModalExit = () => {
    setShowModal(false);
  };
  const handleAddBtnClick = () => {
    setShowModal(true);
  };

  if (
    (Object.keys(userState).length === 0) |
    (Object.keys(history).length === 0)
  ) {
    // Render a loading state or a placeholder component until user data is fetched
    return <div>Loading...</div>;
  }
  return (
    <Wrapper>
      <PageHeader pageTitle={"개인 통장"} />
      <TotalMoneyBox user={userState} />
      {history &&
        Array.isArray(history) &&
        history.map((his) => (
          <HistoryBox key={his.history_account_id} {...his} />
        ))}
      {myData.deposit_authority || myData.withdraw_authority ? (
        <AddButton handleAddBtnClick={handleAddBtnClick} />
      ) : null}
      {showModal ? (
        <BottomModal
          handleModalExit={handleModalExit}
          ModalContent={ModalContent}
          modalHeight={"75%"}
          userName={userState.user_name}
          setShowModal={setShowModal}
        />
      ) : null}
    </Wrapper>
  );
};
export default StudentBankBookPage;
