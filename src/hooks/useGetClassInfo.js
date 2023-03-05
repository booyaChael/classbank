import axios from "axios";
import { BASE_URL } from "../constants/baseUrl";

const useGetClassInfo = () => {
  const getClassInfo = async (classId) => {
    const res = await axios.get(`${BASE_URL}/classInfo/${classId}`);
    console.log(res.data);
    return res.data;
  };
  return { getClassInfo };
};
export default useGetClassInfo;
