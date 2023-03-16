import styled from "styled-components";
import { layout } from "../../styled/theme";
import { useFindClass } from "../../hooks";
import { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import { studentJoinClassCode } from "../../store";

const Wrapper = styled.div`
  ${layout.flexCenter};
`;

const InputBox = styled.input`
  width: 300px;
  height: 120px;
  font-size: 45px;
  text-align: center;
  margin: 7px;
  &:focus {
    outline: 3px auto black;
  }
`;

const SubmitButton = styled.div`
  ${layout.flexCenter};
  width: 140px;
  height: 120px;
  margin: 7px;

  background: #ffffff;
  border: 2px solid #000000;
  border-radius: 40px;
`;

const Text = styled.span`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 42px;
  letter-spacing: 0.1em;

  color: #000000;
`;

const ClassCodeForm = () => {
  const [classCode, setClassCode] = useState(0);
  const [studentClassCode, setStudentClassCode] =
    useRecoilState(studentJoinClassCode);
  const { findClass } = useFindClass();
  const handleInput = (e) => {
    setClassCode(e.target.value);
  };
  const handleSubmit = async () => {
    await findClass(classCode);
    setStudentClassCode(classCode);
  };
  useEffect(() => {
    console.log(studentClassCode);
  }, [studentClassCode]);
  return (
    <Wrapper>
      <InputBox type="number" autoFocus onChange={handleInput} />
      <SubmitButton>
        <Text onClick={handleSubmit}>입력</Text>
      </SubmitButton>
    </Wrapper>
  );
};

export default ClassCodeForm;
