import styled from "styled-components";
import ExitButton from "./ExitButton.jsx";
const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: ${(props) => props.modalHeight};
  bottom: 0;

  background: #ffffff;
  border: 2px solid rgba(0, 0, 0, 0.6);
  border-radius: 43px 43px 0px 0px;
`;

const StyledExitButton = styled(ExitButton)`
  position: absolute;
  right: 0;
`;

const BottomModal = ({ handleModalExit, ModalContent, modalHeight }) => {
  return (
    <Wrapper modalHeight={modalHeight}>
      <StyledExitButton handleModalExit={handleModalExit} />
      <ModalContent />
    </Wrapper>
  );
};

export default BottomModal;
