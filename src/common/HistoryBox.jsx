import styled from "styled-components";

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
  margin-right: 25px;
`;
const MinusImg = styled.img.attrs({
  src: "../images/minus_button.png",
})`
  width: 80px;
  height: 80px;
  margin-left: 45px;
  margin-right: 25px;
`;

const Name = styled.span`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 35px;
  line-height: 16px;
  letter-spacing: 0.1em;
  color: #000000;
  margin-right: 50px;
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

const HistoryBox = ({
  amount,
  isPlus,
  detail,
  userData,
  worker_name,
  type,
}) => {
  const shortenedDetail =
    detail.length > 10 ? detail.slice(0, 10) + "..." : detail;
  return (
    <Wrapper>
      {isPlus === 1 ? <PlusImg /> : <MinusImg />}
      <Name>{type === "myClass" ? userData.user_name : worker_name}</Name>
      <Content>{shortenedDetail}</Content>
      <Money>{amount}진스</Money>
    </Wrapper>
  );
};

export default HistoryBox;
