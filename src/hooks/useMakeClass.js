import axios from "axios";
import { BASE_URL } from "../constants/baseUrl";
import { useNavigate } from "react-router-dom";
const useMakeClass = () => {
  const navigate = useNavigate();
  const makeClass = async (makeClassForm) => {
    try {
      const res = await axios.post(`${BASE_URL}/classRegister`, makeClassForm);
      return res.data[0].class_id;
    } catch (error) {
      if (error.response.status === 404) {
        navigate("/make-class");
      }
    }
  };
  return { makeClass };
};

export default useMakeClass;
