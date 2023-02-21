import axios from "axios";

const useUserRegister = () => {
  const login = async (loginInput) => {
    axios
      .post(`http://43.201.34.166/v1/userRegister`, loginInput, {
        withCredentials: true,
      })
      .then((res) => console.log(res));
  };

  return { login };
};

export default useUserRegister;
