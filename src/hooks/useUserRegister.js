import axios from "axios";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../constants/baseUrl";
const useUserRegister = () => {
  const navigate = useNavigate();
  const join = async (loginInput) => {
    try {
      const res = await axios.post(`${BASE_URL}/userRegister`, loginInput);
      console.log(res.data);
      navigate("/");
      return res.data.idx;
    } catch (error) {
      console.log(error.response.status);
      if (error.response.status === 401) {
        navigate("/join-error");
        await new Promise((resolve) => setTimeout(resolve, 3000)); // wait for 3 seconds
        navigate("/");
      }
    }
  };
  return { join };
};

export default useUserRegister;
