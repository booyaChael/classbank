import { Link } from "react-router-dom";
import styled from "styled-components";

const goToJoinText = "계정이 없나요?";

const StyledLink = styled(Link)`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 35px;
  line-height: 16px;
  color: #87898e;
  position: absolute;
  bottom: 0;
  padding-bottom: 40px;
`;

const GoToJoinButton = () => {
  return <StyledLink to="/select-type">{goToJoinText}</StyledLink>;
};

export default GoToJoinButton;
