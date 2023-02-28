import styled from "styled-components";
import { layout } from "../../styled/theme";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 130px;
  border-bottom: 2px solid #ebeaea;
`;
const StudentInfo = styled.div`
  ${layout.flexCenter};
  width: 50%;
`;
const Number = styled.span`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 40px;
  line-height: 16px;
  letter-spacing: 0.1em;
  color: #000000;
  margin-right: 50px;
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
const MoneyInfo = styled.div`
  ${layout.flexCenter};
  width: 50%;
`;

const Money = styled.span`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  line-height: 16px;
  letter-spacing: 0.1em;
  color: #000000;
  margin-right: 50px;
`;

const NextImg = styled.img.attrs({
  src: "../images/next.png",
})`
  width: 25px;
  height: 25px;
`;
const StudentBox = () => {
  return (
    <Wrapper>
      <StudentInfo>
        <Number>1</Number>
        <Name>김은행</Name>
      </StudentInfo>
      <MoneyInfo>
        <Money>200미소</Money>
        <NextImg />
      </MoneyInfo>
    </Wrapper>
  );
};
export default StudentBox;
