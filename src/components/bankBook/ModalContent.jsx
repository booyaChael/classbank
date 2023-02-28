import HandleMoneyModalContent from "./HandleMoneyModalContent";
import ConfirmModalContent from "./ConfirmModalContent";
import { useState } from "react";

const ModalContent = () => {
  const [confirm, setConfirm] = useState(false);
  const goToConfirm = () => {
    setConfirm(true);
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
        />
      ) : (
        <HandleMoneyModalContent goToConfirm={goToConfirm} />
      )}
    </>
  );
};
export default ModalContent;
