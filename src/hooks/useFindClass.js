import axios from "axios";
import { BASE_URL } from "../constants/baseUrl";
import { useNavigate } from "react-router-dom";
const useFindClass = () => {
  const navigate = useNavigate();
  const findClass = async (classCode) => {
    try {
      await axios.get(`${BASE_URL}/find/classcode/${classCode}`);
      navigate("/student-join");
    } catch (error) {
      if (error.response.status === 404) {
        navigate("/classcode-error");
        await new Promise((resolve) => setTimeout(resolve, 2000));
        navigate("/class-code");
      }
    }
  };
  return { findClass };
};

export default useFindClass;
