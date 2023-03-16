import HandleMoneyModalContent from "./HandleMoneyModalContent";
import ConfirmModalContent from "./ConfirmModalContent";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { transfer } from "../../store";

const ModalContent = ({ userName, setShowModal }) => {
  const [transferData, setTransferData] = useRecoilState(transfer);
  const [confirm, setConfirm] = useState(false);
  const goToConfirm = async (handleMoneyForm) => {
    try {
      console.log(handleMoneyForm);
      setTransferData(handleMoneyForm);
      console.log(transferData);
      setConfirm(true);
    } catch (error) {
      return error;
    }
  };

  const goBackToHandleMoney = () => {
    setConfirm(false);
  };
  return (
    <>
      {confirm ? (
        <ConfirmModalContent
          type="plus"
          goBackToHandleMoney={goBackToHandleMoney}
          userName={userName}
          setShowModal={setShowModal}
        />
      ) : (
        <HandleMoneyModalContent
          goToConfirm={goToConfirm}
          userName={userName}
        />
      )}
    </>
  );
};
export default ModalContent;
