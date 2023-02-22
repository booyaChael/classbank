import styled from "styled-components";
import ExitButton from "./ExitButton.jsx";
import BottomModalContent from "./BottomModalContent.jsx";
const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 50%;
  bottom: 0;

  background: #ffffff;
  border: 2px solid rgba(0, 0, 0, 0.6);
  border-radius: 43px 43px 0px 0px;
`;

const StyledExitButton = styled(ExitButton)`
  position: absolute;
  right: 0;
`;

const BottomModal = ({ handleModalExit, modalContent }) => {
  return (
    <Wrapper>
      <StyledExitButton handleModalExit={handleModalExit} />
      <BottomModalContent modalContent={modalContent} />
    </Wrapper>
  );
};

export default BottomModal;
