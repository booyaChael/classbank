import { atom } from "recoil";

export const transfer = atom({
  key: "transfer",
  default: {
    idx: null,
    class_id: "",
    detail: "",
    amount: null,
    category: "",
    worker_idx: null,
    worker_name: "",
    worker_attendanceNumber: "",
  },
});
