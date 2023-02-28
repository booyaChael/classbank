import axios from "axios";

const useUserRegister = () => {
  const teacherJoin = async (loginInput) => {
    axios
      .post(`http://43.201.34.166:50709/v1/userRegister`, loginInput)
      .then((res) => console.log(res));
  };

  return { teacherJoin };
};

export default useUserRegister;
