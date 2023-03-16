import { PageHeader } from "../common";
import ArrangeByTimeBtn from "../components/myClass/ArrangeByBtn";
import StudentBox from "../components/myStudent/StudentBox";
import { useRecoilValue, useRecoilState } from "recoil";
import { user, classData } from "../store";
//import { useNavigate } from "react-router-dom";
import { useGetClassInfo } from "../hooks";
import { useEffect } from "react";

const MyStudentPage = () => {
  //들어오자마자 1. recoil에 저장되어있는 user의 class_id로 클래스 데이터 가져오기
  //2. 가져온 클래스 데이터를 classInfoRecoil에 저장하기
  //3. classInfoRecoil에 저장되어있는 정보 중, key가 class_name, student_list인 정보를 이용하여
  //4. return할 때에 이용하기
  const userData = useRecoilValue(user);
  const { getClassInfo } = useGetClassInfo();
  const [classInfoRecoil, setClassInfoRecoil] = useRecoilState(classData);

  useEffect(() => {
    const fetchClassInfo = async () => {
      const classInfo = await getClassInfo(userData.class_id);
      setClassInfoRecoil(classInfo);
    };
    fetchClassInfo();
    //eslint-disable-next-line
  }, [userData.class_id]);

  return (
    <>
      <PageHeader pageTitle={classInfoRecoil.class_name} />
      <ArrangeByTimeBtn />
      {classInfoRecoil.student_list &&
        Array.isArray(classInfoRecoil.student_list) &&
        classInfoRecoil.student_list.map((student) => (
          <StudentBox
            key={student.idx}
            idx={student.idx}
            name={student.user_name}
            attendanceNumber={student.user_attendanceNumber}
            amount={student.account_amount}
            unit={classInfoRecoil.monetary_unit}
          />
        ))}
    </>
  );
};
export default MyStudentPage;
