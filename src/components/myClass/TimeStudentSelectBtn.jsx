import styled from "styled-components";

const Wrapper = styled.span``;
const DownImg = styled.img.attrs({
  src: "../images/down-arrow.png",
})`
  width: 50px;
  height: 50px;
`;

const TimeStudentState = styled.span`
  font-family: "Inter";
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  line-height: 16px;
  color: rgba(0, 0, 0, 0.7);
`;

const TimeStudentSelectBtn = () => {
  return (
    <Wrapper>
      <DownImg />
      <TimeStudentState>최신내역</TimeStudentState>
    </Wrapper>
  );
};
export default TimeStudentSelectBtn;
