import { PageHeader } from "../common";
import ArrangeByTimeBtn from "../components/myClass/ArrangeByBtn";
import StudentBox from "../components/myStudent/StudentBox";

const MyStudentPage = () => {
  return (
    <>
      <PageHeader pageTitle={"한국초등학교 5학년 2반"} />
      <ArrangeByTimeBtn />
      <StudentBox />
    </>
  );
};
export default MyStudentPage;
