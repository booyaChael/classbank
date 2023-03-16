import axios from "axios";
import { BASE_URL } from "../constants/baseUrl";
const useGetHistory = () => {
  const getClassHistory = async (idx, class_id) => {
    try {
      const res = await axios.get(
        `${BASE_URL}/${idx}/classInfo/${class_id}/history/accounts`
      );
      return res.data;
    } catch (error) {
      if (error.response.status === 404) {
        return error;
      }
    }
  };

  const getUserHistory = async (idx) => {
    try {
      const res = await axios.get(
        `${BASE_URL}/${idx}/userInfo/history/accounts`
      );
      return res.data;
    } catch (error) {
      if (error.response.status === 404) {
        return error;
      }
    }
  };
  return { getClassHistory, getUserHistory };
};

export default useGetHistory;
