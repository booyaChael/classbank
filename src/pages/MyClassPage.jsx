import { PageHeader, HistoryBox } from "../common";
import ArrangeByStudentBtn from "../components/myClass/ArrangeByBtn";
import { useRecoilValue } from "recoil";
import { user } from "../store";
import { useGetHistory, useGetClassInfo } from "../hooks";
import { useEffect, useState } from "react";

const MyClassPage = () => {
  const myData = useRecoilValue(user);
  const [history, setHistory] = useState([]);
  const [className, setClassName] = useState("");
  const { getClassHistory } = useGetHistory();
  const { class_id, idx } = myData;
  const { getClassInfo } = useGetClassInfo();

  useEffect(() => {
    const fetchData = async () => {
      const classInfo = await getClassInfo(myData.class_id);
      const classHistory = await getClassHistory(idx, class_id);
      setHistory(classHistory);
      setClassName(classInfo.class_name);
    };
    fetchData();
    // eslint-disable-next-line
  }, [class_id]);

  return (
    <>
      <PageHeader pageTitle={className} />
      <ArrangeByStudentBtn type={"student"} />
      {history &&
        Array.isArray(history) &&
        history.map((his) => (
          <HistoryBox key={his.history_account_id} {...his} />
        ))}
    </>
  );
};

export default MyClassPage;
