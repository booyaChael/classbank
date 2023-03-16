import styled from "styled-components";
import { layout } from "../../styled/theme";

const Wrapper = styled.div`
  width: 90%;
  height: 260px;
  background: #ebeaea;
  border-radius: 30px;
  margin: 40px 20px;
`;

const NameWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 30px;
`;

const LogoImg = styled.img.attrs({
  src: "../images/Logo.png",
})`
  width: 60px;
  height: 60px;
`;
const Name = styled.span`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  line-height: 16px;
  letter-spacing: 0.1em;

  color: #000000;
`;
const TotalMoneyWrapper = styled.div`
  ${layout.flexCenter};
`;
const TotalMoney = styled.span`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 50px;
  line-height: 16px;
  letter-spacing: 0.1em;

  color: #000000;
`;
const TotalMoneyBox = ({ user }) => {
  const { user_name, account_amount } = user;
  return (
    <Wrapper>
      <NameWrapper>
        <LogoImg />
        <Name>{user_name}</Name>
      </NameWrapper>
      <TotalMoneyWrapper>
        <TotalMoney>총 {account_amount}미소</TotalMoney>
      </TotalMoneyWrapper>
    </Wrapper>
  );
};
export default TotalMoneyBox;
