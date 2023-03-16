import styled from "styled-components";
import { layout } from "../../styled/theme";
import { useNavigate } from "react-router-dom";

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
const StudentBox = ({ name, attendanceNumber, amount, unit, idx }) => {
  const navigate = useNavigate();
  const goToBankBook = () => {
    navigate(`/bank-book/${idx}`);
  };
  return (
    <Wrapper onClick={goToBankBook}>
      <StudentInfo>
        <Number>{attendanceNumber}</Number>
        <Name>{name}</Name>
      </StudentInfo>
      <MoneyInfo>
        <Money>
          {amount}
          {unit}
        </Money>
        <NextImg />
      </MoneyInfo>
    </Wrapper>
  );
};
export default StudentBox;
