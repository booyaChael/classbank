import styled from "styled-components";
import { layout } from "../../styled/theme";

const Wrapper = styled.div`
  ${layout.flexCenter};
  width: 150px;
  height: 60px;

  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  margin-right: 20px;
  background: ${(props) => props.backgroundColor};
`;
const Text = styled.span`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 24px;
  letter-spacing: 0.1em;
  color: ${(props) => props.color};
`;
const TaxToggleBtn = ({ yesTax, handleClick, backgroundColor, color }) => {
  return (
    <Wrapper onClick={handleClick} backgroundColor={backgroundColor}>
      <Text color={color}>{yesTax}</Text>
    </Wrapper>
  );
};
export default TaxToggleBtn;
