import axios from "axios";
import { BASE_URL } from "../constants/baseUrl";
import { useNavigate } from "react-router-dom";

const useLogin = () => {
  const navigate = useNavigate();
  const login = async (loginInput) => {
    try {
      const res = await axios.post(`${BASE_URL}/userLogin`, loginInput);
      console.log(res.data.idx);
      return res.data.idx;
    } catch (error) {
      navigate("/");
    }
  };
  return { login };
};
export default useLogin;
