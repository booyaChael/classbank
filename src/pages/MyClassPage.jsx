import { PageHeader, HistoryBox } from "../common";
import ArrangeByStudentBtn from "../components/myClass/ArrangeByBtn";

const MyClassPage = () => {
  return (
    <>
      <PageHeader pageTitle={"한국초등학교 5학년 2반"} />
      <ArrangeByStudentBtn type={"student"} />
      <HistoryBox type={"plus"} />
      <HistoryBox type={""} />
    </>
  );
};

export default MyClassPage;
