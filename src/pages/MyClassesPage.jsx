import { PageHeader } from "../common";
import ClassRectangle from "../components/classList/ClassRectangle";
import MakeClassRectangle from "../components/classList/MakeClassRectangle";

const MyClassesPage = () => {
  return (
    <>
      <PageHeader pageTitle={"내 클래스"} />
      <ClassRectangle />
      <MakeClassRectangle />
    </>
  );
};

export default MyClassesPage;
