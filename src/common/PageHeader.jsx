import styled from "styled-components";
import { GoBackButton, LogoutButton } from "./pageHeaderIngredients";

const Wrapper = styled.div`
  width: 100%;
  height: 125px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const LeftButton = styled.span`
  position: absolute;
  left: 0;
  padding-left: 30px;
`;
const PageTitle = styled.span`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 40px;
  line-height: 42px;
  letter-spacing: 0.1em;
  color: #000000;
`;
const RightButton = styled.span`
  position: absolute;
  right: 0;
  padding-right: 20px;
`;

const PageHeader = ({ pageTitle }) => {
  const leftButton = <GoBackButton />;
  const rightButton = <LogoutButton />;
  return (
    <Wrapper>
      <LeftButton>{leftButton}</LeftButton>
      <PageTitle>{pageTitle}</PageTitle>
      <RightButton>{rightButton}</RightButton>
    </Wrapper>
  );
};
export default PageHeader;
