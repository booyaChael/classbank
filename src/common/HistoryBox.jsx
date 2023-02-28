import styled from "styled-components";
import { layout } from "../styled/theme";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 130px;
  border-bottom: 2px solid #ebeaea;
`;

const PlusImg = styled.img.attrs({
  src: "../images/plus_button.png",
})`
  width: 80px;
  height: 80px;
  margin-left: 45px;
  margin-right: 55px;
`;
const MinusImg = styled.img.attrs({
  src: "../images/minus_button.png",
})`
  width: 80px;
  height: 80px;
  margin-left: 45px;
  margin-right: 55px;
`;
const NameAndDate = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 5px;
  flex-direction: column;
  height: 100%;
  margin-right: 30px;
`;

const Name = styled.span`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 35px;
  line-height: 16px;
  letter-spacing: 0.1em;
  color: #000000;
  margin-bottom: 20px;
`;

const Date = styled.span`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 16px;
  letter-spacing: 0.1em;

  color: #000000;
`;
const ContentWrapper = styled.div`
  ${layout.flexCenter};
  width: 300px;
`;
const Content = styled.span`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 40px;
  line-height: 16px;
  letter-spacing: 0.1em;
  color: #000000;
`;

const Money = styled.span`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 40px;
  line-height: 16px;
  letter-spacing: 0.1em;
  color: #000000;
  position: absolute;
  right: 100px;
`;

const HistoryBox = ({ type }) => {
  return (
    <Wrapper>
      {type === "plus" ? <PlusImg /> : <MinusImg />}
      <NameAndDate>
        <Name>김은행</Name>
        <Date>2023/2/3/금</Date>
      </NameAndDate>
      <ContentWrapper>
        <Content>월급</Content>
      </ContentWrapper>
      <Money>20미소</Money>
    </Wrapper>
  );
};

export default HistoryBox;
