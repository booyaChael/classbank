import axios from "axios";
import { BASE_URL } from "../constants/baseUrl";
import { useNavigate } from "react-router-dom";
import { useResetRecoilState } from "recoil";
import { studentJoinClassCode } from "../store";

const useJoinStudent = () => {
  const navigate = useNavigate();
  const resetStudentClassCode = useResetRecoilState(studentJoinClassCode);
  const joinStudent = async (studentIdx, studentClassCode) => {
    try {
      await axios.get(
        `${BASE_URL}/${studentIdx}/join/classcode/${studentClassCode}`
      );
      resetStudentClassCode();
      return;
    } catch (error) {
      if (error.response.status === 401) {
        navigate("/join-error");
        await new Promise((resolve) => setTimeout(resolve, 3000)); // wait for 3 seconds
        navigate("/");
      }
    }
  };
  return { joinStudent };
};

export default useJoinStudent;
