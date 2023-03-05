import { atom } from "recoil";

export const classData = atom({
  key: "classData",
  default: {
    class_code: null,
    class_grade: null,
    class_id: null,
    class_name: "",
    class_number: null,
    idx: null,
    monetary_unit: "",
    school_name: "",
  },
});
