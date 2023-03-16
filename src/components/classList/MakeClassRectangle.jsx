import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 150px;
  border-bottom: 2px solid #f8f7f7;
`;

const PlusImg = styled.img.attrs({
  src: "../images/grayplus.png",
})`
  margin: 45px;
  width: 70px;
  height: 70px;
  color: #767676;
`;

const MakeClassText = styled.span`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 16px;
  color: #767676;
  margin-left: 40px;
`;
const MakeClassRectangle = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/make-class");
  };
  return (
    <Wrapper onClick={handleClick}>
      <PlusImg />
      <MakeClassText>새 클래스 만들기</MakeClassText>
    </Wrapper>
  );
};

export default MakeClassRectangle;
