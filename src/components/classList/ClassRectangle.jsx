import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 150px;
  border-bottom: 2px solid #f8f7f7;
`;
const ClassName = styled.span`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 40px;
  line-height: 16px;
  color: #000000;
  margin-left: 30px;
`;

const SchoolImg = styled.img.attrs({
  src: "../images/school.png",
})`
  width: 80px;
  height: 80px;
  margin: 0px 45px;
`;

const NextImg = styled.img.attrs({
  src: "../images/next.png",
})`
  position: absolute;
  right: 0;
  width: 40px;
  width: 40px;
  margin-right: 45px;
`;

const ClassRectangle = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  return (
    <Wrapper onClick={handleClick}>
      <SchoolImg />
      <ClassName>한국초등학교 5학년 2반</ClassName>
      <NextImg />
    </Wrapper>
  );
};

export default ClassRectangle;
