import axios from "axios";
import { BASE_URL } from "../constants/baseUrl";
const useTransfer = () => {
  const transferMoney = async (handleMoneyForm) => {
    try {
      const res = await axios.post(
        `${BASE_URL}/user/transfer`,
        handleMoneyForm
      );
      return res;
    } catch (error) {
      return error;
    }
  };
  const transferMoneyWithTax = async (handleMoneyForm) => {
    try {
      const res = await axios.post(
        `${BASE_URL}/user/transferWithTax`,
        handleMoneyForm
      );
      return res.data[0].class_id;
    } catch (error) {
      return error;
    }
  };
  return { transferMoney, transferMoneyWithTax };
};

export default useTransfer;
