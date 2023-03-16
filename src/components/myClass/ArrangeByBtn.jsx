import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { layout } from "../../styled/theme";

const Wrapper = styled.div`
  ${layout.flexCenter};
  const Wrapper = styled.div
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: flex-end;
  align-itens: center;
  border-bottom: 2px solid #c0c0c0;
`;

const Button = styled.span`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 30px;
  line-height: 16px;
  color: rgba(0, 0, 0, 0.7);
  padding: 20px;
`;

const ArrangeByStudentBtn = ({ type }) => {
  const navigate = useNavigate();
  const arrangeByStudent = () => {
    navigate("/my-student");
  };
  const arrangeByTime = () => {
    navigate("/my-class");
  };
  return (
    <Wrapper>
      {type === "student" ? (
        <Button onClick={arrangeByStudent}>학생별 보기</Button>
      ) : (
        <Button onClick={arrangeByTime}>최신 내역 보기</Button>
      )}
    </Wrapper>
  );
};
export default ArrangeByStudentBtn;
