import { PageHeader, HistoryBox } from "../common";
import ArrangeByStudentBtn from "../components/myClass/ArrangeByBtn";
import { useRecoilValue } from "recoil";
import { classData } from "../store";

const MyClassPage = () => {
  const classDataRecoil = useRecoilValue(classData);
  const { class_name } = classDataRecoil;

  return (
    <>
      <PageHeader pageTitle={class_name} />
      <ArrangeByStudentBtn type={"student"} />
      <HistoryBox type={"plus"} />
      <HistoryBox type={""} />
    </>
  );
};

export default MyClassPage;
