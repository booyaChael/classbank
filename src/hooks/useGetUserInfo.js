import axios from "axios";
import { BASE_URL } from "../constants/baseUrl";

const useGetUserInfo = () => {
  const getUserInfo = async (userIdx) => {
    const res = await axios.get(`${BASE_URL}/${userIdx}/userInfo`);
    return res.data;
  };
  return { getUserInfo };
};
export default useGetUserInfo;
